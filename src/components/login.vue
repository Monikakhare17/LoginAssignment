<template>
  <div id="loginContainer">
    <section id="content">
       <h3>Member Login</h3>
       <form>
        <text-box-component
        v-bind:placeholder="usernamePlaceholder"
        v-model="model.username"
      />
      <text-box-component
        v-bind:placeholder="passwordPlaceholder"
        v-model="model.password"
      />
      <div class="login-bottom">
         <check-box-component
          v-bind:label="checkboxLabel"
          v-model="model.rememberMe"
        />
        <a class="pull-right" href="/"><i>Forgot Password?</i></a>
      </div>
        <button type="submit" v-on:click="onSubmit">LOGIN</button>
        
        </form>
    </section>
    
  </div>
</template>
<script>
import Vue from "vue";
import CheckBoxComponent from "./checkBoxComponent";
import TextBoxComponent from "./textBoxComponent";
import miniToastr from "mini-toastr";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
miniToastr.init();
export default {
  name: "Login",
  components: {
    CheckBoxComponent,
    TextBoxComponent,
  },
  data() {
    return {
      usernamePlaceholder: "Username",
      passwordPlaceholder: "Password",
      checkboxLabel: "Remember Me",
      model: {
        username: "",
        password: "",
        rememberMe: false,
      },
    };
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
    onSubmit() {
      let self = this;
      if (
        self.model.username == null ||
        self.model.username == "" ||
        !self.validateEmail(self.model.username)
      ) {
        miniToastr.error("Please enter a valid email", "Error");
      } else {
        let dummyURL = "";

        axios
          .post(dummyURL + "admin/login", self.model)
          .then((response) => {})
          .catch((e) => {});
      }
    },
  },
};
</script>
<style>
#loginContainer {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30em;
  height: 20em;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -15em; /*set to a negative number 1/2 of your width*/
  background-color: #ffffff;
  border-radius: 5px;
}
#content{
  display: block;
    padding: 30px 40px;
}
.input-container{
  margin: 15px 0;
  position: relative;
}
.login-bottom{
  margin: 15px 0;
  position: relative;
  text-align: left;
}
h3 {
  color: #595353;
}
a {
  color: #D0D1D2;
  font-size: 14px;
  float: right;
}
button {
  background-color: #f19332;
  color: #fff;
  width: 140px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  float: left;
  
}

.submit-container{
  margin: 20px 0 0 75px;
}
</style>
