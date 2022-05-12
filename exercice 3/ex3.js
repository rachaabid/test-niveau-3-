function caractereMajuscule() {
  var chp = prompt("donner votre prénom");
  var str =' ';
  var chn = prompt("donner votre nom");
  var nom = chp + str + chn;
    console.log("le nom est " + nom );
  var nomc =chp[0].toUpperCase()+'.'+chn[0].toUpperCase();
    console.log("le nom est " + nomc );
}
caractereMajuscule();