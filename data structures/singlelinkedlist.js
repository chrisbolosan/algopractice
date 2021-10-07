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
  //osu
  //tanitsu no risuto o pusshu
  //kansuu ni watasa reta atai o shiyou shite atarshi nodo o sakusei shimasu
  //heddo matawa teru chi ga nai baai wa, atarashiku sakusei sa reta noodo to hitoshiku naru yoo ni nioodo o settei shimasu
  // sore igai no baai wa, teru no puropati o atarashiku sakusei sa reta noodo ni settei shi, teiru no atashiku sakusei sa reta noodo ni koushin shimasu
  //naga sa o 1su inkurimento shimasu
  osu(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //poppu

  //   traverse() {
  //     //atama kara hajimeru
  //     let current = this.head;
  //     //kono ruupu ga null ni tassuru made, genzai no nodo wa torabasu shimasu
  //     while (current) {
  //       console.log(current.val);
  //       //tsugi wa arimasen null ga arimasu
  //       current = current.next;
  //     }
  //   }
}
let list = new SinglyLinkedList();
list.osu('hello');
list.osu('goodbye');
list.osu('!');
