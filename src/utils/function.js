export const getImageURL = imageName => {
  return new URL(`../assets/Image/${imageName}`, import.meta.url).href;
};


export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// const scrollers = document.querySelectorAll('.skillsBar');

// if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//   addAnimation();
// }

//  function addAnimation() {
//   scrollers.forEach(scroller => {
//     scroller.setAttribute('data-animated', true);

//     const scrollerInner = scroller.querySelector(".skills");
//     const scrollerContrent = Array.from(scrollerInner.children);
//    scrollerContrent.forEach(item => {
//     const duplicatedItem = item.cloneNode(true);
//     duplicatedItem.setAttribute("aria-hidden", true)
//     scrollerInner.appendChild(duplicatedItem)
//    })
// })
// }

