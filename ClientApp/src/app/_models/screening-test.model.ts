import { AdministrativeUnit } from "./administrative-unit.model";
import { CommunityTest } from "./community-test.model";
import { Ethnics } from "./ethnics.model";
import { HealthOrganization } from "./health-organization.model";
import { HivTest } from "./hiv-test";
import { PopulationGroup } from "./population-group.model";
import { Project } from "./project.model";
import { Reagent } from "./reagent.model";

export class ScreeningTest extends HivTest {
  id?: number | string = null;
  communityId?: string = null;
  referralSources: string[] = null;
  indexCaseCode?: string = null;// Mã bạn tình, bạn chích
  outreachWorker?: string = null;
  supportingProjectDto: Project = null; // Dự án hỗ trợ
  isAgreeScreeningTest?: boolean = null;// Đồng ý xét nghiệm sàng lọc
  isAgreeConfirmTest?: boolean = null;// Đồng ý xét nghiệm khẳng định
  testAlgorithm?: number = null;// Phương pháp xét nghiệm
  antigenAntibodyResult?: number = null;// Kết quả kháng nguyên - kháng thể
  reagent: Reagent = null;// sinh pham sang loc
  testDate?: Date | number = null;// Ngày xét nghiệm sàng lọc
  screeningTestResult?: string = null;// Kết quả xét nghiệm sàng lọc
  hivScreeningCode?: string = null;// Mã do cơ sở Xét nghiệm sàng lọc cấp
  receivingResultDate?: Date | number = null;// Ngày nhận kết quả
  hivConfirmCode?: string = null; // Mã xét nghiệm khẳng định
  confirmationTestType?: number = null;// Loại hình xét nghiệm khẳng định (1 = PCR, 2 = Xét nghiệm huyết thanh)
  counsellingService?: number = null;// Dịch vụ tư vấn chuyển gửi (Điều trị ARV = 1, Khám và sàng lọc Lao = 2, Các
  counsellingServiceOther?: string = null;// Tên dịch vụ tư vấn chuyển gửi khác (gõ vào nếu chọn khác)
  serviceCode?: string = null;// loai dich vu
  customerType?: string = null;// loai benh nhan 1: Noi tru 2: Ngoai tru
  permanentServiceCode?: string = null;// dich vu co dinh
  nonSpecialistCode?: string = null;
  advisoryeTime?: Date | number = null; // Ngay tu van truoc xet nghiem
  // xn nhiem moi
  recencyReagent?: Reagent = null;// sinh pham XN nhiem moi
  recencyDate?: Date | number = null; // ngay XN nhiem moi bang sinh poham nhanh
  recencyResult?: string = null; // KQXN nhiem moi bang sinh pham nhanh(1: nhiem moi 2: nhiem lau)
  ethnicEx?: Ethnics = null
  vlDate?: Date | number = null;// ngay XN tlvr
  vlNumber?: number = null;// nong do virus
  vlResult?: string = null;// ket qua vl(1: khong phat hien 2:Dưới ngưỡng phát hiện 200 bản sao/ml 3:Ngưỡng
  recencyConclusion?: string = null; // ket luan xn nhiem moi(1: nhiem moi 2:nhiem lau)
  confirmSiteTime?: Date | number = null; // ngay co so nhan kqkd
  confirmPatientTime?: Date | number = null; // ngay KH nhan kqkd
  exchangeService?: string = null;// dich vu tu van chuyen gui trường B.8
  exchangeServiceConfirm: String = null;// dich vu tu van chuyen gui C.7
  exchangeServiceOther?: string = null;// dich vu tu van chuyen gui khac
  staffBeforeTest?: string = null; // nhan vien tu van truoc XN
  staffAfterTest?: string = null; // nhan vien tu van sau XN
  patientIDAuthen?: string = null;
  tbVariant?: string = null;
  tbVariantOther?: string = null;
  pcrHivResult?: string = null;
  arvExchangeAdviseTime?: Date | number = null;// ngay tu van chuyen gui ARV
  tracingTestResult?: string = null;// ket qua tvxn theo dau
  arvExchangeResult?: string = null;// ket qua TV CGDT ARV
  arvExchangeTime?: Date | number = null;// ngay chuyen gui
  exchangeOrg?: HealthOrganization = null;// co so dieu tri chuyen gui
  exchangeOrgOther?: string = null;// co so dieu tri chuyen gui khac
  communityTest?: CommunityTest = null;
  hivPersonTransferring?: number = null; // Chuyen gui giam sat phat hien, 1 chua chuyen, 2 da chuyen
  sendStatus?: string = null;// trang thai chuyen gui 1:chua chuyen 2:da chuyen 3:da tiep nhan
  isCreateFromConfirmationTest?: boolean = null;
  reason?: string = null; // lý do từ chối
  certificateFile?: string = null;//Duong dan den File tra ket qua
  notReturnResults?: boolean = null;
  rqReviewConfirmationTest?: number = null;
  sourceSampleDate?: Date | number = null;// Ngày gửi mẫu
  nameConfirmLab?: HealthOrganization = null;
  reagentDto?: Reagent = null
}
