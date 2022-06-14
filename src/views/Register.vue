<template>
    <div class="register">
        <img src="https://pluspng.com/img-png/firebase-logo-png-firebase-brand-guidelines-640x288.png" alt="">
        <h1>Register Page</h1>        
        <form @submit.prevent="Register">
        <div class="formu">
            <input type="text" class="inputs" placeholder="Email" v-model="email" />
            <input type="password" class="inputs" placeholder="Password" v-model="password" />
            <input type="submit" value="Register" class="botonazo">
            <p>Have an account? <router-link to="/login">Login Here</router-link>
            </p>
        </div>
            
        </form>
    </div>
</template>

<script>
import firebase from "firebase/compat";
import { ref } from "vue";
import '../main.css'
export default {
    setup() {
        const email = ref('');
        const password = ref('');

        const Register = () => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user => alert(user))
                .catch(error => {
                    alert(error.message);
                })
        }
        return {
            email,
            password,
            Register
        }
    }
}
</script>