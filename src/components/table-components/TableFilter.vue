<template>
  <div>
    <button
      class="
        flex
        items-center
        justify-center
        rounded-md
        border-solid border-scelloo-fonts-stroke border
        font-normal
        text-base
        hover:border-scelloo-primary
      "
      :class="{
        'filter-show': showSelect,
        'border-scelloo-primary': showSelect,
      }"
      style="width: 99px; height: 40px; gap: 10px"
      @click="showSelect = !showSelect"
    >
      <img src="@/assets/Filter.svg" alt="" />
      Filter
    </button>
    <transition>
      <div
        class="
          absolute
          bg-white
          border-solid border border-scelloo-fonts-stroke
          rounded-md
          mt-2
          z-20
        "
        v-show="showSelect"
        style="width: 224px; padding: 20px 10px"
      >
        <radio-select-component
          :radioOptions="sort.options"
          :selectLabel="sort.label"
          :defaultValue="sort.value"
          selectName="sort"
          @radioSelect="(value) => $emit('changeSort', value)"
        />
        <hr style="margin-top: 5px" />
        <radio-select-component
          :radioOptions="filterUsers.options"
          :selectLabel="filterUsers.label"
          :defaultValue="filterUsers.value"
          selectName="filter"
          style="margin-top: 10px"
          @radioSelect="(value) => $emit('changeUsersFilter', value)"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import RadioSelectComponent from "../shared/RadioSelectComponent.vue";

export default {
  name: "TableFilter",
  components: {
    RadioSelectComponent,
  },
  inject: ["getFilterSort", "getFilterUsers"],
  data() {
    return {
      showSelect: false,
    };
  },
  methods: {},
  computed: {
    sort() {
      return this.getFilterSort();
    },
    filterUsers() {
      return this.getFilterUsers();
    },
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.filter-show {
  box-shadow: 0px 0px 3px #6d5bd0;
}
</style>