export const listIdentificationType: any[] = [
  { id: 1, name: "Căn cước công dân" },
  { id: 2, name: "Chứng minh nhân dân" },
  { id: 3, name: "Giấy phép lái xe" },
  { id: 4, name: "Hộ chiếu" }
]

export const listGender: any[] = [
  { id: "M", name: 'Nam' },
  { id: "F", name: 'Nữ' },
  { id: "U", name: 'Không rõ' },
];
export const yesno: any[] = [
  { id: 1, name: "Có" },
  { id: 0, name: "Không" }
]
export const listTestResult: any[] = [
  { id: 1, name: "Có phản ứng" },
  { id: 2, name: "Không phản ứng" },
  { id: 3, name: "Không xác định" }
]
export const listConfirmTestResult: any[] = [
  { id: 1, name: "Âm tính" },
  { id: 2, name: "Dương tính" },
  { id: 3, name: "Không xác định" },
  { id: 4, name: "Chờ khẳng định" },
  { id: 5, name: "Đã tiếp nhận" },
]
export const listTreatmentTransferResult: any[] = [
  { id: 1, name: "Thành công" },
  { id: 2, name: "Không thành công" }
]
export const isAgreeTest: any[] = [
  { id: true, name: "Có " },
  { id: false, name: "Không" },
]
export const listAlertType: any[] = [
  { id: "1", name: "Tự thông báo" },
  { id: "2", name: "Cùng thông báo" },
  { id: "3", name: "NVTV thông báo" },
  { id: "4", name: "Được phép tiết lộ danh tính người nhiễm HIV và NVTV thông báo" },
  { id: "5", name: "Không được phép tiết lộ danh tính người nhiễm HIV" }
]
export const listAgreePreTest: any[] = [
  { id: "1", name: "Có" },
  { id: "2", name: "Không" },
]
export const listRecentTestTime: any[] = [
  { id: 1, name: "Dưới 3 tháng" },
  { id: 2, name: "Từ 3 - 6 tháng" },
  { id: 3, name: "Từ 6 - 12 tháng" },
  { id: 4, name: "Trên 12 tháng" }
];

export const listPermanentServiceCode = [
  { id: '1', name: "Xét nghiệm sàng lọc" },
  { id: '2', name: "Lấy máu hỗ trợ xét nghiệm khẳng định" },
];

export const listConfirmationTestStatus = [
  { id: '4', name: "Chờ khẳng định" },
  { id: '5', name: "Đã tiếp nhận" },
  { id: '6', name: "Đã có kết quả" },
];

export const listPatientIDAuthen = [
  { id: '1', name: 'Có' },
  { id: '2', name: 'Không' },
  { id: '3', name: 'Chưa đối chiếu' },
];
export const listTbVariant = [
  { id: '1', name: 'Lao AFB (-)' },
  { id: '2', name: 'Lao AFB (+)' },
  { id: '3', name: 'Lao ngoài phổi' },
  { id: '4', name: 'Lao màng phổi' },
  { id: '-1', name: 'Khác' },
];

export const listPcrHivResult = [
  { name: "Âm tính", id: '1' },
  { name: "Dương tính", id: '2' }
];

export const listTracingTestResult = [
  { id: '1', name: 'Đồng ý cung cấp thông tin thực hiện xét nghiệm theo dấu bạn tình/bạn chích' },
  { id: '2', name: 'Không đồng ý cung cấp thông tin thực hiện xét nghiệm theo dấu bạn tình/bạn chích ngay và từ chối quay lại tư vấn tiếp tục' },
  { id: '3', name: 'Không đồng ý cung cấp thông tin thực hiện xét nghiệm theo dấu bạn tình/bạn chích ngay và hẹn một ngày khác quay lại tư vấn' },
]

export const listArvExchangeResult = [
  { id: '1', name: "Đồng ý chuyển gửi" },
  { id: '2', name: "Chưa đồng ý chuyển gửi" },
];

export const listSources = [
  { id: '1', name: 'Tư vấn & xét nghiệm' },
  { id: '2', name: 'Điều trị ARV' },
  { id: '3', name: 'Xét nghiệm khẳng định' },
  { id: '4', name: 'Cục VAAC' },
  { id: '5', name: 'Giám sát HIV tuyến xã' },
  { id: '6', name: 'Admin Trung tâm y tế' },
];

