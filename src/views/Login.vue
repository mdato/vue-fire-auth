<template>
    <div class="login">        
        <img src="https://pluspng.com/img-png/firebase-logo-png-firebase-brand-guidelines-640x288.png" alt="">
       <h1>Login Page</h1>
       <form @submit.prevent="Login">
            <div class="formu">
                <input type="text" class="inputs" placeholder="Email" v-model="email" />
                <input type="password" class="inputs" placeholder="Password" v-model="password" />
                <input type="submit" value="Login" class="botonazo">
                <p>Need an account? <router-link to="/register">Register Here</router-link>
                </p>
            </div>

        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase/compat';
import '../main.css'

export default {
    setup() {
        const email = ref('');
        const password = ref('');

        const Login = () => {
            firebase.auth().signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(error => {
                    alert(error.message);
                });

        }
        return {
            email,
            password,
            Login
        }
    }
}
</script>