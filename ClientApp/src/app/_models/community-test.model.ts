import { Occupation } from "./occupation.model";
import { Ethnics } from "./ethnics.model";
import { PopulationGroup } from "./population-group.model";
import { RiskBehavior } from "./risk-behavior.model";
import { Reagent } from "./reagent.model";
import { Organization } from "./organization.model";
import { AdministrativeUnit } from "./administrative-unit.model";

export class RelatedPerson {
    id?: string = null;
    fullName: string = null;
    address?: string = null;
    phone: string = null;
    alertType?: string = null;
    isAgreePreTest?: string = null;
}

export class CommunityTest {
    id: string = null;
    code: string = null; // ma KH
    personName: string = null; // ten kh
    phoneNumber: string = null; // sdt
    birthDate: string = null; // nam sinh
    gender: string = null; // gioi tinh
    occupation?: Occupation = null; // nghe nghiep
    ethnicEx: Ethnics = null; // dan toc
    group: PopulationGroup = null; // nhom doi tuong
    riskBehaviors: RiskBehavior[] = []; // hanh vi nguy co
    identificationType: number = null; //loai giay to
    identityNumber: string = null;//so giay to
    hasTestBefore: number = null;
    recentTestTime: number = null;
    referralSource: string = null;//nguon gioi thieu
    permanentProvince: AdministrativeUnit = null;// tinh thuong chu
    permanentDistrict: AdministrativeUnit = null;// quan/huyen thuong chu
    permanentCommune: AdministrativeUnit = null;// xa/phuong thuong chu
    permanentAddress: string = null;// so nha thuong chu
    permanentAddressStress: string = null;// duong pho thuong tru
    permanentAddressGroup: string = null;// to ap khu pho thuong tru
    sendStatus: number | string = null;
    temporalProvince: AdministrativeUnit = null;// tinh cu chu
    temporalDistrict: AdministrativeUnit = null;// quan/huyen cu chu
    temporalCommune: AdministrativeUnit = null;// xa/phuong cu chu
    temporalAddress: string = null;// so nha cu chu
    temporalAddressStress: string = null;// duong pho cu tru
    temporalAddressGroup: string = null;// to ap khu pho cu tru
    //B
    testDate: Date | number = null; // ngay xet nhiem
    reagent: Reagent = null; // sinh pham
    controlLine: number = null; // vach chung
    testLine: number = null; // vach ket qua
    testResult: string = null; // ket qua xet nhiem
    isAgreeTest: boolean = null; //Kh dong y XN KD
    transferTo: Organization = null;//Co so co dinh chuyen den
    //C
    confirmationDate: string = null;//Ngay xet nhiem Kd
    confirmTestResult: number = null;//Ket qua xet nhiem Kd
    confirmLab: Organization = null;//Noi xet nhiem KD
    //D
    relatedPersons: RelatedPerson[] = null;
    //E
    treatmentTransferDate: Date | number = null;// Ngay chuyen gui
    treatmentTransferResult: number = null;// Ket qua chuyen gui
    treatmentOrg: Organization = null;//Noi chuyen gui den
    //Ngày đăng ký điều tri
    //Nơi đăng ký điều trị
    //
    note: string = null;
    arrivalSite: any = null;
    registerTherapyTime: Date | null = null;
    registeredTherapySite: string = null;
    sampleSentDate: Date | null = null;

    indexCaseCode: string = null;
    hivTestId?: number | string = null;
    voided?: boolean | number | string = null;
    birthYear?: string | number = null
    constructor() {
    }
}

export class ReportCommunity {
    groupId?: string = null; // Id Danh mục báo cáo
    groupName?: string = null; // Danh mục báo cáo
    code?: string = null;
    numberOfCommunity?: number = null; // Số người được tư vấn trước xét nghiệm
    numberOfIsAgreeTest?: number = null; // Tong so nguoi Số người được xét nghiệm HIV
    numberOfConfirmTestResult?: number = null; // Tong so nguoi Số người được xét nghiệm HIV - XN KD Duong tinh
    // Tạm thời cho numberOfTestResults,numberOfTestResultsPositive bằng numberOfIsAgreeTest, numberOfConfirmTestResult
    numberOfTestResults?: number = null; // Tong Số người nhận được kết quả xét nghiệm
    numberOfTestResultsPositive?: number = null; // Số người nhận được kết quả xét nghiệm - XN Duong tinh
    numberOfReferralSource?: number = null;  // referralSource == 2 (Số người xét nghiệm giới thiệu bởi bạn tình, bạn chích)
    numberOfTreatmentTransferResult?: number = null;// số người được điều trị thành công treatment_transfer_result == 1
    prioritySortAsc?: number = null; // lưu để Sort
}
