import { getElement } from '../index.js';

export class NavbarItem {
    title = '';
    url = '';
    active = false;

    getActive(title) {
        return window.location.pathname.toUpperCase().includes(title.toUpperCase());
    }

    constructor(_title, _href) {
        this.title = _title;
        this.url = window.location.origin + _href;
        this.active = this.getActive(_href);
    }
}

export function loadNavbar() {
    const mainContent = getElement('.main-content');
    const currentItems = [
        new NavbarItem('About', '/index.html'),
        new NavbarItem('Resume', '/pages/main/resume.html'),
        new NavbarItem('Portfolio', '/pages/main/portfolio.html'),
        new NavbarItem('Blog', '/pages/main/blog.html')
    ];

    const loadNavbarItems = () => {
        let navbarItems = ``;

        for (const currentItem of currentItems) {
            navbarItems += `
                <li class="navbar-item">
                    <a href="${currentItem.url}" class="navbar-link ${
                currentItem.active ? 'active' : ''
            }" data-nav-link>
                        ${currentItem.title}
                    </a>
                </li>
            `;
        }

        return navbarItems;
    };

    mainContent.innerHTML = `
        <nav class="navbar">
            <ul class="navbar-list">
                ${loadNavbarItems()}
            </ul>
        </nav>
        ${mainContent.innerHTML}
    `;
}
