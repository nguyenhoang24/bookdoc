export class AdministrativeUnit{
  id: string;
  name: string;
  code: string;
  place: string;
  level: number;
  position: number;
  elogCode: string;
  hivInfoCode: string;
  pqmCode: string;
  linePath: string;
  parentDto: AdministrativeUnit;
  childrensDtos: AdministrativeUnit[];
  parent: AdministrativeUnit;
  parentName: string ;
  children: AdministrativeUnit[];


  constructor(){
    // this.name = "";
    // this.code = "";
    // this.place = "";
    // this.level = this.level;

  }

}
