class Shape {
    constructor(logoLetters,lettersColors,shapeColor) {
        this.logoLetters = logoLetters;
        this.lettersColors = lettersColors;
        this.shapeColor =  shapeColor;
    }
}

class Triangle extends Shape {
    constructor(logoLetters,lettersColors,shapeColor) {
        super (logoLetters,lettersColors,shapeColor); 
            this.shape = 'polygon points="0 200, 150 0, 300 200"';
        };
}

class Square extends Shape {
    constructor(logoLetters,lettersColors,shapeColor) {
        super (logoLetters,lettersColors,shapeColor); 
            this.shape = 'rect x="50" width="66%" height="100%"';
        }
    }

class Circle extends Shape {
    constructor(logoLetters,lettersColors,shapeColor) {
        super (logoLetters,lettersColors,shapeColor); 
            this.shape = 'circle cx="150" cy="100" r="100"';
        }
    }

function grabShapeData(data) {
    if (data==='circle') {
        return Circle;
    } else if (data==='square') {
        return Square;
    } else {
        return Triangle;
    }
    
}

function makeShape(data) {
    
    const shapeChoice = grabShapeData(data.shape);
    
    const newShape = new shapeChoice(data['logo-letters'],data['letters-color'], data['shape-color']);
    
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <${newShape.shape} fill = "${newShape.shapeColor}" />
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${newShape.lettersColors}">${newShape.logoLetters}</text>
    </svg>`
}

module.exports = {makeShape, Shape, Triangle, Square, Circle}
