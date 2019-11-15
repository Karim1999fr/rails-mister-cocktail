import Typed from 'typed.js';

const loadDynamicFormText = () => {
  new Typed('#form-typed-text', {
    strings: ["Cocktail", "Style", "Creativity"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicFormText };
