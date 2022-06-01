class Car {
    /* Constructor expects parameters for
    fill color, x and y coordinates that
    will be used to initialize class properties.
    */
    constructor(cColor, x, y) {
      this.color = cColor;
      this.doors = 4;
      this.isConvertible = false;
      this.x = x;
      this.y = y;
      this.speed = 0;
    }
  
    start(speed) { // method expects parameter!
      this.speed = speed;
    }
  
    display() { // method!
      fill(this.color);
      rect(this.x, this.y, 20, 10);
    }
  
    move() { // method!
      this.x += this.speed;
      // Wrap x around boundaries
      if (this.x < -20) {
        this.x = width;
      } else if (this.x > width) {
        this.x = -20;
      }
    }
  } //end class Car