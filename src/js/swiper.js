// new Swiper('.card-wrapper', {
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.button-next',
//     prevEl: '.button-prev',
//   },

//   spaceBetween: 20, // Slight gap between slides for a better appearance
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });




// let swiperCards = new Swiper(".card-content", {
//   loop: true,
//   spaceBetween: 32,
//   grabCursor: true,
//   slidesPerView: 'auto',

//   // Ensure navigation is linked to the custom buttons
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     600: {
//       slidesPerView: 2,
//     },
//     968: {
//       slidesPerView: 3,
//     },
//   },
// });


const courses = [
  {
    image: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2019/05/1_0002_18-1-1.jpg",
    title: "Nutrition: Build Your Perfect Diet & Meal Plan",
    description: "In Affiliate Marketing, Email Marketing, Marketing, SEO",
    stars: 5,
    buttonText: "Free",
  },
  {
    image: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2019/05/course3-1.jpg",
    title: "Advanced Fitness Course",
    description: "Health, Fitness, and Nutrition:Learn effective strategies to improve your physical well-being,",
    stars: 4,
    buttonText: "Enroll Now",
  },
  {
    image: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2019/05/course6-1.jpg",
    title: "Yoga and Wellness",
    description: "Yoga, Meditation, and Stress Management:Discover techniques to enhance your mental clarity",
    stars: 5,
    buttonText: "Start Learning",
  },
  {
    image: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2019/05/course4-1.jpg",
    title: "Cooking Like a Pro",
    description: "Gourmet Cooking and Recipe Creation:Master the art of preparing exquisite dishes",
    stars: 4,
    buttonText: "Free",
  },
  {
    image: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2019/05/course8-1.jpg",
    title: "Digital Marketing Essentials",
    description: "SEO, PPC, and Social Media Marketing:Gain expertise in driving online traffic, optimizing search engine rankings",
    stars: 5,
    buttonText: "Learn More",
  },
  {
    image: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2019/05/course1-1-1.jpg",
    title: "Photography Masterclass",
    description: "Master Your DSLR and Photography Skills:Learn the fundamentals of manual camera settings",
    stars: 4,
    buttonText: "Enroll Now",
  },
  {
    image: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2019/05/course9-1.jpg",
    title: "Creative Writing for Beginners",
    description: "Write Fiction and Non-Fiction Like a Pro:Unlock your storytelling potential, master narrative techniques",
    stars: 5,
    buttonText: "Start Writing",
  },
  {
    image: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2019/05/course11-1.jpg",
    title: "Graphic Design Bootcamp",
    description: "Photoshop, Illustrator, and InDesign:Master the essential tools for graphic design",
    stars: 4,
    buttonText: "Enroll Now",
  },
  {
    image: "https://outgrid.uicore.co/elearning/wp-content/uploads/sites/5/2019/05/course5-1.jpg",
    title: "Web Development Basics",
    description: "HTML, CSS, and JavaScript for Beginners:Learn the fundamentals of web development",
    stars: 5,
    buttonText: "Start Coding",
  },
];


const swiperWrapper = document.querySelector(".swiper-wrapper");


const generateStars = (count) => {
  let starsHTML = "";
  for (let i = 0; i < 5; i++) {
    starsHTML += i < count 
      ? '<i class="ri-star-fill" style="color: #ed9700;"></i>' 
      : '<i class="ri-star-line" style="color: #ed9700;"></i>';
  }
  return starsHTML;
};

courses.forEach((course) => {
  const courseCard = document.createElement("article");
  courseCard.classList.add("card-article", "swiper-slide");
  courseCard.innerHTML = `
    <div class="card-image">
      <img src="${course.image}" alt="Course Image">
      <div class="card-shadow"></div>
    </div>
    <div class="card-data">
      <div class="star-box">
        ${generateStars(course.stars)}
      </div>
      <h3 class="card-name">${course.title}</h3>
      <p class="card-description">${course.description}</p>
      <a href="#" class="card-button">${course.buttonText}</a>
    </div>
  `;
  swiperWrapper.appendChild(courseCard);
});


const swiperCards = new Swiper(".card-content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

