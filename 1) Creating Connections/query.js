const{db, Student}=require('./inserting entities')
const Op= Sequelize.Op
const task= async()=>{
try{
    await db.sync()
    const students=await Student.findAll({
        where: {age:{[Op.gt]:13}}
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