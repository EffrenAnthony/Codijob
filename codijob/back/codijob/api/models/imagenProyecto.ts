import { Proyecto } from './proyecto';
export class ImagenProyecto{
    
    private imgpro_id:number
    private imgpro_url:string  
    // private pro_id:Proyecto;
         

    constructor( ){
        this.imgpro_id = 0;
        this.imgpro_url = "";
        
    }

    get imgpro_Id():number{
        return this.imgpro_id;
    }
    set imgpro_Id(imgpro_id){
        this.imgpro_id = imgpro_id;
    }

    get imgpro_Url():string{
        return this.imgpro_url;
    }
    set imgpro_Url(imgpro_url){
        this.imgpro_url = imgpro_url;
    }

    
}