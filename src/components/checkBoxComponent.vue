<template>
  <div class="check-box">
    <input
      type="checkbox"
      id="checkbox"
      v-bind:value="value"
      @click="updateValue($event.target.checked)"
    />
    <label for="checkbox">{{ this.label }}</label>
  </div>
</template>
<script>
export default {
  name: "CheckBox",
  props: ["label", "value"],
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
<style>
.check-box {
  display: inline-block;
  margin-left: 0;
}
input[type="checkbox"] {
  border: 1px solid #a7a7aa;
}
.checkbox input[type="checkbox"]:checked {
  background-color: #ffffff;
  color: #a7a7aa;
}
.check-box label {
  font: 400 13.3333px Arial;
  color: #a7a7aa;
}
</style>
