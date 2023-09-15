export class PermanentAddressStatus {
  id: string;
  code: string;
  name: string;
  description: string;
  indexNumber: number;
  createDate: Date;
  createdBy: string;
  modifyDate: Date;
  voided: boolean;
  constructor() {
    this.id = "";
    this.code = "";
    this.name = "";
    this.description = "";
    this.indexNumber = null;
    this.createDate = null;
    this.createdBy = null;
    this.modifyDate = null;
    this.voided = false;
  }

  setId(id: string): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }

  getId(): string {
    return this.id;
  }
}
