//find the index of the first appearance of one string inside of another string
//hoshikusa no yama ni hari ga aru to omou

function indexOf(stringA, stringB)  {
    //hari ga sutakku o koeta baai, jidoutekini false o kaeshimasu
    if (stringA.length > stringB) {
      return -1
    }
    // saisho ni kensasku parameta o false to shite settei shimasu
    let found =-1;
    //hoshikusa no yama o ruupu suru
    for (let i=0; i<= stringB.length;i++) {
      //shin no jooken, hanpuku ni settei
      if (stringB[i] === stringA[0]) {
        found = i
        //hari o toushite ruupu suru
        for (let j=0; j < stringA.length; j++) {
  //hari no jotai ga hoshiusa no yama to hitoshikunai
        if (stringA[j] !== stringB[i+j]) {
          found = -1;
          break;
        }
        //sore igai no baai wa, indekkusu o kaeshi, found no shokichi o index ni henkoo shimasu
        if (j === stringA.length-1) {
          return found
        }
      }
    }
    }
    //saigen ritsu
    return found
  }

console.log(indexOf('or', 'hello world')); 
console.log(indexOf('hello world', 'or')); 
console.log(indexOf('howdy', 'hello world')); 
console.log(indexOf('oox', 'ooboxoooxo')); 

