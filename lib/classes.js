// Classes to determine the logo's shape

class Circle {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  // Render the shape + Set color
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${answers.color}"/>`;
  }
}
class Triangle {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<polygon points="0 200, 150 0, 300 200" fill="${answers.color}"/>`;
  }
}
class Square {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    return  `<rect x="37.5" y="50" width="225" height="150" fill="${answers.color}" />`;
    ;
  }
}