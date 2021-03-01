class CorruptGame {
  constructor(block, img) {
    this.block = document.querySelector(block);
    this.img = img;
    this.startGame = event => {
      showLayout();
      this.removeEventHandler(this.block);
    };
  }

  init() {
    this.createLayout();
    this.addEventHandler(this.block);
  }

  addEventHandler(elem) {
    elem.addEventListener('click', this.startGame);
  }

  removeEventHandler(elem) {
    elem.removeEventListener('click', this.startGame);
  }

  createLayout() {
    const parent = document.querySelector('body');
    const layout = document.createElement('div');
    layout.classList.add('layout-frame');
    parent.append(layout);
  }

  showLayout() {
    const layout = document.querySelector('.layout-frame');
    layout.classList.add('layout-frame__visible');
  }
}
