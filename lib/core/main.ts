export class Components {
    private elements : HTMLElement
    
    constructor(selector: string) {
        const select = document.querySelector(selector)
        if (!select) throw new Error (`The Selector ${selector} not found`)
        this.elements = select as HTMLElement
    }

    render(content: HTMLElement) {
        this.elements.innerHTML = ''
        let element : HTMLElement;
        element = content
        this.elements.appendChild(element)

        if (!(content instanceof HTMLElement)) {
            throw new Error('Must return HTML Element!')
        }
    }
}