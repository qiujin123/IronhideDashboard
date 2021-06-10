import { gsap } from "gsap";

export let skinThreeTL = gsap.timeline();


gsap.set("#skinHomeButton",{transformOrigin:"center"});
gsap.set("#skinPhoneButton",{transformOrigin:"center"});
gsap.set("#skinMusicButton",{transformOrigin:"center"});
gsap.set("#skinSettingButton",{transformOrigin:"center"});
gsap.set("#skinNavButton",{transformOrigin:"center"});
gsap.set("#skinCameraButton",{transformOrigin:"center"});
gsap.set("#skinDefaultView",{transformOrigin:"center"});
gsap.set("#skinCView",{transformOrigin:"center"});
gsap.set("#signalView",{transformOrigin:"center"});
gsap.set("#skinPrimeView",{transformOrigin:"center"});
gsap.set("#skinWeatherView",{transformOrigin:"center"});
gsap.set("#skinTimeView",{transformOrigin:"center"});

gsap.set("#skinHomeTab",{transformOrigin:"center"});
gsap.set("#skinCTab",{transformOrigin:"center"});
gsap.set("#skinTimeView",{transformOrigin:"center"});
gsap.set("#signalTab",{transformOrigin:"center"});
gsap.set("#sunTab",{transformOrigin:"center"});
gsap.set("#skinSunIcon",{transformOrigin:"center"});
gsap.set("#primeTab",{transformOrigin:"center"});
gsap.set("#skinDateTab",{transformOrigin:"center"});
gsap.set("#primeCall",{transformOrigin:"center"});
gsap.set("#skinTime",{transformOrigin:"center"});

skinThreeTL.to("#skinHomeButton", {duration:0.5, scale:1.3 },"skinOutButton")
           .to("#skinPhoneButton", {duration:0.5, scale:1.3 },"skinOutButton")
           .to("#skinMusicButton", {duration:0.5, scale:0.7 },"skinOutButton")
           .to("#skinSettingButton", {duration:0.5, scale:0.7 },"skinOutButton")
           .to("#skinNavButton", {duration:0.5, scale:0.7 },"skinOutButton")
           .to("#skinCameraButton", {duration:0.5, scale:0.7 },"skinOutButton")
           .to("#skinHomeIcon", {duration:0.5, fill:"#D8D8D8"},"skinOutButton")
           .to("#skinPhoneIcon", {duration:0.5, fill:"#D8D8D8"},"skinOutButton")
           .from("#skinDefaultBase", {duration:0.5, alpha:0},"skinOutButton")
           .from("#skinCBase", {duration:0.5, alpha:0},"skinOutButton")
           .from("#signalBase", {duration:0.5, alpha:0},"skinOutButton")
           .from("#skinPrimeBase", {duration:0.5, alpha:0},"skinOutButton")
           .from("#skinWeatherBase", {duration:0.5, alpha:0},"skinOutButton")
           .from("#skinTimeBase", {duration:0.5, alpha:0},"skinOutButton")
           .from("#skinDefaultView", {duration:0.5, alpha:0, scale:0},"in1")
           .from("#skinCView", {duration:0.5, alpha:0, scale:0},"in1")
           .from("#signalView", {duration:0.5, alpha:0, scale:0},"in2")
           .from("#skinPrimeView", {duration:0.5, alpha:0, scale:0},"in3")
           .from("#skinWeatherView", {duration:0.5, alpha:0, scale:0},"in2")
           .from("#skinTimeView", {duration:0.5, alpha:0, scale:0},"in3")
           .from("#skinHomeTab", {duration:0.2, alpha:0, scale:0},"in4")
           .from("#skinCTab", {duration:0.2, alpha:0, scale:0},"in4")
           .from("#sunTab", {duration:0.2, alpha:0, scale:0},"in5")
           .from("#signalTab", {duration:0.2, alpha:0, scale:0},"in5")
           .from("#skinTemp", {duration:0.5, alpha:0, scale:0},"in6")
           .from("#skinSunIcon", {duration:0.5, alpha:0, scale:0, rotate:360},"in6")
           .from("#primeTab", {duration:0.2, alpha:0, scale:0},"in7")
           .from("#skinDateTab", {duration:0.2, alpha:0, scale:0},"in7")
           .from("#skinTime", {duration:0.5, alpha:0, scale:0},"in8")
           .from("#primeCall", {duration:0.5, alpha:0, scale:0},"in8")
           .to("#skinE1", {duration:0.5, fill:"#DCA82D" },"show")
           .to("#skinF1", {duration:0.5, fill:"#CF4037" },"show")
           .to("#skinE2", {duration:0.5, fill:"#DCA82D" },"show")
           .to("#skinF2", {duration:0.5, fill:"#CF4037" },"show")
           .to("#skinE3", {duration:0.5, fill:"#DCA82D" },"show")
           .to("#skinF3", {duration:0.5, fill:"#CF4037" },"show")
           .to("#skinF4", {duration:0.5, fill:"#CF4037" },"show")
           .to("#skinF5", {duration:0.5, fill:"#CF4037" },"show")
           .to("#skinF6", {duration:0.5, fill:"#CF4037" },"show")
           
           
           