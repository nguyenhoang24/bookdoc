import { AdministrativeUnit } from "./administrative-unit.model";
import { Ethnics } from "./ethnics.model";
import { HealthOrganization } from "./health-organization.model";
import { Occupation } from "./occupation.model";
import { PopulationGroup } from "./population-group.model";
import { RiskBehavior } from "./risk-behavior.model";
import { TransmissionRoute } from "./transmission-route";

export class HivTest {
    source?: string = null;// nguon
    code?: string = null;
    personName: string = null; // Tên khách hàng
    phoneNumber: string = null; // SĐT
    birthDate: string = null; // Năm sinh
    gender: string = null; // Giới tính
    testResult?: number = null;// Kết quả xét nghiệm sẽ cần map sang từ hệ thống cũ, hệ thống cũ thì dùng
    identificationType?: number = null;//  Loại giấy tờ 1: cccd 2: cmnd 3: giay phep lai xe 4: ho chieu
    identityNumber?: string = null;// Số giấy tờ
    insuranceNr?: string = null; // Mã số thẻ bhyt
    hasInsurance?: string = null; // Thẻ bhyt
    ethnicEx?: Ethnics = null;
    occupation: Occupation = null;
    permanentProvince?: AdministrativeUnit = null;// tinh thuong chu
    permanentDistrict?: AdministrativeUnit = null;// quan/huyen thuong chu
    permanentCommune?: AdministrativeUnit = null;// xa/phuong thuong chu
    permanentAddress?: string = null;// so nha thuong chu
    permanentAddressStress?: string = null;// duong pho thuong tru
    permanentAddressGroup?: string = null;// to ap khu pho thuong tru
    temporalProvince?: AdministrativeUnit = null;// tinh cu tru
    temporalDistrict?: AdministrativeUnit = null;// quan/huyen cu chu
    temporalCommune?: AdministrativeUnit = null;// xa/phuong cu chu
    temporalAddress?: string = null;// so nha cu tru
    temporalAddressStress?: string = null;// duong pho cu tru
    temporalAddressGroup?: string = null;// to ap khu pho cu tru
    riskBehaviors?: RiskBehavior[] = [];
    relatedPersons: HivRelatedPerson[] = [];
    group?: PopulationGroup = null; // Nhóm đối tượng
    confirmationDate?: Date | number = null; // Ngày xét nghiệm khẳng định
    confirmTestResult?: number = null;// Kết quả xét nghiệm khẳng định
    confirmLab: HealthOrganization;// Đơn vị xét nghiệm khẳng định
    registeredTherapySite?: string = null;// noi dang ky dieu tri//phan mem cu la string
    registerTherapyTime?: Date | number = null;// ngay dang ký dieu tri
    registerProvince?: AdministrativeUnit = null; // tỉnh D5.1 screnning test
    registerDistrict?: AdministrativeUnit = null; // quận D5.2 screnning test
    exchangeProvince?: AdministrativeUnit = null; // don vi hanh chinh chuyen gui
    exchangeDistrict?: AdministrativeUnit = null; // don vi hanh chinh chuyen gui
    therapyCode?: string = null;// ma so dieu tri
    fullPermanentAddress?: string = null;// dia chi thuong chu
    fullTemporalAddress?: string = null;// dia chi cu tru
    transmissionRoute?: TransmissionRoute;  // Duong lay truyen
    codeHiv40?: number = null;
    note?: string = null;
}

export class HivRelatedPerson {
    hivTestId?: string = null;
    fullName?: string = null;
    phone?: string = null;
    address?: string = null;
    alertType?: string = null;
    isAgreePreTest?: string = null;
    hivTestcode?: string = null;// mã khách hàng
    hivTestname?: string = null; // họ và tên khách hàng
}