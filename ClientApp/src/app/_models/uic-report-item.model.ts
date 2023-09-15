import { HIVRiskPerson } from "./hivriskperson.model";
import { UICSummaryReportView } from "./uic-summary-report-view.model";

export class UICReportItem {
    riskPersonId: string;
    riskPersonDto: HIVRiskPerson[];
    numberSyringeNeedle: number;
    numberCondom: number;
    numberLubricant: number;
    uicSummaryReportDto: UICSummaryReportView[];

    constructor() {
        this.riskPersonId = null;
        this.riskPersonDto = null;
        this.numberSyringeNeedle = null;
        this.numberCondom = null;
        this.numberLubricant = null;
        this.uicSummaryReportDto = null;
    }
}