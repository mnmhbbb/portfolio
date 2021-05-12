'use strict';

document.addEventListener('scroll', () => {
  const navbar = document.querySelector('#navbar');
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbarFixed');
  } else {
    navbar.classList.remove('navbarFixed');
  }
});

const menu = document.querySelector('.navbar__menu');
const toggleBtn = document.querySelector('.navbar__btn');
toggleBtn.addEventListener('click', (e) => {
  menu.classList.toggle('open');
});

menu.addEventListener('click', (e) => {
  //선택한 메뉴로 스크롤
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const destination = document.querySelector(link);
  destination.scrollIntoView({ behavior: 'smooth' });
  menu.classList.remove('open');
});

const contactMe = document.querySelector('.contactme');
contactMe.addEventListener('click', () => {
  const goTo = document.querySelector('#contact');
  goTo.scrollIntoView({ behavior: 'smooth' });
});
