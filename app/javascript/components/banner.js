import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Mojito", "Sex On The Beach", "Whatever"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
