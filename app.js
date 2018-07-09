
const MAX = 600;
let place = document.getElementById('place');
let sidepanel = document.getElementById('sidepanel');
class Shape {
    constructor(x, y) {
        console.log(x, y);
        this.x = x;
        this.y =y;
        this.div = document.createElement('div');
        this.div.classList.add('shape');
        this.div.style ='inline-block';
        this.div.style.top = `${this.y}px`;
        this.div.style.left = `${this.x}px`;

        console.log(this.div.style.top, this.div.style.left);
        
        this.div.addEventListener('click', () => {
            this.describe();
        });
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        });
        place.appendChild(this.div);
        // this.updateLocation();
        
    }
    describe() {
        let text = `Shape Name: ${this.shapeName}
        <br> Width: ${this.width}
        <br> Height: ${this.height}
        <br> Radius: ${this.radius}
        <br> Area: ${this.area}
        <br> Perimeter: ${this.perimeter}`;
        sidepanel.innerHTML = text;
        
    }
    updateLocation(){
        let xVal = randomVal(0, MAX);
        let yVal = randomVal(0, MAX);
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
        console.log(xVal);
        console.log(yVal);
    }
    
}
class Circle extends Shape {
    constructor(x, y, radius) {
        super(x,y);
        this.x = radius;
        this.y = radius;
        this.shapeName = 'Circle';
        this.div.classList.add('Circle');
        this.radius = radius;
        this.width =(this.radius *2);
        this.height =(this.radius *2);
        this.area = Math.round(3.14 * this.radius * this.radius);
        this.perimeter = Math.round(3.14 * (this.radius)*2);
        this.div.style.backgroundColor = 'purple';
        this.div.border= '1px solid black';
        this.div.style.borderRadius = `${this.radius}px`;
        this.div.style.width = `${this.radius * 2}px`;
        this.div.style.height = `${this.radius * 2}px`;
    }
   
}
class Triangle extends Shape {
    constructor(x, y, height) {
        super(x,y);
        this.shapeName= 'Triangle';
        this.div.classList.add('Triangle');
        this.height = height;
        this.div.style.backgroundColor = 'yellow';
        this.div.style.borderBottom = `${this.height}px solid yellow`;
        this.div.style.borderRight = `${this.height/2}px solid transparent`;
        this.div.style.borderLeft = `${this.height/2}px solid transparent`;
        this.radius = "not applicable";
        this.x = this.height;
        this.y = this.height;
        this.width = this.height;
        this.area = (0.5 * this.height * this.height);
        this.perimeter = ((2*this.height)/2);
      

    }
}

class Square extends Shape {
    constructor(x, y, sideLength) {
        super(x,y);
        this.x = sideLength;
        this.y = sideLength;
        this.sideLength = sideLength;
        this.shapeName = 'Square';
        this.div.classList.add('Square');
        this.radius = 'Does not have one';
        this.area = Math.round(this.sideLength* this.sideLength);
        this.perimeter = Math.round((this.sideLength*4));
        this.div.style.backgroundColor = 'red';
        this.div.border= '1px solid black';
        this.div.style.width = `${this.sideLength}px`;
        this.div.style.height = `${this.sideLength}px`;
        this.width = this.x;
        this.height = this.x;
    } 
}
class Rectangle extends Shape {
    constructor(x, y, side, top) {
        super(x,y);
        this.side = side;
        this.top = top;
        this.x = this.side;
        this.y = this.top;
        this.shapeName = 'Rectangle';
        this.div.classList.add('Rectangle');
        this.radius = 'Does not have one';
        this.area = Math.round(this.side * this.top);
        this.perimeter = Math.round((this.side*2)+(this.top*2));
        this.div.style.backgroundColor = 'purple';
        this.div.border= '1px solid black';
        this.div.style.backgroundColor = 'green';
        this.div.style.width = `${this.side}px`;
        this.div.style.height = `${this.top}px`;
        this.width = this.side;
        this.height= this.top;
    } 
}

function randomVal(min, max){
    return Math.floor(Math.random()* (max-min)-min);
}

//functions for inserting the shapes
let circleButton = document.getElementById('submitCircle');
circleButton.addEventListener('click', insertCircle);
function insertCircle() {
    let getRadius = document.getElementById('radius');
    let radius = Number(getRadius.value);
    let x = randomVal(0, (MAX - radius));
    let y = randomVal(0, (MAX - radius));
    if (radius > 0 && radius < 601){
        let newCircle = new Circle(x,y, radius);
    }
    else {
        alert('Please put a number between 0 and 600');
    }

    
};

//create square
let squareButton = document.getElementById('submitSquare');
squareButton.addEventListener('click', insertSquare);
function insertSquare() {
    let getSide = document.getElementById('sideLengthSquare');
    let getSideNum = Number(getSide.value);
    let x = randomVal(0, (MAX - getSideNum));
    let y = randomVal(0, (MAX - getSideNum));
    console.log(x, y, getSideNum);
    let newSquare = new Square(x,y, getSideNum);

    if (getSideNum > 0 && getSideNum < 601){
        let newSquare = new Square(x,y, getSideNum);
    }
    else {
        alert('Please put a number between 0 and 600');
    }
};
//create Rectangle 
let rectangleButton = document.getElementById('submitRectangle');
rectangleButton.addEventListener('click', insertRectangle);
function insertRectangle() {
    let getSide = document.getElementById('rectX');
    let getTop = document.getElementById('rectY');
    let getSideNum = Number(getSide.value);
    let getSideTop = Number(getTop.value);
    let x = randomVal(0, (MAX-getSideNum));
    let y = randomVal(0, (MAX-getSideTop));
    if (getSideNum > 0 && getSideNum < 601 && getSideTop > 0 && getSideTop < 601){
        let newRectangle = new Rectangle(x,y, getSideNum, getSideTop);
    }
    else {
        alert('Please put a number between 0 and 600');
    }
};

//create Triangle
let triangleButton = document.getElementById('submitTriangle');
triangleButton.addEventListener('click', insertTriangle);
function insertTriangle() {
    let getHeight = document.getElementById('heightTriangle');
    let getHeightNum = Number(getHeight.value);
    let x = randomVal(0, (MAX-getHeightNum));
    let y = randomVal(0, (MAX-getHeightNum));
    if (getHeightNum > 0 && getHeightNum < 601){
        let newTriangle = new Triangle(x,y, getHeightNum);
    }
    else {
        alert('Please put a number between 0 and 600');
    }
};