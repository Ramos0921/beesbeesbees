var ForagerBee = function() {
  Bee.call(this);
  //sets age to 10
  this.age = 10;
  //sets job to "find pollen"
  this.job= "find pollen";
  //sets color to yello
  this.color= "yellow";
  //food is inherited from grub
  //eat method is inherited from grub

  //set canFly to true
  this.canFly = true;

  //treasureChest property is an empty array.
  this.treasureChest  =[];


};
//inherties properties from bee
ForagerBee.prototype= Object.create(Bee.prototype);
//sets prootype to Forager.prototype
ForagerBee.prototype.constructor = ForagerBee;

//forage method adds treasure to treasureChest.
ForagerBee.prototype.forage= function(treasure){
  this.treasureChest.push(treasure);
}