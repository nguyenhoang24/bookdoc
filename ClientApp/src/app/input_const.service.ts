import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConfigInitService } from 'src/app/init/config-init.service';
import { Observable } from 'rxjs';
import { ValueCode } from './_models/value_code.model';

@Injectable({
  providedIn: 'root'
})

export class InputConstService {
  constructor(private http: HttpClient, private configInitService: ConfigInitService) {
  }

  requestHeaders = new HttpHeaders()
  private readonly END_POINT = this.configInitService.apiBaseUrl + '/api/v1/value_code';
  private readonly END_POINT_VALUESET = this.configInitService.apiBaseUrl + '/api/v1/value_set';

  //kết quả xét nghiệm sàng lọc
  listScreeningTestResults(): Observable<ValueCode[]> {
    let url = this.END_POINT + "/getList-test-results";
    return this.http.get<ValueCode[]>(url, { headers: this.requestHeaders, responseType: "json" });
  }

  //kết quả xét nghiệm khẳng định
  listConfirmTestResult(): Observable<ValueCode[]> {
    let url = this.END_POINT + "/getList-test-results-confirm";
    return this.http.get<ValueCode[]>(url, { headers: this.requestHeaders, responseType: "json" });
  }

  // Bậc phác đồ
  LIST_REGIMEN_TYPE() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-treatment-reginmen-stage";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Loại bảo hiểm
  listInsuranceType() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-insurance-type";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Loại thanh toán BHYT
  listInsurancePay() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-insurance-pay";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  ////    // Lựa chọn thẻ BHYT
  listHasHealthInsurance(): Observable<ValueCode[]> {
    let url = this.END_POINT + "/getList-has-health-insurance";
    return this.http.get<ValueCode[]>(url, { headers: this.requestHeaders, responseType: "json" });
  }

  // Trạng thái chuyển gửi điều trị

