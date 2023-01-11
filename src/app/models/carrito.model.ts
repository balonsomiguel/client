export class Carrito {
    public usuario: string;
    public producto: string;
    public atributos: string;

    constructor(usuario:string,producto:string,atributos:string){
        this.usuario = usuario;
        this.producto = producto;
        this.atributos = atributos;
    }
}