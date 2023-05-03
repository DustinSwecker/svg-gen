const {Shape, Triangle, Square, Circle, makeShape} = require('../lib/shapes');






describe('Shape', () => {

  describe('instantiation of shape', () => {
    it('should be an instance of the Shape class', () => {
      const shape = new Shape;

      expect(shape).toBeInstanceOf(Shape);
    });
  });
  
  describe('Initialize logoLetters', () => {
    it('should set logoLetters properly', () => {
      const logoLetters = 'DES';
      const shape1 = new Shape(logoLetters,'yellow','black');

      expect(shape1.logoLetters).toBe(logoLetters);
    });
  });

  describe('Initialize lettersColors', () => {
    it('should set lettersColors properly', () => {
      const lettersColors1 = 'black';
      const shape2 = new Shape('123',lettersColors1,'yellow');

      expect(shape2.lettersColors).toBe(lettersColors1);
    });
  });

  describe('Initialize shapeColor', () => {
    it('should set shapeColor properly', () => {
      const shapeColor = 'white';
      const shapeColor1 = new Shape('try','black',shapeColor);

      expect(shapeColor1.shapeColor).toBe(shapeColor);
    });
  });

  });

  describe('Triangle', () => {
    describe('instantiation of Triangle', () => {
        it('should be an instance of the Triangle class', () => {
        const newTriangle = new Triangle;

        expect(newTriangle).toBeInstanceOf(Triangle);
        });
    });

    describe('renders a triangle', () => {
        
        
        const shape = new Triangle('des', 'yellow', 'blue');
        
        expect(shape.render()).toEqual('<polygon points="0 200, 150 0, 300 200" fill="blue" />')

    })
});

describe('Square', () => {
  describe('instantiation of Square', () => {
    it('should be an instance of the Square class', () => {
      const newSquare = new Square;

      expect(newSquare).toBeInstanceOf(Square);
    });
  });
  describe('renders a square', () => {
        

    const shape = new Square('des', 'yellow', 'blue');
    
    expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="blue" />')

    })
});

describe('Circle', () => {
  describe('instantiation of Circle', () => {
    it('should be an instance of the Triangle class', () => {
      const newCircle = new Circle;

      expect(newCircle).toBeInstanceOf(Circle);
    });

    describe('renders a circle', ()=> {

        const shape = new Square('des', 'yellow', 'blue');
    
        expect(shape.render()).toEqual('<rect width="100%" height="100%" fill="blue" />')
    })
  });
});

 