export interface NotificationReport{
  type?:string;
  id?: string;
  name?: string;
  year?: number;
  quarter?: number;
  note?: string;
}
export interface DashboardTT05Dto{
  quarterReportQuarter?:number;
  yearReportQuarter?:number;
  yearReportYear?:number;
  notifications?:NotificationReport[];
}
