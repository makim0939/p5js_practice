import p5 from "p5";

export const physics = (p: p5) => {
    class Liquid {
        x: number;
        y: number;
        w: number;
        h: number;
        c: number;
        constructor(x: number, y: number, w: number, h: number, c: number) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.c = c;
        }
        contains(m: Mover): boolean {
            const l = m.position;
            return (
                l.x > this.x &&
                l.x < this.x + this.w &&
                l.y > this.y &&
                l.y < this.y + this.h
            );
        }
        calculateDrag(m: Mover) {
            const speed = m.velocity.mag();
            const dragMagnitude = this.c * speed * speed;
            const dragForce = m.velocity.copy();
            dragForce.mult(-1);
            dragForce.normalize();
            dragForce.mult(dragMagnitude);
            return dragForce;
        }
        display() {
            p.noStroke();
            p.fill(72);
            p.rect(this.x, this.y, this.w, this.h);
        }
    }
    class Mover {
        // mass:
        position: p5.Vector;
        velocity: p5.Vector;
        acceleration: p5.Vector;
        mass: number;
        constructor(m: number, x: number, y: number) {
            this.mass = m;
            this.position = p.createVector(x, y);
            this.velocity = p.createVector(0, 0);
            this.acceleration = p.createVector(0, 0);
        }
        applyForce(force: p5.Vector) {
            const f = p5.Vector.div(force, this.mass);
            this.acceleration.add(f);
        }
        update() {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
        }
        display() {
            p.noStroke;
            p.fill(255);
            p.ellipse(
                this.position.x,
                this.position.y,
                this.mass * 16,
                this.mass * 16
            );
        }
        checkEdges() {
            if (this.position.y > h - this.mass * 8) {
                this.velocity.y *= -0.9;
                this.position.y = h - this.mass * 8;
            }
        }
    }

    const w = 480;
    const h = 360;
    const movers: Mover[] = [];
    let liquid: Liquid;
    function setup() {
        p.createCanvas(w, h);
        reset();
        liquid = new Liquid(0, h / 2, w, h / 2, 0.1);
    }
    function draw() {
        p.background(192);
        liquid.display();
        for (let i = 0; i < movers.length; i++) {
            if (liquid.contains(movers[i])) {
                let dragForce = liquid.calculateDrag(movers[i]);
                movers[i].applyForce(dragForce);
            }
            const gravity = p.createVector(0, 0.1 * movers[i].mass);
            movers[i].applyForce(gravity);
            movers[i].update();
            movers[i].display();
            movers[i].checkEdges();
        }
    }
    function reset() {
        for (let i = 0; i < 9; i++) {
            movers[i] = new Mover(p.random(0.5, 3), 40 + i * 70, 0);
        }
    }

    p.setup = setup;
    p.draw = draw;
    p.mouseClicked = reset;
};
