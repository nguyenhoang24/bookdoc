export class Organization {
  id: string;
  name: string;
  code: string;
  website: string;
  organizationType: number;
  level: number;
  parent: Organization;
  subOrganizationsDto: Organization[];
  parentId: string;

  constructor() {
    this.name = "";
    this.code = "";
    this.website = "";
    this.organizationType = null;
    this.level = null;
    this.parent = null;
    this.parentId = ""
  }

}
