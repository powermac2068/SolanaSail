const btnTop = document.querySelector('.nav__top');
const headerAnimation = document.querySelector('header');
const navigation = document.querySelector('.nav');

window.onscroll = () => {
    const scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollToTop > 500) {
        btnTop.classList.add('nav__top--show');
    } else {
        btnTop.classList.remove('nav__top--show');
    };
};

btnTop.addEventListener('click', () => {
    headerAnimation.classList.remove('header__animation');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    setTimeout(() => {
        headerAnimation.classList.add('header__animation');
    }, 100);
});

navigation.addEventListener('click', (evt) => {
    const link = evt.target.closest('.menu__link--goto');
    if (!link) {
        return;
    }
    evt.preventDefault();
    const scrollToElement = link.getAttribute('href');
    document.querySelector(scrollToElement).scrollIntoView({
        behavior: 'smooth'
    });
});

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav__hamburger").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
};