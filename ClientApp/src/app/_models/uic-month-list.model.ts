import { HIVRiskPerson } from "./hivriskperson.model";
import { UICReportItem } from "./uic-report-item.model";

export class UicMonthList {
    uic: string;
    riskPerson: HIVRiskPerson[];
    jan: UICReportItem[]; // Thang 1
    feb: UICReportItem[]; // Thang 2
    march: UICReportItem[]; // Thang 3
    april: UICReportItem[]; // Thang 4
    may: UICReportItem[]; // Thang 5
    june: UICReportItem[]; // Thang 6
    july: UICReportItem[]; // Thang 7
    august: UICReportItem[]; // Thang 8 
    sep: UICReportItem[]; // Thang 9
    oct: UICReportItem[]; // Thang 10
    nov: UICReportItem[]; // Thang 11
    dec: UICReportItem[]; // Thang 12

    constructor() {
        this.uic = null;
        this.riskPerson = null;
        this.jan = null;
        this.feb = null;
        this.march = null;
        this.april = null;
        this.may = null;
        this.june = null;
        this.july = null;
        this.august = null;
        this.sep = null;
        this.oct = null;
        this.nov = null;
        this.dec = null;
    }
}