const modelButton = document.querySelector('.model-button')
const modelItems = document.querySelectorAll('.model-hidden')

modelButton.addEventListener('click', function () {
   modelItems.forEach(el => {
      el.classList.add('active')
   })
   modelButton.classList.remove('active')
})

let loader = document.querySelector('.loading')




window.addEventListener('load', function () {
   loader.style.display = 'none'

})

ScrollReveal({
   distance: '60px',
   duration: 2000,
   delay: 100,
   reset: false,
});
ScrollReveal().reveal(".global-text h1 ", { delay: 200, origin: "left" });
ScrollReveal().reveal(".global-text h2 ", { delay: 400, origin: "left" });
ScrollReveal().reveal(".global-text p ", { delay: 800, origin: "left" });
ScrollReveal().reveal(".global-button img", { delay: 1000, origin: "top" });
ScrollReveal().reveal(".profocian-item", { delay: 200, origin: "left", interval: 300 });
ScrollReveal().reveal(".title h2", { delay: 200, origin: "top" });