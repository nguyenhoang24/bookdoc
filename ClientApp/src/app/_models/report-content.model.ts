export class ReportContent {
  id: number;
  title: string;
  indexNumber:number;
  reportNumber: number;
  subContent: string;
  canWrite: boolean;
  bold: boolean;
  italics: boolean;
  sumOfIndexNumber: number;

  constructor() {
    this.id = null;
    this.title = null;
    this.indexNumber = null;
    this.reportNumber = null;
    this.subContent = null;
    this.canWrite = null;
    this.bold = null;
    this.italics = null;
    this.sumOfIndexNumber = null;
  }
}
