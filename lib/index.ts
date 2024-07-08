import { Components } from "./core/main";

document.addEventListener('DOMContentLoaded', () => {
    const app = new Components('#root');
    const head = document.createElement('h1')
    head.textContent = 'Hello World'
    app.render(head);
})