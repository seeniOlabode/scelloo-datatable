<template>
  <div>
    <h5
      class="
        uppercase
        text-xs text-scelloo-fonts-primary-variant
        tracking-wider
        font-normal
      "
      style="padding-left: 10px; margin-bottom: 5px"
    >
      {{ selectLabel }}:
    </h5>
    <label
      v-for="(option, index) in radioOptions"
      :key="option + index + selectName"
      class="
        flex
        justify-between
        hover:bg-scelloo-backgrounds-parent
        items
        center
        rounded
        cursor-pointer
      "
      style="padding: 5px 10px"
    >
      <label
        :for="option + index + selectName"
        class="
          text-sm
          font-normal
          text-scelloo-fonts-primary
          cursor-pointer
          tracking-wider
        "
        >{{ option }}</label
      >
      <input
        type="radio"
        :id="option + index + selectName"
        :name="selectName"
        :value="option"
        class="cursor-pointer"
        v-model="picked"
        @change="update()"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioSelectComponent",
  props: ["radioOptions", "selectLabel", "defaultValue", "selectName"],
  data() {
    return {
      options: ["Default", "First Name", "Last Name", "Due Date", "Last Login"],
      picked: this.defaultValue,
    };
  },
  methods: {
    update() {
      this.$emit("radioSelect", this.picked);
    },
  },
  computed: {
    page() {
      return this.getPage();
    },
  },
};
</script>

<style scoped>
input[type="radio"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: #8b83ba;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #8b83ba;
  border-radius: 50%;
  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.45em;
  height: 0.45em;
  border-radius: 50%;
  transform: scale(0) translate(0.249999999px);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em white;
}

input[type="radio"]:checked {
  background-color: #6d5bd0;
  border: #6d5bd0;
}

input[type="radio"]:checked::before {
  transform: scale(1) translate(0.249999999px);
}
</style>