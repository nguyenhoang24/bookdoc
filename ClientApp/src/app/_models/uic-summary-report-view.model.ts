import { UicMonthList } from "./uic-month-list.model";

export class UICSummaryReportView {
    id: string;
    title: string;
    year: number;
    items: UicMonthList[];
    newClient: UicMonthList[]; // So khach hang moi
    numberClientQuarter: UicMonthList[]; // So khach hang tu dau nam den cuoi quy

    constructor() {
        this.id = null;
        this.title = null;
        this.year = null;
        this.items = null;
        this.newClient = null;
        this.numberClientQuarter = null;
    }
}