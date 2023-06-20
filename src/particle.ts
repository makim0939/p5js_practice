import p5 from "p5";

let select: any;
const balls = new Array(500);
const w = window.innerHeight;
const h = window.innerWidth;
const r = 200;
let distance = [0, 0];
let position = [0, 0];

const sketch = (p: p5) => {
    p.setup = () => {
        //キャンバスを作成
        p.createCanvas(w, h);
        //selectElementを作成
        select = p.createSelect();
        select.position(10, 10);
        select.option("Colony");
        select.option("Core");
        select.option("2Core");
        select.option("Surface");
        //selectが変更されたらコールバック関数resetを呼び出す
        select.changed(reset);
        p.mouseDragged = mouseDragged;
        p.mouseReleased = mouseReleased;
        reset();
    };
    p.draw = () => {
        p.background(0);
        const t = p.frameCount;
        p.push();
        p.translate(w / 2, h / 2);
        p.noStroke();
        for (let i = 0; i < balls.length; i++) {
            position[0] = position[0] + distance[0];
            position[1] = position[1] + distance[1];
            //console.log("position: " + position);
            //var x = balls[i][0] * p.sin(balls[i][2] + position[0] / 1000);
            let x = balls[i][0] * p.sin(balls[i][2] + position[0] / 10000);
            let y = balls[i][1]; //p.sin(balls[i][2] + position[1] / 10000);
            p.fill(235, 245, 255, 100);
            p.ellipse(x, y, 5);
        }
        p.pop();
    };

    function reset() {
        var item = select.value();
        let s1: number;
        for (let i = 0; i < balls.length; i++) {
            if (item === "2Core") {
                s1 = p.random([r, r / 2, r / 3]);
            } else if (item === "Core") {
                s1 = p.random([r, r / 3]);
            } else if (item === "Surface") {
                s1 = r;
            } else {
                s1 = p.random(r);
            }
            var s2 = (p.TWO_PI / 360) * p.random(360);
            var s3 = (p.TWO_PI / 360) * p.random(360);
            balls[i] = [s1 * p.cos(s2), s1 * p.sin(s2), s3, s1];
        }
    }
    let prev: number[];
    let now: number[];
    function mouseDragged() {
        if (!prev) {
            prev = [p.mouseX, p.mouseY];
        } else {
            distance = [p.mouseX - prev[0], p.mouseY - prev[1]];
            prev = [p.mouseX, p.mouseY];
            //console.log("mouseX: " + distance);
        }
    }
    function mouseReleased() {
        distance = [0, 0];
    }
};

new p5(sketch);
