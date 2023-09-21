import { loadNavbar } from './elements/navbar.js';
import { loadSideBar } from './elements/sidebar.js';
import { loadWorkingInProgress } from './elements/wip.js';

export function getElement(selector) {
    const currentSelector = selector ? selector : '.main-content';
    const mainContent = document.querySelector(currentSelector);

    return mainContent;
}

export function itemsDiagramaClickListener() {
    const items = document.getElementsByClassName('item-diagrama');

    for (const item of items) {
        item.addEventListener('click', (event) => {
            let currentTarget = event.target;

            if (event.target.localName === 'img') {
                currentTarget = event.target.offsetParent;
            }

            if (currentTarget.className.includes('item-diagrama-transformed')) {
                currentTarget.className = 'item item-diagrama';
            } else {
                currentTarget.className = 'item item-diagrama item-diagrama-transformed';
            }
        });
    }
}

export function scroll() {
    getElement('.scroll-to').addEventListener('click', () => {
        getElement('.portfolio-features').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

// LOAD LAYOUT FUNCS
loadNavbar();
loadSideBar();
loadWorkingInProgress();
itemsDiagramaClickListener();
scroll();
