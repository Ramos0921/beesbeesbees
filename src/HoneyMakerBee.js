var HoneyMakerBee = function() {
  Bee.call(this);
  //sets age 10
  this.age = 10;
  //sets job to make honey
  this.job = "make honey";
  //sets color to yellow
  this.color= "yellow";
  //food property is inherited from grub
  //eat method is inherited from grub
  //sets honey pot to 0
  this.honeyPot = 0;


};
//inherits properties form Bee
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//sets prototype to HoneyMakerBee.prototype
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//makeHoney method adds 1 to the honeyPot
HoneyMakerBee.prototype.makeHoney = function(){
   this.honeyPot++;
}
//giveHoney method subtracts 1 from honeyPot.
HoneyMakerBee.prototype.giveHoney = function(){
   this.honeyPot--;
}