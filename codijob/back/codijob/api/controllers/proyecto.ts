import { Request, Response } from 'express';

import { Proyecto} from '../config/sequelize';



export var controller_proyecto = {
    getAll: (req:Request,res:Response)=>{       
       Proyecto.findAll().then((proyectos:any)=>{
            let response = {
                message: "ok",
                content: proyectos
            }
            
            res.status(200).send(response);            
       })
    },

    create: (req:Request, res:Response)=>{
        // req body son todos los campos que se envian, ya sea por postman o por el front
        Proyecto.create(req.body).then((proyectoCreado:any)=>{
            let response = {
                message: "created",
                content: proyectoCreado
            }
            res.status(201).send(response)
        }).catch(()=>{

        })
    },
    update: (req:Request,res:Response)=>{     
        Proyecto.update(
            {
                pro_desc: req.body.pro_desc,
                pro_nom: req.body.pro_nom,
                pro_img: req.body.pro_img
            },
            {    where: {
                    pro_id: req.body.pro_id
                }
            }).then((respuesta:any)=>{
                // respuesta[0] es 1 cuando se ha actualizado el registro correctamente
                // respuesta[0] es 0 cuando hubo un error
                if (respuesta[0]===1) { 
                    Proyecto.findById(req.body.pro_id).then((proyecto:any)=>{
                        let response = {
                            message: "update",
                            content: proyecto
                        }
                        res.status(200).send(response);
                    })                    
                }else{
                    let response = {
                        message: "error",
                        content: "error"
                    }
                    res.status(500).send(response);
                }
                
                
        })
    },
    delete:(req:Request,res:Response)=>{     
        Proyecto.destroy()
    }


    

}