  sendStatus() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-therapy-exchange-status";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Tuyến đăng kí bảo hiểm
  listInsuranceRoute() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-route";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Nguồn giới thiệu
  listReferralSources(): Observable<ValueCode[]> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-referent-source";
    return this.http.get<ValueCode[]>(url, { headers: this.requestHeaders, responseType: "json" });
  }

  // Loại bệnh nhân
  listCustomerType(): Observable<ValueCode[]> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-customer-type";
    return this.http.get<ValueCode[]>(url, { headers: requestHeaders, responseType: "json" });
  }

  // KQXN tlvr
  listKQXNVirus() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-virus-load";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Trạng thái GSPH
  listGSP_status() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-gsph-status";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Chất lượng mẫu
  ListSpecimenQuality() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-sample-quality";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Kết quả Xn kháng nguyên kháng thể
  listAntigenAntibodyResults(): Observable<ValueCode[]> {
    let url = this.END_POINT + "/getList-result-anti";
    return this.http.get<ValueCode[]>(url, { headers: this.requestHeaders, responseType: "json" });
  }

  // Lần xét nghiệm gần nhất
  listRecentTestTime(): Observable<ValueCode[]> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-most-recent-test";
    return this.http.get<ValueCode[]>(url, { headers: requestHeaders, responseType: "json" });
  }

  // Khách hàng đến cơ sở TVXN cố định để nhận dịch vụ (note)
  // listcounsellingService() {
  //   var requestHeaders = new HttpHeaders();
  //   let url = this.END_POINT + "/getList-fixed-service";
  //   return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  // }

  // Kết quả XN HIV bổ sung
  listPcrHivResult() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-result-pcrHiv";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // dịch vụ tư vấn chuyển gửi
  listCounsellingServices() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-exchange-service";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // loại hình xnkd
  listConfirmationTestTypes() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-confirm-type";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Phương pháp xn sàng lọc
  listTestAlgorithms(): Observable<ValueCode[]> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-test-method";
    return this.http.get<ValueCode[]>(url, { headers: requestHeaders, responseType: "json" });
  }

  // Kết luận chuẩn đoán nhiễm mới
  listRecencyResult(): Observable<ValueCode[]> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-early-diagnose";
    return this.http.get<ValueCode[]>(url, { headers: requestHeaders, responseType: "json" });
  }

  // Kết quả sinh phẩm
  listReagentResult() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-bio-name-result";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Tình trạng AIDS
  listAIDSStatus() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-aids-status";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // // Triệu chứng lâm sàn
  // listAIDSStatus() {
  //   var requestHeaders = new HttpHeaders();
  //   let url = this.END_POINT + "/getList-sysmptom";
  //   return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  // }

  // Giai đoạn lâm sàng
  listHivStage() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-clinical-stage";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Kết quả tvcgdt ARV
  listArvExchangeResult(): Observable<ValueCode[]> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-arv-consultant-exchange-result";
    return this.http.get<ValueCode[]>(url, { headers: requestHeaders, responseType: "json" });
  }

  // Kết quả tư vấn cung cấp thông tin thực hiện xét nghiệm theo dấu bạn tình/bạn chích
  listTracingTestResult(): Observable<ValueCode[]> {
    let url = this.END_POINT + "/getList-partner-info-provide-result";
    return this.http.get<ValueCode[]>(url, { headers: this.requestHeaders, responseType: "json" });
  }

  // Thể lao
  listTbVariant(): Observable<ValueCode[]> {
    let url = this.END_POINT + "/getList-lao-variable";
    return this.http.get<ValueCode[]>(url, { headers: this.requestHeaders, responseType: "json" });
  }

  // ĐỐi chiếu thông tin cá nhân
  listPatientIDAuthen(): Observable<ValueCode[]> {
    let url = this.END_POINT + "/getList-info-compare";
    return this.http.get<ValueCode[]>(url, { headers: this.requestHeaders, responseType: "json" });
  }

  // // ĐỐi chiếu thông tin cá nhân
  // listAlertType() {
  //   var requestHeaders = new HttpHeaders();
  //   let url = this.END_POINT + "/getList-alert-type";
  //   return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  // }

  // Hình thức thông báo
  listAlertType(): Observable<ValueCode[]> {
    let url = this.END_POINT + "/getList-alert-type";
    return this.http.get<ValueCode[]>(url, { headers: this.requestHeaders, responseType: "json" });
  }

  // Trạng thái chuyển gửi điều trị
  listTreatmentStatus() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-status-of-treatment";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Kết quả XN nhiễm mới bằng sinh phẩm nhanh
  listKQXNNewInfection() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-asante-infect-test";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Loại đăng ký
  listRegistrationType() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-registration-type";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Lý do tử vong
  listReasonsDeath() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-cause-of-death";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Lý do kết thúc
  listReasonEnd() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-stop-registration-reason";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Trạng thái biến động điều trị
  listStateTreatment() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-status-of-change-treatment";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  listPermanentServiceCode() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-fixed-service";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Triệu chứng lâm sàn
  listSymptoms() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-sysmptom";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  //Lựa chọn thẻ BHYT
  check() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-has-health-insurance";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  //Đường lây nhiễm
  listTransmissionRouteConfirm() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-mode-of-transmisssion";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }


  //Dịch vụ elog - Thiếu bạn tình , bạn chích
  listServiceCode(): Observable<ValueCode[]> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-service-test";
    return this.http.get<ValueCode[]>(url, { headers: requestHeaders, responseType: "json" });
  }

  // KQXN tlvr
  listVlResult(): Observable<ValueCode[]> {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-virus-load";
    return this.http.get<ValueCode[]>(url, { headers: requestHeaders, responseType: "json" });
  }
  //Hiv info Hiện trạng cư trú - tình trạng hiện tại
  listStatusOfResidentID() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT_VALUESET + "/getListValue";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  listSources() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/get-service";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }

  // Kết quả tvcgdt ARV
  getListArvConsultantExchangeResult() {
    var requestHeaders = new HttpHeaders();
    let url = this.END_POINT + "/getList-arv-consultant-exchange-result";
    return this.http.get(url, { headers: requestHeaders, responseType: "json" });
  }
}

export const yesno: any[] = [
  { id: 1, code: "1", name: "Có", value: true },
  { id: 2, code: "2", name: "Không", value: false }
];

export const LIST_YES_NO = [
  { id: 1, code: "1", name: "Có", value: true },
  { id: 2, code: "2", name: "Không", value: false }
]

export const LIST_COUNSELLING_SERVICES: any[] = [
  { id: '2', name: 'Khám và sàng lọc lao' },
  { id: '3', name: 'Các bệnh lây truyền qua đường tình dục' },
  { id: '4', name: 'MMT' },
  { id: '5', name: 'Khác' }
]

export const LIST_TEST_RESULT = [
  { id: 1, name: "Có phản ứng" },
  { id: 2, name: "Không phản ứng" },
  { id: 3, name: "Không xác định" }
];

export const LIST_IDENTIFICATION_TYPE = [
  { id: 1, name: "Căn cước công dân" },
  { id: 2, name: "Chứng minh nhân dân" },
  { id: 3, name: "Giấy phép lái xe" },
  { id: 4, name: "Hộ chiếu" }
];

export const LIST_GENDER: any[] = [
  { id: "M", name: 'Nam' },
  { id: "F", name: 'Nữ' },
  { id: "U", name: 'Không rõ' },
];
export const listGender: any[] = [
  { id: "M", name: 'Nam', value: '1' },
  { id: "F", name: 'Nữ', value: '2' },
  { id: "U", name: 'Không rõ', value: '3' },
];

