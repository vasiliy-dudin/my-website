import { Fancybox } from "@fancyapps/ui/dist/fancybox/";

Fancybox.bind('[data-fancybox="lightbox"]', {
	mainStyle: {
		"--f-toolbar-padding": "8px",
		"--f-toolbar-gap": "8px",
		"--f-thumb-border-radius": "8px",
		"--f-thumb-selected-border": "4px solid #d66b4d",
		"--f-button-border-radius": "50%"
	},
	theme: "dark",
	wheel: "slide",
	Carousel: {
		preload: 2,
		Toolbar: {
			display: {
				left: ["infobar", "counter"],
				middle: [],
				right: ["zoomIn", "zoomOut", "close"],
			},
		},
		Thumbs: {
			showOnStart: true,
			type: "classic",
			Carousel: {
				axis: "x",
				slidesPerPage: "auto",
				preload: 1,
			},
			focus: true,
		},
	},
	Images: {
		zoom: true,
	},
	showClass: "f-slide-in",
	hideClass: "f-slide-out",
});

