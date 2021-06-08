import { gsap } from "gsap";


export let classicTwoTL = gsap.timeline();

gsap.set("#rightGuard",{transformOrigin:"center top"});
gsap.set("#leftGuard",{transformOrigin:"center top"});
gsap.set("#rightHandleDownBase",{transformOrigin:"center"});
gsap.set("#leftHandleDownBase",{transformOrigin:"center"});
gsap.set("#rightHandleDownView",{transformOrigin:"center"});
gsap.set("#leftHandleDownView",{transformOrigin:"center"});
gsap.set("#rightHandleUpView",{transformOrigin:"center"});
gsap.set("#leftHandleUpView",{transformOrigin:"center"});
gsap.set("#midMouth",{transformOrigin:"center"});
gsap.set("#rightGuardCover",{transformOrigin:"center"});
gsap.set("#leftGuardCover",{transformOrigin:"center"});
gsap.set("#leftGuardDoorDown",{transformOrigin:"center"});
gsap.set("#leftGuardDoorUp",{transformOrigin:"center"});
gsap.set("#rightGuardDoorDown",{transformOrigin:"center"});
gsap.set("#rightGuardDoorUp",{transformOrigin:"center"});

classicTwoTL.to("#auto16", {duration:1, alpha: 0},"fadeOut")
            .to("#auto11", {duration:1, alpha: 0},"fadeOut")
            .to("#auto9", {duration:1, alpha: 0},"fadeOut")
            .from("#leftHandleUpBase", {duration:0.1, alpha: 0},"fadeOut")
            .from("#rightHandleUpBase", {duration:0.1, alpha: 0},"fadeOut")
            .from("#leftFrontCover", {duration:0.1, alpha: 0},"fadeOut")
            .from("#rightFrontCover", {duration:0.1, alpha: 0},"fadeOut")
            .from("#leftFrontDoor", {duration:0.1, alpha: 0},"fadeOut")
            .from("#rightFrontDoor", {duration:0.1, alpha: 0},"fadeOut")
            .from("#rightGuard",{ duration:1, scale:0.5, alpha:0, x:100},"guardIn")
            .from("#leftGuard",{ duration:1, scale:0.5, alpha:0, x:80 },"guardIn") 
            .from("#rightHandleDownBase",{ duration:1, scale:0.5, y:-15.5, alpha:0 },"guardIn") 
            .from("#leftHandleDownBase",{ duration:1, scale:0.5, y:-15.5, alpha:0},"guardIn") 
            .from("#leftHandleDownView",{ duration:1, scale:0.5, y:-15.5, alpha:0},"guardView") 
            .from("#rightHandleDownView",{ duration:1, scale:0.5, y:-15.5, alpha:0},"guardView") 
            .from("#leftHandleUpView",{ duration:1, scale:0.5, y:-15.5, alpha:0},"guardView") 
            .from("#rightHandleUpView",{ duration:1, scale:0.5, y:-15.5, alpha:0},"guardView") 
            .from("#midMouth",{ duration:1, scale:0.5, y:-15.5, alpha:0},"guardView") 
            .from("#rightGuardCover",{ duration:1, scale:0.5, alpha:0},"guardView") 
            .from("#leftGuardCover",{ duration:1, scale:0.5, alpha:0},"guardView")
            .from("#leftGuardDoorDown",{ duration:1, scale:0},"guardView")
            .from("#leftGuardDoorUp",{ duration:1, scale:0},"guardView")
            .from("#rightGuardDoorDown",{ duration:1, scale:0},"guardView")
            .from("#rightGuardDoorUp",{ duration:1, scale:0},"guardView")
