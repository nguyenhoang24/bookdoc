

export interface SearchObject {
  keyword?: string;
  pageIndex?: number;
  pageSize?: number;
  type?: number;
  tab?: number;
  parentId?:string;
  adminIds?: string[];
  birthDate?: Date;
}
export interface SearchConfirmTest extends SearchObject {
  code?: string; // ma khach hang
  personName?: string; //ten khach hang
  birthYear?: number; // nam sinh
  gender?: string | number; // gioi tinh
  affirmativeCode?: string; // ma khang dinh
  populationGroup?: string;// nhom doi tuong
  confirmTestResult?: number; // ket qua xet nghiem khang dinh
  permanentAddress?: string; // dia chi
  specimenCollectedLab?: string;// don vi gui mau;
  specimenReceiveDate?: Date;// ngay nhan mau;
  specimenTransferDate?: Date;// Ngày gửi mẫu;
  confirmationDate?: Date; // Ngay xet nghiem khang dinh
  statusSupervise?: string;// trang thai chuyen giam sat phat hien
  status?: string; // trang thai
  newInfectionStatus?: string; //trang thai xet nghiem nhiem moi
  newInfectionDate?: Date; // ngay XN nhiem moi
  testResult?: number;  // ket qua xn nhiem moi ban dau
  newInfectConclusion?: string; // ket luan nhiem moi
  viralLoadTestResults?: string;// kq xet xn tai luong virut
  receivingResultDate?: Date;// Ngày trả kết quả
  requestDate?: Date; //ngay yeu cau
}
export interface SearchScreeningTest extends SearchObject {
  code: string;// mã khách hàng
  personName: string;// tên khách hangf
  advisoryeTimeFrom: string;// ngày đến
  advisoryeTimeTo: string;// ngày đi
  screeningTestResult: number;//kêt quả xét nghiệm sang loc tai co so
  // listGroupDto: PopulationGroup[];// nhom doi tuong
  serviceCode: [];// nguon
  confirmTestResult: number; // ket qua XN khang dinh
  // trạng thai chuyen gui
  //ngay xn khang dinh tu
  //ngay xn khang dinh den,
  //trang thai chuyen GSPH
  //Co so
}

export interface SearchCommunityTest {
  tab: number;
  keyword?: string;
  pageIndex: number;
  pageSize: number;
  code: string;
  personName: string;
  testDate: string,
  sendStatus: string,
}
export interface WarningSituationDiseaseSearch {
  code?:string;
  adminUnitId: string;
  month: number;
  year: number;
  localType: string;
  newCaseType: string;
}
