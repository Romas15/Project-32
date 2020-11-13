class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("hexagonImage.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}

// class Bird {
//   constructor(x, y) {
//     var optinons = {
//       isStatic: false,
//     };
//     this.x = x;
//     this.y = y;
//     this.image = loadImage("sprites/hexagonImage.png");
//     this.body = Bodies.rectangle(0, 0, this.width, this.height, optinons);
//   }

//   display() {
//     var birdpos = this.body.position;
//     rectMode(CENTER);
//     strokeWeight(1);
//     rect(birdpos.x, birdpos.y, 0, 0);
//     imageMode(CENTER);
//     image(this.image, 200, 300, 200, 200);
//   }
// }
