// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   //osu
//   //tanitsu no risuto o pusshu
//   //kansuu ni watasa reta atai o shiyou shite atarshi nodo o sakusei shimasu
//   //heddo matawa teru chi ga nai baai wa, atarashiku sakusei sa reta noodo to hitoshiku naru yoo ni nioodo o settei shimasu
//   // sore igai no baai wa, teru no puropati o atarashiku sakusei sa reta noodo ni settei shi, teiru no atashiku sakusei sa reta noodo ni koushin shimasu
//   //naga sa o 1su inkurimento shimasu
//   osu(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   //   traverse() {
//   //     //atama kara hajimeru
//   //     let current = this.head;
//   //     //kono ruupu ga null ni tassuru made, genzai no nodo wa torabasu shimasu
//   //     while (current) {
//   //       console.log(current.val);
//   //       //tsugi wa arimasen null ga arimasu
//   //       current = current.next;
//   //     }
//   //   }

//   //poppu
//   poppu(val) {
//     //if there are no nodes, return undefined
//     if (!this.head) {
//       return undefined;
//     }
//     // saisho kara hajimeru
//     let current = this.head;
//     let newTail = current;
//     //teru ni totatsu suru made risuto o torabasu shimasu
//     while (current.next) {
//       // ryoho o dojini ugokasu
//       newTail = current;
//       current = current.next;
//     }
//     // console.log(current.val);
//     // console.log(newTail.val);

//     //teru o saigo kara 2 banme no noodo ni settei shimasu
//     this.tail = newTail;
//     //saigo kara 2 banme no noodo no tsugi no puropati o null ni settei shimasu
//     this.tail.next = null;
//     //dekurimento
//     this.length--;
//     //risuto ga sora no baai
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     // sakujo sa reta noodo no atai o kaeshimasu
//     return current;
//   }

//   //shifuto
//   shifuto(val) {
//     //noodo ga nai baai wa, miteigi o kaeshimasu
//     if (!this.head) {
//       return undefined;
//     }
//     //genzai no head puropati o hensuu ni kakunoo shimasu
//     let currentHead = this.head;
//     //head puropati o genzai no head no tsugi no puropati ni settei shimasu
//     this.head = currentHead.next;
//     //dekurimento
//     this.length--;
//     //sakujo sa reta noodo no atai o kaeshimasu
//     if (this.length === 0) {
//       this.tail = null;
//     }
//     return currentHead;
//   }
//   //   shifutoKaijo
//   //atai o toru
//   shifutoKaijo(val) {
//     // atashi noodo o sakusei shimasu
//     let newNode = new Node(val);
//     //head puropati ga nai baai wa, head to teru o atarashi nodo ni settei shimasu
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       //Sore igai no baai wa, teru o tsugi no noodo ni settei shi, heddo o atarashi noodo ni settei shimasu
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     //risuto no naga sa o inkurimento shimasu
//     this.length++;
//     //rinkurisuto o kaesu
//     return this;
//   }
//   //eru
//   eru(index) {
//     //Indekkusu o ukeireru
//     //Risuto ga 0-miman, 0 ni hitoshii, matawa risuto no naga-sa ni hitoshii baai wa, null o kaeshimasu
//     if (index < 0 || index >= this.length) {
//       return null;
//     }
//     let counter = 0;
//     let current = this.head;
//     //Indekkusu ni tootatsu suru made risuto o ruupu shi, sono tokutei no indekkusu ni aru noodo o kaeshimasu
//     while (counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
//   //settei

//   settei(index, val) {
//     //Get kansuu o shiyoo shite, tokutei no nōdo o mitsukemasu
//     let foundNode = this.get(index);
//     //noodo ga mitsukaranai baai wa false o kaeshimasu
//     if (foundNode) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;
//     //noodo ga mitsukatta baai wa,-chi o tokutei no indekkusu no atai ni settei shi, tsuruu o kaeshimasu
//   }
//   //ieru

//   ieru(index, val) {
//     //indekkusu ga 0-miman matawa naga-sa yori ookii baai wa, false o kaeshimasu
//     if (index < 0 || index > this.length) {
//       return false;
//     }
//     //indekkusu ga naga-sa to onajidearu baai wa, atarashii noodo o risuto no saigo ni pusshu shimasu
//     if (index === this.length) {
//       return this.osu(val);
//     }
//     //indekkusu ga 0 no baai wa, atarashī noodo o risuto no sentoo ni shifuto kaijo shimasu
//     if (index === 0) {
//       return this.shifutoKaijo(val);
//     }
//     //Sore igai no baai wa, get mesoddo o shiyoo shite, indekkusu - 1 no noodo ni akusesu shimasu.
//     let newNode = new Node(val);
//     let previous = this.get(index - 1);
//     let temp = previous.next;

//     //Sono noodo no tsugi no puropati o atarashii noodo ni settei shimasu
//     previous.next = newNode;
//     //atarashii noodo no tsugi no puropati o mae no tsugi no puropati ni settei shimasu
//     newNode.next = temp;
//     //naga sa o inkurimento suru
//     this.length++;
//     //tsuru o kaesu
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index > this.length) {
//       return null;
//     }
//     if (index === this.length - 1) {
//       return this.poppu(index);
//     }
//     if (index === 0) {
//       return this.shifuto(val);
//     }
//     let previousNode = this.get(index - 1);
//     let removed = previousNode.next;
//     previousNode.next = removed.next;
//     this.length--;
//     return removed;
//   }
//   //reverse
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let next;
//     let previous = null;
//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = previous;
//       previous = node;
//       node = next;
//     }
//     return this;
//   }
//   print() {
//     let arr = [];
//     let current = this.head;
//     while (current) {
//       arr.push(current.val);
//       current = current.next;
//     }
//     // console.log(arr);
//   }
// }
// let list = new SinglyLinkedList();
// list.osu('hello');
// list.osu('goodbye');
// list.osu('!');
// // list.poppu()
// // list.osu('newTrain')
// // list.shifuto()
// //list.insert(100,1)
// // list.insert(1, 'Chris');
// // list.remove(1) should remove 'Chris'

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
