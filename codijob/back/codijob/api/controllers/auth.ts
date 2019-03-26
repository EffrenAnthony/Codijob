import {Response, Request} from 'express'
import {Persona,Usuario} from '../config/sequelize'

export var controller_auth = {
    create: (req:Request, res:Response)=>{
        var objPersona = Persona.build(req.body);
        var objUsuario = Usuario.build();
        objUsuario.setPassword(req.body.usu_pass);

        objPersona.save().then((personaCreada:any)=>{
            if(personaCreada){
                objUsuario.per_id = personaCreada.per_id;
                return objUsuario.save()
            }else{
                let response = {
                    message: "error",
                    content: "Error al crear la persona"
                };
                res.status(500).send(response);
            }
        }).then((usuarioCreado:any)=>{
            if(usuarioCreado){
                return usuarioCreado.generateJWT();               
                
                
            }else{
                let response = {
                    message: "error",
                    content: "Se creo a la persona, pero no al usuario"
                };
                res.status(201).send(response);
            }
            
        }).then((token:any)=>{
            let response = {
                message: "created",
                content: objUsuario,
                token
            }
            res.status(201).send(response);
        });
    },

    login: (req:Request, res:Response)=>{
        let objPersona = Persona.build();
        let objUsuario = Usuario.build();
        Persona.findOne({
            where: {
                per_email: req.body.per_email
            }
        }).then((personaEncontrada:any)=>{
            if  (personaEncontrada){
                objPersona = personaEncontrada;                   
                return Usuario.findOne({
                    where:{
                        per_id: objPersona.per_id
                    }
                });  
            }else{
                let response = {
                    message: 'error',
                    content: 'El email no esta registrado'
                };
                res.status(500).send(response)
                throw ('El email no esta registrado')
            }                     
        }).then((usuarioEncontrado:any)=>{
            if(usuarioEncontrado){
                objUsuario = usuarioEncontrado;
                if(objUsuario.validPassword(req.body.usu_pass)==true){
                    // usuario con password autentico
                    return objUsuario.generateJWT();
                }else{
                    let response = {
                        message: 'error',
                        content:'contraseña incorrecta'
                    }
                    res.status(500).send(response);
                }
            }else{
                let response = {
                    message:'error',
                    content: 'No existe un usuario par esa persona'
                }
                res.status(500).send(response);
                throw ('No existe un usuario par esa persona')
            }
        }).then((token:any)=>{
            let response = {
                message:'Success',
                token:token
            };
            res.status(200).send(response);
        }).catch((error:any)=>{
            console.log("error");
            console.log(error);
            
        });
    }
}