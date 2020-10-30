<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  
};
</script>

<style>
body {
  background-color: #f3f3f3;
  
}
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30em;
  height: 25em;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -15em; /*set to a negative number 1/2 of your width*/
  background-color: #ffffff;
  border-radius: 5px;
}
.content{
  display: block;
    padding: 30px 40px;
}
.input-container{
  margin: 15px 0;
  position: relative;
}
button, a{
  background-color: #f19332;
  color: #fff;
  width: 140px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  float: left;
  text-decoration: none;
}

.submit-container{
  margin: 20px 0 0 75px;
}
</style>
