const { Triangle, Circle, Square } = require("./shape.svg")

test("should render a green triangle svg",()=>{
  const expectedSvg = '<polygon points="0 200, 150 0, 300 200" fill="green"/>'
  const triangle = new Triangle()
  triangle.setColor("green")
  const createdSvg = triangle.render()
  expectedSvg(createdSvg).toEqual(expectedSvg)
})
test("should render a black square svg",()=>{
  const expectedSvg = `<rect x="37.5" y="50" width="225" height="150" fill="black" />`
  const square = new Square()
  square.setColor("black")
  const createdSvg = square.render()
  expectedSvg(createdSvg).toEqual(expectedSvg)
})
test("should render a red circle svg",()=>{
  const expectedSvg = `<circle cx="150" cy="100" r="100" fill="red"/>`
  const circle = new Circle()
  circle.setColor("red")
  const createdSvg = circle.render()
  expectedSvg(createdSvg).toEqual(expectedSvg)
})