const{db, Student}=require('./inserting entities')
const{Op}=require('sequelize')
const task= async()=>{
try{
    await db.sync()
    const students=await Student.findAll({
        where: {age:{[Op.or]:{
            [Op.gt]:13,
            [Op.lt]:20
        }
    }},
        order:[
            ['age','DESC'],
            ['name','ASC']
        ]
    })
    students.forEach(s => {
        console.log(`
        name:${s.dataValues.name} \t\t age:${s.dataValues.age}
        `)        
    });

}catch(e){
    console.log(e)
}

}


task();