import "vant/es/toast/style";
import "vant/es/dialog/style";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
