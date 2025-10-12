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

    const sidebarContent = getElement('.sidebar');
    sidebarContent.innerHTML = `
            <div class="sidebar-info">
                <h3 style="color: white">Tabela de conteúdo</h3>
                <button class="info_more-btn" data-sidebar-btn style="margin-top: 10px">
                    <span class="info_more_label">
                        Exibir tabela
                    </span>

                    <ion-icon name="chevron-down"></ion-icon>
                </button>
            </div>

            <div class="sidebar-info_more" style="margin-top: 20px">
                <ul  class="contacts-list">
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >1. Introdução</a
                            >
                        </div>
                    </li>

                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >2. Estudar o passado é conhecer o presente</a
                            >
                        </div>
                    </li>
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >3. Init e Objects</a
                            >
                        </div>
                    </li>
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >4. Hash-Object</a
                            >
                        </div>
                    </li>
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >5. Cat-File</a
                            >
                        </div>
                    </li>
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >6. Write-Tree</a
                            >
                        </div>
                    </li>                                        
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >7. Ls-Tree</a
                            >
                        </div>
                    </li>      
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >8. Add</a
                            >
                        </div>
                    </li>      
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >9. Commit</a
                            >
                        </div>
                    </li>     
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >10. Branch</a
                            >
                        </div>
                    </li>           
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >11. Switch</a
                            >
                        </div>
                    </li>
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >12. Merge</a
                            >
                        </div>
                    </li> 
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >13. Conclusão</a
                            >
                        </div>
                    </li>
                    <li class="contact-item">
                        <div class="contact-info">
                            <a href="mailto:adrieldossantos7@gmail.com" class="contact-link"
                                >14. Referencias</a
                            >
                        </div>
                    </li>                                                            
                </ul>
            </div>
    `;

    const infoMoreBtn = document.getElementsByClassName('info_more-btn')[0];

    infoMoreBtn.addEventListener('click', (event) => {
        const sidebar = document.getElementsByClassName('sidebar')[0];
        const sidebarInfoMore = document.getElementsByClassName('sidebar-info_more')[0];
        const sidebarInfoMoreLabel = document.getElementsByClassName('info_more_label')[0];

        if (sidebarInfoMore.style.visibility === 'visible') {
            sidebarInfoMore.style.opacity = 0;
            sidebarInfoMore.style.visibility = 'hidden';
            sidebar.style.maxHeight = '100px';
            sidebarInfoMoreLabel.innerHTML = 'Exibir tabela';
        } else {
            sidebarInfoMore.style.opacity = 1;
            sidebarInfoMore.style.visibility = 'visible';
            sidebar.style.maxHeight = '800px';
            sidebarInfoMoreLabel.innerHTML = 'Fechar tabela';
        }
    });
}
