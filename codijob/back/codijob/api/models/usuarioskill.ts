// definiendo un modelo
// sequelize => la conexion a la base de datos
export var usuarioSkill_model = (sequelize:any, type:any)=>{
    return sequelize.define("t_usuarioSkill",{
        uskill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        uskill_lvl: {
            type: type.STRING,
            allowNull: false
        },
       
        
    },
    {
        // para que no se cree createAt y updateAt
        
        timestamps: true,
        tableName: "t_usuarioSkill",
        createAt: true,

        updateAt: 'updateTimestamp',

        deleteAt: 'destroyTime',

        paranoid: true
    });
}