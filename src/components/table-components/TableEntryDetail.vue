<template>
  <transition>
    <tr>
      <td colspan="7" class="p-0">
        <table class="w-full bg-scelloo-backgrounds-stripe">
          <tr
            class="bg-scelloo-backgrounds-parent border-b border-solid"
            style="border-bottom-color: #d9d5ec"
          >
            <th
              v-for="(heading, index) in headings"
              :key="heading + index + userId"
              class="
                text-xs
                font-semibold
                text-scelloo-fonts-primary-variant
                uppercase
                py-4
                tracking-wider
              "
            >
              <h5 class="flex" :class="{ 'pl-24': index == 0 }">
                {{ heading }}
                <img
                  v-if="heading == 'detail'"
                  src="@/assets/Info.svg"
                  alt=""
                  class="ml-1"
                />
              </h5>
            </th>
          </tr>
          <tr
            v-for="(deet, index) in userDeets"
            :key="deet + index"
            class="detail-row border-b border-solid last:border-b-0"
            style="border-color: #d9d5ec"
          >
            <td
              class="
                pl-24
                py-3
                text-sm
                tracking-wider
                text-scelloo-fonts-primary-variant
                font-light
                w-52
              "
            >
              12/APR/2020
            </td>
            <td
              class="
                first:pl-24
                py-3
                text-sm text-scelloo-fonts-primary
                font-light
              "
              style="width: 300px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ultricies.
            </td>
            <td class="pr-20 text-sm text-scelloo-fonts-primary font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus,
              sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies
              suspendisse vestibulum.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </transition>
</template>

<script>
export default {
  name: "TableEntryDetail",
  props: ["userId"],
  data() {
    return {
      headings: ["date", "user activity", "detail"],
      userDeets: [1, 2, 3, 4],
    };
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-from {
  height: 0;
}

.v-leave-to {
  height: auto;
}
</style>