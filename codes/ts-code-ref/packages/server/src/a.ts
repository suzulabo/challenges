import getA from "@/shared/getA";
import dateFormat from "@/shared/dateFormat";

const a = () => {
  console.log(dateFormat(new Date()));
  return getA();
};

export default a;
