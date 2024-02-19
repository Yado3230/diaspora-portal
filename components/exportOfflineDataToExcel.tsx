import * as XLSX from "xlsx";

// Your dynamic data

const exportOfflineDataToExcel = (filtered: string, data: any) => {
  const dynamicData = [
    [
      "fullName",
      "email",
      "emailVerified",
      "file",
      "status",
      "createdAt",
      "updatedAt",
    ],
    ...data?.map((row: any) => [
      filtered === "filtered" ? row.original.fullName : row.fullName,
      filtered === "filtered" ? row.original.email : row.email,
      filtered === "filtered" ? row.original.emailVerified : row.emailVerified,
      filtered === "filtered" ? row.original.file : row.file,
      filtered === "filtered" ? row.original.status : row.status,
      filtered === "filtered" ? row.original.createdAt : row.createdAt,
      filtered === "filtered" ? row.original.updatedAt : row.updatedAt,
    ]),
    // Add more rows as needed
  ];
  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(dynamicData);

  // Create a workbook
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");

  // Save the workbook to a file
  XLSX.writeFile(wb, "offline_accounts.xlsx", { bookSST: true });
};

export default exportOfflineDataToExcel;

// Create a worksheet
