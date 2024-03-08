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
                <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc212amIxbmRlejF3c2tmMzMycjF1OXdrbGFkMzI5bXNkYjdicDQ1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mcsPU3SkKrYDdW3aAU/giphy.gif" alt="Visum GIF">
                <br/>
                <p><small>Acompanhe meu trabalho no </small></p>
                <a target="_blank" href="https://github.com/AdrielSantoss" _blank>GITHUB</a>
            </div>
            ${mainContent.innerHTML}
        `;
    }
}
