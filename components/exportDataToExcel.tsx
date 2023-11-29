import { Account } from "@/types/types";

import { utils, writeFile } from "xlsx";

function exportDataToExcel(data: Account[]) {
  const workbook = utils.book_new();
  const worksheet = utils.aoa_to_sheet([data]);
  utils.book_append_sheet(workbook, worksheet, "data.xlsx");
  writeFile(workbook, "data.xlsx", { type: "binary" });
}
export default exportDataToExcel;
