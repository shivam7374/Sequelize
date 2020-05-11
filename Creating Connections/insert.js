const{db, Student}=require('./inserting entities')
const task= async ()=>{
    try{
        await db.sync()
        // Insert a student
        await Student.create({
            name:(['Tom','Dick','Rahul','Shivam','Ram','Shyam',
            'Neha','Nnacy'])[parseInt(Math.random()*10)],
            age:10+parseInt(Math.random()*10)
        })

    } catch(e){
        console.error(e)
    }
}


task();
task();
task();
task();

task();
task();
task();
task();

task();
task();
task();
task();

task();
task();
task();
task();
