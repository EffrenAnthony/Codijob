import { Persona } from './persona';
export class Usuario{
    
    private usu_id:number
    private usu_nom:string 
    private usu_hash:string 
    private usu_salt:string  
    private usu_img:string  
    private usu_www:string  
    private usu_git:string  
    private usu_fb:string  
    // private per_id:Persona
         

    constructor( ){
        this.usu_id = 0;
        this.usu_nom = "";
        this.usu_hash = "";
        this.usu_salt = "";
        this.usu_img = "";
        this.usu_www = "";
        this.usu_git = "";
        this.usu_fb = "";
        
    }

    get usu_Id():number{
        return this.usu_id;
    }
    set usu_Id(usu_id){
        this.usu_id = usu_id;
    }

    get usu_Nom():string{
        return this.usu_nom;
    }
    set usu_Nom(usu_nom){
        this.usu_nom = usu_nom;
    }

    get usu_Hash():string{
        return this.usu_hash;
    }
    set usu_Hash(usu_hash){
        this.usu_hash = usu_hash;
    }

    get usu_Salt():string{
        return this.usu_salt;
    }
    set usu_Salt(usu_salt){
        this.usu_salt = usu_salt;
    }

    get usu_Img():string{
        return this.usu_img;
    }
    set usu_Img(usu_img){
        this.usu_img = usu_img;
    }

    get usu_Www():string{
        return this.usu_www;
    }
    set usu_Www(usu_www){
        this.usu_www = usu_www;
    }
    
    get usu_Git():string{
        return this.usu_git;
    }

    set usu_Git(usu_git){
        this.usu_git = usu_git;
    }

    get usu_Fb():string{
        return this.usu_fb;
    }

    set usu_Fb(usu_fb){
        this.usu_fb = usu_fb;
    }
}