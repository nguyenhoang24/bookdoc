export class Regimen {
    id: number;
    name: string;
    code: string;// ma - gia tri
    description: string;
    indexNumber: number;// thu tu
    line: number;// bac pha do 1,2,3,phac do phoi nhiem
    elder: boolean;// 1: tre em 2: nguoi lon
    children: boolean;

    constructor() {
        this.id = null;
        this.name = null;
        this.code = null;
        this.description = null;
        this.indexNumber = null;
        this.line = null;
        this.children = null;
        this.elder = null;
    }
}
