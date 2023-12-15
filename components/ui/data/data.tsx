import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "PENDING",
    label: "PENDING",
    color: "#5A5A5A",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "APPROVED",
    label: "APPROVED",
    color: "#0000FF",
    icon: CheckCircledIcon,
  },
  {
    value: "REJECTED",
    label: "REJECTED",
    color: "#FF0000",
    icon: CrossCircledIcon,
  },
];

export const sex = [
  {
    value: "MALE",
    label: "Male",
    color: "#5A5A5A",
    // icon: QuestionMarkCircledIcon,
  },
  {
    value: "FEMALE",
    label: "Female",
    color: "#5A5A5A",
    // icon: StopwatchIcon,
  },
];

export const completed = [
  {
    value: "20%",
    label: "20%",
    color: "#5A5A5A",
    // icon: QuestionMarkCircledIcon,
  },
  {
    value: "40%",
    label: "40%",
    color: "#5A5A5A",
    // icon: QuestionMarkCircledIcon,
  },
  {
    value: "60%",
    label: "60%",
    color: "#5A5A5A",
    // icon: QuestionMarkCircledIcon,
  },
  {
    value: "80%",
    label: "80%",
    color: "#5A5A5A",
    // icon: QuestionMarkCircledIcon,
  },
  {
    value: "100%",
    label: "100%",
    color: "#5A5A5A",
    // icon: QuestionMarkCircledIcon,
  },
];
export const accountType = [
  {
    value: "Deposit Account",
    label: "Deposit Account",
    color: "#5A5A5A",
    // icon: QuestionMarkCircledIcon,
  },
  {
    value: "Fixed Time Deposit Account",
    label: "Fixed Time Deposit Account",
    color: "#5A5A5A",
    // icon: StopwatchIcon,
  },
  {
    value: "Non-Repatriable Birr Account",
    label: "Non-Repatriable Birr Account",
    color: "#5A5A5A",
    // icon: StopwatchIcon,
  },
  {
    value: "ECOLFL",
    label: "ECOLFL",
    color: "#5A5A5A",
    // icon: StopwatchIcon,
  },
  {
    value: "Diaspora Wadia Saving Account",
    label: "Diaspora Wadia Saving Account",
    color: "#5A5A5A",
    // icon: StopwatchIcon,
  },
  {
    value: "Diaspora Mudarabah Saving Account",
    label: "Diaspora Mudarabah Saving Account",
    color: "#5A5A5A",
    // icon: StopwatchIcon,
  },
  {
    value: "Diaspora Mudarabah Fixed Time",
    label: "Diaspora Mudarabah Fixed Time",
    color: "#5A5A5A",
    // icon: StopwatchIcon,
  },
];

export const operations = [
  {
    label: "FT",
    value: "ft",
    icon: ArrowDownIcon,
  },
  {
    label: "FT Reversal",
    value: "ft reversal",
    icon: ArrowRightIcon,
  },
  {
    label: "FT Reversal ND",
    value: "ft reversal next day",
    icon: ArrowUpIcon,
  },
  {
    label: "FT Lump Sum",
    value: "ft lump sum",
    icon: ArrowUpIcon,
  },
  {
    label: "FT Interest",
    value: "ft interest",
    icon: ArrowUpIcon,
  },
];
