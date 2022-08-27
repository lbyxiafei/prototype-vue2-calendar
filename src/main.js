import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueTextAreaAutosize from 'vue-textarea-autosize';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC2slDw16KOBjIQ7wB_PiRPUv3Tno9BFJg",
  authDomain: "vue-calendar-d88e0.firebaseapp.com",
  projectId: "vue-calendar-d88e0",
  storageBucket: "vue-calendar-d88e0.appspot.com",
  messagingSenderId: "710814470242",
  appId: "1:710814470242:web:072d1706329b52fad5013b",
  measurementId: "G-VG9JQTCRGW"
};
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
