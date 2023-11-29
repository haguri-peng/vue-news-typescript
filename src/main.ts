import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '@/router/index';

import App from '@/App.vue';
import '@/style.css';

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import specific icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// add icons to the library
library.add(fas, far, fab);

createApp(App)
  .use(router)
  .use(createPinia())
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
