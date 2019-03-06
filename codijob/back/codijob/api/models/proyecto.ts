export class Proyecto{
    
    private pro_id:number
    private pro_nom:string 
    private pro_desc:string      
    private per_fechin:Date  
    private per_fechfin:Date  
         

    constructor( ){
        this.pro_id = 0;
        this.pro_nom = "";
        this.pro_desc = "";        
        this.per_fechin = new Date;
        this.per_fechfin = new Date;
        // preguntar
    }

    get pro_Id():number{
        return this.pro_id;
    }
    set pro_Id(pro_id){
        this.pro_id = pro_id;
    }

    get pro_Nom():string{
        return this.pro_nom;
    }
    set pro_Nom(pro_nom){
        this.pro_nom = pro_nom;
    }

    get pro_Desc():string{
        return this.pro_desc;
    }
    set pro_Desc(pro_desc){
        this.pro_desc = pro_desc;
    }
      
    get per_Fechin():Date{
        return this.per_fechin;
    }

    set per_Fechin(per_fechin){
        this.per_fechin = per_fechin;
    }

    get per_Fechfin():Date{
        return this.per_fechfin;
    }

    set per_Fechfin(per_fechfin){
        this.per_fechfin = per_fechfin;
    }
}