export const listTreatmentStatus = [
  { id: '1', name: 'Chưa có thông tin' },
  { id: '2', name: 'Chưa được điều trị' },
  { id: '3', name: 'Đang chờ điều trị (pre-ARV)' },
  { id: '4', name: 'Bỏ trị' },
  { id: '5', name: 'Bệnh nhân chuyển đi' },
  { id: '6', name: 'Mất dấu' },
  { id: '7', name: 'Tử vong' },
];

export const listRegistrationType = [
  { id: 1, name: 'Đăng ký mới' },
  { id: 2, name: 'Điều trị lại' },
  { id: 3, name: 'Chuyển đến' },
  { id: 4, name: 'Trẻ em dưới 18 tháng tuổi sinh ra từ mẹ nhiễm HIV' },
  { id: 5, name: 'Điều trị phơi nhiễm' },
];

export const listIsRightCase = [
  {id : true, name: 'Đã xác nhận'},
  {id : false, name: 'Chưa xác nhận'}
]

export const listReasonEnd = [
  { id: 1, name: 'Bỏ trị' },
  { id: 2, name: 'Tử vong' },
  { id: 3, name: 'Chuyển đi' },
  { id: 4, name: 'Mất dấu' },
  { id: 5, name: 'Kết thúc' },
];

export const listHivStage = [
  { id: 1, name: 'Giai đoạn 1' },
  { id: 2, name: 'Giai đoạn 2' },
  { id: 3, name: 'Giai đoạn 3' },
  { id: 4, name: 'Giai đoạn 4' },
  { id: 5, name: 'Không đánh giá' },
];

export const listSymptoms = [
  { id: 1, name: 'Triệu chứng khác' },
];

export const listAIDSStatus = [
  { id: 1, name: "Giai đoạn HIV" },
  { id: 2, name: "Giai đoạn AIDS" },
];

export const listConnectTreatmentStatus = [
  { id: 1, name: "Đã tích hợp dữ liệu điều trị" },
  { id: 2, name: "Cần xác minh" },
  { id: 3, name: "Chưa tích hợp dữ liệu điều trị" },
];

export const listStateTreatment = [
  { id: 1, name: 'Đăng ký mới' },
  { id: 2, name: 'Điều trị lại' },
  { id: 3, name: 'Chuyển đi' },
  { id: 4, name: 'Chuyển đến' },
  { id: 5, name: 'Mất dấu' },
  { id: 6, name: 'Bỏ trị' },
  { id: 7, name: 'Tử vong' },
  { id: 8, name: 'Kết thúc' },
];

export const listReasonsDeath = [
  { id: 1, name: "Viêm phổi" }
]

// Confirm Test

export const listScreeningTestResult: any[] = [
  { id: 1, name: "Không xác định" },
  { id: 2, name: "Có phản ứng" },
  { id: 3, name: "Không có phản ứng và có chỉ báo xét nghiệm nhiễm cấp" }
]
export const check: any[] = [
  { id: 1, name: "Không" },
  { id: 2, name: "Có" },
  { id: 3, name: "Không có thông tin" }
]
export const listReagentResult: any[] = [
  { id: 0, name: "Âm tính" },
  { id: 1, name: "Dương tính" },
  { id: 2, name: "Nghi ngờ" }];
export const listTransmissionRouteConfirm: any[] = [
  { id: 0, name: "Mã 1 - Lây qua đường máu" },
  { id: 1, name: "Mã 2 - Lây qua đường tình dục" },
  { id: 2, name: "Mã 1.1 - Lây qua đường tiêm chích ma túy" },
  { id: 3, name: "Mã 3 - Mẹ truyền sang con" },
  { id: 4, name: "Mã 1.2 - Truyền máu" },
  { id: 5, name: "Mã 4 - Không rõ" },
  { id: 6, name: "Mã 1.3 - Tai nạn nghề nghiệp" },
  { id: 7, name: "Mã 2.1 - Tình dục đồng giới" },
  { id: 8, name: "Mã 2.2 - Tình dục khác giới" }
];
export const listServiceCode: any[] = [
  { id: '0', name: "Dự phòng" },
  { id: '1', name: "Khoa sản" },
  { id: '2', name: "Khoa khám bệnh" },
  { id: '3', name: "Chương trình Lao" },
  { id: '4', name: "Khoa nhiễm" },
  { id: '5', name: "Lưu Động" },
  { id: '6', name: "Cấp cứu" },
  { id: '7', name: "Cố định" },
  { id: '8', name: "Không chuyên" },
  { id: '9', name: "Cơ sở khép kín" },
  { id: '10', name: "Bạn tình/bạn chích" }
];
export const listKQXNNewInfection: any = [
  { id: 1, name: "Nhiễm mới" },
  { id: 2, name: "Nhiễm lâu" },
]

