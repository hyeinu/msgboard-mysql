const db = require('../config/db');
const squel = require('squel').useFlavour('mysql')
const uuid = require('uuid')

db.query(`create table if not exists msgs (
  id varchar(100),
  name varchar(50),
  time varchar(50),
  content varchar(50)
)`, err =>{
  if (err){
    console.log('table create err:', err);
  }
})

exports.getAll = function(cb){
  let sql = squel.select().from('msgs').toString();
  db.query(sql, (err, msgs)=>{
    cb(err, msgs);
  })
}

exports.create = function(msgObj, cb){
  msgObj.id = uuid.v4();
  let sqlinsert = squel.insert()
                       .into("msgs")
                       .set("id", msgObj.id)
                       .set("name", msgObj.name)
                       .set("time", msgObj.time)
                       .set("content", msgObj.content)
                       .toString();

    db.query(sqlinsert, (err, msgs)=>{
    cb(err, msgs)
  })
}

exports.getOne = function(msgId, cb){

  let sqlgetone = squel.select()
                       .from('msgs')
                       .where(`id = "${msgId}"`)
                       .toString();

  db.query(sqlgetone, (err, msg)=>{
    cb(err, msg)

  })
}

exports.delete = function(msgId, cb){

  let sqldelete = squel.delete()
                       .from('msgs')
                       .where(`id = "${msgId}"`)
                       .toString();
  db.query(sqldelete, (err,msg)=>{
    cb(err, msg)
  })
}

exports.update = function(msgId, msgbody, cb){
  let sqlupdate = squel.update()
                       .table('msgs')
                       .set("id", msgId)
                       .set("name", msgbody.name)
                       .set("content", msgbody.content)
                       .where(`id = "${msgId}"`)
                       .toString();

    db.query(sqlupdate, (err, msgs)=>{
      cb(err, msgs)
    })
}
