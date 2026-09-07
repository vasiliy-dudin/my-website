import { Carousel } from "@fancyapps/ui/dist/carousel/";
import { Arrows } from "@fancyapps/ui/dist/carousel/carousel.arrows.js";

const ARROW_KEY_STEP = { ArrowRight: 1, ArrowLeft: -1 };

// A click landing after the pointer travelled this far is the end of a swipe,
// not a tap on the image.
const DRAG_CLICK_THRESHOLD_PX = 10;

// Where roving focus should land for a given key, given the currently
// focused chip's index. Pure function so the wrap-around math is testable
// without a DOM.
export function getTargetChipIndex(key, currentIndex, chipCount) {
	if (key in ARROW_KEY_STEP) {
		return (currentIndex + ARROW_KEY_STEP[key] + chipCount) % chipCount;
	}
	if (key === 'Home') return 0;
	if (key === 'End') return chipCount - 1;
	return null;
}

// Dragging the carousel and releasing over a slide fires a native click, which
// would otherwise open the lightbox. Fancybox's opener and the carousel's own
// click handler both bail out on an already-prevented click, and both listen
// further up the bubble path than the viewport, so preventing the default here
// is enough to suppress them.
function ignoreClickAfterDrag(viewport) {
	let pointerStart = null;

	viewport.addEventListener('pointerdown', event => {
		pointerStart = { x: event.clientX, y: event.clientY };
	});

	viewport.addEventListener('click', event => {
		if (!pointerStart) return;

		const travelled = Math.max(
			Math.abs(event.clientX - pointerStart.x),
			Math.abs(event.clientY - pointerStart.y)
		);
		pointerStart = null;

		if (travelled > DRAG_CLICK_THRESHOLD_PX) event.preventDefault();
	});
}

export function imageCarousel() {
	document.querySelectorAll('figure.carousel').forEach(figure => {
		const container = figure.querySelector('.f-carousel');
		const viewport = figure.querySelector('.f-carousel__viewport');
		const chipsList = figure.querySelector('.carousel__chips');
		const captionEl = figure.querySelector('.carousel__caption');
		const chips = Array.from(figure.querySelectorAll('.carousel__chip'));

		if (!container || !chips.length) return;

		const selectChip = index => {
			chips.forEach((chip, chipIndex) => {
				const isSelected = chipIndex === index;
				chip.setAttribute('aria-selected', isSelected);
				chip.tabIndex = isSelected ? 0 : -1;
			});
		};

		const carousel = Carousel(container, {
			// A fixed-ratio frame sets the height in CSS; measuring each slide
			// would fight it and reintroduce the jump between slides
			adaptiveHeight: !figure.hasAttribute('data-fixed-height'),
			// Not looping lets the arrows disable at the ends, so position is legible
			infinite: false,
			captionEl,
			l10n: { PREV: 'Previous image', NEXT: 'Next image' }
		}, { Arrows });
		carousel.on('change', (api, newIndex) => selectChip(newIndex));
		carousel.init();

		// The chips live outside the .f-carousel element, so the library's own
		// click handling — bound on that element — never sees them.
		chips.forEach((chip, index) => {
			chip.addEventListener('click', () => carousel.goTo(index));
		});

		// Tab pattern: one tab stop for the whole row, arrows move within it
		if (chipsList) {
			chipsList.addEventListener('keydown', event => {
				const currentIndex = chips.indexOf(document.activeElement);
				if (currentIndex === -1) return;

				const targetIndex = getTargetChipIndex(event.key, currentIndex, chips.length);
				if (targetIndex === null) return;

				event.preventDefault();
				chips[targetIndex].focus();
				carousel.goTo(targetIndex);
			});
		}

		if (viewport) ignoreClickAfterDrag(viewport);
	});
}
