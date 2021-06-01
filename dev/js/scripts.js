import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { gmcTL } from "./gmc"
import { autobotTL } from "./autobot"


gsap.registerPlugin(GSDevTools);



let mainTL = gsap.timeline();

mainTL.add(gmcTL)
      .add(autobotTL)
        

        mainTL.play();

GSDevTools.create();