export const ListSpecimenQuality: any = [
  { id: 0, name: "Không đạt" },
  { id: 1, name: "Đạt" }
];

export const listGSP_status: any = [
  { id: '1', name: "Chưa chuyển" },
  { id: '2', name: "Đã chuyển" },
]
export const listNewStatusXN: any = [
  { id: 0, name: "Không xét nghiệm" },
  { id: 1, name: "Có xét nghiệm" },
]
export const listConclusionOfInfection: any = [
  { id: 1, name: "Nhiễm mới" },
  { id: 2, name: "Nhiễm lâu" },
  { id: 3, name: "Không có thông tin" },
]
export const listKQXNVirus: any = [
  { id: '1', name: "Không phát hiện" },
  { id: '2', name: "Dưới ngưỡng phát hiện 200 bản sao/ml" },
  { id: '3', name: "Ngưỡng phát hiện từ 200 - 1000 bản sao/ml" },
  { id: '4', name: "Ngưỡng phát hiện >= 1000 bản sao/ml" },
];

//screening-test
export const listTransmissionRoute: any[] = [
  { id: 0, name: "Mã 1 - Lây qua đường máu" },
  { id: 1, name: "Mã 2 - Lây qua đường tình dục" },
  { id: 2, name: "Mã 1.1 - Lây qua đường tiêm chích ma túy" },
  { id: 3, name: "Mã 3 - Mẹ truyền sang con" },
  { id: 4, name: "Mã 1.2 - Truyền máu" },
  { id: 5, name: "Mã 4 - Không rõ" },
  { id: 6, name: "Mã 1.3 - Tai nạn nghề nghiệp" },
  { id: 7, name: "Mã 2.1 - Tình dục đồng giới" },
  { id: 8, name: "Mã 2.2 - Tình dục khác giới" }
];
export const listScreeningTestResults: any[] = [
  { id: 1, name: "Không phản ứng" },
  { id: 2, name: "Có phản ứng" },
  { id: 3, name: "Không xác định" },
  { id: 4, name: "Không có phản ứng và có chỉ báo xét nghiệm nhiễm cấp" },
]
export const listCustomerType: any[] = [
  { id: '1', name: 'Nội trú' },
  { id: '2', name: 'Ngoại trú' }
]
export const listTestAlgorithms: any[] = [
  { id: 1, name: 'Xét nghiệm kháng thể' },
  { id: 2, name: 'Xét nghiệm kháng nguyên, kháng thể' },
];
export const listAntigenAntibodyResults: any[] = [
  { id: 1, name: 'Kháng nguyên (+)' },
  { id: 2, name: 'Kháng thể (+)' },
  { id: 3, name: 'Kháng nguyên (+) và kháng thể (+)' },
];
export const listConfirmationTestTypes: any[] = [
  { id: 1, name: 'PCR HIV' },
  { id: 2, name: 'Xét nghiệm huyết thanh' }
];
export const listCounsellingServices: any[] = [
  { id: '2', name: 'Khám và sàng lọc lao' },
  { id: '3', name: 'Các bệnh lây truyền qua đường tình dục' },
  { id: '4', name: 'MMT' },
  { id: '5', name: 'Khác' }
]
export const listReferralSources: any[] = [
  { id: '1', name: 'Tiếp cận cộng đồng' },
  { id: '2', name: 'Kênh theo dấu bạn tình bạn chích' },
  { id: '3', name: 'Cán bộ y tế' },
  { id: '4', name: 'Internet, mạng xã hội' },
  { id: '5', name: 'Các kênh khác' }
]
export const listcounsellingService: any[] = [
  { id: 1, name: 'Dịch vụ A' },
  { id: 1, name: 'Dịch vụ B' }
];
export const listRecencyResult: any[] = [
  { id: '1', name: 'Nhiễm mới' },
  { id: '2', name: 'Nhiễm lâu' }
];
export const listVlResult: any[] = [
  { id: '1', name: 'Không phát hiện' },
  { id: '2', name: 'Dưới ngưỡng phát hiện 200 bản sao/ml' },
  { id: '3', name: 'Ngưỡng phát hiện từ 200 - 1000 bảnsao /ml' },
  { id: '4', name: 'Ngưỡng phát hiện >= 1000 bản sao/ml' }
];
export interface breadcrumb {
  link: string;
  text: string;
}
// Trang thai chuyen gui toi co so xet nhiem
export const isAgreePreTest: any[] = [
  { id: '1', name: 'Chưa chuyển' },
  { id: '2', name: 'Đã chuyển' },
  { id: '3', name: 'Đã tiếp nhận' },
]
// Trang thai chuyen gui toi co so xet nhiem
export const isAgreePreTestReceives: any[] = [
  { id: '2', name: 'Chưa tiếp nhận' },
  { id: '3', name: 'Đã tiếp nhận' },
]
// Trạng thái chuyển gửi điều trị
export const sendStatus: any[] = [
  { id: '1', name: 'Chưa chuyển gửi' },
  { id: '2', name: 'Đã chuyển gửi' },
  { id: '3', name: 'Đã tiếp nhận' }
]
//Trang thai xet nhiem cua ban tinh ban chinh
export const partnerStatus: any[] = [
  { id: '1', name: 'Có' },
  { id: '2', name: 'Không' }
];

