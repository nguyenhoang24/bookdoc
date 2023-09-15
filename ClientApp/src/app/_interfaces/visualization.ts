export interface VisualizationSearch {
  fromDate?: Date;
  toDate?: Date;
  addressType?: number;
  province?: SystemCode;
  district?: SystemCode;
  gender?: string;
  age?: number;
  ageGroup?: number;
  ageRange?: number[];
  transmissionRoute?: string;
  populationGroup?: string;
  year?: number;
  ageType?: number;
  quarter?: number;
  administrativeCodes?: string[];
  treatmentFacility?: SystemCode;
  sizeFacility?: number;
  administrativeDistrictCodes?: string[];
  parentAdministrativeDistrictCode?: string;
  dataSources?: number;
  provinceID?: string;
  treatmentProvince?: SystemCode;
}
export interface SystemCode{
  name: string;
  code: string;
  display: string;
  definition: string;
}
export interface DashboardAliveDto{
  reportMap?: MapDto;
  totalPatient?:number;
  totalArv?:number;
  totalVlTest?: number;
  transmission?: GenderTransmissionRouteDto;
  listPopulationGroup?: PopulationGroupDto[];
  listBirthDateGroup?: BirthDateGroupDto[];
  riskBehaviorsList?:PopulationGroupDto[];
  occupationList?: PopulationGroupDto[];
}
export interface BirthDateGroupDto{
  birthDateGroup?:string;
  count?:number;
}
export interface ReportPatientHIVDto{
  target?:number;
  totalArv?:number;
  percentArv?:number;
  totalVlInhibition?:number;
  percentInhibition?:number;
  quantityPatientHIV?:number;
  percentPatientHIV?:number;
}
export interface DashboardNewAgeGenderDto{
  genderList?:GroupGenderAndDateDto[];
  oldList?:GroupOldAndDateDto[];
}
export interface DashboardPatientNewDto{
  reportMap?: MapDto;
  specification?: SpecificationDto;
  transmission?: GenderTransmissionRouteDto;
  listPopulationGroup?: PopulationGroupDto[]
}
export interface GenderTransmissionRouteDto{
  listMale?:TransmissionRouteDto[];
  listFemale?:TransmissionRouteDto[];
}
export interface TransmissionRouteDto{
  gender?:string;
  transmissionRoute?:string;
  count?:number
}
export interface SpecificationDto{
  totalPatient?:number;//số ca mới
  totalPatientInside?:number;
  totalPatientOutside?:number;
  totalArvInside?:number;
  totalArvOutside?:number;
  totalArv?:number;
  totalAlive?:number;
  totalAliveInside?:number;
  totalAliveOutside?:number;
  totalDead?:number;
}
export interface DashboardDto{
  reportPatient : ReportPatientHIVDto;
  reportList: ReportPatientOverTime[];
  reportMap: MapDto;
  listAlertRecency: NotificationDto[];
  listAlertHundredThousand: NotificationDto[];
  AlertNewCase: NotificationDto[];
}
export interface ReportPatientOverTime{
  totalPatientAlive?: number;
  totalPatientNew?: number;
  totalPatientDead?: number;
  totalPatient?: number;
  year?:string;
}
export interface MapDto{
  years?: string[];
  type?: string;
  reportListMap?: MapItemDto[];
}
export interface MapItemDto{
  province?:string;
  district?:string;
  provinceCode?:string;
  districtCode?:string;
  englishProvince?:string;
  englishDistrict?:string;
  percent?:number;
  count?:number;
  countDead?:number[];
  dataDead?:any
}
export interface DashboardArvDto{
  totalPatientArv?:number;
  totalPatientVlQualified?:number;
  totalPatientVl?:number;
  totalVlInhibition?:number;
  percentInhibition?:number;
  percentVL?:number;
  listGenderByYear?:GenderArvOverTimeDto[];
  listArvStatusOverTime?:ArvStatusDto[];
  listArvStatusByOPC?:ArvStatusDto[];
  listCD4Group?:CD4GroupByFacilityDto[];
  listHealthInsuranceGroup?:HealthInsuranceNumberGroupDto[];
  listVLTestArv?:VLTestByFacilityArvDto[];
  listVlInhibitionGroup?:VlInhibitionGroupDto[];
}
export interface VlInhibitionGroupDto{
  facility?:string;
  to200?:number;
  from200to1000?:number;
  from1000?:number;
}
export interface VLTestByFacilityArvDto{
  facility?:string;
  totalPatientArv?:number;//số Arv
  totalPatientVl?:number;//số bệnh nhân vl_test
  percentVL?:number;//phần trăm số bệnh nhân vl_test
}
export interface HealthInsuranceNumberGroupDto{
  facility?:string;
  unknown?:number;
  potency?:number;
  expire?:number;
  devoid?:number;
}
export interface CD4GroupByFacilityDto{
  facility?:string;
  to200?:number;
  from200to350?:number;
  from350to500?:number;
  from500?:number;
}
export interface ArvStatusDto{
  key?:string;
  newArv?:number;//Mới
  death?:number;//Chết
  drop?:number;//Bỏ trị
  transferIn?:number;//Chuyển đến
  transferOut?:number;//Chuyển đi
  reinitiation?:number;//điều trị lại
  time?:string;
}
export interface GenderArvOverTimeDto{
  key?:string;
  female?:number;
  male?:number;
  undefined?:number;
  year?:string;
}
export interface DashboardRecencyDto{
  totalAllPatient?:number;
  totalAllRapidTest?:number;
  totalAllRapidResult?:number;
  totalAllVlTest?:number;
  totalAllVlTestResult?:number;
  listDataTime?:RecencyDto[];
  listData?:RecencyDto[];
  reportMap?:MapDto;
}
export interface RecencyDto{
  key?:string;
  name?:string;
  totalAllPatient?:number;
  totalPatient?:number;
  totalRapidTest?:number;//số xét nghiệm nhanh nhiễm mới
  totalAllRapidTest?:number;
  totalRapidResult?:number;//số xét nghiệm nhanh nhiễm mới có kết quả Nhiễm mới
  totalAllRapidResult?:number;
  totalVlTest?:number;//số xét nghiệm vl_test mới có kết quả
  totalAllVlTest?:number;
  totalVlTestResult?:number;//số xét nghiệm vl_test mới có kết quả Nhiễm mới
  totalAllVlTestResult?:number;
  percent?:number;//tỷ lệ
}
export interface NotificationDto{
  address?:string;
  type?:string;
  count?:number;
  estimatedQuantity?:number;
  estimatePercent?:number;
  percent?:number;
}
export interface DashboardNewsPopulationDto{
  genderList?:GroupGenderAndDateDto[];
  oldList?: GroupOldAndDateDto[];
  reportMap?: MapDto;
  riskBehaviors?: DataChart;
  occupation?: DataChart;
  transition?: DataChart;
  populations?: DataChart;
}
export interface PopulationGroupDto{
  color?: string;
  populationGroup?: string;
  count?: number;
  percent?: number;
}
export interface GroupGenderAndDateDto{
  key?: string;
  female?:number;
  male?:number;
  undefined?:number;
}
export interface GroupOldAndDateDto{
  key?:number;
  under5?:number;
  under10?:number;
  under15?:number;
  under20?:number;
  under25?:number;
  under30?:number;
  under35?:number;
  under40?:number;
  under45?:number;
  under50?:number;
  other?:number; // trên 50
}
export interface DataChart{
  total?: number;
  categories?: string[];
  series?: SeriesData[];
}
export interface SeriesData{
  name?:string;
  color?:string;
  data?:number[];
}
export interface NRCArvDto{
  totalPatient?:number;
  totalArvConnection?:number;
  totalArv?:number;
  totalVltestQualified?:number;
  totalVltest?:number;
  totalVlInhibition?:number;
  totalVlTwoHundred?:number;
  healthInsuranceNumberGroup?:HealthInsuranceNumberGroupDto[];
  vlInhibitionGroup?:VlInhibitionGroupDto[];
  arvQuickOverTime?:TreatmentQuickDto[]
}
export interface TreatmentQuickDto{
  arvSeven?:number;
  arvNow?:number;
  percent?:number;
  time?:string;
}
export interface RecentArvDto{
  totalRapidResult?:number;//số xét nghiệm nhanh nhiễm mới có kết quả Nhiễm mới
  totalArv?:number;
  totalVltestQualified?:number;
  totalVlInhibition?:number;
  healthInsuranceNumberGroup?:HealthInsuranceNumberGroupDto[];
  vlInhibitionGroup?:VlInhibitionGroupDto[];
  arvQuickOverTime?:TreatmentQuickDto[];
}
export interface DashboardCoInfectionBCDto{
  vgcByTime?:VGBVGCDashboardDto[];
  vgcByOPC?:VGBVGCDashboardDto[];
  vgbByTime?:VGBVGCDashboardDto[];
  vgbByOPC?:VGBVGCDashboardDto[];
}
export interface VGBVGCDashboardDto{
  diagnostic?:number;
  treatment?:number;
  key?:string;
  total?:number;
  percentTreatment?:number;
}
export interface DashboardTbDto{
  tbTime?:TbDto[];
  tbByFacility?:TbDto[];
  tbDiagnosisByFacility?:TbDto[];
  tbByDiagnosisDate?:TbDto[];
  tbArvByFacility?:TbArvDto[];
}
export interface TbDto{
  facility?:string;
  started?:number;
  completed?:number;
  time?:string;
  percent?:number;//tỷ lệ
  total?:number;
}
export interface TbArvDto{
  facility?:string;
  from12?:number;
  to12?:number;
}
