export class Producto {
    public id: string;
    public name: string;
    public value: string;
    public description: string;

    constructor(id:string,name:string,value:string,description:string){
        this.id = id;
        this.name = name;
        this.value = value;
        this.description = description;
    }
}
