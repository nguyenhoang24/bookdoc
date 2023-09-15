import { PopulationGroup } from "./population-group.model";

export class HIVRiskPerson {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  uic: string;
  group: PopulationGroup[];

  constructor() {
    this.id = "";
    this.firstName = "";
    this.lastName = "";
    this.birthDate = null;
    this.uic = "";
  }
}
