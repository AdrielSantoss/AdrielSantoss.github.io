import { loadMainContent } from '../index.js';

export class NavbarItem {
    title = '';
    url = '';
    active = false;

    constructor(_title, _href, _active) {
        this.title = _title;
        this.url = window.location.origin + _href;
        this.active = _active;
    }
}

export function loadNavbar(actives) {
    const mainContent = loadMainContent('.main-content');
    const currentItems = [
        new NavbarItem('About', '/index.html', actives[0]), // MUDAR
        new NavbarItem('Resume', '/pages/main/resume.html', actives[1]),
        new NavbarItem('Portfolio', '/pages/main/portfolio.html', actives[2]),
        new NavbarItem('Blog', '/pages/main/blog.html', actives[3])
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
