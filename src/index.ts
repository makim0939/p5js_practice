import p5 from "p5";
import { noiseWave } from "./noiseWave";
import { kakuninyo } from "./kakuninyo";
import { physics } from "./physics";
import { constrainTest } from "./constrainTest";
import { vertex } from "./vertex";

new p5(noiseWave);
new p5(kakuninyo);
new p5(vertex);
new p5(constrainTest);
new p5(physics);
