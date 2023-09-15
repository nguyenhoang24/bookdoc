import {HealthOrganization} from "../_models/health-organization.model";
import { DataChart } from "./visualization";

export interface DashboardCommunityTestDto{
  fromDate?:Date;
  toDate?:Date;
  year?:number;
  populationPositive?:ValueSetProjection[];
  population?:ValueSetProjection[];
  patientByMonth?:TotalAndChildProjection[];
  positiveAndExchange?:TotalAndChildProjection[];
}
export interface DashboardScreeningTestDto{
  fromDate?:Date;
  toDate?:Date;
  existTestDateWithTarget?:TotalAndChildProjection[];
  positiveDateWithTarget?:TotalAndChildProjection[];
  existTestDateWithPositive?:TotalAndChildProjection[];
  positivePopulation?:TotalAndChildProjection[];
  existTestDatePopulation?:TotalAndChildProjection[];
  positiveTransfer?:TotalAndChildProjection[];
  // positivePopulationByQuarter?:TotalAndChildProjection[];
  positivePopulationByQuarterCategories?:string[];
  positivePopulationByQuarterSeries?:any[];
}
export interface ValueSetProjection{
  name?:string;
  value?:number
}
export interface TotalAndChildProjection{
  time?:string;
  keyword?:string;
  total?:number;
  positive?:number;
  exchange?:number;
  targets?:number;
  result?:number;
  newInfection?:number;
  longInfection?:number;
  percentPositiveTotal?:number;
  percentExchangePositive?:number;
  percentResultTotal?:number
}
export interface DashboardSearch{
  estimatedNumber?:number;
  year?:number;
  genders?: string[],
  administrativeUnitIds?: string[],
  transmissionRoutes?: string[],
  populations?: string[],
  typeDataMap?:number;
  fromDate?:Date;
  toDate?:Date;
  services?: string[];
  orgIds?:string[];
  years? : number[];
  months? : number[];
  province? : HealthOrganization;
  district? : HealthOrganization;
  gender? : string;
  ageGroup? : number[];
  populationGroupId? : string;
  addressType? : number;
  ageRange? : number[];
}
export interface TotalHivPersonProjection{
  totalNew?:number;
  totalNewInYear?:number;
  totalAlive?:number;
  totalTreatment?:number;
}
export interface MapDashboardDto{
  name?:string;
  provinceCode?:string;
  districtCode?:string;
  communeCode?:string;
  values?:TotalAndChildProjection[];
  data?:MapProjection[];
}
export interface MapProjection{
  id?:string;
  code?:string;
  total?:number;
  level?:number;
}
export interface OverviewScreeningTestDto{
  totalAndConfirmPatient?: TotalAndChildProjection[];
  positiveAndConfirmPatient?: TotalAndChildProjection[];
  positiveAndTransfer?: TotalAndChildProjection[];
  recentIndex?:RecentIndexProjection;

}
export interface OverviewScreeningTestAndResultDto{
  fromDate?:Date;
  toDate?:Date;
  dataOverview?: TotalAndChildProjection[];
  dataByAdministrative?: TotalAndChildProjection[];
  dataByGender?: GenderProjection[];
  dataByAge?: AgeProjection[];
  dataByPopulation?: TotalAndChildProjection[];
  dataByService?: TotalAndChildProjection[];
}
export interface AgeProjection{
  keyword?:string;
  under15?:number;
  from15To24?:number;
  from25To49?:number;
  from50?:number;
}
export interface GenderProjection{
  keyword?:string;
  male?:number;
  female?:number;
  unknown?:number;
}
export interface DashboardConfirmationDto{
  recentByAdministrative?:RecentIndexProjection[];
  recentByTime?:RecentIndexProjection[];
  recentByGender?:TotalAndChildProjection[];
  recentByPopulation?:TotalAndChildProjection[];
  recentByAge?:TotalAndChildProjection[];
}
export interface RecentIndexProjection{
  code?: string;
  keyword?:string;
  positive?: number;
  testRecent?: number;
  recent?: number;
  tlvr?: number;
  confirmRecent?: number;
  percentPositive?:number;
}
export interface DashboardHivPersonDto{
  fromYear?: number;
  index90?: HivPersonIndexProjection;
  hivIndex?: HivConfirmationProjection[];
  hivIndexArv?: HivConfirmationProjection[];
  mapData?: MapDashboardDto;
  cumulativeByYear?: TotalAndChildProjection[];
  cumulativeByAdmins?: TotalAndChildProjection[];
  cumulativeByGender?: AgeProjection[];
  cumulativeByPopulation?: TotalAndChildProjection[];
  cumulativeByTransmission?: TotalAndChildProjection[];
  cumulativeByGenderAllYear?: GenderProjection[];
  populations?:DataChart;
  transmissions?: DataChart;
}
export interface HivPersonIndexProjection{
  estimated?:number;
  newCase?:number;
  treatment?:number;
  arv1000?:number;
  arv200?:number;
  missNewCase?:number;
  missTreatment?:number;
}
export interface HivConfirmationProjection{
  keyword?:string;
  total?: number;
  alive?: number;
  newCase?: number;
  dead?: number;
}
export class TodoItemNode {
  children: TodoItemNode[];
  name: string;
  id: string;
  code: string;
}
export class TodoItemFlatNode {
  name: string;
  level: number;
  expandable: boolean;
  id: string;
  code: string;
}
