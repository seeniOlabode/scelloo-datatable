<template>
  <tr class="bg-white pr-7">
    <td class="pl-5">
      <div class="flex items-center">
        <check-box />
        <span class="ml-5"><img src="@/assets/Master.svg" alt="" /></span>
      </div>
    </td>
    <td class="flex flex-col" style="gap: 5px">
      <span class="font-medium text-scelloo-fonts-primary text-sm">{{
        `${user.firstName} ${user.lastName}`
      }}</span>
      <span class="text-scelloo-fonts-primary-variant font-normal text-sm">{{
        user.email
      }}</span>
    </td>
    <td>
      <div class="flex flex-wrap">
        <span
          class="rounded-xl text-xs font-medium"
          :style="{
            color: user.active ? '#4A4AFF' : '#6E6893',
            backgroundColor: user.active ? '#E6E6F2' : '#F2F0F9',
            padding: '4px 5px 4px 5px',
          }"
          ><span style="font-size: 16px">•</span>
          {{ user.active ? "Active" : "Inactive" }}</span
        >
        <span
          class="w-full text-xs text-scelloo-fonts-primary-variant font-medium"
          style="margin-top: 5px"
          >{{ `Last login: ${user.lastLogin}` }}</span
        >
      </div>
    </td>
    <td>
      <div class="flex flex-wrap">
        <span
          class="rounded-xl text-xs font-medium"
          :style="{
            color: user.paid ? '#007F00' : '#D30000',
            backgroundColor: user.paid ? '#CDFFCD' : '#FFE0E0',
            padding: '4px 5px 4px 5px',
          }"
          ><span style="font-size: 16px">•</span>
          {{ user.paid ? "Paid" : "Overdue" }}</span
        >
        <span
          class="w-full text-xs text-scelloo-fonts-primary-variant font-medium"
          style="margin-top: 5px"
          >{{ `Paid on: ${user.datePaid}` }}</span
        >
      </div>
    </td>
    <td>
      <div class="flex flex-wrap text-right">
        <span class="text-sm w-full text-scelloo-fonts-primary"
          >${{ user.amount }}</span
        >
        <span
          class="
            w-full
            text-scelloo-fonts-primary-variant text-xs
            tracking-wider
            mt-1
          "
          >USD</span
        >
      </div>
    </td>

    <td>
      <div class="flex items-center">
        <span
          class="text-xs text-scelloo-fonts-primary-variant text-center w-full"
          >View More</span
        >
      </div>
    </td>

    <td><img src="@/assets/More.svg" alt="" /></td>
  </tr>
</template>



<script>
import CheckBox from "../shared/CheckBox.vue";

export default {
  name: "TableEntry",
  components: { CheckBox },
  props: ["user"],
  data() {
    return {};
  },
  computed: {
    paidStatusText() {
      return "bode";
    },
  },
};
</script>

<style scoped>
tr:first-child {
}

td {
  @apply py-3;
}

tr {
  @apply border-b border-solid;
  border-bottom-color: #d9d5ec;
}
</style>