const inquirer = require('inquirer')
const fs = require('fs')

const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter Three characters for your logo:',
    validate: function (input) {
      if (input.length > 3) {
        return 'Please add no more than 3 characters.'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color should your Text be? (For example, please state the color name ie. "White", or use hexidecimal code ie. "#FFFFFF"',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape for your logo:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color should your Shape be? (For example, please state the color name ie. "White", or use hexidecimal code ie. "#FFFFFF"',
  },
]

async function shapePrompt() {
  var answers = await inquirer.prompt(prompts)

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
      return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
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
      return `<polygon points="0 200, 150 0, 300 200" fill="${this.color}"/>`;
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
      return  `<rect x="37.5" y="50" width="225" height="150" fill="${this.color}" />`;
      ;
    }
  }
  
  // Logic to determine what shape to use
    let shape;
  switch (answers.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
  }

  shape.setColor(answers.shapeColor)

  // This sets to build the shape in a .svg file
  var shapeBuilder = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
  <text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`

  fs.writeFile("./Assets/shape.svg", shapeBuilder, err => console.log(err))

  return answers
}

shapePrompt()