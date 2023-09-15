import { AdministrativeUnit } from "./administrative-unit.model";
import { ValueSet } from "./value-set.model";

export class HIVOpc {
    id: string;
    fullName: string;
    code: string;
    gender: string;
    birthDate: Date;
    nationalId12: string
    nationalId9: string;
    ethnics: ValueSet;
    occupation: ValueSet;
    group: ValueSet
    hasInsurance: number;
    insuranceNr: string;
    insuranceType: number;
    insuranceSite: string;
    insuranceExpDate: Date;
    insurancePay: number
    insuranceRoute: number;
    patientPhone: string;
    permanentProvince: AdministrativeUnit;
    permanentDistrict: AdministrativeUnit;
    permanentCommune: AdministrativeUnit;
    permanentAddress: string;
    permanentAddressStress: string;
    permanentAddressGroup: string;
    temporalProvince: AdministrativeUnit;
    temporalDistrict: AdministrativeUnit;
    temporalCommune: AdministrativeUnit;
    temporalAddress: string;
    temporalAddressStress: string;
    temporalAddressGroup: string;
    supporterName: string;
    supporterRelationship: number;
    supporterPhone: String;

    constructor() {
        this.fullName = null;
        this.code = null;
        this.gender = null;
        this.birthDate = null;
        this.nationalId12 = null;
        this.nationalId9 = null;
        this.ethnics = null;
        this.occupation = null;
        this.group = null;
        this.hasInsurance = null;
        this.insuranceType = null;
        this.insuranceNr = null;
        this.insuranceSite = null;
        this.insuranceExpDate = null;
        this.insurancePay = null;
        this.insuranceRoute = null;
        this.patientPhone = null;
        this.permanentProvince = null;
        this.permanentDistrict = null;
        this.permanentCommune = null;
        this.permanentAddress = null;
        this.permanentAddressStress = null;
        this.permanentAddressGroup = null;
        this.temporalProvince = null;
        this.temporalDistrict = null;
        this.temporalCommune = null;
        this.temporalAddress = null;
        this.temporalAddressStress = null;
        this.temporalAddressGroup = null;
        this.supporterName = null;
        this.supporterRelationship = null;
        this.supporterPhone = null;

    }
}