export const LIST_TREATMENT_TRANSFER_RESULT: any[] = [
  { id: 1, name: "Thành công" },
  { id: 2, name: "Không thành công" }
]
export const province: any[] = [
  { id: "01", name: 'Hà Nội', code: "001" },
  { id: "02", name: 'Hà Giang', code: "002" },
  { id: "04", name: 'Cao Bằng', code: "004" },
  { id: "06", name: 'Bắc Kạn', code: "006" },
  { id: "08", name: 'Tuyên Quang', code: "008" },
  { id: "10", name: 'Lào Cai', code: "010" },
  { id: "11", name: 'Điện Biên', code: "011" },
  { id: "12", name: 'Lai Châu', code: "012" },
  { id: "14", name: 'Sơn La', code: "014" },
  { id: "15", name: 'Yên Bái', code: "015" },
  { id: "17", name: 'Hòa Bình', code: "017" },
  { id: "19", name: 'Thái Nguyên', code: "019" },
  { id: "20", name: 'Lạng Sơn', code: "020" },
  { id: "22", name: 'Quảng Ninh', code: "022" },
  { id: "24", name: 'Bắc Giang', code: "024" },
  { id: "25", name: 'Phú Thọ', code: "025" },
  { id: "26", name: 'Vĩnh Phúc', code: "026" },
  { id: "27", name: 'Bắc Ninh', code: "027" },
  { id: "30", name: 'Hải Dương', code: "030" },
  { id: "31", name: 'Hải Phòng', code: "031" },
  { id: "33", name: 'Hưng Yên', code: "033" },
  { id: "34", name: 'Thái Bình', code: "034" },
  { id: "35", name: 'Hà Nam', code: "035" },
  { id: "36", name: 'Nam Định', code: "036" },
  { id: "37", name: 'Ninh Bình', code: "037" },
  { id: "38", name: 'Thanh Hóa', code: "038" },
  { id: "40", name: 'Nghệ An', code: "040" },
  { id: "42", name: 'Hà Tĩnh', code: "042" },
  { id: "44", name: 'Quảng Bình', code: "044" },
  { id: "45", name: 'Quảng Trị', code: "045" },
  { id: "46", name: 'Thừa Thiên Huế', code: "046" },
  { id: "48", name: 'Đà Nẵng', code: "048" },
  { id: "49", name: 'Quảng Nam', code: "049" },
  { id: "51", name: 'Quảng Ngãi', code: "051" },
  { id: "52", name: 'Bình Định', code: "052" },
  { id: "54", name: 'Phú Yên', code: "054" },
  { id: "56", name: 'Khánh Hòa', code: "056" },
  { id: "58", name: 'Ninh Thuận', code: "058" },
  { id: "60", name: 'Bình Thuận', code: "060" },
  { id: "62", name: 'Kon Tum', code: "062" },
  { id: "64", name: 'Gia Lai', code: "064" },
  { id: "66", name: 'Đắk Lắk', code: "066" },
  { id: "67", name: 'Đắk Nông', code: "067" },
  { id: "68", name: 'Lâm Đồng', code: "068" },
  { id: "70", name: 'Bình Phước', code: "070" },
  { id: "72", name: 'Tây Ninh', code: "072" },
  { id: "74", name: 'Bình Dương', code: "074" },
  { id: "75", name: 'Đồng Nai', code: "075" },
  { id: "77", name: 'Bà Rịa - Vũng Tàu', code: "077" },
  { id: "79", name: 'Hồ Chí Minh', code: "079" },
  { id: "80", name: 'Long An', code: "080" },
  { id: "82", name: 'Tiền Giang', code: "082" },
  { id: "83", name: 'Bến Tre', code: "083" },
  { id: "84", name: 'Trà Vinh', code: "084" },
  { id: "86", name: 'Vĩnh Long', code: "086" },
  { id: "87", name: 'Đồng Tháp', code: "087" },
  { id: "89", name: 'An Giang', code: "089" },
  { id: "91", name: 'Kiên Giang', code: "091" },
  { id: "92", name: 'Cần Thơ', code: "092" },
  { id: "93", name: 'Hậu Giang', code: "093" },
  { id: "94", name: 'Sóc Trăng', code: "094" },
  { id: "95", name: 'Bạc Liêu', code: "095" },
  { id: "96", name: 'Cà Mau', code: "096" },
];
export const listPermanentServiceCode = [
  { id: '1', name: "Xét nghiệm sàng lọc" },
  { id: '2', name: "Lấy máu hỗ trợ xét nghiệm khẳng định" },
];

// Trang thai chuyen gui toi co so xet nhiem
export const LIST_AGREE_PRE_TEST = [
  { id: '1', name: 'Chưa chuyển' },
  { id: '2', name: 'Đã chuyển' },
  { id: '3', name: 'Đã tiếp nhận' },
];

