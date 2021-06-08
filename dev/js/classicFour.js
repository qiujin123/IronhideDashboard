import { gsap } from "gsap";


export let classicFourTL = gsap.timeline();


classicFourTL.to("#navigationButton", {duration:0.5, scale:0.7},"highlight")
             .to("#phoneButton", {duration:0.5, scale:1.3},"highlight")
             .to("#settingButton", {duration:0.5, scale:0.7},"highlight")
             .to("#musicButton", {duration:0.5, scale:0.7},"highlight")
             .to("#homeButton", {duration:0.5, scale:1.3},"highlight")
             .to("#cameraButton", {duration:0.5, scale:0.7},"highlight")
             .to("#homeIcon", {duration:0.5, fill:"#252A3F"},"highlight")
             .to("#phoneIcon", {duration:0.5, fill:"#252A3F"},"highlight")