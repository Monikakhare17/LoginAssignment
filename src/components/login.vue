<template>
  <div class="container">
    <section id="content">
       <h3>Member Login</h3>
       <form>
         <div class=input-container>
            <label for="email">Email Address</label>
            <input type="text" v-model="model.email" name="email"/>
        </div>
        <div class=input-container>
            <label for="password">Password</label>
            <input type="password" v-model="model.password" name="password" />
        </div>
       <!-- <button type="submit" v-on:click="login">LOGIN</button>-->
       <router-link :to="{name: 'dashboard', params: {name: userfullname }}">Login</router-link>
        
        
        </form>
    </section>
    
  </div>
</template>
<script>
import miniToastr from "mini-toastr";
import { mapGetters }from 'vuex';

miniToastr.init();
export default {
  name: "Login",
  props:[
    'username',
    'userpwd',
    'userfullname'
  ],
  data() {
    return {
     model: {
        email: "",
        password: "",
       
      },
    };
  },
  computed:{
    ...mapGetters(['getUserEmail','getUserPassword']),
  },
  methods: {
    validateEmail(val) {
      let pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{3})$/;
      let test = pattern.test(val);
      if (test) {
        return true;
      } else {
        return false;
      }

      // return true;
    },
    login() {
      let valid=true;
      if (
        this.model.email == null ||
        this.model.email == "" ||
        !this.validateEmail(self.model.email)) { 
      valid= false;
        miniToastr.error("Please enter a valid email", "Error");
        return;
      } 
      if(this.model.email !== this.username){
        valid = false;
          miniToastr.error("Email id does not exist, Please enter valid email id", "Error");
        return;
      }
      if(this.model.password !== this.userpwd){
        valid  =false;
        miniToastr.error("Invalid Password", "Error");
        return;
      }
      if(valid){
        this.$router.push("dashboard");
      }
    },
  },
};
</script>
<style>

</style>
