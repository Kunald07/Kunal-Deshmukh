function Loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true,
      multiplier: 1.5,
      lerp: 0.09,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("main").style.transform
        ? "transform"
        : "fixed",
    });
  
    document.querySelectorAll(".btn-proj").forEach((proj) => {
      proj.addEventListener("click", () => {
        locoScroll.scrollTo("#section-3");
      });
    });
  
    document.querySelectorAll(".btn-skill").forEach((skill) => {
      skill.addEventListener("click", () => {
        locoScroll.scrollTo("#skills");
      });
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  }
  Loco();
  
  function copyEmail() {
    // Get the input element
    var emailToCopy = document.getElementById("emailToCopy");
  
    // Select the email in the input element
    emailToCopy.select();
    emailToCopy.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the selected email to the clipboard
    document.execCommand("copy");
  
    // Deselect the email (optional)
    document.getSelection().removeAllRanges();
  }
  
  let openb = document.getElementById("bar");
  let closeb = document.getElementById("close");
  let respo = document.getElementById("respo");
  gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
    x: 200,
    opacity: 0,
  });
  
  openb.addEventListener("click", () => {
    // respo.style.transform = `translateX(0%)`
    respo.style.opacity = 1;
    respo.style.pointerEvents = `visible`;
    gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
      x: 0,
      stagger: 0.05,
      opacity: 1,
    });
  });
  
  
  
  
  closeb.addEventListener("click", () => {
    // respo.style.transform = `translateX(100%)`
    respo.style.opacity = 0;
    respo.style.pointerEvents = `none`;
    gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
      x: 200,
      stagger: 0.05,
      opacity: 0,
    });
  });
  
  
  
  (function handleSwipe() {
  
    let start = 0;
    window.addEventListener("touchstart", (dets) => {
      start = dets.changedTouches[0].screenX;
    });
  
    window.addEventListener("touchend", (cets) => {
      let end = cets.changedTouches[0].screenX;
      if (end - start >= 100) {
        respo.style.opacity = 0;
        respo.style.pointerEvents = "none";
        gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
          x: 200,
          stagger: 0.05,
          opacity: 0,
        });
      } else if (end - start <= -150) {
        respo.style.opacity = 1;
        respo.style.pointerEvents = `visible`;
        gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
          x: 0,
          stagger: 0.05,
          opacity: 1,
        });
      }
  
      // Reset the values after processing
      start = 0;
      end = 0;
    });
  
  
  }())
  
  
  
  
  
  
  
  
  let lis = document.querySelectorAll("#respo ul li");
  lis.forEach((li) => {
    li.addEventListener("click", () => {
      // respo.style.transform = `translateX(100%)`
      respo.style.opacity = 0;
      respo.style.pointerEvents = `none`;
      gsap.to("#up ,#respo ul li,#respo footer p , #respo footer div", {
        x: 200,
        stagger: 0.05,
        opacity: 0,
      });
    });
  });
  
  gsap.to(".fan img", {
    rotate: `1090deg`,
    scrollTrigger: {
      trigger: `main`,
      scroller: "main",
      start: `top top`,
      end: `bottom`,
      scrub: 1,
    },
  });
  
  let cursor = document.querySelector(".cursor");
  var prev, next;
  
  document.addEventListener("mousemove", (dets) => {
    gsap.to(".cur-top", {
      opacity: 1,
      x: dets.clientX,
      y: dets.clientY,
    });
  });
  
  document.addEventListener("mousemove", (dets) => {
    next = prev;
    let degg;
    prev = dets.clientX;
    degg = -(next - dets.clientX) * 4;
  
    // cursor.style.transform = `rotate(${degg}deg)`
    gsap.to(cursor, {
      transform: `rotate(${degg}deg)`,
      duration: 0.5,
    });
    degg = 0;
  
    gsap.to(cursor, {
      transform: `rotate(${degg}deg)`,
      duration: 0.5,
    });
  });
  document.addEventListener("mousedown", () => {
    gsap.to(".cursor", {
      borderRadius: `50%`,
      rotate: `90deg`,
      duration: 0.3,
    });
  });
  document.addEventListener("mouseup", () => {
    gsap.to(".cursor", {
      borderRadius: `0% `,
      rotate: `0deg`,
      duration: 0.3,
    });
  });
  
  let h1 = document.querySelector(".loader h1");
  let textcont = h1.textContent;
  let clutter = "";
  let len = textcont.length / 2;
  for (yy in textcont) {
    if (yy < len) {
      clutter += `<span class="left">${textcont[yy]}</span>`;
    } else {
      clutter += `<span class="right">${textcont[yy]}</span>`;
    }
  }
  h1.innerHTML = clutter;
  
  tl = gsap.timeline();
  tl.to(".dot", {
    opacity: 1,
    // duration:0,
    delay: 0.6,
    height: `350px`,
    width: `350px`,
  });
  tl.from(
    ".loader h1 .left",
    {
      opacity: 0,
      y: 100,
      stagger: 0.1,
      delay: 0.3,
    },
    "a"
  );
  tl.from(
    ".loader h1 .right",
    {
      opacity: 0,
      y: 100,
      stagger: -0.1,
      delay: 0.3,
    },
    "a"
  );
  
  tl.to(
    ".loader h1 .left",
    {
      opacity: 0,
      y: -100,
      stagger: 0.1,
      delay: 1,
      duration: 2,
    },
    "b"
  );
  tl.to(
    ".loader h1 .right",
    {
      opacity: 0,
      y: -100,
      stagger: -0.1,
      delay: 1,
      duration: 2,
    },
    "b"
  );
  
  tl.to(
    ".loader",
    {
      bottom: `100%`,
      delay: 0.5,
      duration: 1.3,
      ease: Expo.easeIn,
    },
    "b"
  );
  
  
  
  
  
  let ii = document.querySelectorAll(".wrapper-2 .cards i")
  ii.forEach((i) => {
    i.style.animationDelay = `${Math.random() * 3}s`
  })
  let cardImg = document.querySelector(".wrapper-2 .cards img")
  
  let innerWidtht = window.innerWidth
  if (innerWidtht < 720) {
    cardImg.style.animationPlayState = `paused`
    ii.forEach((i) => {
      i.style.animationPlayState = `paused`
    })
  }
  
  window.addEventListener("resize", () => {
    let innerWidtht = window.innerWidth
    if (innerWidtht < 720) {
      cardImg.style.animationPlayState = `paused`
      ii.forEach((i) => {
        i.style.animationPlayState = `paused`
      })
  
    }
    else if (innerWidtht > 720) {
      cardImg.style.animationPlayState = `running`
      ii.forEach((i) => {
        i.style.animationPlayState = `running`
      })
    }
  
  })
  
  // async function timer() {
  //   i = 0;
  //   setInterval(() => {
  //     if (i <= 100) {
  //       console.log(i);
  //       i++;
  //     }
  //   }, 15);
  // }
  // timer();
  
  
  function resetIt() {
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")
    window.addEventListener("load", () => {
      name.value = ""
      email.value = ""
      message.value = ""
    })
  }
  resetIt()
  