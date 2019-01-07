import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as _ from 'lodash';
@Injectable()

export class ExcelService {
    constructor() { }

    public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    
    public exportAsExcelFileWithSheet(daftarBulanRakor, data: any[], excelFileName: string): void {
        let worksheets = [];
        let sheets = [];
        daftarBulanRakor.map(snap=>{
            let work = [];
            data.map(each=>{
                console.log(each);
                if(each.BulanTahun == undefined && each.length > 0){
                    each.length = 0;
                    delete each.length;
                    work.push(each);
                }else if(each.BulanTahun == snap.key){
                    delete each.BulanTahun;
                    work.push(each);
                }
            })
            const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(work);
            sheets.push(snap.key);
            worksheets[snap.key] = worksheet;
        })
        worksheets = Object.assign({}, worksheets);

        const workbook: any = { Sheets: worksheets, SheetNames: sheets };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }

    public exportAsExcelMonitoringPasokan(json: any[], excelFileName: string): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        console.log(worksheet);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet,'datas':worksheet }, SheetNames: ['datas', 'data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }

    private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
        FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
    }

}