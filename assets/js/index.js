export function loadMainContent(selector) {
    const currentSelector = selector ? selector : '.main-content';
    const mainContent = document.querySelector(currentSelector);

    if (mainContent === null) {
        throw new Error(`Elemento ${selector} não foi encontrado.`);
    }

    return mainContent;
}
