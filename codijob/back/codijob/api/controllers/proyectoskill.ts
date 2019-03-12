import { Request, Response } from 'express';

import { ProyectoSkill} from '../config/sequelize';
import { Skill} from '../config/sequelize';
import { Proyecto} from '../config/sequelize';



export var controller_proyectoSkill = {
    
    create: (req:Request, res:Response)=>{
        Skill.findById(req.body.skill_id).then((skill:any)=>{
            Proyecto.findById(req.body.pro_id).then((proyecto:any)=>{
                ProyectoSkill.create(req.body).then((proyectoSkillCreado:any)=>{
                    let response = {
                        message: "created",
                        content: proyectoSkillCreado
                    }
                    res.status(201).send(response)
                }).catch(()=>{   
                })
            }).catch(()=>{
                let response = {
                    message: "error",
                    content: `El proyecto con id ${req.body.pro_id} no existe`
                }
                res.status(500).send(response);
            })
        }).catch(()=>{
            let response = {
                message: "error",
                content: `El Skill con id ${req.body.skill_id} no existe`
            }
            res.status(500).send(response);
        });
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
    // }


    


