class DrawingApp {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.painting = false;
    this.#init();
    this.#initEvents();
  }
  #init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = 'round';
  }
  #initEvents() {
    this.canvas.addEventListener('mousedown', e => {
      this.#start(e);
    });
    this.canvas.addEventListener('mouseup', this.#end.bind(this));
    this.canvas.addEventListener('mousemove', this.#draw.bind(this));
    this.canvas.addEventListener('touchstart', this.#start.bind(this));
    this.canvas.addEventListener('touchend', this.#end.bind(this));
    this.canvas.addEventListener('touchmove', this.#draw.bind(this));
  }
  #start(e) {
    this.painting = true;
    this.#draw(e);
  }
  #end() {
    this.painting = false;
    this.ctx.beginPath();
  }
  #draw(e) {
    if (!this.painting) return;
    let x = e.clientX || e.touches[0].clientX;
    let y = e.clientY || e.touches[0].clientY;

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.moveTo(x, y);
  }
  changeColor(color) {
    this.ctx.strokeStyle = color;
  }
}

const draw = new DrawingApp();
