const ReturnCreated = (createdDate) => {
    let date = new Date();
    let date1 = new Date(createdDate);
  
    function get_month_length(year, month) {
      var hour = 1000 * 60 * 60;
      var day = hour * 24;
      var this_month = new Date(year, month, 1);
      var next_month = new Date(year, month + 1, 1);
      var length = Math.ceil(
        (next_month.getTime() - this_month.getTime() - hour) / day
      );
  
      return length;
    }
  
    function get_number_of_days(firstDate, secondDate) {
      var diff_year = parseInt(
        secondDate.getFullYear() - firstDate.getFullYear()
      );
      var diff_month = parseInt(secondDate.getMonth() - firstDate.getMonth());
      var diff_day = parseInt(secondDate.getDate() - firstDate.getDate());
  
      var hash_date = {};
  
      while (true) {
        hash_date = {};
        hash_date["y"] = diff_year;
  
        if (diff_month < 0) {
          diff_year -= 1;
          diff_month += 12;
          continue;
        }
        hash_date["m"] = diff_month;
  
        if (diff_day < 0) {
          diff_month -= 1;
          diff_day += get_month_length(
            secondDate.getFullYear(),
            secondDate.getMonth()
          );
          continue;
        }
        hash_date["d"] = diff_day;
        break;
      }
  
      return hash_date;
    }
    const getdeploedDate = get_number_of_days(date1, date);
    // console.log("newData ", get_number_of_days(date1, date));
  
    let displayDate = "";
  
    if (getdeploedDate.y > 0) {
      displayDate += `${getdeploedDate.y} year ago`;
    }
    if (getdeploedDate.y === 0 && getdeploedDate.m > 0) {
      displayDate += `${getdeploedDate.m} month ago`;
    }
    if (getdeploedDate.m === 0 && getdeploedDate.d > 0) {
      displayDate += `${getdeploedDate.d} day ago`;
    }
    if(!displayDate){
      displayDate = "Today"
    }
  
    return displayDate;
  };
  
  export default ReturnCreated;
  