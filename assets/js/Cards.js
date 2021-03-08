class Cards {
    constructor() {
        this.posicaoSectionDicas = document.getElementById('simbolos');
        this.cardEsq = document.querySelector('.info-1');
        this.cardDir = document.querySelector('.info-2');
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        if (posicao >= 25) {
            this.cardEsq.style.transform = `translate(${((-posicao) + 25)/10}%)`;
            this.cardDir.style.transform = `translate(${(posicao - 25)/10}%)`;
        }
    }
}

export { Cards }