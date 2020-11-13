// // class Box extends BaseClass {
//   constructor(x, y, width, height) {
//     stroke("blue");
//     strokeWeight(9);
//     super(x, y, 30, 40);
//   }
// }
class Box {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      restitution: 0.2,
      friction: 0.1,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }
  //   display() {
  //     if (this.body.speed < 30) {
  //       var pos = this.body.position;
  //       rectMode(CENTER);
  //       fill("brown");
  //       rect(pos.x, pos.y, this.width, this.height);
  //     } else {
  //       World.remove(world, this.body);

  //       // this.Visibility = this.Visibility - 5;
  //       // tint(255, this.Visibility);
  //       // image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  //       // pop();
  //     }
  //   }
  //   score() {
  //     if (this.body.x > 0) {
  //       score++;
  //     }
  //   }
  // }
  score() {
    if (this.Visibility < 0 && this.Visibility > -105) {
      score++;
    }
  }
  display() {
    if (this.body.speed < 3) {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      strokeWeight(2);
      stroke("red");
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      pop();
    }
  }
}
