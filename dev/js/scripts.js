import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { gmcTL } from "./gmc"
import { autobotTL } from "./autobot"
import { classicOneTL } from "./classicOne"
import { classicTwoTL } from "./classicTwo"

gsap.registerPlugin(GSDevTools);

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);


let mainTL = gsap.timeline();

mainTL.add(gmcTL)
      .add(autobotTL)
      .add(classicOneTL)
      .add(classicTwoTL);
        

        mainTL.play();

GSDevTools.create();