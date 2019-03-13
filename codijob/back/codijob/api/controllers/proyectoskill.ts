import { Request, Response } from 'express';

import { ProyectoSkill} from '../config/sequelize';
import { Skill} from '../config/sequelize';
import { Proyecto} from '../config/sequelize';

/**
 * Forma 1 METODO GET
 * ruta => /api/:parametro/ruta
 * ejm => /api/1/ruta
 * req.params.parametro
 * 
 * Forma 2 METODO GET
 * ruta => /api/ruta
 * ejm => /api/ruta?parametro = 8
 * req.query.paramtro
 */

export var controller_proyectoSkill = {
    
    create: (req:Request, res:Response)=>{
        Skill.findById(req.body.skill_id).then((skill:any)=>{
            if(skill != null){
                return Proyecto.findById(req.body.pro_id);
            }else{
                let response = {
                    message: "error",
                    content: `El proyecto con id ${req.body.pro_id} no existe`
                }
                res.status(500).send(response);
                throw ("Error => El skill no existe")
            }
        }).then((proyecto:any)=>{
            if(proyecto != null){
                return ProyectoSkill.create(req.body)
            }else{
                let response = {
                    message: "error",
                    content: `El skill existe pero el proyecto con id ${req.body.pro_id} no existe`
                }
                res.status(500).send(response);
                throw ("ERROR => El proyecto no existe")
            }   
        }).then((nuevoproyectoskill:any)=>{
            if(nuevoproyectoskill != null){
                let response = {
                    message: "created",
                    content: nuevoproyectoskill
                }
                res.status(201).send(response)
            }else{
                let response = {
                    message: "error",
                    content: `Error al crear el proyectoskill`
                }
                res.status(418).send(response)
                throw ("ERROR => El Proyecto Skill no existe")
            }
        }).catch((error:any)=>{
            let response = {
                message: "Error",
                content: error
            }
            console.log(response);
            
        })
    },

    getSkillsByProyectoId: (req:Request, res:Response)=>{{
        // params se usa cuando es get y body cuando se quiere enviar como formulario en un post
       console.log(req.params.pro_id);
       res.send("OK");
       }
    }
}

            








    
    // getAll: (req:Request,res:Response)=>{       
    //    ProyectoSkill.findAll().then((proyectosSkill:any)=>{
    //         let response = {
    //             message: "ok",
    //             content: proyectosSkill
    //         }
            
    //         res.status(200).send(response);            
    //    })
    // },
    // update: (req:Request,res:Response)=>{     
        //     ProyectoSkill.update(
    //         {
    //             proskill_desc: req.body.pro_desc,
    //             proskill_nom: req.body.pro_nom,
    //             proskill_img: req.body.pro_img
    //         },
    //         {    where: {
    //                 proskill_id: req.body.pro_id
    //             }
    //         }).then((respuesta:any)=>{
    //             // respuesta[0] es 1 cuando se ha actualizado el registro correctamente
    //             // respuesta[0] es 0 cuando hubo un error
    //             if (respuesta[0]===1) { 
    //                 ProyectoSkill.findById(req.body.pro_id).then((proyectoSkill:any)=>{
    //                     let response = {
    //                         message: "update",
    //                         content: proyectoSkill
    //                     }
    //                     res.status(200).send(response);
    //                 })                    
    //             }else{
    //                 let response = {
    //                     message: "error",
    //                     content: "error"
    //                 }
    //                 res.status(500).send(response);
    //             }
                
                
    //     })
    // },
    // delete:(req:Request,res:Response)=>{     
    //     Proyecto.destroy()
    // 
