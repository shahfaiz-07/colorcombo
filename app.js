// the element triggered stays at it's position with pin - true
// elements with same 'flag' value in a timeline animate together - can be any value
//use end = "+=____" to inc/dec animation speed, it specifies when to end the animation based on the position of scroller 

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

function HomeAnimations() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      scrub: 2,
      // duration: 1,
      end: "+=6000",
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
      ".home .color-palette",
      {
        opacity: 0,
        duration: 0.2,
        ease: Power0,
      },
      "anim1"
    )
    .to(
      ".home .s-color-palette",
      {
        opacity: 1,
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
        delay: 0.1,
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
}

function SecondAnimations() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".second",
      start: "top top",
      scrub: 2,
      delay: 1,
      // duration: 1,
      end: "+=4000",
      // markers: true,
      pin: true,
    },
  });
  tl.from(
    ".sec-circle-container .sec-circle",
    {
      y: "250%",
      scale: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: Power2,
    },
    "anim1"
  )
    .to(
      ".sec-circle-container #sec-circle1",
      {
        x: "50%",
        duration: 0.5,
        ease: Power1,
      },
      "anim2"
    )
    .to(
      ".sec-circle-container #sec-circle2",
      {
        x: "-50%",
        duration: 0.5,
        ease: Power1,
      },
      "anim2"
    )
    .to(
      ".sec-circle-container .sec-circle",
      {
        scale: 7,
        duration: 2,
        ease: "back.in(1)",
      },
      "anim3"
    )
    .to(
      ".numbers-container #num1",
      {
        y: "-100%",
        duration: 3,
        ease: Power0,
      },
      "anim3"
    )
    .to(
      ".numbers-container #num2",
      {
        top: "0",
        duration: 3,
        ease: Power0,
      },
      "anim3"
    )
    .to(
      ".second-nav",
      {
        color: "white",
        duration: 1,
        delay: 1,
        ease: Power0,
      },
      "anim3"
    )
    .to(
      ".second .color-palette",
      {
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: Power0,
      },
      "anim3"
    )
    .to(
      ".second .s-color-palette",
      {
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: Power0,
      },
      "anim3"
    )
    .to(
      "#second-footer",
      {
        x: "-100%",
        duration: 2,
        ease: Power0,
        delay: -2,
      },
      "anim4"
    )
    .from(
      ".gradient-container",
      {
        x: "100%",
        duration: 2,
        ease: Power3,
        delay: -1.1,
      },
      "anim4"
    )
    .to(
      ".first-header",
      {
        opacity: 0,
        duration: 0.5,
        ease: Power0,
        delay: -0.65,
      },
      "anim4"
    )
    .from(
      ".second-header",
      {
        opacity: 0,
        duration: 0.5,
        delay: -0.15,
        ease: Power0,
      },
      "anim4"
    )
    .to(
      "#sec-circle1",
      {
        background: `linear-gradient(to right, rgb(213,167,180), #B4AAD5)`,
        duration: 2,
        ease: Power0,
        delay: -0.5,
      },
      "anim4"
    )
    .to(
      "#third-footer",
      {
        x: "-100%",
        duration: 4,
        ease: Power0,
        // delay: -1,
      },
      "anim4"
    )
    .to(
      ".numbers-container #num2",
      {
        y: "-100%",
        duration: 2,
        ease: Power0,
      },
      "anim4"
    )
    .to(
      ".numbers-container #num3",
      {
        top: "0",
        duration: 2,
        ease: Power0,
      },
      "anim4"
    )
    .from(
      ".pink-shades",
      {
        stagger: 0.2,
        height: "0rem",
        duration: 2,
        ease: Power0,
        delay: -2,
      },
      "anim5"
    )
    .to(
      ".up-shade",
      {
        x: "-50%",
        duration: 1,
        ease: Power0,
      },
      "anim6"
    )
    .to(
      ".dp-shade",
      {
        x: "-50%",
        duration: 1,
        ease: Power0,
      },
      "anim6"
    )
    .to(
      ".dp-shade",
      {
        x: "-75%",
        duration: 0.5,
        ease: Power0,
      },
      "anim7"
    );
}

HomeAnimations();
SecondAnimations();
