import { AdministrativeUnit } from "./administrative-unit.model";
import { Ethnics } from "./ethnics.model";
import { Occupation } from "./occupation.model";
import { Organization } from "./organization.model";
import { PermanentAddressStatus } from "./permanent-address-status.model";
import { PopulationGroup } from "./population-group.model";
import { RiskBehavior } from "./risk-behavior.model";
import { TransmissionRoute } from "./transmission-route";
import { ValueSet } from "./value-set.model";


export class HIVPerson {
  tab: number;
  id: string;
  // A. Thông tin khách hàng
  connectTreatmentStatus: number;
  hasReview:number
  fullName: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: string;
  nationalId12: string;
  nationalId9: string;
  hasInsurance: number;
  insuranceNr: string;
  insuranceExpiredDate: Date;
  phoneNumber: string;
  passportNr: string;
  driverLicense: string;
  identificationType: number;
  identityNumber: number;
  transmissionRoute: TransmissionRoute;
  ethnics: Ethnics;
  occupation: Occupation;
  permanentProvince: AdministrativeUnit;
  permanentDistrict: AdministrativeUnit;
  permanentCommune: AdministrativeUnit;
  permanentAdminUnit: AdministrativeUnit;
  permanentAddress: string;
  permanentAddressStress: string;
  permanentAddressGroup: string;
  temporalProvince: AdministrativeUnit;
  temporalDistrict: AdministrativeUnit;
  temporalCommune: AdministrativeUnit;
  temporalAddress: string;
  temporalAddressStress: string;
  temporalAddressGroup: string;
  riskBehaviors: RiskBehavior[];
  group: PopulationGroup;
  specimenCollectionLab: string;
  confirmLab: string;
  hivConfirmCode: string;
  confirmationDate: Date;
  receivingStatus: number;
  updateStatus: number;
  permanentAddressStatus: string;
  valueSetDto: ValueSet;
  voided: boolean;
  isUpdate: boolean;
  updateReceivingStatus: number;
  provinceUUID?: string;
  assignedByVaac ?: boolean;
  vaacRequestReviewProvinceID?: string;

  constructor() {
    // A
    // this.id = null;
    this.fullName = null;
    this.firstName = null;
    this.lastName = null;
    this.birthDate = null;
    this.birthDate = null;
    this.gender = null;
    this.identificationType = null;
    this.nationalId12 = null;
    this.nationalId9 = null;
    this.hasInsurance = null;
    this.insuranceNr = null;
    this.insuranceExpiredDate = null;
    this.phoneNumber = null;
    this.passportNr = null;
    this.driverLicense = null;
    this.transmissionRoute = null;
    this.ethnics = null;
    this.occupation = null;
    this.permanentProvince = null;
    this.permanentDistrict = null;
    this.permanentCommune = null;
    this.permanentAdminUnit = null;
    this.permanentAddress = null;
    this.permanentAddressStress = null;
    this.permanentAddressGroup = null;
    this.temporalProvince = null;
    this.temporalAddress = null;
    this.temporalAddressStress = null;
    this.temporalAddressGroup = null;
    this.temporalDistrict = null;
    this.temporalCommune = null;
    this.riskBehaviors = [];
    this.group == null;
    this.specimenCollectionLab = null;
    this.confirmLab = null;
    this.hivConfirmCode = null;
    this.confirmationDate = null;
    this.receivingStatus = null;
    this.updateStatus = null;
    this.permanentAddressStatus = null;
    this.valueSetDto = null;
    this.voided = false;
    this.isUpdate =false;
  }
  setId(id: string): void {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }
}