export const listStatus = [
  { id: null, name: "Tất cả" },
  { id: '1', name: "Chưa rà soát" },
  { id: '2', name: "Cần rà soát" },
  { id: '3', name: "Đã rà soát" },
  { id: '4', name: "Người nhiễm quản lý" },
];

export const listStatusHtcIndex = [
  { id: 0, name: "Tất cả" },
  { id: '1', name: "Chưa rà soát" },
  { id: '3', name: "Đã rà soát" },
];

export const listQuarter: any[] = [
  { id: 1, name: 'I' },
  { id: 2, name: 'II' },
  { id: 3, name: 'III' },
  { id: 4, name: 'IV' },
]

export const listYear = [...Array((new Date().getFullYear() - 1999))].map((e, i) => {
  const year = new Date().getFullYear() - i;
  return { id: year, name: year }
});
//HIV-OPC
//1: 100% 2: 95% 3: 80% 4: 69% 5: 40% 6: Khac
export const listInsurancePay: any[] = [
  { id: 1, name: '100%' },
  { id: 2, name: '95%' },
  { id: 3, name: '80%' },
  { id: 4, name: '69%' },
  { id: 5, name: '40%' },
  { id: 6, name: 'Khác' },
];

export const listInsuranceRoute: any[] = [
  { id: 1, name: 'Đúng tuyến' },
  { id: 1, name: 'Trái tuyến' },
  { id: 1, name: 'Cấp cứu' },
];

