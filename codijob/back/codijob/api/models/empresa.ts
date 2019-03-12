// definiendo un modelo
// sequelize => la conexion a la base de datos
export var empresa_model = (sequelize:any, type:any)=>{
    return sequelize.define("t_empresa",{
        emp_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        emp_nom: {
            type: type.STRING,
            allowNull: false
        },
        emp_img: {
            type: type.STRING,
            allowNull: false
        }
        
    },
    {
        // para que no se cree createAt y updateAt
        
        timestamps: true,
        tableName: "t_empresa",
        createAt: true,

        updateAt: 'updateTimestamp',

        deleteAt: 'destroyTime',

        paranoid: true
    });
}