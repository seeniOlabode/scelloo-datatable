// String.prototype.rtrim = function () {
//   return this.replace(/((\s*\S+)*)\s*/, "$1");
// };

export const camelize = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const createQueryCallback = (searchString, queryFilter, tab) => {
  // Setting Default Values
  if (queryFilter == null || queryFilter == "all") {
    queryFilter = "*";
  }
  if (!tab || tab == "all") {
    tab = "*";
  }
  return (user) => {
    let searchPass = true;
    let filterPass = false;
    let tabPass = false;

    // SEARCH QUERY
    let tokens = searchString
      .toLowerCase()
      .split(" ")
      .filter((token) => {
        return token.trim() !== "";
      });
    if (tokens.length) {
      // Create regular expression of all the search terms
      let searchStringRegex = new RegExp(tokens.join("|"), "gim");
      let userString = "";
      for (let key in user) {
        if (
          user[key] != "" &&
          key != "id" &&
          key != "active" &&
          key != "payment" &&
          key != "amount"
        ) {
          userString += user[key].toString().toLowerCase().trim() + " ";
        }
      }
      searchPass = userString.match(searchStringRegex);
    }

    // END SEARCH QUERY

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

export const sortArray = (array, sortBy) => {
  switch (sortBy) {
    case "Last Login":
      array = array.sort((user1, user2) => {
        let user1Date = new Date(user1.lastLogin);
        let user2Date = new Date(user2.lastLogin);
        return user2Date - user1Date;
      });
      break;
    case "Due Date":
      array = array.sort((user1, user2) => {
        let user1Date = new Date(user1.datePaid);
        let user2Date = new Date(user2.datePaid);
        return user2Date - user1Date;
      });
      array = array.sort((user1, user2) => {
        let user1Value =
          user1.payment == "paid" ? -50 : user1.payment == "overdue";
        let user2Value =
          user2.payment == "paid" ? -50 : user2.payment == "overdue";
        return user2Value - user1Value;
      });
      break;
    case "First Name":
      array = array.sort((user1, user2) => {
        let user1Name = user1.firstName;
        let user2Name = user2.firstName;
        return user1Name.localeCompare(user2Name);
      });
      break;
    case "Last Name":
      array = array.sort((user1, user2) => {
        let user1Name = user1.lastName;
        let user2Name = user2.lastName;
        return user1Name.localeCompare(user2Name);
      });
  }
  return array;
};
