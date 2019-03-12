// definiendo un modelo
// sequelize => la conexion a la base de datos
export var usuario_model = (sequelize:any, type:any)=>{
    return sequelize.define("t_usuario",{
        usu_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        usu_tipo: {
            type: type.STRING,
            allowNull: false
        },
        usu_hash: {
            type: type.STRING,
            allowNull: false
        },
        usu_salt: {
            type: type.STRING,
            allowNull: false
        
        },
        usu_img: {
            type: type.STRING,
            allowNull: false
        
        },
        usu_lat: {
            type: type.STRING,
            allowNull: false
        
        },
        usu_lng: {
            type: type.STRING,
            allowNull: false
        
        },
        usu_www: {
            type: type.STRING,
            allowNull: false
        
        },
        usu_git: {
            type: type.STRING,
            allowNull: false
        
        },
        usu_fb: {
            type: type.STRING,
            allowNull: false
        
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
}