import './assets/main.css'
import 'bulma/css/bulma.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'
/* import animantion*/
//import 'font-awesome-animation/css/font-awesome-animation.min.css'
/* import specific icons */
import {
  faUser,
  faSearch,
  faHeart,
  faCircleInfo,
  faBasketball,
  faTriangleExclamation,
  faCompactDisc,
  faBell,
  faCog,
  faCompass,
  faSpinner,
  faCoffee,
  faWrench,
  faAmbulance,
  faEdit,
  faCircle,
  faCheck,
  faChessQueen,
  faPlus,
  faEquals,
  faArrowRight,
  faPencilAlt,
  faComment,
  faHeadphones,
  faSquare,
  faCalendar,
  faCertificate,
  faEnvelope,
  faTimes,
  faBookmark,
  faPlay,
  faSun,
  faMoon,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faFacebook,
  faJs,
  faVuejs,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(
  faUser,
  faSearch,
  faHeart,
  faLinkedin,
  faFacebook,
  faCircleInfo,
  faBasketball,
  faTriangleExclamation,
  faCompactDisc,
  faBell,
  faCog,
  faCompass,
  faSpinner,
  faCoffee,
  faSpinner,
  faWrench,
  faAmbulance,
  faSquare,
  faEdit,
  faCircle,
  faCheck,
  faChessQueen,
  faHeadphones,
  faPlus,
  faEquals,
  faArrowRight,
  faPencilAlt,
  faComment,
  faCalendar,
  faCertificate,
  faEnvelope,
  faTimes,
  faBookmark,
  faHeart,
  faPlay,
  faSun,
  faMoon,
  faStar,
  faJs,
  faVuejs,
  faFacebookF
)

const app = createApp(App)
app.component('fa-icon', FontAwesomeIcon)
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layers-text', FontAwesomeLayersText)
app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
