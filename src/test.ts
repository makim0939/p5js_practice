// import p5 from "p5";
// const p5app = (p: p5) => {
//     class Liquid {
//         x: number;
//         y: number;
//         w: number;
//         h: number;
//         c: number;
//         constructor(x: number, y: number, w: number, h: number, c: number) {
//             this.x = x;
//             this.y = y;
//             this.w = w;
//             this.h = h;
//             this.c = c;
//         }
//         contains(m: Mover): boolean {
//             const l = m.position;
//             return (
//                 l.x > this.x &&
//                 l.x < this.x + this.w &&
//                 l.y > this.y &&
//                 l.y < this.y + this.h
//             );
//         }
//         calculateDrag(m: Mover) {
//             const speed = m.velocity.mag();
//             const dragMagnitude = this.c * speed * speed;
//             const dragForce = m.velocity.copy();
//             dragForce.mult(dragMagnitude);
//             return dragForce;
//         }
//         display() {
//             p.noStroke();
//             p.fill(50);
//             p.rect(this.x, this.y, this.w, this.h);
//         }
//     }

//     class Mover {
//         // mass:
//         position: p5.Vector;
//         velocity: p5.Vector;
//         acceleration: p5.Vector;
//         mass: number;
//         constructor(m: number, x: number, y: number) {
//             this.mass = m;
//             this.position = p.createVector(x, y);
//             this.velocity = p.createVector(0, 0);
//             this.acceleration = p.createVector(0, 0);
//         }
//         applyForce(force: p5.Vector) {
//             const f = p5.Vector.div(force, this.mass);
//             this.acceleration.add(f);
//         }
//         update() {
//             this.velocity.add(this.acceleration);
//             this.position.add(this.velocity);
//             this.acceleration.mult(0);
//         }
//         display() {
//             p.stroke(0);
//             p.strokeWeight(2);
//             p.fill(255, 127);
//             p.ellipse(
//                 this.position.x,
//                 this.position.y,
//                 this.mass * 16,
//                 this.mass * 16
//             );
//         }
//         checkEdges() {
//             if (this.position.y > h - this.mass * 8) {
//                 this.velocity.y *= -0.9;
//                 this.position.y = h - this.mass * 8;
//             }
//         }
//     }
// };
