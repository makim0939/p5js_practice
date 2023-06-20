import p5 from "p5";

export const constrainTest = (p: p5) => {
    const w = 480;
    const h = 144;

    const easing = 0.05;
    let mx = 1;
    let my = 1;
    const inner = 16;
    //rect w - (innerL+innerR)
    //rect h - (innerT+innerB)
    const radius = 35;
    function setup() {
        p.createCanvas(w, h);
        p.noStroke();
        p.ellipseMode("corner");
    }
    function draw() {
        p.background(192);

        if (p.abs(p.mouseX - mx) > 0.1) {
            mx = mx + (p.mouseX - mx) * easing;
        }
        if (p.abs(p.mouseY - my) > 0.1) {
            my = my + (p.mouseY - my) * easing;
        }

        mx = p.constrain(mx, inner, w - radius - inner);
        my = p.constrain(my, inner, h - radius - inner);
        p.fill(144);
        p.rect(inner, inner, w - inner * 2, h - inner * 2);
        p.fill(255);
        p.ellipse(mx, my, radius, radius);

        p.text("constrain & easing", inner - 4, inner - 4);
    }
    p.setup = setup;
    p.draw = draw;
};

// let mx = 1;
// let my = 1;
// let easing = 0.05;
// let radius = 24;
// let edge = 100;
// let inner = edge + radius;

// function setup() {
//     createCanvas(720, 400);
//     noStroke();
//     ellipseMode(RADIUS);
//     rectMode(CORNERS);
// }

// function draw() {
//     background(230);

//     if (abs(mouseX - mx) > 0.1) {
//         mx = mx + (mouseX - mx) * easing;
//     }
//     if (abs(mouseY - my) > 0.1) {
//         my = my + (mouseY - my) * easing;
//     }

//     mx = constrain(mx, inner, width - inner);
//     my = constrain(my, inner, height - inner);
//     fill(237, 34, 93);
//     rect(edge, edge, width - edge, height - edge);
//     fill(255);
//     ellipse(mx, my, radius, radius);
// }