//Trang thai xet nhiem cua ban tinh ban chinh
export const PARTNER_STATUS = [
  { id: '1', name: 'Có' },
  { id: '2', name: 'Không' }
];
// Trang thai chuyen gui toi co so xet nhiem
export const LIST_AGREE_PRE_TEST_RECEIVES = [
  { id: '2', name: 'Chưa tiếp nhận' },
  { id: '3', name: 'Đã tiếp nhận' },
]

export const listTypeValue = [
  { id: "NUMBER", name: "Số", trans_key: "typeValue.number" },
  { id: "STRING", name: "Chuỗi", trans_key: "typeValue.string" },
  { id: "DATE", name: "Ngày", trans_key: "typeValue.date" },
  { id: "CHOICE", name: "Lựa chọn", trans_key: "typeValue.choice" }
];

export const listTypeDataming = [
  { id: "alertRecency", name: "Cảnh báo nhiễm mới" },
  { id: "AlertHundredThousand", name: "Cảnh báo tỉ lệ trên ngưỡng 100.000"},
  { id: "AlertNewCase", name: "Cảnh báo mới nhiễm " },

];

export const ColumnSearchs = [
  { value: "name", name: "Name" },//
  { value: "lastName", name: "Last name" },//
  { value: "firstName", name: "First name" },//
  { value: "phoneNumber", name: "Phone number" },//
  { value: "englishName", name: "English name" },//
  { value: "syncOrg_code", name: "SyncOrg: code" },//
  { value: "syncOrg_display", name: "SyncOrg: name" },//
  { value: "birthDate", name: "Birth date" },//
  { value: "ethnicityCode", name: "Ethnicity: code" },//
  { value: "ethnicityName", name: "Ethnicity: name" },//
  { value: "artID", name: "ART ID" },//
  { value: "nationalID", name: "National ID" },//
  { value: "nationalID12", name: "National ID12" },//
  { value: "healthInsuranceNumber", name: "Health Insurance Number" },//
  { value: "passportNumber", name: "Passport Number" },//
  { value: "currentAddressCityCode", name: "Current Address - City: Code" },//
  { value: "currentAddressCityName", name: "Current Address - City: Name" },//
  { value: "currentAddressDistrictCode", name: "Current Address - District: Code" },//
  { value: "currentAddressDistrictName", name: "Current Address - District: Name" },//
  { value: "currentAddressCommuneCode", name: "Current Address - Commune: Code" },//
  { value: "currentAddressCommuneName", name: "Current Address - Commune: Name" },//
  { value: "currentAddress", name: "Current Address" },//
  { value: "currentAddressCountryCode", name: "Current Address - Country: Code" },//
  { value: "currentAddressCountryName", name: "Current Address - Country: Name" },//
  { value: "registeredAddressCityCode", name: "Registered Address - City: Code" },//
  { value: "registeredAddressCityName", name: "Registered Address - City: Name" },//

  { value: "registeredAddressDistrictCode", name: "Registered Address - District: Code" },//
  { value: "registeredAddressDistrictName", name: "Registered Address - District: Name" },//
  { value: "registeredAddressCommuneCode", name: "Registered Address - Commune: Code" },//
  { value: "registeredAddressCommuneName", name: "Registered Address - Commune: Name" },//
  { value: "registeredAddress", name: "Registered Address" },//
  { value: "registeredAddressCountryCode", name: "Registered Address - Country: Code" },//
  { value: "registeredAddressCountryName", name: "Registered Address - Country: Name" },////
  { value: "occupationCode", name: "Occupation: Code" },//
  { value: "occupationDisplay", name: "Occupation: Display" },//
  { value: "indexTestingIndexCaseNationalId12", name: "Index Testing Index Case National Id12" },//
  { value: "indexTestingIndexCaseNationalId9", name: "Index Testing Index Case National Id9" },//
  { value: "indexTestingIndexCaseUid", name: "Index Testing Index Case Uid" },//
  { value: "riskPopulationsCode", name: "Risk Populations Code" },//
  { value: "riskPopulationsDisplay", name: "Risk Populations Display" },////
  { value: "riskBehaviorsCode", name: "Risk Behaviors Code" },//
  { value: "riskBehaviorsDisplay", name: "Risk Behaviors Display" },//
  { value: "transmissionRoutesCode", name: "Transmission Routes Code" },//
  { value: "transmissionRoutesDisplay", name: "Transmission Routes Display" },//
  { value: "regimensStartDate", name: "Regimens Start Date" },//
  { value: "regimensEndDate", name: "Regimens End Date" },//
  { value: "regimensCode", name: "Regimens Code" },//
  { value: "regimensName", name: "Regimens Name" },//
  { value: "cd4ListTestPerformanceDate", name: "CD4 Test Performance Date" },//
  { value: "cd4ListSpecimenCollectionDate", name: "CD4 Specimen Collection Date" },//
  { value: "cd4ListValueNumber", name: "CD4 Value Number" },//
  { value: "cd4ListName", name: "CD4 Name" },//
  { value: "cd4ListStringValue", name: "CD4 String Value" },//
  { value: "cd4ListSpecimenCollectionPlace", name: "CD4 Specimen Collection Place" },//
  { value: "cd4ListLabTestId", name: "CD4 LabTestId" },//
  { value: "cd4ListSpecimenId", name: "CD4 SpecimenId" },//
  { value: "cd4ListTestResultOtherCode", name: "CD4 Test Result Other Code" },//
  { value: "cd4ListTestResultOtherDisplay", name: "CD4 Test Result Other Display" },//
  { value: "viralLoadListTestPerformanceDate", name: "VL Test Performance Date" },//
  { value: "viralLoadListSpecimenCollectionDate", name: "VL Specimen Collection Date" },//
  { value: "viralLoadListValueNumber", name: "VL Value Number" },//
  { value: "viralLoadListName", name: "VL Name" },//
  { value: "viralLoadListStringValue", name: "VL String Value" },//
  { value: "viralLoadListSpecimenCollectionPlace", name: "VL Specimen Collection Place" },//
  { value: "viralLoadListLabTestId", name: "VL LabTestId" },//
  { value: "viralLoadListSpecimenId", name: "VL SpecimenId" },//
  { value: "viralLoadListTestResultOtherCode", name: "VL Test Result Other Code" },//
  { value: "viralLoadListTestResultOtherDisplay", name: "VL Test Result Other Display" },//

  { value: "drugResistanceListTestPerformanceDate", name: "Drug Resistance Test Performance Date" },//
  { value: "drugResistanceListSpecimenCollectionDate", name: "Drug Resistance Specimen Collection Date" },//
  { value: "drugResistanceListValueNumber", name: "Drug Resistance Value Number" },//
  { value: "drugResistanceListName", name: "Drug Resistance Name" },//
  { value: "drugResistanceListStringValue", name: "Drug Resistance String Value" },//
  { value: "drugResistanceListSpecimenCollectionPlace", name: "Drug Resistance Specimen Collection Place" },//
  { value: "drugResistanceListLabTestId", name: "Drug Resistance LabTestId" },//
  { value: "drugResistanceListSpecimenId", name: "Drug Resistance SpecimenId" },//
  { value: "drugResistanceListTestResultOtherCode", name: "Drug Resistance Test Result Other Code" },//
  { value: "drugResistanceListTestResultOtherDisplay", name: "Drug Resistance Test Result Other Display" },//
  { value: "genderCode", name: "Gender Code" },//
  { value: "genderDisplay", name: "Gender Display" },//

  { value: "diagnosisConfirmatoryDate", name: "Diagnosis Confirmatory Date" },//
  { value: "diagnosis_confirmatoryLab_code", name: "Diagnosis ConfirmatoryLab Code" },//
  { value: "diagnosis_confirmatoryLab_name", name: "Diagnosis ConfirmatoryLab Name" },//
  { value: "diagnosis_placeOfSpecimenCollection", name: "Diagnosis PlaceOf Specimen Collection" },//
  { value: "diagnosis_specimenCollectionDate", name: "Diagnosis Specimen Collection Date" },//
  { value: "diagnosis_diagnosisId", name: "Diagnosis DiagnosisId" },//
  { value: "diagnosis_conditionId", name: "Diagnosis DonditionId" },//
  { value: "diagnosis_riskPopulation_code", name: "Diagnosis RiskPopulation Code" },//
  { value: "diagnosis_riskPopulation_display", name: "Diagnosis RiskPopulation Display" },//
  { value: "diagnosis_riskBehavior_code", name: "Diagnosis RiskBehavior Code" },//
  { value: "diagnosis_riskBehavior_display", name: "Diagnosis RiskBehavior Display" },//
  { value: "diagnosis_transmissionRoute_code", name: "Diagnosis TransmissionRoute Code" },//
  { value: "diagnosis_transmissionRoute_display", name: "Diagnosis TransmissionRoute Display" },//

  { value: "rapidRecencyTestTestPerformanceDate", name: "Rapid Recency Test Performance Date" },//
  { value: "rapidRecencyTestSpecimenCollectionDate", name: "Rapid Recency Test Specimen Collection Date" },//
  { value: "rapidRecencyTestValueNumber", name: "Rapid Recency Test Value Number" },//
  { value: "rapidRecencyTestName", name: "Rapid Recency Test Name" },//
  { value: "rapidRecencyTestStringValue", name: "Rapid Recency Test String Value" },//
  { value: "rapidRecencyTestSpecimenCollectionPlace", name: "Rapid Recency Test Specimen Collection Place" },//
  { value: "rapidRecencyTestLabTestId", name: "Rapid Recency Test LabTestId" },//
  { value: "rapidRecencyTestSpecimenId", name: "Rapid Recency Test SpecimenId" },//
  { value: "rapidRecencyTestTestResultOtherCode", name: "Rapid Recency Test Result Other Code" },//
  { value: "rapidRecencyTestTestResultOtherDisplay", name: "Rapid Recency Test Result Other Display" },//

  { value: "viralLoadRecencyTestTestPerformanceDate", name: "VL Recency Test - Test Performance Date" },
  { value: "viralLoadRecencyTestSpecimenCollectionDate", name: "VL Recency Test - Specimen Collection Date" },
  { value: "viralLoadRecencyTestValueNumber", name: "VL Recency Test - Value Number" },
  { value: "viralLoadRecencyTestName", name: "VL Recency Test: Name" },
  { value: "viralLoadRecencyTestStringValue", name: "VL Recency Test - String Value" },
  { value: "viralLoadRecencyTestSpecimenCollectionPlace", name: "VL Recency Test - Specimen Collection Place" },
  { value: "viralLoadRecencyTestLabTestId", name: "VL Recency Test - Lab Test Id" },
  { value: "viralLoadRecencyTestSpecimenId", name: "VL Recency Test : Specimen Id" },
  { value: "viralLoadRecencyTestTestResultOtherCode", name: "VL Recency Test - Test Result Other Code" },
  { value: "viralLoadRecencyTestTestResultOtherDisplay", name: "VL Recency Test - Test Result Other Display" },

  { value: "cd4BeforeARTTestPerformanceDate", name: "CD4 BeforeART - Test Performance Date" },
  { value: "cd4BeforeARTSpecimenCollectionDate", name: "CD4 Before ART - Specimen Collection Date" },
  { value: "cd4BeforeARTValueNumber", name: "CD4 Before ART - Value Number" },
  { value: "cd4BeforeARTName", name: "CD4 Before ART - Name" },
  { value: "cd4BeforeARTStringValue", name: "CD4 Before ART - String Value" },
  { value: "cd4BeforeARTSpecimenCollectionPlace", name: "CD4 Before ART - Specimen Collection Place" },
  { value: "cd4BeforeARTLabTestId", name: "CD4 Before ART - Lab Test Id" },
  { value: "cd4BeforeARTSpecimenId", name: "CD4 Before ART - Specimen Id" },
  { value: "cd4BeforeARTTestResultOtherCode", name: "CD4 Before ART - Test Result Other Code" },
  { value: "cd4BeforeARTTestResultOtherDisplay", name: "CD4 Before ART - Test Result Other Display" },
  { value: "treatmentStatusCode", name: "Treatment Status Code" },
  { value: "treatmentStatusDisplay", name: "Treatment Status Display" },

  { value: "deathDateOfDeath", name: "Death - Date Of Death" },
  { value: "deathCauseOfDeath", name: "Death - Cause Of Death" },
  { value: "text", name: "Text" },

  { value: "listOfHbv_diagnosisDate", name: "HBV - Diagnosis Date" },
  { value: "listOfHbv_testDate", name: "HBV - Test Date" },
  { value: "listOfHbv_treatmentId", name: "HBV - Treatment Id" },
  { value: "listOfHbv_observationId", name: "HBV - Observation Id" },
  { value: "listOfHbv_diagnosisResult_code", name: "HBV - Diagnosis Result: code" },
  { value: "listOfHbv_diagnosisResult_display", name: "HBV - Diagnosis Result: display" },
  { value: "listOfHbv_testResult_code", name: "HBV - Test Result: code" },
  { value: "listOfHbv_testResult_display", name: "HBV - Test Result: display" },
  { value: "listOfHbv_treatment_treatmentId", name: "HBV - Treatment: treatmentId" },
  { value: "listOfHbv_treatment_startDate", name: "HBV - Treatment: Start Date" },
  { value: "listOfHbv_treatment_endDate", name: "HBV - Treatment: End Date" },
  { value: "listOfHbv_treatment_placeProvided", name: "HBV - Treatment: Place Provided" },

  { value: "listOfHcv_diagnosisDate", name: "HCV - Diagnosis Date" },
  { value: "listOfHcv_testDate", name: "HCV - Test Date" },
  { value: "listOfHcv_treatmentId", name: "HCV - Treatment Id" },
  { value: "listOfHcv_observationId", name: "HCV - Observation Id" },
  { value: "listOfHcv_diagnosisResult_code", name: "HCV - Diagnosis Result: Code" },
  { value: "listOfHcv_diagnosisResult_display", name: "HCV - Diagnosis Result: Display" },
  { value: "listOfHcv_testResult_code", name: "HCV - Test Result: Code" },
  { value: "listOfHcv_testResult_display", name: "HCV - Test Result: Display" },
  { value: "listOfHcv_treatment_treatmentId", name: "HCV - Treatment: Treatment Id" },
  { value: "listOfHcv_treatment_startDate", name: "HCV - Treatment: Start Date" },
  { value: "listOfHcv_treatment_endDate", name: "HCV - Treatment: End Date" },
  { value: "listOfHcv_treatment_placeProvided", name: "HCV - Treatment: Place Provider" },

  { value: "listOfTb_diagnosisDate", name: "TB - Diagnosis Date" },
  { value: "listOfTb_testDate", name: "TB - Test Date" },
  { value: "listOfTb_treatmentId", name: "TB - Treatment Id" },
  { value: "listOfTb_observationId", name: "TB - Observation Id" },
  { value: "listOfTb_diagnosisResult_code", name: "TB - Diagnosis Result: Code" },
  { value: "listOfTb_diagnosisResult_display", name: "TB - Diagnosis Result: Display" },
  { value: "listOfTb_testResult_code", name: "TB - Test Result: Code" },
  { value: "listOfTb_testResult_display", name: "TB - Test Result: Display" },
  { value: "listOfTb_treatment_treatmentId", name: "TB - Treatment: Treatment Id" },
  { value: "listOfTb_treatment_startDate", name: "TB - Treatment: Start Date" },
  { value: "listOfTb_treatment_endDate", name: "TB - Treatment: End Date" },
  { value: "listOfTb_treatment_placeProvided", name: "TB - Treatment: Place Provider" },

  { value: "listOfTpt_treatmentId", name: "TPT - Treatment Id" },
  { value: "listOfTpt_startDate", name: "TPT - Start Date" },
  { value: "listOfTpt_endDate", name: "TPT - End Date" },
  { value: "listOfTpt_placeProvided", name: "TPT - Place Provider" },

  { value: "listPregnancy_pregnancyId", name: "Pregnacy - Pregnancy Id" },
  { value: "listPregnancy_dateReported", name: "Pregnacy - Date Reported" },
  { value: "listPregnancy_deliveryPlace_code", name: "Pregnacy - Delivery Place: Code" },
  { value: "listPregnancy_deliveryPlace_name", name: "Pregnacy - Delivery Place: Name" },
  { value: "listPregnancy_placeReported_code", name: "Pregnacy - Place Reported: Code" },
  { value: "listPregnancy_placeReported_name", name: "Pregnacy - Place Reported: Name" },
  { value: "listPregnancy_outcomeCode_code", name: "Pregnacy - Outcome Code: Code" },
  { value: "listPregnancy_outcomeCode_display", name: "Pregnacy - Outcome Code: Display" },
  { value: "listPregnancy_deliveryDate", name: "Pregnacy - Delivery Date" },
  { value: "listPregnancy_gestationalAgeAtDelivery", name: "Pregnacy - Gestational Age At Delivery" },
  { value: "listPregnancy_childs_birthWeight", name: "Pregnacy - Childs: Birth Weight" },
  { value: "listPregnancy_childs_birthDefects", name: "Pregnacy - Childs: Birth Defects" },
  { value: "listPregnancy_childs_hivStatus_code", name: "Pregnacy - Childs: Hiv Status: Code" },
  { value: "listPregnancy_childs_hivStatus_display", name: "Pregnacy - Childs: Hiv Status: Display" },
  { value: "listPregnancy_childs_hivDiagnosisDate", name: "Pregnacy - Childs: Hiv Diagnosis Date" },
  { value: "listPregnancy_childs_childArvStartDate", name: "Pregnacy - Childs: Child Arv Start Date" },
  { value: "listPregnancy_childs_childId", name: "Pregnacy - Childs: Child Id" },
  { value: "listPregnancy_childs_obsId", name: "Pregnacy - Childs: Obs Id" },
  { value: "listOfArvTreatment_treatmentId", name: "ARV Treatment - Treatment Id" },
  { value: "listOfArvTreatment_arvStartDate", name: "ARV Treatment - Arv Start Date" },
  { value: "listOfArvTreatment_arvStopDate", name: "ARV Treatment - Arv Stop Date" },
  { value: "listOfArvTreatment_lossFollowUpDate", name: "ARV Treatment - Loss Follow Up Date" },
  { value: "listOfArvTreatment_org_code", name: "ARV Treatment - Org: Code" },
  { value: "listOfArvTreatment_org_name", name: "ARV Treatment - Org: Name" },
  { value: "listOfArvTreatment_placeOfTransferOut_code", name: "ARV Treatment - Place Of Transfer Out: Code" },
  { value: "listOfArvTreatment_placeOfTransferOut_name", name: "ARV Treatment - Place Of Transfer Out: Name" },
  { value: "listOfArvTreatment_enrollmentFacility_code", name: "ARV Treatment - Enrollment Facility: Code" },
  { value: "listOfArvTreatment_enrollmentFacility_name", name: "ARV Treatment - Enrollment Facility: Name" },
  { value: "listOfArvTreatment_enrollmentDate", name: "ARV Treatment - Enrollment Date" },
  { value: "listOfArvTreatment_enrollmentType_code", name: "ARV Treatment - Enrollment Type: Code" },
  { value: "listOfArvTreatment_enrollmentType_display", name: "ARV Treatment - Enrollment Type: Display" },
  { value: "listOfArvTreatment_treatmentStatus_code", name: "ARV Treatment - Treatment Status: Code" },
  { value: "listOfArvTreatment_treatmentStatus_display", name: "ARV Treatment - Treatment Status: Display" },
  { value: "listWhoStage_treatmentId", name: "Who Stage - Treatment Id" },
  { value: "listWhoStage_dateWhoStage", name: "Who Stage - Date Who Stage" },
  { value: "listWhoStage_whoClinicalStage_code", name: "Who Stage - Who Clinical Stage: Code" },
  { value: "listWhoStage_whoClinicalStage_display", name: "Who Stage - Who Clinical Stage: Display" },
  { value: "lastUpdateDate", name: "Last Update Date" },
  { value: "recentInfectionConclusion_code", name: "Recent Infection Conclusion: Code" },
  { value: "recentInfectionConclusion_display", name: "Recent Infection Conclusion: Display" },
  { value: "lastUpdated_code", name: "Last Updated code" },
  { value: "lastUpdated_display", name: "Last Updated display" },
]


