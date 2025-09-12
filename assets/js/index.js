import { loadNavbar } from './elements/navbar.js';
import { loadSideBar, loadSideBarBlog } from './elements/sidebar.js';
import { loadWorkingInProgress } from './elements/wip.js';

export function getElement(selector) {
    const currentSelector = selector ? selector : '.main-content';
    const mainContent = document.querySelector(currentSelector);

    return mainContent;
}

export function imgExpandedClickListener() {
    const items = document.getElementsByClassName('img-expanded');

    for (const item of items) {
        item.addEventListener('click', (event) => {
            const currentTarget = event.target;
            if (currentTarget.className.includes('img-expanded-transformed')) {
                currentTarget.className = 'img-expanded';
            } else {
                currentTarget.className = 'img-expanded-transformed';
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
loadSideBarBlog();
loadWorkingInProgress();
imgExpandedClickListener();
scroll();
