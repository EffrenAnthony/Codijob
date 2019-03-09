import { Request, Response } from 'express';

import { Skill } from '../config/sequelize';



export var controller_skill = {
    getAll: (req:Request,res:Response)=>{       
       Skill.finAll().then((skills:any)=>{
            console.log(skills);
            res.status(200).send("OK");            
       })
    },

    create: (req:Request, res:Response)=>{
        
    },
    update: (req:Request,res:Response)=>{     

    }
    

}