export class HIVPersonExcel extends HIVPerson {
  acceptPermanentTime: any;
  acceptTime: any;
  aidsStatus: any;
  aidsStatusDate: any;
  arvDate: any;
  bloodBaseID: any;
  canNotConfirm: any;
  changeTreatmentDate: any;
  checkDistrictTime: any;
  checkProvinceTime: any;
  checkWardTime: any;
  codeHiv40: any;
  confirmProvinceTime: any;
  confirmationTestDto: any;
  connectTreatmentStatus: any;
  createDate: any;
  createdBy: any;
  csPatientId: any;
  currentCd4: any;
  currentCd4Date: Date;
  currentVl: any;
  currentVlDate: any;
  deathCause: any;
  deathDate: any;
  deathReportDate: any;
  deterministic: any;
  duplicated: any;
  duplicatedId: any;
  endDate: any;
  endReason: any;
  ethnicEx: any;
  firstArvDate: any;
  firstCd4: any;
  firstCd4Date: Date;
  firstRegimen: any;
  firstVl: Number;
  firstVlDate: Date;
  fullPermanentAddress: String;
  fullTemporalAddress: String;
  hivStage: String;
  hivStageDate: Date;
  inputDate: Date;
  isDuplicated: any;
  latlngTime: any;
  modifiedBy: any;
  modifyDate: Date;
  mpiCode: String;
  note: Date;
  opcCode: String;
  placeOfTreatment: String;
  probabilistic: any;
  reasonCanNotConfirm: any;
  receivingDate: Date;
  recencyConclusion: any;
  recencyDate: Date;
  recencyReagent: any;
  recencyResult: any;
  refID: String;
  refOpcID: String;
  refParentID: String;
  regimen: String;
  registrationDate: Date;
  registrationType: String;
  requestProvintTime: String;
  requestTime: String;
  requestVaacTime: String;
  reviewDistrictTime: String;
  reviewProvinceTime: String;
  reviewVaacTime: String;
  reviewWardTime: String;
  rightCase: String;
  screeningTestDto: String;
  siteConfirmID: String;
  source: String;
  sourceQuery: String;
  startTreatmentTime: String;
  status: String;
  statusOfChangeTreatment: String;
  statusOfTreatment: String;
  symptom: String;
  syncOrgCode: String;
  syncOrgName: String;
  transferringDate: String;
  transferringType: String;
  updatedPacTime: String;
  vlDate: Date;
  vlNumber: String;
  vlResult: String;
  constructor() {
    super();
    this.acceptPermanentTime = null;
    this.acceptTime = null;
    this.aidsStatus = null;
    this.aidsStatusDate = null;
    this.arvDate = null;
    this.bloodBaseID = null;
    this.canNotConfirm = null;
    this.changeTreatmentDate = null;
    this.checkDistrictTime = null;
    this.checkProvinceTime = null;
    this.checkWardTime = null;
    this.codeHiv40 = null;
    this.confirmProvinceTime = null;
    this.confirmationTestDto = null;
    this.connectTreatmentStatus = null;
    this.createDate = null;
    this.createdBy = null;
    this.csPatientId = null;
    this.currentCd4 = null;
    this.currentCd4Date = null;
    this.currentVl = null;
    this.currentVlDate = null;
    this.deathCause = null;
    this.deathDate = null;
    this.deathReportDate = null;
    this.deterministic = null;
    this.duplicated = null;
    this.duplicatedId = null;
    this.endDate = null;
    this.endReason = null;
    this.ethnicEx = null;
    this.firstArvDate = null;
    this.firstCd4 = null;
    this.firstCd4Date = null;
    this.firstRegimen = null;
    this.firstVl = null;
    this.firstVlDate = null;
    this.fullPermanentAddress = null;
    this.fullTemporalAddress = null;
    this.hivStage = null;
    this.hivStageDate = null;
    this.inputDate = null;
    this.isDuplicated = null;
    this.latlngTime = null;
    this.modifiedBy = null;
    this.modifyDate = null;
    this.mpiCode = null;
    this.note = null;
    this.opcCode = null;
    this.placeOfTreatment = null;
    this.probabilistic = null;
    this.reasonCanNotConfirm = null;
    this.receivingDate = null;
    this.recencyConclusion = null;
    this.recencyDate = null;
    this.recencyReagent = null;
    this.recencyResult = null;
    this.refID = null;
    this.refOpcID = null;
    this.refParentID = null;
    this.regimen = null;
    this.registrationDate = null;
    this.hasReview = null
  }
}