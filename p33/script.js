const ellipse = {
  width: 10,
  height: 5,
  getArea(){
    return this.width*this.height*Math.PI;
  },
  getPerimeter(){
    return 2*Math.PI*Math.sqrt((this.width*this.width+this.height*this.height)/2);
  },
  getEccentricity(){
    return  Math.sqrt(1-(this.height/this.width)*(this.height/this.width));
  },
};