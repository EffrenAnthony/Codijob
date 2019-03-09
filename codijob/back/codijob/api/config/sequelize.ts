// En este archivo ira la configuración 
// e inicializacion, migracion de niestros modelos a la base de datos
// udando el principio CODE FIRST

import {skill_model} from '../models/skill'
const Sequelize = require('sequelize');

const sequelize = new Sequelize('codijob2','root','punkAnthony95',{
    host: 'localhost',
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
// force => true; cada vez que el proyecto inicie (npm start)
//          toda la dara y tablas se van a crear nuevamente sin datos.
// force => false; solo va a crear las tablas y/o campos que bno figuren actualmente
//          en nuetra base de datos, los datos no se van a borrar.
sequelize.sync({force:false}).then(()=>{
    console.log("Base de datos creada con exito");    
});


