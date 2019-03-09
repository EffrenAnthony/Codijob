// definiendo un modelo
// sequelize => la conexion a la base de datos
export var skill_model = (sequelize:any, type:any)=>{
    return sequelize.define("t_skill",{
        skill_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        skill_nom: {
            type: type.STRING,
            allowNull: false
        },
        skill_desc: {
            type: type.STRING,
            allowNull: false
        },
        skill_img: {
            type: type.STRING,
            allowNull: false
        
        },
        
    },
    {
        // para que no se cree createAt y updateAt
        
        timestamps: true,

        createAt: true,

        updateAt: 'updateTimestamp',

        deleteAt: 'destroyTime',

        paranoid: true
    });
}