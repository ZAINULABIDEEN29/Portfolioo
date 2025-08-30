import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function onScrollAimation(){
    const tl = gsap.timeline()

const hero = document.querySelector("#hero-div")
const hero_img = document.querySelector("#hero-img")

tl.from(hero, {
  y: 200,
  opacity: 1,
  duration: 2,
  ease: "Bounce.out"
}, "a")
tl.from(hero_img, {
  y: 200,
  opacity: 1,
  duration: 2,
  ease: "Bounce.out"

}, "b")

gsap.to("#about", {
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 90%",
    end: "top 50%",
    scrub: true,
    // opacity: 0,
  },
  y:0,
  opacity:2,
  duration: 4,
  ease: "Power4.easeInOut",
})

gsap.to("#skills", {
  scrollTrigger: {
    trigger: "#skills-content",
    start: "top 100%",
    end: "top 50%",
    scrub: true,
    // opacity: 0,
  
  },
  y:0,
  opacity:2,
  duration:4,
  // ease: "Power4.easeInOut",
   ease: "Bounce.out"
})
}