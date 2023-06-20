//map(値, 開始1, 停止1, 開始2, 停止2, 範囲内?: bool)
//値を範囲1から範囲2に再マッピング

//ellipse(x, y, w, h, [頂点数])
//楕円を描画

import p5 from "p5";

export const mouseInput = (p: p5) => {
    const w = 480; //window.innerWidth;
    const h = 240; //window.innerHeight;
    function setup() {
        p.createCanvas(w, h);
    }
    function draw() {
        p.background(192);
        const margin = 16;
        const unit = 16;

        // ==== マップの確認 ==== //
        p.noStroke(); //p.stroke(color)で線を描画できる
        p.fill(255);

        p.text("raw", 16, unit, 100, 100);
        const x = p.map(p.mouseX, 0, w, 0, w, true);
        p.ellipse(x, unit * 4, 51, 51);

        p.text("shrink", 16, unit * 6, 100, 100);
        const x1 = p.map(p.mouseX, 0, w, w / 4, w - w / 4, true);
        p.ellipse(x1, unit * 8, 51, 51);

        p.text("noise", 16, unit * 10, 100, 100);
        const x2 = p.map(p.noise(p.mouseX), 0, 1, w / 4, w - w / 4, true);
        p.ellipse(x2, unit * 12, 51, 51);
    }

    p.setup = setup;
    p.draw = draw;
};
