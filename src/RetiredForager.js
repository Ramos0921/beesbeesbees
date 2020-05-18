var RetiredForagerBee = function() {
  //call foragerBee superclass
  ForagerBee.call(this);
  //sets age 40
  this.age = 40;
  //sets job to gamble
  this.job = "gamble";
  //set canFly property to false
  this.canFly = false;
  //sets color grey
  this.color = "grey";
  //food property inherited form grub
  //eat method inherited from grub
  //treasureChest array inherited form Forager bee.

};
//inherits properties form ForagerBee
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
//sets prototype ot RetiredForagerBee.prototype
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
//forage method returns string;
RetiredForagerBee.prototype.forage = function(){
  return "I am too old, let me play cards instead";
}
//gamble method adds to treasureChest array.
RetiredForagerBee.prototype.gamble = function(treasure){
  this.treasureChest.push(treasure);
}