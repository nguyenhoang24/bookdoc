import {PopulationGroup} from 'src/app/_models/population-group.model';
import {AdministrativeUnit} from './administrative-unit.model';
import {HealthOrganization} from './health-organization.model';
import {Reagent} from './reagent.model';
import { RiskBehavior } from './risk-behavior.model';

export class Confirmationtest {
  id: string;
  code: string;
  personName: string;
  gender: string;
  birthDate: Date;
  identificationType: number;
  identityNumber: string;

  groupDto: PopulationGroup[];
  group: PopulationGroup[];
  riskBehaviors: RiskBehavior[];
  confirmLab: HealthOrganization[];
  sampleSentSource: string;
  specimenCollectedLab: HealthOrganization[];
  transmissionRoute: Reagent;
  insuranceNr: string;
  hasInsurance: number;
  screeningTestCode: string;
  specimenTransferDate: Date;
  screeningTestResult: number;
  serviceCode: string;
  specimenQuality: number;
  dateOfSpecimen: Date;

  permanentProvince: AdministrativeUnit;// tinh thuong chu
  permanentDistrict: AdministrativeUnit;// quan/huyen thuong chu
  permanentCommune: AdministrativeUnit;// xa/phuong thuong chu
  permanentAddress: string;// so nha thuong chu
  permanentAddressStress: string;// duong pho thuong tru
  permanentAddressGroup: string;// to ap khu pho thuong tru

  temporalProvince: AdministrativeUnit;// tinh cu chu
  temporalDistrict: AdministrativeUnit;// quan/huyen cu chu
  temporalCommune: AdministrativeUnit;// xa/phuong cu chu
  temporalAddress: string;// so nha cu chu
  temporalAddressStress: string;// duong pho cu tru
  temporalAddressGroup: string;// to ap khu pho cu tru

  archiveCode: string;
  confirmTestResult: number;
  confirmationDate: Date;
  labTechnicianCode: string;
  specimenReceiveDate: Date;

  reagent1: Reagent[];
  reagent2: Reagent[];
  reagent3: Reagent[];
  reagentResult: number;
  reagent1TestDate: Date;
  reagent2Result: number;
  reagent2TestDate: Date;
  reagent3Result: number;
  reagent3TestDate: Date;
  otherTechnique: string;

  recencyReagent: Reagent;
  recencyDate: Date;
  recencyResult: string;
  vlDate: Date;
  vlNumber: number;
  vlResult: string;
  recencyConclusion: string;

  note: string;
  certificateFile: string;
  updateInfoStatus: number;

  birthYear: number;
  sendStatus: string
  hivPersonTransferring: number;

  constructor() {
    this.id = "";
    this.code = "";
    this.personName = "";
    this.gender = "";
    this.birthDate = null;
    this.identificationType = null;
    this.identityNumber = "";

    this.groupDto = [];
    this.group = [];
    this.riskBehaviors = [];
    this.confirmLab = [];
    this.sampleSentSource = "";
    this.specimenCollectedLab = [];
    this.transmissionRoute = null;
    this.insuranceNr = "";
    this.hasInsurance = null;
    this.screeningTestCode = "";
    this.specimenTransferDate = null;
    this.screeningTestResult = null;
    this.serviceCode = "";
    this.specimenQuality = null;
    this.dateOfSpecimen = null;

    this.archiveCode = "";
    this.confirmTestResult = null;
    this.confirmationDate = null;
    this.labTechnicianCode = "";
    this.specimenReceiveDate = null;

    this.reagent1 = [];
    this.reagent2 = [];
    this.reagent3 = [];
    this.reagentResult = null;
    this.reagent1TestDate = null;
    this.reagent2Result = null;
    this.reagent2TestDate = null;
    this.reagent3Result = null;
    this.reagent3TestDate = null;
    this.otherTechnique = "";

    // this.recencyReagent: Reagent;
    this.recencyDate = null;
    this.recencyResult = "";
    this.vlDate = null;
    this.vlNumber = null;
    this.vlResult = "";
    this.recencyConclusion = "";
    this.sendStatus = ""
    this.note = "";
    this.birthYear = null;
    this.hivPersonTransferring = null;
  }
}
