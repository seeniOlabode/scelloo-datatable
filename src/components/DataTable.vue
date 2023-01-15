<template>
  <div class="table-container pb-28">
    <header id="table-header" class="mb-5">
      <h1
        class="
          text-scelloo-fonts-primary-variant
          font-bold
          text-sm
          uppercase
          tracking-widest
        "
      >
        Table Heading
      </h1>
    </header>
    <tabs-component
      :tabs="tabsData.tabs"
      :activeTab="tabsData.activeTab"
      @changeTab="(tab) => (tabsData.activeTab = tab)"
    />

    <div
      class="w-full mt-5 rounded-lg bg-white"
      style="box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2)"
    >
      <div
        class="border-b border-solid"
        style="border-color: #d9d5ec; height: 70px"
      ></div>
      <table class="w-full">
        <tr
          class="bg-scelloo-backgrounds-stripe border-b border-solid"
          style="border-bottom-color: #d9d5ec"
        >
          <td class="pl-5">
            <check-box />
          </td>
          <th
            v-for="(heading, index) in headings"
            :key="heading + index"
            class="
              font-semibold
              tracking-wider
              uppercase
              text-xs text-scelloo-fonts-primary-variant
              py-4
              text-left
            "
            :class="{ 'text-right': heading == 'Amount' }"
          >
            {{ heading }}
          </th>
          <th></th>
          <th class="">
            <img class="" src="@/assets/More.svg" alt="" />
          </th>
        </tr>
        <table-entry
          v-for="(user, index) in users"
          :key="user.firstName + index"
          :user="user"
        />
      </table>
      <div
        style="height: 45px"
        class="w-full bg-scelloo-backgrounds-stripe rounded-b-lg"
      ></div>
    </div>
  </div>
</template>

<script>
import TabsComponent from "./table-components/TabsComponent.vue";
import TableEntry from "./table-components/TableEntry.vue";
import CheckBox from "./shared/CheckBox.vue";

export default {
  components: {
    TabsComponent,
    TableEntry,
    CheckBox,
  },
  data() {
    return {
      headings: ["Name", "User Status", "Payment Status", "Amount"],
      tabsData: {
        tabs: ["all", "paid", "unpaid", "overdue"],
        activeTab: "paid",
      },
      users: [],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.users.push(
        {
          firstName: "Justin",
          lastName: "Septimus",
          email: "seeniolabode8734@gmail.com",
          active: true,
          lastLogin: "14/APR/2020",
          paid: true,
          datePaid: "15/APR/2020",
          amount: 200,
        },
        {
          firstName: "Olabode",
          lastName: "Odebunmi",
          email: "seeniolabode8734@gmail.com",
          active: false,
          lastLogin: "14/APR/2020",
          paid: false,
          datePaid: "15/APR/2020",
          amount: 200,
        },
        {
          firstName: "Oluwajomiloju",
          lastName: "Ajeigbe",
          email: "seeniolabode8734@gmail.com",
          active: true,
          lastLogin: "14/APR/2020",
          paid: true,
          datePaid: "15/APR/2020",
          amount: 200,
        }
      );
    }
  },
};
</script>