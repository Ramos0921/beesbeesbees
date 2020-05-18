var Bee = function() {
  //calls grub super class
  Grub.call(this);
  //override age sets to 5
  this.age= 5;
  //over rides color set to yellow
  this.color= "yellow";
  //food protperty is inherited
  //sets job propterty to keep growing
  this.job = "keep on growing";
};
//set to inherit properties from grub.
Bee.prototype= Object.create(Grub.prototype);

//sets properties ot Bee.prototype.
Bee.prototype.constructor = Bee;


