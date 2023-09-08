<template>
  <div
    class="
      bg-white
      p-3
      text-xs
      absolute
      rounded-md
      text-left
      -right-32
      shadow-lg
    "
    style="width: 118px; top: -13px"
    :class="className"
  >
    <div
      style="width: 20px"
      class="aspect-square absolute -left-1 rotate-45 rounded-sm bg-white"
    ></div>
    <span
      style="z-index: 50"
      class="relative tracking-wider font-semibold normal-case"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget.
    </span>
  </div>
</template>

<script>
export default {
  name: "ToolTip",
  props: ["className"],
};
</script>

<style>
</style>