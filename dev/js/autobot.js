import { gsap } from "gsap";
export let autobotTL = gsap.timeline();

let autobotSpeed = 0.8;

autobotTL.to("#gmcFull",{ duration:0.1, alpha: 0, delay:1})
         .to("#m14", {duration:autobotSpeed, morphSVG:"#auto16", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m135", {duration:autobotSpeed, morphSVG:"#auto7", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m13", {duration:autobotSpeed, morphSVG:"#auto8", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m12", {duration:autobotSpeed, morphSVG:"#auto155", fill:"#5E5B64",x:-36.5, y:-59.5},"autobot")
         .to("#m123", {duration:autobotSpeed, morphSVG:"#auto15", fill:"#5E5B64",x:-36.5, y:-59.5},"autobot")
         .to("#m8", {duration:autobotSpeed, morphSVG:"#auto11", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m9", {duration:autobotSpeed, morphSVG:"#auto12", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m18", {duration:autobotSpeed, morphSVG:"#auto9", fill:"#5E5B64",x:-36.5, y:-59.5 },"autobot")
         .to("#m17", {duration:autobotSpeed, morphSVG:"#auto10", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m2", {duration:autobotSpeed, morphSVG:"#auto6", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m4", {duration:autobotSpeed, morphSVG:"#auto4", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m5", {duration:autobotSpeed, morphSVG:"#auto5", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m21", {duration:autobotSpeed, morphSVG:"#auto3", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m23", {duration:autobotSpeed, morphSVG:"#auto1", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m24", {duration:autobotSpeed, morphSVG:"#auto2", fill:"#5E5B64", x:-36.5, y:-59.5},"autobot")
         .to("#m1", {duration:autobotSpeed, morphSVG:"#auto14", fill:"#5E5B64",x:-36.5, y:-59.5},"autobot")
         .to("#m25", {duration:autobotSpeed, morphSVG:"#auto13", fill:"#5E5B64",x:-36.5, y:-59.5},"autobot")
         .to("#gmcCBroke", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .to("#gmcGBroke", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m6", {duration: autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m7", {duration: autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m19", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m20", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m3", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m22", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m10", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m11", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m15", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .to("#m16", {duration:autobotSpeed, alpha:0, y:50},"autobot")
         .from("#autobotFull", {duration:0.1, alpha: 0})
         .from("#autobotBroke", {duration:0.1, alpha: 0})
         
         
       

