import 'bootstrap';

import { loadDynamicBannerText } from '../components/banner';
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { loadDynamicFormText } from '../components/form';


initUpdateNavbarOnScroll();

const banner = document.getElementById('banner-typed-text');
if (banner) {
  loadDynamicBannerText();
}

const form = document.getElementById('form-typed-text');
if (form) {
loadDynamicFormText();
}
