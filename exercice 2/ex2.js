function sommeEntiersPositifs(){
  console.log(arguments);
  var s = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (Math.sign(arguments[i]) == 1){
      s += arguments[i];
     }
  }
    return s;
}
alert("la somme des entiers positifs est" + sommeEntiersPositifs(1, -2, 3, -5, 2, 8));