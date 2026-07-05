// Scroll events arriving within this gap of each other are treated as one
// continuous scroll (e.g. the browser's own smooth scroll after a click).
// Kept generous: the click-triggered scroll's first event can be delayed by
// a slow-starting frame (e.g. image decode/layout right after the click),
// and a too-short delay here would un-pin before that first event arrives.
const SCROLL_SETTLE_DELAY_MS = 400;

const ACTIVE_CLASS = '--active';

// Keys that can move the scroll position on their own — anything else
// (Tab, Enter, letters, etc.) isn't real scroll intent and shouldn't un-pin
const SCROLL_KEYS = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End', ' ']);

export function scrollSpy(offset = 64) {
	document.addEventListener('DOMContentLoaded', () => {
		const trackedLinks = Array.from(document.querySelectorAll('.project-nav a')).filter(link => {
			const id = decodeURIComponent(link.hash.substring(1));
			return id && document.getElementById(id);
		});

		// Resolved once — avoids re-parsing the hash and re-querying the DOM for
		// the same element on every scroll frame
		const contentByLink = new Map(trackedLinks.map(link => [
			link,
			document.getElementById(decodeURIComponent(link.hash.substring(1)))
		]));

		// The scrollspy classes go on the <li>, since that's what the CSS targets
		const getTarget = link => link.closest('li');
		const getContentRect = link => contentByLink.get(link).getBoundingClientRect();
		const isAtBottom = () => window.innerHeight + window.scrollY >= document.body.scrollHeight;

		// Clicking a link and scrolling to the very bottom can land on the exact
		// same scroll position when the target section is near the end of the
		// page and there isn't enough content left to scroll it all the way to
		// the offset line — at that point scroll position alone can't tell which
		// link was actually clicked. So a click pins its link as active and
		// skips the geometry below entirely, until the user scrolls again.
		//
		// The click itself triggers a scroll, though, so scroll events can't
		// naively un-pin. Instead, scroll events only un-pin once the
		// click-initiated scroll has settled (no scroll events for a while) —
		// that also covers scrolling methods that emit no wheel/touch/key
		// events at all, like dragging the scrollbar.
		let pinnedLink = null;
		let settleTimer = null;
		let pinSettled = false;

		const restartSettleTimer = () => {
			clearTimeout(settleTimer);
			settleTimer = setTimeout(() => { pinSettled = true; }, SCROLL_SETTLE_DELAY_MS);
		};

		const getActiveLink = () => {
			if (pinnedLink) return pinnedLink;

			// Reached the end of the page — nothing to scroll further, so the
			// last section is as current as it'll ever get, even if its own
			// heading never reached the offset line.
			if (isAtBottom()) return trackedLinks[trackedLinks.length - 1];

			// Standard scrollspy rule: the last heading that has scrolled up past
			// the offset line.
			let lastPassed = null;
			trackedLinks.forEach(link => {
				if (getContentRect(link).top <= offset) lastPassed = link;
			});

			// Nothing has crossed the line yet — since nothing precedes the
			// first section, that's the only thing it could be (e.g. right at
			// the top of the page, before its own heading reaches the line).
			return lastPassed || trackedLinks[0];
		};

		const updateActiveLink = () => {
			const active = getActiveLink();
			trackedLinks.forEach(link => getTarget(link).classList.toggle(ACTIVE_CLASS, link === active));
		};

		trackedLinks.forEach(link => link.addEventListener('click', () => {
			pinnedLink = link;
			pinSettled = false;
			restartSettleTimer();
			updateActiveLink();
		}));

		// Wheel/touch/scroll-keys are unambiguous user input — un-pin immediately
		const unpin = () => { pinnedLink = null; };
		['wheel', 'touchmove'].forEach(type => window.addEventListener(type, unpin, { passive: true }));
		window.addEventListener('keydown', event => {
			if (SCROLL_KEYS.has(event.key)) unpin();
		});

		let frame;
		window.addEventListener('scroll', () => {
			if (pinnedLink) {
				if (pinSettled) {
					pinnedLink = null;
				} else {
					restartSettleTimer();
				}
			}
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(updateActiveLink);
		});
		updateActiveLink();
	});
}
