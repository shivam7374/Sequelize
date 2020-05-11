const{db, Student}=require('./inserting entities')

const task= async()=>{
try{
    await db.sync()
    const students=await Student.findAll({
        where: {age: 14}
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