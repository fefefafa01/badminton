/** @format */

import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);

import "./style.css";
import App from "./App.vue";

//Vue splide (for slide show)
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const app = createApp(App);

import router from "./Router";
app.use(VueSplide);
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
