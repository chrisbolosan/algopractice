//find distance between 2 points when given (x,y) coordinates
//point 1 (5,5) , point 2(10,10)
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    dx = a.x - b.x;
    dy = a.y - b.y;
  }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

Point.distance(p1, p2);
