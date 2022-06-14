import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: "vue-auth-682b7.firebaseapp.com",
    projectId: "vue-auth-682b7",
    storageBucket: "vue-auth-682b7.appspot.com",
    messagingSenderId: "929242518063",
    appId: process.env.VUE_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
