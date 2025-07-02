document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".custom-toggler");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarNav");
    const navbar = document.querySelector(".navbar-custom");
    const topInfo = document.querySelector(".top-info");

    // Toggle mobile nav
    toggler.addEventListener("click", function () {
      toggler.classList.toggle("active");
    });

    // Close nav on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
        toggler.classList.remove("active");
      });
    });

    // Scroll effects
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        topInfo.classList.add("hidden");
      } else {
        navbar.classList.remove("scrolled");
        topInfo.classList.remove("hidden");
      }
    });

    // Carousel next/prev custom buttons
    const carousel = bootstrap.Carousel.getOrCreateInstance(document.querySelector("#heroCarousel"));
    document.querySelector(".custom-next").addEventListener("click", () => carousel.next());
    document.querySelector(".custom-prev").addEventListener("click", () => carousel.prev());
  });
  const testimonials = [
  {
    stars: 5,
    text: "Staying at Rento Hotel and Suites was a delight. The rooms were luxurious and comfortable, and the overall service was impeccable. The food at Crest Restaurant was delicious, and the ambiance was perfect. I’ll definitely be back.",
    author: "David O.",
  },
  {
    stars: 4,
    text: "Great location, friendly staff, and excellent facilities. The gym was well-equipped and the outdoor pool had a great view. Would stay again!",
    author: "Sarah B.",
  },
  {
    stars: 4.5,
    text: "A peaceful and luxurious experience. From the check-in to the room service, everything was smooth. I particularly loved the spa services.",
    author: "Chuka A.",
  }
];

let current = 0;

const textElem = document.querySelector(".testimonial-text");
const authorElem = document.querySelector(".testimonial-author");
const starsElem = document.querySelector(".testimonial-stars");

function loadTestimonial(index) {
  const t = testimonials[index];
  textElem.textContent = t.text;
  authorElem.textContent = t.author;

  const fullStars = Math.floor(t.stars);
  const halfStar = t.stars % 1 !== 0;

  let starHtml = "";
  for (let i = 0; i < fullStars; i++) {
    starHtml += '<i class="fas fa-star"></i> ';
  }
  if (halfStar) {
    starHtml += '<i class="fas fa-star-half-alt"></i>';
  }
  starsElem.innerHTML = starHtml;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  loadTestimonial(current);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  loadTestimonial(current);
});

// Initial load
loadTestimonial(current);

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
