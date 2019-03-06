import { Request, Response } from 'express';
import { SkillsDTO } from '../dto/skills';
import { Skill } from '../models/skills';



export var controller_skills = {
    getAll: (req:Request,res:Response)=>{
        SkillsDTO.getAll().then((skills:Array<Skill>)=>{
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

// module.exports = controller_skills;

