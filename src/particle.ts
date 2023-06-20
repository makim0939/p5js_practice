import p5 from "p5";

export const particle = (p: p5) => {
    let select: any;
    const balls = new Array(5000);
    const w = 480; //window.innerHeight;
    const h = 496; //window.innerWidth;
    const r = 200;
    let distance = [0, 0];
    let position = [0, 0];
    p.setup = () => {
        //キャンバスを作成
        p.createCanvas(w, h);
        reset();
    };
    p.draw = () => {
        p.background(10);
        //draw margin
        p.noStroke();
        p.fill(255);
        p.rect(0, 0, 480, 16);

        p.text("particle", 16, 32);

        const t = p.frameCount;
        p.push();
        p.translate(w / 2, h / 2);
        for (let i = 0; i < balls.length; i++) {
            position[0] = position[0] + distance[0];
            position[1] = position[1] + distance[1];
            const x = balls[i][0] * p.sin(balls[i][2] + p.frameCount / 100);
            const y = balls[i][1];
            p.fill(235, 245, 255, 100);
            p.ellipse(x, y, 2);
        }
        p.pop();
    };

    function reset() {
        for (let i = 0; i < balls.length; i++) {
            const s1 = r;
            const s2 = (p.TWO_PI / 360) * p.random(360);
            const s3 = (p.TWO_PI / 360) * p.random(360);
            balls[i] = [s1 * p.cos(s2), s1 * p.sin(s2), s3, s1];
        }
    }
};
