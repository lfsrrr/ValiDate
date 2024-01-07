function valiDate(year, month, day) {
    function leapYear(year) {
      if (year % 400 == 0) {
        return true;
      } else if (year % 100 == 0) {
        return false;
      } else if (year % 4 == 0) {
        return true;
      } else {
        return false;
      }
    }
    function correctMonth(month) {
      if (month < 1 || month > 12) {
        return false;
      } else {
        return true;
      }
    }
    function correctDay(year, month, day) {
      if (day < 1 || day > 31) {
        return false;
      } else if (month == 2 && day > 28) {
        return false;
      } else if (!(month % 2 == 1 || month == 8) && day > 30) {
        return false;
      } else if (leapYear(year) == true && month == 2 && day == 29) {
        return true;
      } else {
        return true;
      }
    }
    if (correctMonth(month) == true && correctDay(day) == true) {
      return true;
    } else {
      return false;
    }
  }
  
console.log(valiDate(2024, 2, 29)); // true
console.log(valiDate(2025, 2, 29)); // false
console.log(valiDate(0, 2, 2)); // false
console.log(valiDate(-0, 2, 2)); // false
  console.log(valiDate(-5, 2, 2)); // false
  