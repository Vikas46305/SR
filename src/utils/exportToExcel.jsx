import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const exportToExcel = (data) => {
  if (!data || !data.length) return;

  // Convert JSON data to worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Generate buffer
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Create Blob and save
  const file = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(file, "data.xlsx");
};
