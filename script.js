
// Animate the vertical lines with GSAP
gsap.to(".vertical-line", {
    duration: 1.5, // Animation duration
    scaleY: 1, // Stretch the lines to full height
    stagger: 0.3, // Delay between each line's animation
    ease: "power2.out" // Smooth easing
  });

  // GSAP Animation for hover underline effect
  document.querySelectorAll(".menu li").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item.querySelector("a"), {
        color: "#f2d96b", // Change text color on hover
        duration: 0.3
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item.querySelector("a"), {
        color: "white", // Revert to original color
        duration: 0.3
      });
    });
  });

// Animate Circular Bars with GSAP
// Animate Circular Bars with GSAP
document.querySelectorAll(".circular-bar").forEach((bar) => {
    const percentage = bar.getAttribute("data-percentage");
    const progressCircle = bar.querySelector(".circle-progress");
    const percentageText = bar.querySelector(".percentage");
  
    // Calculate the stroke-dasharray based on percentage
    const strokeLength = Math.PI * 2 * 50; // Circumference of the circle (2 * π * radius)
    const strokeDasharray = (percentage / 100) * strokeLength;
  
    // Set a single color for the progress circle
    const color = '#f2d96b'; // Gold color for progress
  
    // Set the color for the progress circle
    progressCircle.style.stroke = color;
  
    // GSAP Animation to fill the circle based on percentage
    gsap.to(progressCircle, {
      strokeDasharray: strokeDasharray,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: function () {
        const currentValue = Math.round(this.progress() * percentage);
        percentageText.textContent = `${currentValue}%`;
      },
    });
  });

  // GSAP Animation for Section 3
document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
      ease: "power2.out"
    });
  });

  

  // GSAP animation for timeline
 
  gsap.registerPlugin(ScrollTrigger);

  const timelineItems = document.querySelectorAll(".timeline-item");
  const connectors = document.querySelectorAll(".timeline-connector");
  
  timelineItems.forEach((item, index) => {
    const circle = item.querySelector(".timeline-circle");
    const content = item.querySelector(".timeline-content");
    const connector = connectors[index];
  
    // GSAP Timeline for each step in sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: circle,
        start: "top center",
        toggleActions: "play none none none",
      },
    });
  
    // Show circle
    tl.from(circle, { scale: 0, duration: 0.5, ease: "back.out(1.7)" });
  
    // Show text
    tl.from(content, { opacity: 0, y: 20, duration: 0.5 }, "<0.2");
  
    // Show connector line
    if (connector) {
      tl.fromTo(
        connector,
        { height: 0 },
        { height: "100px", duration: 0.5, ease: "power2.out" }
      );
    }
  });
  

  // GSAP animation to slide the footer in
// GSAP animation to slide the footer in when scrolling
gsap.from("#footer", {
    scrollTrigger: {
        trigger: "#footer", // Trigger the animation when the footer enters the viewport
        start: "top bottom", // Start the animation when the top of the footer reaches the bottom of the viewport
        end: "bottom top", // Animation ends when the bottom of the footer reaches the top of the viewport
        scrub: 1, // Smooth scrolling animation
    },
    opacity: 1,
    top: 0, // Move the footer to its original position
    zIndex: 1, // Ensure the footer is brought to the front
    duration: 1 // Duration of the animation
});

