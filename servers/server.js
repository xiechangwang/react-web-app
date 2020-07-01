const express=require('express');
const mongoose=require('mongoose');
//连接mongo
const DB_URL='mongodb://127.0.0.1:27017/test';
mongoose.connect(DB_URL);
const db=mongoose.connection;
db.on('connected',function(){
	console.log('mongo connect success');
})
//类似sql,mongodb的文档模型
const User=mongoose.model("users",new mongoose.Schema({
	name:{type:String,require:true},
	age:{type:Number,require:true},
}))
//创建数据
// User.create({
// 	name:'lisi',
// 	age:27
// },function(err,doc){
// 	if(!err){
// 		console.log(doc)
// 	}else{
// 		console.log(err);
// 	}
// })

//查找数据
User.find({},function(err,doc){
	if(!err){
		console.log(doc);
	}else{
		console.log(err);
	}
})