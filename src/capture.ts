import p5 from "p5";

export const capture = (p: p5) => {
    let capture: p5.Element;
    const setup = () => {
        console.log({
            screen: [screen.width, screen.height],
            inner: [innerWidth, innerHeight],
        });
        p.createCanvas(640, 480);
        capture = p.createCapture("video");
        console.log(capture.elt);
    };
    const draw = () => {
        p.background(255);
        p.image(capture, 0, 0, 640, 480);
    };
    p.setup = setup;
    p.draw = draw;
};
