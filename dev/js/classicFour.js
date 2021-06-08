import { gsap } from "gsap";


export let classicFourTL = gsap.timeline();

gsap.set("#weatherBase",{transformOrigin:"center bottom"});
gsap.set("#timeBase",{transformOrigin:"center bottom"});
gsap.set("#dateBase",{transformOrigin:"center bottom"});
gsap.set("#communicationBase",{transformOrigin:"center bottom"});
gsap.set("#cliffjumperBase",{transformOrigin:"center bottom"});
gsap.set("#prowlBase",{transformOrigin:"center bottom"});
gsap.set("#ratchetBase",{transformOrigin:"center bottom"});
gsap.set("#jazzBase",{transformOrigin:"center bottom"});
gsap.set("#bumblebeeBase",{transformOrigin:"center bottom"});
gsap.set("#primeBase",{transformOrigin:"center bottom"});
gsap.set("#sunIcon",{transformOrigin:"center"});


classicFourTL.to("#navigationButton", {duration:0.5, scale:0.7},"highlight")
             .to("#phoneButton", {duration:0.5, scale:1.3},"highlight")
             .to("#settingButton", {duration:0.5, scale:0.7},"highlight")
             .to("#musicButton", {duration:0.5, scale:0.7},"highlight")
             .to("#homeButton", {duration:0.5, scale:1.3},"highlight")
             .to("#cameraButton", {duration:0.5, scale:0.7},"highlight")
             .to("#homeIcon", {duration:0.5, fill:"#D8D8D8"},"highlight")
             .to("#phoneIcon", {duration:0.5, fill:"#D8D8D8"},"highlight")
             .from("#weatherBase", {duration:0.5, alpha:0, scaleY:0},"highlight")
             .from("#communicationBase", {duration:0.5, alpha:0, scaleY:0},"highlight")
             .from("#timeBase", {duration:0.5, alpha:0, scaleY:0},"highlight")
             .from("#cliffjumperBase", {duration:0.5, alpha:0, scaleY:0},"highlight")
             .from("#dateBase", {duration:0.5, alpha:0, scaleY:0},"highlight")
             .from("#prowlBase", {duration:0.5, alpha:0, scaleY:0},"highlight")
             .from("#ratchetBase", {duration:0.5, alpha:0, scaleY:0},"highlight")
             .from("#jazzBase", {duration:0.5, alpha:0, scaleY:0},"highlight")
             .from("#bumblebeeBase", {duration:0.5, alpha:0, scaleY:0},"highlight")
             .from("#primeBase", {duration:0.5, alpha:0, scaleY:0},"highlight")

             .from("#cliffjumperAllView", {duration:1, alpha:0},"display")
             .from("#prowlAllView", {duration:1, alpha:0},"display")
             .from("#ratchetAllView", {duration:1, alpha:0},"display")
             .from("#jazzAllView", {duration:1, alpha:0},"display")
             .from("#bumblebeeAllView", {duration:1, alpha:0},"display")
             .from("#primeAllView", {duration:1, alpha:0},"display")
             .from("#communicationAllView", {duration:1, alpha:0},"display")
             .from("#weatherAllView", {duration:1, alpha:0},"display")
             .from("#dateAllView", {duration:1, alpha:0},"display")
             .from("#timeAllView", {duration:1, alpha:0},"display")
             .to("#sunIcon", {duration:1, rotate:180})
             .to("#blade", {duration:0.2, alpha:0, x:0})
             .from("#rifle", {duration:0.2, alpha:0})
             .to("#rifle", {duration:0.2, alpha:0, x:0, delay:1})
             .from("#sword", {duration:0.2, alpha:0})