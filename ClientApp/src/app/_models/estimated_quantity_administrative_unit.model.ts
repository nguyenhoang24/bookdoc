import { AdministrativeUnit } from "./administrative-unit.model";

export class EstimatedQuantityAdministrativeUnit {
  id: string;
  estimatedQuantity: number;
  estimatePercent: number;
  year: number;
  administrativeUnit: AdministrativeUnit = null;;
  type: string;
}
