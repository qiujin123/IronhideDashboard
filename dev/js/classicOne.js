import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);


export let classicOneTL = gsap.timeline();

// gsap.set("#leftHandleUpView",{transformOrigin:"center"});
// gsap.set("#rightHandleUpView",{transformOrigin:"center"});


classicOneTL.to("#autobotFull",{ duration:0.1, alpha: 0, delay:1}) 
            .to("#gmcMBroke",{ duration:0.1, alpha: 0})  
            .to("#auto7", {duration:1, alpha:0, y:50},"transform")
            .to("#auto8", {duration:1, alpha:0, y:50},"transform")
            .to("#auto10", {duration:1, alpha:0, y:50},"transform")
            .to("#auto12", {duration:1, alpha:0, y:50},"transform")
            .to("#auto15", {duration:1, alpha:0, y:50},"transform")
            .to("#auto155", {duration:1, alpha:0, y:50},"transform")
            .to("#auto1", {duration:1, alpha:0, y:50},"transform")
            .to("#auto2", {duration:1, alpha:0, y:50},"transform")
            .to("#auto3", {duration:1, alpha:0, y:50},"transform")
            .to("#auto4", {duration:1, alpha:0, y:50},"transform")
            .to("#auto5", {duration:1, alpha:0, y:50},"transform")
            .to("#auto6", {duration:1, alpha:0, y:50},"transform")
            .to("#auto13", {duration:1, alpha:0, y:50},"transform")
            .to("#auto14", {duration:1, alpha:0, y:50},"transform")
            .to("#auto16", {duration:1, morphSVG:"#doorTransform", fill:"#5E5B64", y:-179, x:-357},"transform")
            .to("#auto11", {duration:1, morphSVG:"#leftHandleUpView", x:-355.5, y:-176},"transform")
            .to("#auto9", {duration:1, morphSVG:"#rightHandleUpView", x:-357.5, y:-176},"transform")
