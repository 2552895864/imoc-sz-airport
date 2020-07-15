import moment from "moment";
import number2Chinese from "@/utils/number2Chinese";

export default (date) => {
  const momentDate = moment(date);

  return {
    time: momentDate.format("HH:mm:ss"),
    dayOfWeek: momentDate
      .format("星期d")
      .replace(/\d/, (num) => number2Chinese(+num))
      .replace("零", "日"),
    date: momentDate.format("YYYY年M月D日"),
  };
};
