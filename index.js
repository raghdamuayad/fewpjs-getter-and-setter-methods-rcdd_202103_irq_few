// Add your Circle class here
class Circle {
  constructor(radius) {
    this.pi= 3.14;
    }
    set diameter(radius){
      this.radius = radius/2;
    }
    get diameter(){
      return  2 * this.radius;
    }
    set circumference(radius){
this.radius= circumference / (2 * this.pi)
    }
      get circumference(){
      return ( 2 * this.pi * this.radius) ;
    }
      set area(radius){
      this.radius = radius;

      }
        return this.pi * this.radius * this.radius;
      }
