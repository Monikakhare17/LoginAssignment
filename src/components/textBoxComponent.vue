<template>
  <div class=input-container>
    <i class="fas" :class="[{'fa-user': (placeholder == 'Username')},{'fa-lock': (placeholder == 'Password')}]"></i>
    <input
      class="textbox"
      :type="(placeholder == 'Username') ? 'text' : 'password'"
      :placeholder="this.placeholder"
      v-bind:value="value"
      v-on:input="updateValue($event.target.value)"
      required
    />
  </div>
</template>
<script>
export default {
  name: "TextBox",
  props: ["placeholder", "value"],
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
<style>

.textbox {
  border: 2px solid #D0D1D2;
  border-radius: 10px;
    box-sizing: border-box;
    color: #39424e;
    line-height: 1.5em;
    padding: 20px 20px 20px 40px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    width: 100%;
}
input:focus{
  outline: none;
}
i.fas{
    color: #f19332;
    position: absolute;
    z-index: 1;
    left: 15px;
    top: 23px;
    
}
</style>
