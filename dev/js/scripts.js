import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
// import $ from "jquery";
import { gmcTL } from "./gmc";
import { autobotTL } from "./autobot";
import { classicOneTL } from "./classicOne";
import { classicTwoTL } from "./classicTwo";
import { classicThreeTL } from "./classicThree";
import { classicFourTL } from "./classicFour";
import { classicReverseTL } from "./classicReverse";
import { skinOneTL } from "./skinOne";
import { skinTwoTL } from "./skinTwo";

gsap.registerPlugin(GSDevTools);

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);


let mainTL = gsap.timeline();

mainTL.add(gmcTL)
      .add(autobotTL)
      .add(classicOneTL)
      .add(classicTwoTL)
      .add(classicThreeTL)
      .add(classicFourTL)
      .add(classicReverseTL)
      .add(skinOneTL)
      .add(skinTwoTL);
    
      

      mainTL.play();

GSDevTools.create();

// $("#activateButton").on("click", function(){
//   console.log("click is working");
//   classicReverseTL.play();
// });