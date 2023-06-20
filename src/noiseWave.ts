//keywords:
//map(値, 開始1, 停止1, 開始2, 停止2, 範囲内?: bool)

import p5 from "p5";

let yoff = 0.0; // 2nd dimension of perlin noise

export const noiseWave = (p: p5) => {
    const w = 480;
    const h = 240; //window.innerHeight;
    p.setup = () => {
        p.createCanvas(w, h);
    };

    p.draw = () => {
        p.background(51);

        p.fill(255);
        p.strokeWeight(0.1);
        p.text("noise wave", 16, 16);
        p.fill(255);
        p.strokeWeight(5);
        p.stroke(255);
        // We are going to draw a polygon out of the wave points
        p.beginShape(p.POINTS);

        let xoff = 0; // Option #1: 2D Noise

        for (let x = 0; x <= p.width; x += 10) {
            // Option #1: 2D Noise
            let y = p.map(p.noise(xoff, yoff), 0, 1, 100, 200);
            p.vertex(x, y);

            xoff += 0.05;
        }
        // increment y dimension for noise
        yoff += 0.01;
        p.vertex(p.width, p.height);
        p.vertex(0, p.height);
        p.endShape(p.CLOSE);
    };
};
