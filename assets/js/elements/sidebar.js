import { getElement } from '../index.js';

export function loadSideBar() {
    const href = window.location.href;

    const mainContent = getElement('.main-body');
    mainContent.innerHTML = `
        <aside class="sidebar" data-sidebar>
            <div class="sidebar-info">
                <figure class="avatar-box">
                    <img
                        src="https://avatars.githubusercontent.com/u/64885646?v=4"
                        alt="ADRIEL SANTOS"
                        width="80"
                        style="border-radius: 30px"
                    />
                </figure>

                <div class="info-content">
                    <h1 class="name" title="ADRIEL SANTOS">ADRIEL SANTOS</h1>

                    <div class="title-content">
                        <p class="title">Web developer</p>
                        <p class="title">Mobile developer</p>
                    </div>
                </div>

                <button class="info_more-btn" data-sidebar-btn>
                    <span class="info_more_label">
                        Exibir contatos
                    </span>

                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <div class="sidebar-info_more">
                <div class="separator"></div>

                <ul class="contacts-list">
                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Email</p>

                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >adrieldossantos7@gmail.com</a
                            >
                        </div>
                    </li>

                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="phone-portrait-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Phone</p>

                            <a href="tel:+555199667423" class="contact-link">+55 (51) 9966-7423</a>
                        </div>
                    </li>

                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="business-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Work</p>

                            <span class="contact-link">Dataweb Tecnologia</span>
                        </div>
                    </li>

                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">Location</p>

                            <address>Porto Alegre, RS, Brasil</address>
                        </div>
                    </li>
                </ul>

                <div class="separator"></div>

                <ul class="social-list">
                    <li class="social-item">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>

                    <li class="social-item">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>

                    <li class="social-item">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        ${mainContent.innerHTML}
    `;

    const infoMoreBtn = document.getElementsByClassName('info_more-btn')[0];

    infoMoreBtn.addEventListener('click', (event) => {
        const sidebar = document.getElementsByClassName('sidebar')[0];
        const sidebarInfoMore = document.getElementsByClassName('sidebar-info_more')[0];
        const sidebarInfoMoreLabel = document.getElementsByClassName('info_more_label')[0];

        if (sidebarInfoMore.style.visibility === 'visible') {
            sidebarInfoMore.style.opacity = 0;
            sidebarInfoMore.style.visibility = 'hidden';
            sidebar.style.maxHeight = '180px';
            sidebarInfoMoreLabel.innerHTML = 'Exibir Contatos';
        } else {
            sidebarInfoMore.style.opacity = 1;
            sidebarInfoMore.style.visibility = 'visible';
            sidebar.style.maxHeight = '800px';
            sidebarInfoMoreLabel.innerHTML = 'Fechar Contatos';
        }
    });
}

export function loadSideBarBlog() {
    const href = window.location.href;

    const mainContent = getElement('.main-body');
    mainContent.innerHTML = `
        <aside class="sidebar" data-sidebar>
            <div class="sidebar-info">
                            <figure class="avatar-box">
                    <img
                        src="https://avatars.githubusercontent.com/u/64885646?v=4"
                        alt="ADRIEL SANTOS"
                        width="80"
                        style="border-radius: 30px"
                    />
                </figure>
                <ul class="contacts-list">
                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="git-branch-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <span class="contact-link">Criando o meu próprio git</span>
                        </div>
                    </li>

                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <span class="contact-link">Estudar o passado é conhecer o presente</span>
                        </div>
                    </li>

                    <li class="contact-item">
                        <div class="icon-box">
                            <ion-icon name="business-outline"></ion-icon>
                        </div>

                        <div class="contact-info">
                            <span class="contact-link">Init e Objects</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="sidebar-info_more">
                <div class="separator"></div>
                
                <ul class="social-list">
                    <li class="social-item">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>

                    <li class="social-item">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>

                    <li class="social-item">
                        <a href="#" class="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                </ul>
                
                <div class="separator"></div>
            </div>
        </aside>
        ${mainContent.innerHTML}
    `;

    const infoMoreBtn = document.getElementsByClassName('info_more-btn')[0];

    infoMoreBtn.addEventListener('click', (event) => {
        const sidebar = document.getElementsByClassName('sidebar')[0];
        const sidebarInfoMore = document.getElementsByClassName('sidebar-info_more')[0];
        const sidebarInfoMoreLabel = document.getElementsByClassName('info_more_label')[0];

        if (sidebarInfoMore.style.visibility === 'visible') {
            sidebarInfoMore.style.opacity = 0;
            sidebarInfoMore.style.visibility = 'hidden';
            sidebar.style.maxHeight = '180px';
            sidebarInfoMoreLabel.innerHTML = 'Exibir Contatos';
        } else {
            sidebarInfoMore.style.opacity = 1;
            sidebarInfoMore.style.visibility = 'visible';
            sidebar.style.maxHeight = '800px';
            sidebarInfoMoreLabel.innerHTML = 'Fechar Contatos';
        }
    });
}
