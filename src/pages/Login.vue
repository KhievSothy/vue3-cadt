<template>
    <form @submit.prevent="handleSubmit">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>
<script>
import axios from 'axios';

export default{
    data() {
        return {
            email:"",
            password:"",
            error: false,
            success: false
        };
    },
    methods: {
        resetInput() {
            this.email="";
            this.password="";
        },
        async handleSubmit() {
            try{
                //Code with potential error
                const response = await axios.post("v1/auth/login",{
                email: this.email,
                password: this.password,
            });
            //Localstorage
            localStorage.setItem("accessToken", response.data.accessToken);
            this.resetInput();
            this.error = false;
            this.success = true;
            }
            catch(err){
            this.resetInput();
            this.error = false;
            this.success = true;
            console.log("Error loing");
            }
        },
    },
};
</script>