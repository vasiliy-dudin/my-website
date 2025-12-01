import {scrollSpy} from "./_scrollSpy.js";
import {scrollToTop} from "./_scrollToTop.js";
import {projectNavigationColor} from "./_projectNavigationColor.js";
import {copyEmail} from "./_copyEmail.js";

scrollSpy();
scrollToTop();
document.addEventListener('DOMContentLoaded', () => {
	projectNavigationColor();
	copyEmail();
  });