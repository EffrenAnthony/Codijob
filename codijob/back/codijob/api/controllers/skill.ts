import { Request, Response } from 'express';

import { Skill } from '../config/sequelize';

// fs => libreria nativa de node para administrar los archivos del sistema
// path => libreria nativa de node para manejar rutas
var fs = require('fs');
var path = require('path');

export var controller_skill = {
    getAll: (req:Request,res:Response)=>{       
       Skill.findAll().then((skills:any)=>{
            let response = {
                message: "ok",
                content: skills
            }
            
            res.status(200).send(response);            
       })
    },

    create: (req:any, res:Response)=>{
        
        // Skill.create(req.body).then((skillCreado:any)=>{
        //     let response = {
        //         message: "created",
        //         content: skillCreado
        //     }
        //     res.status(201).send(response)
        // }).catch(()=>{

        // })

        if(req.files){
            console.log("tiene archivos");
            res.send("tiene archivos");            
        }else{
            console.log("no tiene archivos");
            res.send("no tiene archivos");   
        }
    },
    update: (req:Request,res:Response)=>{     
        Skill.update(
            {
                skill_desc: req.body.skill_desc,
                skill_nom: req.body.skill_nom,
                skill_img: req.body.skill_img
            },
            {    where: {
                    skill_id: req.body.skill_id
                }
            }).then((respuesta:any)=>{
                // respuesta[0] es 1 cuando se ha actualizado el registro correctamente
                // respuesta[0] es 0 cuando hubo un error
                if (respuesta[0]===1) { 
                    Skill.findById(req.body.skill_id).then((skill:any)=>{
                        let response = {
                            message: "update",
                            content: skill
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
        Skill.destroy()
    }


    

}



