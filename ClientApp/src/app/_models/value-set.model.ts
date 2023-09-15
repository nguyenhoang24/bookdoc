export class ValueSet {
    id: string;
    name: string;
    code: string;
    indexNumber: number;
    description: string;
    valueSetType: number;
    constructor() {
        this.name = null;
        this.code = null;
        this.indexNumber = null;
        this.description = null;
        this.valueSetType = null;
    }

    setId(id: string): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }
}