export const listInsuranceType: any[] = [
  { id: 1, name: 'DN: Người lao động làm việc trong các doanh nghiệp thành lập, hoạt động theo Luật Doanh nghiệp, Luật Đầu tư' },
  { id: 2, name: 'HX: Người lao động làm việc trong các hợp tác xã, liên hiệp hợp tác xã thành lập và hoạt động theo Luật Hợp tác xã' },
  { id: 3, name: 'CH: Người lao động làm việc trong các cơ quan nhà nước, đơn vị sự nghiệp, lực lượng vũ trang, tổ chức chính trị, tổ chức chính trị xã hội, tổ chức chính trị xã hội nghề nghiệp, tổ chức xã hội nghề nghiệp và tổ chức xã hội khác' },
  { id: 4, name: 'NN: Người lao động làm việc trong các cơ quan, tổ chức nước ngoài hoặc tổ chức quốc tế tại Việt Nam, trừ trường hợp Điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên tham gia có quy định khác.' },
  { id: 5, name: 'TK: Người lao động làm việc trong các tổ chức khác có sử dụng lao động được thành lập và hoạt động theo quy định của pháp luật.' },
  { id: 6, name: 'HC: Cán bộ, công chức, viên chức theo quy định của pháp luật về cán bộ, công chức, viên chức.' },
  { id: 7, name: 'XK: Người hoạt động không chuyên trách ở xã, phường, thị trấn theo quy định của pháp luật về cán bộ, công chức;' },
  { id: 8, name: 'HT: Người hưởng lương hưu, trợ cấp mất sức lao động hàng tháng;' },
  { id: 9, name: 'TB: Người đang hưởng trợ cấp bảo hiểm xã hội hàng tháng do bị tai nạn lao động, bệnh nghề nghiệp;' },
  { id: 10, name: 'NO: Người lao động nghỉ việc đang hưởng chế độ ốm đau theo quy định của pháp luật về bảo hiểm xã hội do mắc bệnh thuộc danh mục bệnh cần chữa trị dài ngày theo quy định của Bộ trưởng Bộ Y tế;' },
  { id: 11, name: 'CT: Người từ đủ 80 tuổi trở lên đang hưởng trợ cấp tuất hàng tháng;' },
  { id: 12, name: 'XB: Cán bộ xã, phường, thị trấn đã nghỉ việc đang hưởng trợ cấp bảo hiểm xã hội hàng tháng;' },
  { id: 13, name: 'TN: Người đang hưởng trợ cấp thất nghiệp theo quy định của pháp luật về bảo hiểm thất nghiệp;' },
  { id: 14, name: 'CS: Công nhân cao su nghỉ việc đang hưởng trợ cấp hàng tháng theo Quyết định số 206/CP ngày 30/5/1979 của Hội đồng Chính phủ (nay là Chính phủ) về chính sách đối với công nhân mới giải phóng làm nghề nặng nhọc, có hại sức khỏe nay già yếu phải thôi việc;' },
  { id: 15, name: 'QN: Sỹ quan, quân nhân chuyên nghiệp, hạ sỹ quan, binh sỹ Quân đội nhân dân Việt Nam đang tại ngũ; người làm công tác cơ yếu hưởng lương như đối với quân nhân đang công tác tại Ban Cơ yếu Chính phủ; học viên cơ yếu hưởng sinh hoạt phí từ ngân sách Nhà nước theo chế độ, chính sách như đối với học viên Quân đội;' },
  { id: 16, name: 'CA: Sỹ quan, hạ sỹ quan nghiệp vụ và sỹ quan, hạ sỹ quan chuyên môn kỹ thuật, hạ sỹ quan, chiến sỹ nghĩa vụ đang công tác trong lực lượng công an nhân dân, học viên công an nhân dân hưởng sinh hoạt phí từ ngân sách Nhà nước;' },
  { id: 17, name: 'CY: Người làm công tác cơ yếu hưởng lương như đối với quân nhân đang công tác tại các tổ chức cơ yếu thuộc các Bộ, ngành, địa phương;' },
  { id: 18, name: 'XN: Cán bộ xã, phường, thị trấn đã nghỉ việc đang hưởng trợ cấp hàng tháng từ ngân sách Nhà nước;' },
  { id: 19, name: 'MS: Người đã thôi hưởng trợ cấp mất sức lao động đang hưởng trợ cấp hàng tháng từ ngân sách Nhà nước;' },
  { id: 20, name: 'CC: Người có công với cách mạng, bao gồm: Người hoạt động cách mạng trước ngày 01/01/1945; người hoạt động cách mạng từ ngày 01/01/1945 đến ngày khởi nghĩa tháng 8/1945; Bà mẹ Việt Nam anh hùng; thương binh, người hưởng chính sách như thương binh, thương binh loại B, bệnh binh suy giảm khả năng lao động từ 81% trở lên;' },
  { id: 21, name: 'CK: Người có công với cách mạng theo quy định pháp luật về người có công với cách mạng, trừ các đối tượng được cấp mã CC;' },
  { id: 22, name: 'CB: Cựu chiến binh theo quy định pháp luật về cựu chiến binh' },
  { id: 23, name: 'KC: Người trực tiếp tham gia kháng chiến chống Mỹ cứu nước; người tham gia chiến tranh bảo vệ Tổ quốc, làm nhiệm vụ quốc tế ở Căm-pu-chia, giúp bạn Lào sau ngày 30/4/1975; thanh niên xung phong thời kỳ kháng chiến chống Pháp và thanh niên xung phong đã hoàn thành nhiệm vụ trong kháng chiến; dân công hỏa tuyến tham gia kháng chiến chống Pháp, chống Mỹ, chiến tranh bảo vệ Tổ quốc và làm nhiệm vụ quốc tế theo quy định tại các Quyết định của Thủ tướng Chính phủ, trừ các đối tượng được cấp mã CC, CK và CB;' },
  { id: 23, name: 'HD: Đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp đương nhiệm;' },
  { id: 24, name: 'TE: Trẻ em dưới 6 tuổi, kể cả trẻ đủ 72 tháng tuổi mà trong năm đó chưa đến kỳ nhập học;' },
  { id: 25, name: 'BT: Người thuộc diện hưởng trợ cấp bảo trợ xã hội hàng tháng theo quy định của pháp luật;' },
  { id: 26, name: 'HN: Người thuộc hộ gia đình nghèo;' },
  { id: 27, name: 'XD: Người đang sinh sống tại xã đảo, huyện đảo' },
  { id: 28, name: 'TS: Thân nhân của người có công với cách mạng là cha đẻ, mẹ đẻ, vợ hoặc chồng, con của liệt sỹ; người có công nuôi dưỡng liệt sỹ' },
  { id: 29, name: 'TC: Thân nhân của người có công với cách mạng, bao gồm: cha đẻ, mẹ đẻ, vợ hoặc chồng, con từ trên 6 tuổi đến dưới 18 tuổi hoặc từ đủ 18 tuổi trở lên nếu còn tiếp tục đi học hoặc bị khuyết tật nặng, khuyết tật đặc biệt nặng của các đối tượng: Người hoạt động cách mạng trước ngày 01/01/1945; người hoạt động cách mạng từ ngày 01/01/1945 đến ngày khởi nghĩa tháng Tám năm 1945; Anh hùng Lực lượng vũ trang nhân dân, Anh hùng Lao động trong thời kỳ kháng chiến; thương binh, bệnh binh suy giảm khả năng lao động từ 61% trở lên; người hoạt động kháng chiến bị nhiễm chất độc hóa học suy giảm khả năng lao động từ 61% trở lên; con đẻ từ trên 6 tuổi của người hoạt động kháng chiến bị nhiễm chất độc hóa học bị dị dạng, dị tật do hậu quả của chất độc hóa học không tự lực được trong sinh hoạt hoặc suy giảm khả năng tự lực trong sinh hoạt, trừ các đối tượng được cấp mã TS' },
  { id: 30, name: 'TQ: Thân nhân của đối tượng được cấp mã QN' },
  { id: 31, name: 'TA: Thân nhân của đối tượng được cấp mã CA' },
  { id: 32, name: 'TY: Thân nhân của đối tượng được cấp mã CY' },
  { id: 33, name: 'HG: Người đã hiến bộ phận cơ thể người theo quy định của pháp luật' },
  { id: 34, name: 'LS: Người nước ngoài đang học tập tại Việt Nam được cấp học bổng từ ngân sách của Nhà nước Việt Nam' },
  { id: 35, name: 'PV: Người phục vụ người có công với cách mạng, bao gồm: người phục vụ Bà mẹ Việt Nam anh hùng sống ở gia đình; người phục vụ thương binh, bệnh binh suy giảm khả năng lao động từ 81% trở lên ở gia đình; người phục vụ người hoạt động kháng chiến bị nhiễm chất độc hóa học suy giảm khả năng lao động từ 81% trở lên sống ở gia đình' },
  { id: 36, name: 'CN: Người thuộc hộ gia đình cận nghèo' },
  { id: 37, name: 'HS: Học sinh đang theo học tại các cơ sở giáo dục và đào tạo thuộc hệ thống giáo dục quốc dân' },
  { id: 38, name: 'SV: Sinh viên đang theo học tại các cơ sở giáo dục và đào tạo, cơ sở dạy nghề thuộc hệ thống giáo dục quốc dân' },
  { id: 39, name: 'GB: Người thuộc hộ gia đình làm nông nghiệp, lâm nghiệp, ngư nghiệp và diêm nghiệp có mức sống trung bình theo quy định của pháp luật' },
  { id: 40, name: 'GD: Người tham gia BHYT theo hộ gia đình gồm những người thuộc hộ gia đình' },
];