export const listOperator = [
  { value: "AND", name: "Và " },
  { value: "OR", name: "Hoặc" },
]

export const OperatorFulls = [
  { value: "OPERATOR_LIKE", name: 'Gần giống', trans_key: "operator.like", display: "LIKE" },
  { value: "OPERATOR_EQUAL", name: 'Bằng', trans_key: "operator.equal", display: "=" },
  { value: "OPERATOR_GREATER", name: 'Lớn hơn', trans_key: "operator.greater", display: ">" },
  { value: "OPERATOR_LESS_THAN", name: 'Nhỏ hơn', trans_key: "operator.lessThan", display: "<" },
  { value: "OPERATOR_GREATER_EQUAL", name: 'Lớn hơn hoặc bằng', trans_key: "operator.greaterEqual", display: ">=" },
  { value: "OPERATOR_LESS_THAN_EQUAL", name: 'Nhỏ hơn hoặc bằng', trans_key: "operator.lessThanEqual", display: "<=" },
]

export const OperatorStrings = [
  { value: "OPERATOR_LIKE", name: 'Gần giống', trans_key: "operator_string.like", display: "LIKE" },
  { value: "OPERATOR_EQUAL", name: 'Bằng', trans_key: "operator_string.equal", display: "=" },
]

export const OperatorChoice = [
  { value: "OPERATOR_EQUAL", name: 'Bằng', trans_key: "operator_string.equal", display: "=" },
]

