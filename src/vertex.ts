import p5 from "p5";
export const vertex = function (p: p5) {
    const w = 480;
    const h = 360;
    function setup() {
        p.createCanvas(w, h);
    }
    function draw() {
        p.background(192);
        // ==== vertex()で頂点描画 ==== //
        let row;
        let unit = 20;
        row = 2;
        p.noStroke();
        p.fill(255);
        p.text("point", 16, unit * (row - 1));
        p.strokeWeight(6);
        p.stroke(0);
        p.beginShape(p.POINTS);
        p.vertex(120, unit * row);
        p.vertex(240, unit * row);
        p.vertex(360, unit * row);
        p.endShape();
        row = row + 2;

        //line
        p.noStroke();
        p.text("line", 16, unit * (row - 1));
        p.stroke(0);
        p.beginShape();
        p.vertex(240, unit * row);
        p.vertex(240 + (p.mouseX - 240), unit * row);
        p.endShape();
        row = row + 2;

        //polygon
        p.noStroke();
        p.fill(255);
        p.text("polygon", 16, unit * (row - 1));
        p.beginShape();
        p.noStroke();
        const x = p.map(p.sin(p.frameCount / 100), -1, 1, 120, 360);
        p.vertex(120, unit * row);
        p.vertex(x, unit * row);
        p.vertex(x, unit * (row + 1));
        p.vertex(120, unit * (row + 1));

        p.endShape();
        row = row + 4;

        //sin
        p.noStroke();
        p.fill(255);
        p.text("sin", 16, unit * (row - 1));
        p.beginShape();
        p.strokeWeight(3);
        p.stroke(255);
        p.noFill();
        for (let i = 0; i <= 360; i += 8) {
            const y = (i + p.frameCount) * 4 * (p.TWO_PI / 360);
            p.vertex(i * 1.2, unit * row + p.sin(y) * 15);
        }
        p.endShape();
        row = row + 4;

        p.noStroke();
        p.fill(255);
        p.text("sin point", 16, unit * (row - 1));
        p.beginShape(p.POINTS);
        p.strokeWeight(3);
        p.stroke(0);
        p.noFill();
        for (let i = 0; i <= 360; i += 12) {
            const y = (i + p.frameCount) * 4 * (p.TWO_PI / 360);

            p.vertex(i * 1.2, unit * row + p.sin(y) * 15);
        }
        p.endShape();
    }

    p.setup = setup;
    p.draw = draw;
};
