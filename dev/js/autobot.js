import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);


export let autobotTL = gsap.timeline();

gsap.set("#auto16",{transformOrigin:"center"});


autobotTL.to("#gmcFull",{ duration:0.1, alpha: 0, delay:1})
         .to("#m14", {duration: 1, morphSVG:"#auto16", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m135", {duration: 1, morphSVG:"#auto7", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m13", {duration: 1, morphSVG:"#auto8", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m12", {duration: 1, morphSVG:"#auto155", fill:"#5E5B64",x:-36.5, y:-59.5},"autobot")
         .to("#m123", {duration: 1, morphSVG:"#auto15", fill:"#5E5B64",x:-36.5, y:-59.5},"autobot")
         .to("#m8", {duration: 1, morphSVG:"#auto11", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m9", {duration: 1, morphSVG:"#auto12", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m18", {duration: 1, morphSVG:"#auto9", fill:"#5E5B64",x:-36.5, y:-59.5 },"autobot")
         .to("#m17", {duration: 1, morphSVG:"#auto10", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m2", {duration: 1, morphSVG:"#auto6", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m4", {duration: 1, morphSVG:"#auto4", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m5", {duration: 1, morphSVG:"#auto5", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m21", {duration: 1, morphSVG:"#auto3", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m23", {duration: 1, morphSVG:"#auto1", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m24", {duration: 1, morphSVG:"#auto2", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m1", {duration: 1, morphSVG:"#auto14", fill:"#5E5B64",x:-36.5, y:-59.5},"autobot")
         .to("#m25", {duration: 1, morphSVG:"#auto13", fill:"#5E5B64",x:-36.5, y:-59.5},"autobot")
         .to("#gmcCBroke", {duration: 1, alpha:0, y:50},"autobot")
         .to("#gmcGBroke", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m6", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m7", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m19", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m20", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m3", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m22", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m10", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m11", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m15", {duration: 1, alpha:0, y:50},"autobot")
         .to("#m16", {duration: 1, alpha:0, y:50},"autobot")
         .from("#autobotFull", {duration:0.1, alpha: 0})
       

