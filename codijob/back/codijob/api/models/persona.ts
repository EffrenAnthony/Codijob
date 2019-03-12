// definiendo un modelo
// sequelize => la conexion a la base de datos
export var persona_model = (sequelize:any, type:any)=>{
    return sequelize.define("t_persona",{
        per_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        per_nom: {
            type: type.STRING,
            allowNull: false
        },
        per_ape: {
            type: type.STRING,
            allowNull: false
        },
        per_email: {
            type: type.STRING,
            allowNull: false
        
        },
        per_tel: {
            type: type.STRING,
            allowNull: false
        
        },
        per_dni: {
            type: type.STRING,
            allowNull: false
        
        },
        per_fech: {
            type: type.DATE,
            allowNull: false
        
        },
        
    },
    {
        // para que no se cree createAt y updateAt
        
        timestamps: true,
        tableName: "t_persona",
        createAt: true,

        updateAt: 'updateTimestamp',

        deleteAt: 'destroyTime',

        paranoid: true
    });
}