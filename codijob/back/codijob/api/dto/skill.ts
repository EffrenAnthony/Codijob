
import {connection} from '../../index';
import { Skill } from '../models/skill';


export class SkillDTO{
    static getAll():Promise<any>{

        let query = "SELECT * FROM t_skill";

        return new Promise ((resolve, reject)=>{
            // codigo async
        connection.query(query,(err:any,result:any)=>{
            // error
            if(err){
                reject (err);
            }

            let skills:Array<Skill> = []; 

            if(result.length === 0){
                resolve (skills);
            }
            
            result.forEach((skillDB:any) => {
                let skill:Skill = new Skill();
                skill.skill_Id= skillDB.skill_id;
                skill.skill_Nom = skillDB.skill_nom;
                skill.skill_Desc = skillDB.skill_desc;
                skill.skill_Img = skillDB.skill_img;                
                skills.push(skill);
            });

            
            // console.log(skills);
            resolve (skills);
            
        });

        })
        
    }
}