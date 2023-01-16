// String.prototype.rtrim = function () {
//   return this.replace(/((\s*\S+)*)\s*/, "$1");
// };

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const createQueryCallback = (querySearch, queryFilter, tab) => {
  // Setting Default Values
  if (!querySearch) {
    querySearch = "*";
  }
  if (queryFilter == null || queryFilter == "all") {
    queryFilter = "*";
  }
  if (!tab || tab == "all") {
    tab = "*";
  }
  return (user) => {
    let searchPass = false;
    let filterPass = false;
    let tabPass = false;
    querySearch = querySearch.trim();
    // queryFilter = queryFilter.rtrim();
    let userFullName = user.firstName + " " + user.lastName;
    if (querySearch == "*") {
      searchPass = true;
    } else {
      if (
        userFullName
          .toLocaleLowerCase()
          .includes(querySearch.toLocaleLowerCase())
      ) {
        searchPass = true;
      } else if (
        user.email.toLocaleLowerCase().includes(querySearch.toLocaleLowerCase())
      ) {
        searchPass = true;
      } else if (
        user.lastLogin
          .toLocaleLowerCase()
          .includes(querySearch.toLocaleLowerCase())
      ) {
        searchPass = true;
      } else if (
        user.datePaid
          .toLocaleLowerCase()
          .includes(querySearch.toLocaleLowerCase())
      ) {
        searchPass = true;
      }
    }

    if (queryFilter == "*") {
      filterPass = true;
    } else {
      if (queryFilter === true) {
        if (user.active) {
          filterPass = true;
        }
      } else {
        if (!user.active) {
          filterPass = true;
        }
      }
    }

    if (tab == "*") {
      tabPass = true;
    } else {
      switch (tab) {
        case "paid": {
          if (user.payment == "paid") {
            tabPass = true;
          }
          break;
        }
        case "unpaid": {
          if (user.payment == "unpaid") {
            tabPass = true;
          }
          break;
        }
        case "overdue": {
          if (user.payment == "overdue") {
            tabPass = true;
          }
          break;
        }
      }
    }
    return searchPass && filterPass && tabPass;
  };
};
