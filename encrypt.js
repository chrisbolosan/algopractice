//prompt
//write a function that will change all characters of a string to '#' but last 4

//ruupu suru koto wa dekumasuga, hissude wa arimasen. Subete o -4 ni suraisu shite kara, seiki hyougen de subete no moji o pondo ni okikaete kara, mo ichido suraisu shimas

function encrypt(str) {
  return str.slice(0, -4).replace(/\w/g, '#') + str.slice(-4);
}

console.log(encrypt('time to eat'));
console.log(encrypt('Genki desu ka?'));
console.log(encrypt('kyuukei suru!'));
console.log(encrypt('kore wa kantan sugiru'));
