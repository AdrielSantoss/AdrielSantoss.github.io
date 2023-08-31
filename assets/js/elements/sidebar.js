import { loadMainContent } from '../index.js';

export function loadSideBar() {
    const mainContent = loadMainContent('.main-body');

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
                    <span>Show Contacts</span>

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
}
