document.addEventListener("DOMContentLoaded", () => {
  const scrollevt = () => {
    let navbr = document.querySelector('#navmenu');
    if (window.pageYOffset > 320) {
      navbr.classList.remove('e-nav-transparent')
    } else {
      navbr.classList.add('e-nav-transparent')
    }
  };
  window.onscroll = scrollevt;

})
