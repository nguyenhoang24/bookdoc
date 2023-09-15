export class ReportingDeadline {
  id: string;
  hasQuarter: boolean;
  minusYear: number;
  quarter: number;
  type: number;
  second: string;
  minute: string;
  hour: string;
  dayOfMonth: string;
  month: string;
  dayOfWeek: string;
  cronString: string;
  description: string;
  voided: boolean;

  constructor() {
    this.id = "";
    this.hasQuarter = null;
    this.minusYear = null;
    this.quarter = null;
    this.type = null;
    this.second = null;
    this.minute = null;
    this.hour = null;
    this.dayOfMonth = null;
    this.month = null;
    this.dayOfWeek = null;
    this.description = null;
    this.cronString = null;
    this.voided = null;
  }
}
