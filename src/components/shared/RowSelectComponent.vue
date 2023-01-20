<template>
  <div class="custom-select relative">
    <label
      class="
        text-xs text-scelloo-fonts-primary-variant
        flex
        cursor-pointer
        font-semibold
        tracking-wider
      "
      @click="displayOptions = !displayOptions"
      ><span
        >{{ rowSelectData.label }}:
        <span class="text-xs text-scelloo-fonts-primary-variant">{{
          selectedOption
        }}</span></span
      >
      <img
        src="@/assets/row-select-icon.svg"
        alt=""
        class="transition-transform"
        :class="{ 'rotate-180': displayOptions }"
        style="margin-left: 11px"
      />
    </label>

    <ul
      :name="rowSelectData.name"
      :id="rowSelectData.name"
      class="
        bg-white
        rounded-md
        absolute
        w-full
        bottom-5
        right-0
        border-solid border border-scelloo-fonts-stroke
        shadow-lg
      "
      style="padding: 5px"
      v-show="displayOptions"
    >
      <li
        :value="option"
        v-for="option in rowSelectData.options"
        :key="option + rowSelectData.name"
        class="
          cursor-pointer
          rounded-md
          hover:bg-scelloo-backgrounds-parent
          text-xs
        "
        style="padding: 5px"
        @click="selectedOption = option"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RowSelectComponent",
  props: ["rowSelectData"],
  emits: ["rowsperpage"],
  data() {
    return {
      selectedOption: this.rowSelectData.options[0],
      displayOptions: false,
    };
  },
  watch: {
    selectedOption() {
      this.displayOptions = false;
      this.$emit("rowsperpage", this.selectedOption);
    },
  },
};
</script>

<style scoped>
</style>