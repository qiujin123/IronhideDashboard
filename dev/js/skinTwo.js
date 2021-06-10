import { gsap } from "gsap";

export let skinTwoTL = gsap.timeline();

gsap.set("#skinWRpmBase",{transformOrigin:"center bottom"});
gsap.set("#skinWMphBase",{transformOrigin:"center bottom"});
gsap.set("#skinWRpmMid",{transformOrigin:"center bottom"});
gsap.set("#skinWMphMid",{transformOrigin:"center bottom"});


skinTwoTL.from("#skinEnergonBase", {duration:0.5, alpha:0 },"skinBaseGauge")
         .from("#skinFuelBase", {duration:0.5, alpha:0 },"skinBaseGauge")
         .from("#skinRpmBase", {duration:0.5, alpha:0 },"skinBaseGauge")
         .from("#skinMphBase", {duration:0.5, alpha:0 },"skinBaseGauge")
         .from("#skinMphView", {duration:0.5, alpha:0 },"skinViewGauge")
         .from("#skinRpmView", {duration:0.5, alpha:0 },"skinViewGauge")
         .from("#skinFuelView", {duration:0.5, alpha:0 },"skinViewGauge")
         .from("#skinEnergonView", {duration:0.5, alpha:0 },"skinViewGauge")
         .from("#skinWRpmBase", {duration:0.5, alpha:0, scaleY:0 },"skinViewGauge")
         .from("#skinWMphBase", {duration:0.5, alpha:0, scaleY:0 },"skinViewGauge")
         .from("#skinWRpmMid", {duration:0.5, alpha:0, scaleY:0  },"skinViewGauge2")
         .from("#skinWMphMid", {duration:0.5, alpha:0, scaleY:0  },"skinViewGauge2")
         .from("#skinRpmInfo", {duration:0.5, alpha:0 },"skinViewGauge3")
         .from("#skinMphInfo", {duration:0.5, alpha:0 },"skinViewGauge3")
         .from("#speed", {duration:0.5, alpha:0},"skinViewGauge3")
         .from("#fuelTab", {duration:0.1, alpha:0 },"skinRM")
         .from("#energonTab", {duration:0.1, alpha:0 },"skinRM")
         .from("#skinMph1", {duration:0.1, alpha:0 },"skinRM")
         .from("#skinRpm1", {duration:0.1, alpha:0 },"skinRM")
         .from("#skinE1", {duration:0.1, alpha:0 },"skinRM")
         .from("#skinF1", {duration:0.1, alpha:0 },"skinRM")
         .from("#skinMph2", {duration:0.1, alpha:0 },"skinRM1")
         .from("#skinRpm2", {duration:0.1, alpha:0 },"skinRM1")
         .from("#skinE2", {duration:0.1, alpha:0 },"skinRM1")
         .from("#skinF2", {duration:0.1, alpha:0 },"skinRM1")
         .from("#skinMph3", {duration:0.1, alpha:0 },"skinRM2")
         .from("#skinRpm3", {duration:0.1, alpha:0 },"skinRM2")
         .from("#skinE3", {duration:0.1, alpha:0 },"skinRM2")
         .from("#skinF3", {duration:0.1, alpha:0 },"skinRM2")
         .from("#skinMph4", {duration:0.1, alpha:0 },"skinRM3")
         .from("#skinRpm4", {duration:0.1, alpha:0 },"skinRM3")
         .from("#skinE4", {duration:0.1, alpha:0 },"skinRM3")
         .from("#skinF4", {duration:0.1, alpha:0 },"skinRM3")
         .from("#skinMph5", {duration:0.1, alpha:0 },"skinRM4")
         .from("#skinRpm5", {duration:0.1, alpha:0 },"skinRM4")
         .from("#skinE5", {duration:0.1, alpha:0 },"skinRM4")
         .from("#skinF5", {duration:0.1, alpha:0 },"skinRM4")
         .from("#skinMph6", {duration:0.1, alpha:0 },"skinRM5")
         .from("#skinRpm6", {duration:0.1, alpha:0 },"skinRM5")
         .from("#skinE6", {duration:0.1, alpha:0 },"skinRM5")
         .from("#skinF6", {duration:0.1, alpha:0 },"skinRM5")
         .from("#skinMph7", {duration:0.1, alpha:0 },"skinRM6")
         .from("#skinE7", {duration:0.1, alpha:0 },"skinRM6")
         .from("#skinF7", {duration:0.1, alpha:0 },"skinRM6")
         .from("#skinMph8", {duration:0.1, alpha:0 },"skinRM7")
         .from("#skinE8", {duration:0.1, alpha:0 },"skinRM7")
         .from("#skinF8", {duration:0.1, alpha:0 },"skinRM7")
         