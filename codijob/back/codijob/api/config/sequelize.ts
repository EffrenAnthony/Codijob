// En este archivo ira la configuración 
// e inicializacion, migracion de niestros modelos a la base de datos
// udando el principio CODE FIRST

import {skill_model} from '../models/skill'
import{proyecto_model} from   '../models/proyecto'
import{proyectoskill_model} from   '../models/proyectoskill'
import {empresa_model} from '../models/empresa'
import {persona_model} from '../models/persona'
import {usuario_model} from '../models/usuario'
import {imagenProyecto_model} from '../models/imagenProyecto'
import {usuarioEmpresa_model} from '../models/usuarioEmpresa'
import {usuarioSkill_model} from '../models/usuarioskill'
import {usuarioProyecto_model} from '../models/usuarioproyecto'

const Sequelize = require('sequelize');

const sequelize = new Sequelize('pyaePU6hjB','pyaePU6hjB','DWCN8Ef4E2',{
    host: 'remotemysql.com',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    } ,
    timezone: '-05:00', //for writing database
});

export const Skill = skill_model(sequelize,Sequelize);
export const Proyecto = proyecto_model(sequelize,Sequelize);
export const ProyectoSkill = proyectoskill_model(sequelize,Sequelize);
export const Empresa = empresa_model(sequelize,Sequelize);
export const Persona = persona_model(sequelize,Sequelize);
export const Usuario = usuario_model(sequelize,Sequelize);
export const ImagenProyecto = imagenProyecto_model(sequelize,Sequelize);
export const UsuarioEmpresa = usuarioEmpresa_model(sequelize,Sequelize);
export const UsuarioSkill = usuarioSkill_model(sequelize,Sequelize);
export const UsuarioProyecto = usuarioProyecto_model(sequelize,Sequelize);


// Crea una clave foranea
Usuario.belongsTo(Persona, {foreignKey:'per_id'});

UsuarioSkill.belongsTo(Usuario, {foreignKey: 'usu_id'});
UsuarioSkill.belongsTo(Skill, {foreignKey: 'skill_id'});

ProyectoSkill.belongsTo(Skill, {foreignKey:'skill_id'});
ProyectoSkill.belongsTo(Proyecto, {foreignKey:'pro_id'});

UsuarioProyecto.belongsTo(Proyecto, {foreignKey: 'pro_id'});
UsuarioProyecto.belongsTo(Usuario, {foreignKey: 'usu_id'});

UsuarioEmpresa.belongsTo(Empresa, {foreignKey: 'emp_id'});
UsuarioEmpresa.belongsTo(Usuario, {foreignKey: 'usu_id'});

ImagenProyecto.belongsTo(Proyecto, {foreignKey: 'pro_id'});




// force => true; cada vez que el proyecto inicie (npm start)
//          toda la dara y tablas se van a crear nuevamente sin datos.
// force => false; solo va a crear las tablas y/o campos que bno figuren actualmente
//          en nuetra base de datos, los datos no se van a borrar.
sequelize.query('SET FOREIGN_KEY_CHECKS = 0',{raw:true}).then(()=>{
    sequelize.sync({force:false}).then(()=>{
        console.log("Base de datos creada con exito");    
    });

});


