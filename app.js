const menus = document.querySelectorAll(".menu > li");

Array.from(menus).map((item) => {
  item.onclick = () => {
    item.querySelector(".sub-menu").classList.toggle("active");
    Array.from(menus).map((i) => {
      if (!i.isSameNode(item)) {
        i.classList.add("opacity-0");
        document.querySelector('.register-btn').classList.add('opacity-0')
      }
    });
  };
  window.addEventListener("click", function (e) {
    if (item.contains(e.target)) {
      // Clicked in box
    } else {
      // Clicked outside the box

      Array.from(menus).map(i => {
        
        i.classList.remove("opacity-0")
        
      })
      document.querySelector('.register-btn').classList.remove('opacity-0')
      item.querySelector(".sub-menu").classList.remove("active");
    }
  });
});

const navMbBtn = document.querySelectorAll(".nav-mobile-btn");
const header = document.querySelectorAll(".header");
const close = document.querySelectorAll(".close-btn");
console.log(navMbBtn);
Array.from(navMbBtn).map((item, index) => {
  item.onclick = () => {
    header[index].classList.add("active");
  };
});
Array.from(close).map((item, index) => {
  item.onclick = () => {
    header[index].classList.add("active");
  };
});
