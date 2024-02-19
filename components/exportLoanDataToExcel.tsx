import * as XLSX from "xlsx";

// Your dynamic data

const exportLoanDataToExcel = (filtered: string, data: any) => {
  const dynamicData = [
    [
      "fullName",
      "country",
      "loanAmount",
      "loanType",
      "loanSchedule",
      "branch",
      "status",
      "addedAt",
      "updatedAt",
    ],
    ...data?.map((row: any) => [
      filtered === "filtered" ? row.original.fullName : row.fullName,
      filtered === "filtered" ? row.original.country : row.country,
      filtered === "filtered" ? row.original.loanAmount : row.loanAmount,
      filtered === "filtered" ? row.original.loanType : row.loanType,
      filtered === "filtered" ? row.original.loanSchedule : row.loanSchedule,
      filtered === "filtered" ? row.original.branch : row.branch,
      filtered === "filtered" ? row.original.status : row.status,
      filtered === "filtered" ? row.original.addedAt : row.addedAt,
      filtered === "filtered" ? row.original.state : row.state,
      filtered === "filtered" ? row.original.updatedAt : row.updatedAt,
    ]),
    // Add more rows as needed
  ];
  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(dynamicData);

  // Create a workbook
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");

  // Save the workbook to a file
  XLSX.writeFile(wb, "loans.xlsx", { bookSST: true });
};

export default exportLoanDataToExcel;

// Create a worksheet
