export class Persona{
    
    private per_id:number
    private per_nom:string 
    private per_ape:string 
    private per_email:string  
    private per_tel:string  
    private per_dni:string  
    private per_fech:Date  
         

    constructor( ){
        this.per_id = 0;
        this.per_nom = "";
        this.per_ape = "";
        this.per_email = "";
        this.per_tel = "";
        this.per_dni = "";
        this.per_fech = new Date;
        // preguntar
    }

    get per_Id():number{
        return this.per_id;
    }
    set per_Id(per_id){
        this.per_id = per_id;
    }

    get per_Nom():string{
        return this.per_nom;
    }
    set per_Nom(per_nom){
        this.per_nom = per_nom;
    }

    get per_Ape():string{
        return this.per_ape;
    }
    set per_Ape(per_ape){
        this.per_ape = per_ape;
    }

    get per_Email():string{
        return this.per_email;
    }
    set per_Email(per_email){
        this.per_email = per_email;
    }

    get per_Tel():string{
        return this.per_tel;
    }
    set per_Tel(per_tel){
        this.per_tel = per_tel;
    }

    get per_Dni():string{
        return this.per_dni;
    }
    set per_Dni(per_dni){
        this.per_dni = per_dni;
    }
    
    get per_Fech():Date{
        return this.per_fech;
    }

    set per_Fech(per_fech){
        this.per_fech = per_fech;
    }
}