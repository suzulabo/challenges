import { format } from "date-fns";

const dateFormat = (d: Date) => {
  return format(d, "y/m/d");
};

export default dateFormat;
