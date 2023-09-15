import {PopulationGroup} from "./population-group.model";
import {HealthOrganization} from "./health-organization.model";

export class Profile {
  id: string;
  dependentCode: string;
  dependentAddress: string;
  dependentPhone: string;
  communityTestStaffCode: string;
  confirmTestStaffCode: string;

  confirmLab: HealthOrganization[];

  group: PopulationGroup[];

  constructor() {
    this.id = null;
    this.dependentAddress = null;
    this.dependentCode = null;
    this.dependentPhone = null;
    this.communityTestStaffCode = null;
    this.confirmTestStaffCode = null;
    this.confirmLab = null;
    this.group = null;
  }

}
