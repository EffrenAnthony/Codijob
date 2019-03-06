import { Request, Response } from 'express';
import { SkillDTO } from '../dto/skill';
import { Skill } from '../models/skill';



export var controller_skill = {
    getAll: (req:Request,res:Response)=>{
        SkillDTO.getAll().then((skills:Array<Skill>)=>{
            console.log(skills);  
            res.send(skills)          
        }).catch((error)=>{
            console.log(error);
            
        })
       
    },
    updateById: (req:Request,res:Response)=>{
        res.send("Actualziando un skill dado su ID");
    },
    deleteById: (req:Request,res:Response)=>{
        res.send("Eliminando un skill dado su ID");
    },
    create: (req:Request,res:Response)=>{
        res.send("Creando un nuevo skill")
    }

    }

// module.exports = controller_skill;