export const LIST_REGIMEN_TYPE = [
  { id: 1, name: "Phác đồ bậc 1" },
  { id: 2, name: "Phác đồ bậc 2" },
  { id: 3, name: "Phác đồ bậc 3" },
  { id: 4, name: "Phác đồ phơi nhiễm" },
]

export const listOrgType = [
  { id: 1, name: "Cấp trung ương" },
  { id: 2, name: "Viện khu vực" },
  { id: 3, name: "Cấp tỉnh" },
  { id: 4, name: "Cấp huyện" },
  { id: 5, name: "Cấp xã" },
]

export const listMonth = [
  { id: 1, name: "Tháng 1" },
  { id: 2, name: "Tháng 2" },
  { id: 3, name: "Tháng 3" },
  { id: 4, name: "Tháng 4" },
  { id: 5, name: "Tháng 5" },
  { id: 6, name: "Tháng 6" },
  { id: 7, name: "Tháng 7" },
  { id: 8, name: "Tháng 8" },
  { id: 9, name: "Tháng 9" },
  { id: 10, name: "Tháng 10" },
  { id: 11, name: "Tháng 11" },
  { id: 12, name: "Tháng 12" },
]

export const listReceivingStatus = [
  { id: 1, name: 'Người nhiễm chưa rà soát' },
  { id: 2, name: 'Người nhiễm cần rà soát' },
  { id: 3, name: 'Người nhiễm đã rà soát' },
  { id: 4, name: 'Người nhiễm quản lý' },
];

