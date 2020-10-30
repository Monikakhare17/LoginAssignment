<template>
    <div class="container">
        <section class="content">
            <h2>Sign Up Form</h2>
            <form>
        <div class=input-container>
            <label for="fullname">Full Name</label>
            <input type="text" v-model="model.fullname" name="fullname" />
        </div>
        <div class=input-container>
            <label for="email">Email Address</label>
            <input type="text" v-model="model.email" name="email"/>
        </div>
        <div class=input-container>
            <label for="password">Password</label>
            <input type="password" v-model="model.password" name="password" />
        </div>
        <div class=input-container>
            <label for="confirmPassword">Password</label>
            <input type="password" v-model="model.confirmPwd" name="confirmPassword" />
        </div>
        <!--<button type="submit" v-on:click="onSubmit">Sign Up</button>-->
         <router-link :to="{name: 'login', params: {username: model.email, userpwd: model.password , userfullname: model.fullname}}">Sing Up</router-link>
        
        </form>
        </section>
    </div>  
</template>
<script>
import miniToastr from "mini-toastr";
import { mapActions } from 'vuex'
miniToastr.init();
export default {
    name:"SignUp",
    data(){
        return{
            model:{
                fullname: '',
                email: '',
                password: '',
                confirmPwd: ''
            }
        }
    },
    methods:{
        ...mapActions(['setLoginData']),
        validateEmail(val) {
        let pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{3})$/;
        let test = pattern.test(val);
        if (test) {
            return true;
        } else {
            return false;
        }

        },
        onSubmit(){
            let valid=true;
            if( this.model.fullname == null || this.model.fullname == ""){
                valid=false;
                miniToastr.error("Please enter a Full Name", "Error");
                return;
            }
            if(this.model.email == null || this.model.email == "" || !this.validateEmail(this.model.email)){
                valid = false;
                miniToastr.error("Please enter a valid email", "Error");
                return; 
            }
            if( this.model.password == null || this.model.password == ""){ 
                valid = false; 
                miniToastr.error("Please enter a Password", "Error");
                return;
            }
            if(this.model.confirmPwd == null || this.model.confirmPwd == ""){
                valid = false;
                 miniToastr.error("Please enter a Confirm Password", "Error");
                return;
            }
            if(this.model.password !== this.model.confirmPwd){
                valid = false;
                miniToastr.error("Password does not match with confirm Password", "Error");
                return;
            }
           
            if(valid){
                 this.setLoginData(this.model);
                this.$router.go('/login');
               
               
            }

        }
    }
}
</script>
<style scoped>
label{
    display: block;
}
</style>