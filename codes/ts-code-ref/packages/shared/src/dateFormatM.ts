import moment from "moment";

const dateFormatM = (d: Date) => {
  return moment(d).format("y/m/d");
};

export default dateFormatM;
