import p5 from "p5";
import { noiseWave } from "./noiseWave";
import { mouseInput } from "./mouseInput";
import { liquidSimulation } from "./liquidSimulation";
import { constrainTest } from "./constrainTest";
import { vertex } from "./vertex";
import { particle } from "./particle";
import { capture } from "./capture";

// new p5(capture);
new p5(noiseWave);
new p5(mouseInput);
new p5(vertex);
new p5(constrainTest);
new p5(liquidSimulation);
new p5(particle);
