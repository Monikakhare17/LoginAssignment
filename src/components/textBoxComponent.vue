<template>
  <div>
    <input
      class="textbox"
      type="text"
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
  border: 2px solid #a7a7aa;
  border-radius: 5px;
  color: #a7a7aa;
  margin: 2px;
  padding: 10px;
  width: 250px;
}
.textbox input {
  width: 100%;
}
</style>