export const OperatorDates = [
  { value: "OPERATOR_EQUAL", name: 'Bằng', trans_key: "operator.equal", display: "=" },
  { value: "OPERATOR_GREATER", name: 'Lớn hơn', trans_key: "operator.greater", display: ">" },
  { value: "OPERATOR_LESS_THAN", name: 'Nhỏ hơn', trans_key: "operator.lessThan", display: "<" },
  { value: "OPERATOR_GREATER_EQUAL", name: 'Lớn hơn hoặc bằng', trans_key: "operator.greaterEqual", display: ">=" },
  { value: "OPERATOR_LESS_THAN_EQUAL", name: 'Nhỏ hơn hoặc bằng', trans_key: "operator.lessThanEqual", display: "<=" },
  //{ value: "OPERATOR_FROM_TO", name: 'Từ - đến',trans_key: "operator.fromTo", display: "fromTo" },
]

export const OperatorNumbers = [
  { value: "OPERATOR_EQUAL", name: 'Bằng', trans_key: "operator.equal", display: "=" },
  { value: "OPERATOR_GREATER", name: 'Lớn hơn', trans_key: "operator.greater", display: ">" },
  { value: "OPERATOR_LESS_THAN", name: 'Nhỏ hơn', trans_key: "operator.lessThan", display: "<" },
  { value: "OPERATOR_GREATER_EQUAL", name: 'Lớn hơn hoặc bằng', trans_key: "operator.greaterEqual", display: ">=" },
  { value: "OPERATOR_LESS_THAN_EQUAL", name: 'Nhỏ hơn hoặc bằng', trans_key: "operator.lessThanEqual", display: "<=" },
]

export const requestMethod = [
  { value: "POST", name: 'POST' },
  { value: "GET", name: 'GET' },
  { value: "PUT", name: 'PUT' },
  { value: "DELETE", name: 'DELETE'},
]


