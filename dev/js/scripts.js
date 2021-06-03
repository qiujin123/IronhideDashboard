import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { gmcTL } from "./gmc"
import { autobotTL } from "./autobot"
import { classicOneTL } from "./classicOne"

gsap.registerPlugin(GSDevTools);



let mainTL = gsap.timeline();

mainTL.add(gmcTL)
      .add(autobotTL)
      .add(classicOneTL);
        

        mainTL.play();

GSDevTools.create();