import { HriPopulationGroupItem } from "./hri-population-group-item.model";

export class HriSummaryReports {
    reportDate: string;
    year: number;
    quarter: number;
    title: string;
    populationGroups: HriPopulationGroupItem[];
  
    constructor() {
        this.reportDate = "";
        this.year = null;
        this.quarter = null;
        this.title = "";
        this.populationGroups = [];
    }
  }
  