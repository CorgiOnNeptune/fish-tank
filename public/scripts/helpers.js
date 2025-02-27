
const randRange = (min, max) => {
  let interval = max - min;
  return Math.random() * interval + min;
};

const randRangeInt = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(randRange(min, max + 0.99999));
};


class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  distance(p) {
    // pythagorooooooo
    let dx = this.x - p.x;
    let dy = this.y - p.y;
    let dx2 = dx * dx;
    let dy2 = dy * dy;
    let d2 = dx2 + dy2;
    let d = Math.sqrt(d2);
    return d;
  }

  /*scale_mut(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }*/

  scale(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  addMut(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  magnitude() {
    return this.distance(new Vector(0, 0));
  }

  /*  normalize_mut(target_magnitude) {
      if (target_magnitude < 0.00001) {
        this.x = this.y = 0;
      }
      var scale_factor = target_magnitude / this.magnitude();
      this.scale_mut(scale_factor);
    }*/
}

