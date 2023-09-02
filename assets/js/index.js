import { loadNavbar } from './elements/navbar.js';
import { loadSideBar } from './elements/sidebar.js';

export function getElement(selector) {
    const currentSelector = selector ? selector : '.main-content';
    const mainContent = document.querySelector(currentSelector);

    if (mainContent === null) {
        throw new Error(`Elemento ${selector} não foi encontrado.`);
    }

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

// LOAD LAYOUT
loadNavbar();
loadSideBar();
itemsDiagramaClickListener();
