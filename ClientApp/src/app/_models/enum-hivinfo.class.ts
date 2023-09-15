export const CdServiceEnum = [
  {value : "1", name: "Xét nghiệm sàng lọc"},
  {value : "2", name: "Lấy máu hỗ trợ xét nghiệm khẳng định"}
]
export const ConfirmTypeEnum = [
  {value : "1", name: "PCR HIV"},
  {value : "2", name: "Xét nghiệm huyết thanh"}
]
export const ExchangeServiceEnum = [
  {value : "1", name: "Điều trị ARV"},
  {value : "2", name: "Khám và sàng lọc Lao"},
  {value : "3", name: "Các bệnh lây truyền qua đường tình dục"},
  {value : "4", name: "MMT"},
  {value : "5", name: "Khác"},
]
export const ExchangeServiceEnumNoARV = [
  {value : "2", name: "Khám và sàng lọc Lao"},
  {value : "3", name: "Các bệnh lây truyền qua đường tình dục"},
  {value : "4", name: "MMT"},
  {value : "5", name: "Khác"},
]
export const ResultAntiEnum = [
  {value : "1", name: "Kháng nguyên (+)"},
  {value : "2", name: "Kháng thể (+)"},
  {value : "3", name: "Kháng nguyên (+) và Kháng thể (+)"},
]
export const ResultPcrHivEnum = [
  {value : "1", name: "Âm tính"},
  {value : "2", name: "Dương tính"},
]
export const TestMethodEnum = [
  {value : "1", name: "Xét nghiệm kháng thể"},
  {value : "2", name: "Xét nghiệm kháng nguyên, kháng thể"},
]
export const CustomerTypeEnum = [
  {value : "1", name: "Nội trú"},
  {value : "2", name: "Ngoại trú"},
]
export const LaoVariableEnum = [
  {value : "1", name: "Lao AFB (-)"},
  {value : "2", name: "Lao AFB (+)"},
  {value : "3", name: "Lao ngoài phổi"},
  {value : "4", name: "Lao màng phổi"},
  {value : "-1", name: "Khác"},
]
export const GsphStatusEnum = [
  {value : "0", name: "Chưa chuyển"},
  {value : "1", name: "Đã chuyển"},
]
export const EarlyHivStatusEnum = [
  {value : "0", name: "Không xét nghiệm"},
  {value : "1", name: "Có xét nghiệm"},
]
//Trạng thái chuyển gửi từ cơ sở không chuyên
export const sendStatusEnum = [
  {value : "1", name: "Chưa chuyển"},
  {value : "2", name: "Đã chuyển"},
  {value : "3", name: "Đã tiếp nhận"},
  { value: "5", name: "Chuyển gửi thành công" },
]

export const LIST_YES_NO = [
  { id: 1, code: "1", name: "Có", value: true },
  { id: 0, code: "0", name: "Không", value: false }
]
export const RegistrationTypeEnum = [
  {value : "1", name: "Đăng ký mới"},
  {value : "2", name: "Điều trị lại"},
  {value : "3", name: "Chuyển đến"},
  {value : "4", name: "Trẻ em dưới 18 tháng tuổi sinh ra từ mẹ nhiễm HIV"},
  {value : "5", name: "Điều trị phơi nhiễm"},
]
export const ArvEndCaseEnum = [
  {value : "1", name: "Bỏ trị"},
  {value : "2", name: "Tử vong"},
  {value : "3", name: "Chuyển đi"},
  {value : "4", name: "Mất dấu"},
  {value : "5", name: "Kết thúc"},
]
export const PacPatientStatusEnum = [
  {value : "new", name: "Ca mới"},
  {value : "old", name: "Ca cũ"},
]
export const ReportingOptionsEnum = [
  {value : "1", name: "Ca cũ nội tỉnh"},
  {value : "2", name: "Ca cũ ngoại tỉnh"},
  {value : "3", name: "Ca được tỉnh phát hiện, không điều trị tại tỉnh"},
  {value : "4", name: "Ca nghi trùng"},
  {value : "5", name: "Không có cả 2 loại địa chỉ đến tuyến xã"},
]
export const StatusReview = [
  { id: '1', name: "Chưa rà soát" },
  { id: '3', name: "Đã rà soát" },
]
export const ExchangeStatusEnum = [
  {value : "0", name: "Không thành công"},
  {value : "1", name: "Thành công"},
]
export const LIST_TEST_RESULT_FLEXIBLE = [
  { value: "1", name: "Không phản ứng" },
  { value: "2", name: "Có phản ứng" },
  { value: "3", name: "Không xác định" },
  { value: "4", name: "Không có phản ứng và có chỉ báo xét nghiệm nhiễm cấp" }
];
export const LIST_TEST_RESULT_FLEXIBLE_COMMUNITY = [
  { value: "1", name: "Không phản ứng" },
  { value: "2", name: "Có phản ứng" },
  { value: "3", name: "Không xác định" },
];
export const TestResultConfirm = [
  { value: "1", name: "Âm tính"},
  { value: "2", name: "Dương tính"},
  { value: "3", name: "Không xác định"},
];
export const DashboardIndex = [
  {value : 1, name : "Tổng quan"},
  {value : 2, name : "Chỉ số: Số xét nghiệm và nhận kết quả"},
  {value : 3, name : "Chỉ số: Số dương tính và nhận kết quả"},
  {value : 4, name : "Chỉ số: Chuyển gửi điều trị"},
  {value : 5, name : "Chỉ số: Xét nghiệm nhiễm mới"},
  {value : 6, name : "Chỉ số: Xét nghiệm tải lượng virus"},
]
export const DashboardIndexHivPerson = [
  {value : 1, name : "Tổng quan"},
  {value : 2, name : "Chỉ số: Lũy tích số người nhiễm"},
  {value : 3, name : "Chỉ số: Số người nhiễm HIV phát hiện mới"},
  {value : 4, name : "Chỉ số: Số người nhiễm còn sống"},
  {value : 5, name : "Chỉ số: Số người nhiễm tử vong"},
]

