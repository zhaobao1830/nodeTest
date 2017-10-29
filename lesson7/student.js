var mongoose=require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/shu');
//创建Schema
var Schema=mongoose.Schema;
//通过Schema定义表里面字段的名称和类型
var Studentes=new Schema({
  name:String,
  age:String
});
//使用model创建表 ,student是表名（在数据库中是 students）
mongoose.model('student',Studentes);
// 添加数据
// var studentModel=mongoose.model('student');
// var student=new studentModel();
// student.name='yj';
// student.age='26';
// student.save(function (err) {
//   if(err){
//     console.log(err);
//     return;
//   }else{
//     console.log('mogodb save successfull');
//     mongoose.disconnect();
//   }
// })
//查询数据
// var studentModel=mongoose.model('student');
// studentModel.find({'name':'yj'},function (err, students) {
//   console.log(students)
// })

// 更改数据
// var studentModel=mongoose.model('student');
// studentModel.update({_id:'59f54fdfa35b551b080a0563'},{age: '27'},function (err, row_updated) {
//   if(err){
//     console.log(err);
//     return;
//   }else{
//     console.log(row_updated);
//   }
// })

//删除数据
var studentModel=mongoose.model('student');
studentModel.findById('59f56db801f75d2a5cafb12d',function (err, student) {
  if(err){
    console.log(err);
    return;
  }else{
    console.log(student);
    // 删除用remove()
    student.remove();
  }
})