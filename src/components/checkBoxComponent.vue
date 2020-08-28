<template>
  <div class="checkbox-container">
    <input
      type="checkbox"
      class="checkbox"
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
.checkbox-container {
  display: inline-block;
  
}
input[type="checkbox"] {
  border: 1px solid #a7a7aa;
}

.checkbox-container label {
      font-size: 14px;
    color: #D0D1D2;
    margin-left: 5px;
}
</style>
