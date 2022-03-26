var a = {
  name: 'it-kamasutra.com',
  protocol: "https",
  maxStudentsCount:10,
  isOnline:true,
  students: ['ivan', 'andrey', 'farid'],
  classroom: {
    teatcher:{
      name: 'wew',
      age: 18
    }
  }
}
var b = {...a}
b.classroom = {...a.classroom}
b.classroom.teatcher = {...a.classroom.teatcher}
b.students = [...a.students]
console.log(b)

console.log(a.classroom.teatcher.name === b.classroom.teatcher.name)
