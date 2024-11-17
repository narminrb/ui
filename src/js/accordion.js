// const faqs = document.querySelectorAll(".faq");
// const background = document.querySelector(".background");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faqs.forEach((item) => {
//       if (item !== faq) {
//         item.classList.remove("active");
//       }
//     });
//     faq.classList.toggle("active");

//     adjustBackgroundHeight();
//   });
// });

// function adjustBackgroundHeight() {
//   let totalHeight = 432; 

//   faqs.forEach((faq) => {
//     const answer = faq.querySelector(".answer");
//     if (faq.classList.contains("active")) {
//       totalHeight += answer.scrollHeight;
//     }
//   });
//   background.style.height = `${totalHeight}px`;
// }
document.addEventListener("DOMContentLoaded", function () {
  const faqData = [
    { question: "High-quality video lessons", answer: "Whether you’re looking to improve your business skills,<br>expand your knowledge of technology, or learn a new<br>language, we’ve got you covered." },
    { question: "Personalized feedback and support", answer: "Whether you’re looking to improve your business skills,<br>expand your knowledge of technology, or learn a new<br>language, we’ve got you covered." },
    { question: "Access to course materials and resources", answer: "Whether you’re looking to improve your business skills,<br>expand your knowledge of technology, or learn a new<br>language, we’ve got you covered." },
  ];

 
  const faqContainer = document.querySelector(".faq-container");
  const background = document.querySelector(".background");

  
  faqData.forEach(({ question, answer }) => {
    const faq = document.createElement("div");
    faq.className = "faq"; 
    faq.innerHTML = `
      <div class="question">
        <h3>${question}</h3>
        <i class="ri-arrow-down-s-line"></i>
      </div>
      <div class="answer">
        <p>${answer}</p>
      </div>
    `;


    faq.addEventListener("click", () => {
      document.querySelectorAll(".faq.active").forEach((activeFaq) => {
        if (activeFaq !== faq) {
          activeFaq.classList.remove("active");
        }
      });

      faq.classList.toggle("active");

      adjustBackgroundHeight();
    });
    faqContainer.appendChild(faq);
  });
  function adjustBackgroundHeight() {
    let totalHeight = 432; 
    document.querySelectorAll(".faq.active .answer").forEach((answer) => {
      totalHeight += answer.scrollHeight;
    });

    background.style.height = `${totalHeight}px`;
  }
});


