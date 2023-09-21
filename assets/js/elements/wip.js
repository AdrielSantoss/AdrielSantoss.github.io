import { getElement } from '../index.js';

export function loadWorkingInProgress() {
    const mainContent = getElement('.working-in-progress');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="wip">
                <br/>
                <h2>Working in progress...</h2>
                <p><small>Este conteúdo está sendo implementado...</small></p>
                <br />
                <img src="../../assets/images/WIP.gif"/>
                <br/>
                <p><small>Acompanhe meu trabalho no </small></p>
                <a target="_blank" href="https://github.com/AdrielSantoss" _blank>GITHUB</a>
            </div>
            ${mainContent.innerHTML}
        `;
    }
}
