import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { gmcTL } from "./gmc"
import { autobotTL } from "./autobot"
import { classicOneTL } from "./classicOne"
import { classicTwoTL } from "./classicTwo"
import { classicThreeTL } from "./classicThree"
import { classicFourTL } from "./classicFour"

gsap.registerPlugin(GSDevTools);

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);


let mainTL = gsap.timeline();

mainTL.add(gmcTL)
      .add(autobotTL)
      .add(classicOneTL)
      .add(classicTwoTL)
      .add(classicThreeTL)
      .add(classicFourTL);
        

        mainTL.play();

GSDevTools.create();