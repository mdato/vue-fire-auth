<template>
  <div class="home">
    <img src="https://pluspng.com/img-png/firebase-logo-png-firebase-brand-guidelines-640x288.png" alt="">
    <h1>Welcome, {{ name }}</h1>
    <router-link to="/about">About</router-link>
    <br>
    <br>
    <button class="logout botonazo" @click="Logout">Logout</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import firebase from 'firebase/compat';

export default {
  setup() {

    const name = ref('');

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;

      if (user) {
        name.value = user.email.split('@')[0];
      }
    })

    const Logout = () => {
      firebase.auth().signOut()
        .then(() => {
          console.log('Logged out');
        })
        .catch(error => {
          alert(error.message);
        })

    }

    return {
      name,
      Logout
    }
  }
}
</script>
