<template>
  <div class="checkbox-container">
    <label class="switch flex items-center justify-center">
      <input
        type="checkbox"
        @change="$emit('update:modelValue', $event.target.checked)"
        :value="modelValue"
        :checked="modelValue"
      />
      <span class="box">
        <img src="@/assets/icon-check.svg" alt="" />
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      localValue: false,
    };
  },
  mounted() {
    this.localValue = this.initialValue;
  },
  methods: {},
};
</script>

<style scoped>
.checkbox-container {
  height: 20px;
  width: 20px;
}

.checkedLabel {
  text-decoration: line-through;
  opacity: 50%;
}

input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.box {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @apply hover:cursor-pointer border border-scelloo-fonts-primary-icon;
  border-radius: 3px;
}

.box img {
  opacity: 0;
  width: 12px;
}

input:checked + .box {
  @apply bg-scelloo-primary border-0;
}

input:checked + .box > img {
  opacity: 1;
}

.labelText {
  font-size: 13px;
}

.select-holder:hover {
  background: rgba(99, 95, 199, 0.25);
}
</style>
