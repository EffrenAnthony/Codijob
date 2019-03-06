
import {connection} from '../../index';
import { Skill } from '../models/skills';


export class SkillsDTO{
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
                skill.skill_id= skillDB.skill_id;
                skill.skill_nom = skillDB.skill_nom;
                skill.skill_desc = skillDB.skill_desc;
                skill.skill_img = skillDB.skill_img;                
                skills.push(skill);
            });

            
            // console.log(skills);
            resolve (skills);
            
        });

        })
        
    }
}