<template>
  <tr
    class="bg-white pr-7 transition-colors"
    :class="{ 'bg-scelloo-backgrounds-stripe': user.id == userDetail }"
  >
    <td class="pl-5">
      <div class="flex items-center">
        <check-box />
        <span class="ml-5"
          ><img
            src="@/assets/Master.svg"
            alt=""
            :class="{ 'rotate-180': user.id == userDetail }"
            class="transition-transform"
        /></span>
      </div>
    </td>
    <td class="flex flex-col" style="gap: 5px">
      <span class="font-normal text-scelloo-fonts-primary text-sm">{{
        `${user.firstName} ${user.lastName}`
      }}</span>
      <span class="text-scelloo-fonts-primary-variant font-thin text-sm">{{
        user.email
      }}</span>
    </td>
    <td>
      <div class="flex flex-wrap">
        <span
          class="rounded-xl text-xs font-normal"
          :style="{
            color: user.active ? '#4A4AFF' : '#6E6893',
            backgroundColor: user.active ? '#E6E6F2' : '#F2F0F9',
            padding: '4px 5px 4px 5px',
          }"
          ><span style="font-size: 16px">•</span>
          {{ user.active ? "Active" : "Inactive" }}</span
        >
        <span
          class="w-full text-xs text-scelloo-fonts-primary-variant font-normal"
          style="margin-top: 5px"
          >{{ `Last login: ${user.lastLogin}` }}</span
        >
      </div>
    </td>
    <td>
      <div class="flex flex-wrap">
        <span
          class="rounded-xl text-xs font-normal capitalize"
          style="padding: 4px 5px 4px 5px"
          :style="paymentStatusStyles"
          ><span style="font-size: 16px">•</span> {{ user.payment }}</span
        >
        <span
          class="w-full text-xs text-scelloo-fonts-primary font-normal"
          style="margin-top: 5px"
          >{{ `${paidStatusText}: ${user.datePaid}` }}</span
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
          class="
            text-xs text-scelloo-fonts-primary-variant text-center
            w-full
            cursor-pointer
          "
          @click="
            () =>
              userDetail == user.id
                ? $emit('openDetail', null)
                : $emit('openDetail', user.id)
          "
          >View More</span
        >
      </div>
    </td>

    <td><img src="@/assets/More.svg" alt="" /></td>
  </tr>
  <table-entry-detail v-show="user.id == userDetail" :userId="user.id" />
</template>



<script>
import CheckBox from "../shared/CheckBox.vue";
import TableEntryDetail from "./TableEntryDetail.vue";

export default {
  name: "TableEntry",
  components: { CheckBox, TableEntryDetail },
  props: ["user", "userDetail"],
  data() {
    return {
      userSelected: false,
    };
  },
  computed: {
    paidStatusText() {
      let text = "";
      switch (this.user.payment) {
        case "paid":
          text = "Paid on";
          break;
        case "unpaid":
          text = "Dues on";
          break;
        case "overdue":
          text = "Dued on";
      }
      return text;
    },
    paymentStatusStyles() {
      let styleObject;
      switch (this.user.payment) {
        case "paid":
          styleObject = {
            color: "#007F00",
            backgroundColor: "#CDFFCD",
          };
          break;
        case "unpaid":
          styleObject = {
            color: "#965E00",
            backgroundColor: "#FFECCC",
          };
          break;
        case "overdue":
          styleObject = {
            color: "#D30000",
            backgroundColor: "#FFE0E0",
          };
          break;
      }
      return styleObject;
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