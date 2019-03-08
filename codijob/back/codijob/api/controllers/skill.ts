import { Request, Response } from 'express';
import { SkillDTO } from '../dto/skill';
import { Skill } from '../models/skill';



export var controller_skill = {
    getAll: (req:Request,res:Response)=>{
        console.log(`Variable 'a' => ${req.query.a}`);
        
        SkillDTO.getAll().then((skills:Array<Skill>)=>{
            console.log(skills);  
            res.send(skills)          
        }).catch((error)=>{
            console.log(error);
            
        })
       
    },

    create: (req:Request, res:Response)=>{
        // creando un objeto skill vacio
        let skill = new Skill();
        // obteniendo los parametros  recibidos por post
        // {body:params}=req; esta destructurado de forma que req recibe a body y se guarda en body y se asigna un nombre a la varibale llamada params
        // normalmente seria "params = req.body"
        let {body:params} = req;
        // creando los campos del objeto skill
        skill.skill_Nom = params.skill_nom;
        skill.skill_Desc = params.skill_desc;
        skill.skill_Img = params.skill_img;
        // invocando a la funcion create (funcion estatica)
        // le mandamos todo le objeto skill sin su ID 
        SkillDTO.create(skill).then((skill:Skill)=>{
            let respuesta = {
                mensaje: "creado",
                content:skill
            }
            // status codes http => en este caso 201 es creates
            res.status(201).send(respuesta);
        }).catch((error)=>{
            let respuesta = {
                mensaje: "ERROR",
                content:error
            }
            // 500 es internal server error
            res.status(500).send(respuesta);
        });


        // res.send("OK");
        
    },
    update: (req:Request,res:Response)=>{
        let skill = new Skill();
        let {body:params} = req;
        skill.skill_Nom = params.skill_nom;
        skill.skill_Desc = params.skill_desc;
        skill.skill_Img = params.skill_img;
        skill.skill_Id = params.skill_id;

        SkillDTO.update(skill).then((skill:Skill)=>{
            let respuesta = {
                mensaje: "Actualizado",
                content:skill
            }
            res.status(205).send(respuesta);
        }).catch((error)=>{
            let respuesta = {
                mensaje: "ERROR",
                content:error
            }
            res.status(500).send(respuesta);
        });


        // res.send("OK");
    }
    // updateById: (req:Request,res:Response)=>{
    //     res.send("Actualziando un skill dado su ID");
    // },
    // deleteById: (req:Request,res:Response)=>{
    //     res.send("Eliminando un skill dado su ID");
    // },
    // create: (req:Request,res:Response)=>{
    //     res.send("Creando un nuevo skill")
    // }

    }

// module.exports = controller_skill;

