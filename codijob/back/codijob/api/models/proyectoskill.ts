// definiendo un modelo
// sequelize => la conexion a la base de datos
export var proyectoskill_model = (sequelize:any, type:any)=>{
    return sequelize.define("t_proyectoskill",{
        proskill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        }      
        
    },
    {
        // para que no se cree createAt y updateAt
        
        timestamps: true,
        tableName: "t_proyectoskill",
        createAt: true,

        updateAt: 'updateTimestamp',

        deleteAt: 'destroyTime',

        paranoid: true
    });
}