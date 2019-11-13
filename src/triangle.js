export function Triangle(side1, side2, side3) {
  // console.log(side1, side2, side3);  << This displays in the terminal when you test.
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  // debugger;  << This is to run in tandem with chrome dev tools.
}

Triangle.prototype.checkType = function() {

   if ((typeof this.side1 === 'string') || (typeof this.side2 === 'string') || (typeof this.side3 === 'string')) {
    return "enter a number";
  } else if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    return "scalene triangle";
  } else if ((this.side1 === this.side2) && ((this.side1 === this.side3)) && ((this.side2 === this.side3))) {
    return "equilateral triangle";
  }  else if ((this.side1 === this.side2) || ((this.side1 === this.side3)) || ((this.side2 === this.side3))) {
    return "isosceles triangle";
  }
};
