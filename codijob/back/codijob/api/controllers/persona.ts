import {Response, Request} from 'express';
import {Persona} from '../config/sequelize';


export var controller_persona = {
    getAll: (req:Request, res:Response)=>{
        Persona.findAll().then((personas:any)=>{
            let response = {
                message:"ok",
                content:personas
            }
            res.status(200).send(response);
        })
    },
    create: (req:any, res:Response)=>{
        //  creando una instancia u objeto de la clase Persona
        // OJO => solo es instancia, no se guardo en la BD

        let objPersona = Persona.build(req.body);
        console.log(objPersona);
        objPersona.saludar();
        
        // guardando al objeto en la BD
        objPersona.save().then((personaCreada:any)=>{
            if(personaCreada != null){
                let response = {
                    message: 'created',
                    content:personaCreada
                }
                res.status(201).send("ok"); 
            }else{
                let response = {
                    message:'error',
                    content: 'error al crear la persona'
                }
                res.status(500).send(response);
            }
        })
        
        
            // let objPersona = {
            //     per_nom: req.body.per_nom,
            //     per_ape: req.body.per_ape,
            //     per_email: req.body.per_email,
            //     per_tel: req.body.per_tel,
            //     per_dni: req.body.per_dni,
            //     per_fech: req.body.per_fech
            // };
            // Persona.create(objPersona).then((personaCreada:any)=>{
            //     let response = {
            //         message:"created",
            //         content:personaCreada
            //     }
            //     res.status(200).send(response);
            // }).catch((error:any)=>{
            //     let response = {
            //         message: "error",
            //         content: error
            //     }
            //     res.status(500).send(response);
            // });
        } 
}




