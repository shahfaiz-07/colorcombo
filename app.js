// the element triggered stays at it's position with pin - true
// elements with same 'flag' value in a timeline animate together - can be any value
//use end = "+=____" to inc/dec animation speed, it specifies when to end the animation based on the position of scroller 
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "top top",
    scrub: 2,
    duration: 1,
    end: "+=5000",
    // markers: true,
    pin: true,
  },
});

tl.from(".center-img-sec img", {
  x: "150%",
  duration: 1,
  ease: Power0,
})
  .to(
    ".home .lwr-circle",
    {
      rotate: -180,
      scale: 0,
      duration: 1,
      ease: Power0,
      stagger: 0.1,
    },
    "anim1"
  )
  .to(
    ".home .h-n",
    {
      color: "white",
      duration: 0.2,
      ease: Power0,
    },
    "anim1"
  )
  .to(
    ".home .home-btm-nav",
    {
      opacity: 0,
      duration: 0.2,
      ease: Power0,
    },
    "anim1"
  )
  .to(
    ".home .home-btm-nav2",
    {
      opacity: 1,
      duration: 0.2,
      ease: Power0,
      delay: .1,
    },
    "anim1"
  )
  .to(
    ".home .center-img-sec img",
    {
      scale: 0,
      ease: Power3,
      delay: 0.1,
    },
    "anim1"
  )
  .to(
    ".home .center-img-sec h3",
    {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: Power0,
    },
    "anim1"
  )
  .to(
    ".home .main-circle .top",
    {
      scale: 0,
      duration: 1,
      ease: Power0,
      stagger: 0.05,
    },
    "anim1"
  )
  .to(
    ".home .center",
    {
      scale: 0.4,
      duration: 1,
      ease: Power0,
    },
    "anim1"
  )
  .from(
    ".home .center2",
    {
      scale: 0.1,
      y: "50rem",
      duration: 1,
      ease: Power0,
      delay: -0.3,
    },
    "anim1"
  )
  .to(
    ".gallery",
    {
      y: "100%",
      duration: 0.5,
      ease: Power0,
    },
    "anim1"
  )
  .to(
    ".home .center",
    {
      scale: 0,
      duration: 1,
      ease: Power0,
    },
    "anim2"
  )
  .to(
    ".home .center2",
    {
      opacity: 0,
      duration: 1,
      ease: Power0,
      delay: -0.3,
    },
    "anim2"
  )
  .from(
    ".home .gallery2",
    {
      y: "100%",
      rotate: "90deg",
      duration: 1,
      ease: Power0,
      delay: -0.1,
    },
    "anim1"
  )
  .from(
    ".home .home-card",
    {
      y: "110vh",
      duration: 1,
      ease: Power0,
      delay: 0.5,
    },
    "anim2"
  )
  .from(
    ".home .home-aside",
    {
      x: "20rem",
      opacity: 0,
      duration: 1,
      ease: Power0,
      delay: 0.5,
    },
    "anim2"
  )
  .to(
    "#home-bg",
    {
      scale: 1,
      duration: 5,
      ease: Power0,
      delay: -2,
    },
    "anim3"
  )
  .to(
    ".home .home-card",
    {
      y: "-27rem",
      duration: 2,
      ease: Expo.easeIn,
      // delay: .5,
    },
    "anim3"
  );


const homeAside = document.getElementById("home-aside");
const homeTarget = document.getElementById("home-target");
const homeEffect = document.getElementById("home-effect");
const homeBg = document.getElementById("home-cover");
const targetHidden = document.querySelectorAll(".target-hidden");
// let initialScale = 1;

homeAside.addEventListener("mouseenter", () => {
  homeBg.style.transform = 'scale(1.1)';
  homeTarget.style.opacity = 1;
  homeEffect.style.opacity = 1;
  targetHidden.forEach((target) => {
    target.style.opacity = 0;
  });
});

homeAside.addEventListener("mouseleave", () => {
  homeBg.style.transform = 'scale(1)';
  homeTarget.style.opacity = 0;
  homeEffect.style.opacity = 0;
  targetHidden.forEach((target) => {
    target.style.opacity = "initial";
  });
});
