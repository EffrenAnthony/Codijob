// definiendo un modelo
// sequelize => la conexion a la base de datos
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
export var usuario_model = (sequelize:any, type:any)=>{
    let usuarioModel = sequelize.define("t_usuario",{
        usu_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        usu_tipo: {
            type: type.STRING,
            allowNull: false,
            defaultValue:'tipo por defecto'
        },
        usu_hash: {
            type: type.STRING,
            allowNull: false,
            defaultValue:'hash por defecto'
        },
        usu_salt: {
            type: type.STRING,
            allowNull: false,
            defaultValue:'salt por defecto'
        
        },
        usu_img: {
            type: type.STRING,
            allowNull: false,
            defaultValue:'img por defecto'
        
        },
        usu_lat: {
            type: type.STRING,
            allowNull: false,
            defaultValue:'0'
        
        },
        usu_lng: {
            type: type.STRING,
            allowNull: false,
            defaultValue:'0'
        
        },
        usu_www: {
            type: type.STRING,
            allowNull: false,
            defaultValue:'www.example.com'
        
        },
        usu_git: {
            type: type.STRING,
            allowNull: false,
            defaultValue:'www.git.com'
        
        },
        usu_fb: {
            type: type.STRING,
            allowNull: false,
            defaultValue:'www.fb.com'
        
        }
    },
    {
        // para que no se cree createAt y updateAt
        
        timestamps: true,
        tableName: "t_usuario",
        createAt: true,

        updateAt: 'updateTimestamp',

        deleteAt: 'destroyTime',

        paranoid: true
    });

    usuarioModel.prototype.setPassword = function(password:string){
        // encriptando password con lubreria crypto, 16 es es elnumero de bytes, toString => y formato hexadecimal 
        this.usu_salt = crypto.randomBytes(16).toString("hex");
        // crypto.pbkdf2Sync(password, salt, iterations, keylen, digest) => keylen es el tamaño de caracteres -- sha512 es el algoritmo que se va a utilizar
        this.usu_hash = crypto.pbkdf2Sync(password,this.usu_salt, 10000, 64, 'sha512').toString("hex");
    };

    usuarioModel.prototype.validPassword = function(password:string){
        var hash = crypto.pbkdf2Sync(password,this.usu_salt, 10000, 64, 'sha512').toString("hex");
        return hash === this.usu_hash;
    };

    usuarioModel.prototype.generateJWT = function(){
        let hoy = new Date();        
        let payload = {
            usu_id: this.usu_id,
            exp: +hoy.getTime()+60000
        }
        // en sign manda el payload, es decir lo que uno quiere que vaya al token y el segundo campo es una contraseña, sifrada si uno quiere
        let token = jwt.sign(payload,'sape');

        return token;
    }

    return usuarioModel;
}