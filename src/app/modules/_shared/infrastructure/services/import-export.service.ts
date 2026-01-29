import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
    providedIn: 'root'
})
export class ImportExportService {

    constructor() { }

    /**
     * Export data to Excel file
     * @param data Array of objects to export
     * @param fileName Name of the file without extension
     */
    exportToExcel(data: any[], fileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    }

    /**
     * Read data from Excel/CSV file
     * @param file File object from input
     */
    readExcel(file: File): Promise<any[]> {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsBinaryString(file);
            fileReader.onload = (event) => {
                try {
                    const binaryString = event.target?.result;
                    const workbook = XLSX.read(binaryString, { type: 'binary' });
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const data = XLSX.utils.sheet_to_json(worksheet);
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            };
            fileReader.onerror = (error) => reject(error);
        });
    }

    /**
     * Generates a template for import
     * @param headers Array of header strings
     * @param fileName Name of the file
     */
    generateTemplate(headers: string[], fileName: string): void {
        const data = [{}];
        // Create an empty object with keys from headers to ensure columns exist
        const emptyRow: any = {};
        headers.forEach(h => emptyRow[h] = '');

        this.exportToExcel([emptyRow], fileName);
    }
}
