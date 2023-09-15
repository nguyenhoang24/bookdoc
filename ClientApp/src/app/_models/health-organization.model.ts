import {AdministrativeUnit} from "./administrative-unit.model";

export class HealthOrganization {
  createDate?: Date
  createdBy?: Date;
  modifyDate?: Date;
  modifiedBy?: string;
  id?: string;
  voided?: boolean;
  name?: string;
  code?: string;
  description?: string;
  status: string;
  administrativeUnitDtoId?: string;
  adminUnitDto?: string;
  locationId?: string;
  fullName?: string;
  possition?: string;
  phoneNumber?: string;
  email?: string;
  parentId?: string;

  constructor() {
  }

}
