import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);


export let classicOneTL = gsap.timeline();


classicOneTL.to("#autobotFull",{ duration:0.1, alpha: 0, delay:1}) 
            .to("#gmcMBroke",{ duration:0.1, alpha: 0})  
            .to("#auto16", {duration:1, morphSVG:"#doorTransform", fill:"#5E5B64", y:-238.5, x:-393},"transform")
            .to("#auto11", {duration:1, morphSVG:"#leftHandleUpBase", x:-200},"transform")
            .to("#auto9", {duration:1, morphSVG:"#rightHandleUpBase", x:200},"transform")
