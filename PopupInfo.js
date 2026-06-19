class PopupInfo extends HTMLElement {
    constructor() {
        super();
        // Estabelece a raiz fantasma (Shadow Root) acoplada ao elemento
        this.shadow = this.attachShadow({ mode: 'open' }); 
        const template = document.getElementById('popup-template')
        this.shadow.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        // A geração imperativa dos nós permanece inalterada
      
        let imgUrl = this.hasAttribute("img") ? this.getAttribute("img") : "default.png";
        const img = this.shadowRoot.querySelector('img')
        img.src = imgUrl;
     

        // Estilos confinados ao escopo do Shadow DOM
        
    
        // Anexação direcionada exclusivamente à raiz encapsulada
  
    }
}  

customElements.define("popup-info",PopupInfo);