export const listTypeDate = [
  { id: 1, name: 'Tất cả' },
  { id: 2, name: 'Ngày tử vong' },
  { id: 3, name: 'Ngày báo ' },
];

export const listTypeChoiceFieldColumn = [
  { value: "gender", name: "Giới tính" },
  { value: "ethnicity", name: "Dân tộc" },
  { value: "occupation", name: "Nghề nghiệp" },
  { value: "population_group", name: "Nhóm đối tượng" },
  { value: "risk_behavior", name: "Hành vi nguy cơ" },
  { value: "transmission_route", name: "Đường lây nhiễm" },
  { value: "rapid_test_result", name: "Kết quả xét nghiệm nhiễm mới" },
  { value: "hiv_recency_vl_test_result_other", name: "Kết quả xét nghiệm VL" },
  { value: "recent_infection_conclusion", name: "Kết quả xét nghiệm khẳng định nhiễm mới" },
  { value: "cd4_test_reason", name: "Lý do xét nghiệm CD4" },
  { value: "vl_test_reason", name: "Lý do xét nghiệm VL" },
  { value: "vl_test_result_other", name: "Kết quả xét nghiệm khác của VL" },
  { value: "drug_resistance_test_result", name: "Kết quả kháng thuốc khác" },
  { value: "arv_treatment_enrollment_type", name: "Lý do đăng ký điều trị ARV" },
  { value: "arv_treatment_stop_reason", name: "Lý do ngừng điều trị ARV" },
  { value: "arv_treatment_regimen_name", name: "Tê phác đồ" },
  { value: "arv_treatment_regimen_line", name: "Bậc phác đồ" },
  { value: "arv_treatment_regimen_change_reason", name: "Lý do chuyển phác đồ" },
  { value: "arv_treatment_who_stage", name: "Giai đoạn lâm sàng" },
  { value: "comorbidities_hbv_diagnosis_result", name: "Kết quả xét nghiệm viêm gan B" },
  { value: "comorbidities_hbv_hbsag_result", name: "Kết quả xét nghiệm HbsAg" },
  { value: "comorbidities_hcv_anti_hcv_result", name: "Kết quả xét nghiệm anti HCV" },
  { value: "comorbidities_hcv_diagnosis_result", name: "Kết quả xét nghiệm viêm gan C" },
  { value: "death_cause", name: "Lý do tử vong" }
]
