import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { gmcTL } from "./gmc"


gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(gmcTL)
        

        mainTL.play();

GSDevTools.create();