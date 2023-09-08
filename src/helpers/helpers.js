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

export const createQueryCallback = (search, filter, tab) => {
  // Setting Wild Card Values
  if (filter == null || filter == "all") {
    filter = "*";
  }
  if (!tab || tab == "all") {
    tab = "*";
  }

  return (user) => {
    let searchMatch = false;
    let filterMatch = false;
    let tabMatch = false;

    // SEARCH
    let tokens = search
      .toLowerCase()
      .split(" ")
      .filter((token) => {
        return token.trim() !== "";
      });

    if (tokens.length) {
      // Create regular expression to match each word in search string;
      let searchStringRegex = new RegExp(tokens.join("|"), "gim");
      let userString = "";
      for (let key in user) {
        if (key === "firstName" || key === "lastName" || key === "email") {
          // Create a string containing all searchable criteria (to match);
          userString += user[key].toString().toLowerCase().trim() + " ";
        }
      }
      searchMatch = userString.match(searchStringRegex);
    } else {
      searchMatch = true;
    }

    // END SEARCH

    // Filter
    if (filter == "*") {
      filterMatch = true;
    } else {
      filterMatch = user.active === filter;
    }
    // End Filter

    // Tab
    if (tab == "*") {
      tabMatch = true;
    } else {
      tabMatch = user.payment === tab;
    }
    // End Tab

    return searchMatch && filterMatch && tabMatch;
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
    case "Email":
      array = array.sort((user1, user2) => {
        return user1.email.localeCompare(user2.email);
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
