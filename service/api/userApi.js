var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.send('err');
    } else {
        console.log(ret);
        res.send(ret);
    }
}

var dateStr = function (str) {
    return new Date(str.slice(0, 7));
}

// 增加用户接口
router.post('/addUser', (req, res) => {
    //添加
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    console.log(params.birth);
    conn.query(sql, [params.name, params.account, params.pass, params.checkPass,
        params.email, params.phone, params.card, dateStr(params.birth), params.sex
    ], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//查找用户接口
router.post('/login', (req, res) => {
    //查找
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    if (params.name) {
        sql_name += " where username ='" + params.name + "'";
    }
    var keywords = JSON.parse(Object.keys(params)[0]);
    conn.query(sql_name, params.name, function (err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1') //查询不出username，data 返回-1
        } else {
            var resultArray = result[0];
            console.log(resultArray);
            console.log(params);
            if (resultArray.password === keywords.password) {
                jsonWrite(res, result);
            } else {
                res.send('0') //username
            }
        }
    })
});

//获取用户信息
router.get('/getUser', (req, res) => {
    var sql_name = $sql.user.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
    if (params.name) {
        sql_name += "where username ='" + params.name + "'";
    }
    conn.query(sql_name, params.name, function (err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1') //查询不出username，data 返回-1
        } else {
            jsonWrite(res, result);
        }
    })
});

//更新用户信息
router.post('/updateUser', (req, res) => {
    var sql_update = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_update += " email = '" + params.email +
            "',phone = '" + params.phone +
            "',card = '" + params.card +
            "',birth = '" + params.birth +
            "',sex = '" + params.sex +
            "' where id ='" + params.id + "'";
    }
    conn.query(sql_update, params.id, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
        if (result.affectedRows === undefined) {
            res.send('更新失败，请联系管理员') //查询不出username，data 返回-1
        } else {
            res.send('ok');
        }
    })
});

//更改密码
router.post('/modifyPassword', (req, res) => {
    var sql_modify = $sql.user.update_user;
    var params = req.body;
    console.log(params);
    if (params.id) {
        sql_modify += " password = '" + params.pass +
            "',repeatPass = '" + params.checkPass +
            "' where id ='" + params.id + "'";
    }
    conn.query(sql_modify, params.id, function (err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result.affectedRows === undefined) {
            res.send('修改密码失败，请联系管理员') //查询不出username，data 返回-1
        } else {
            res.send('ok');
        }
    })
});
router.get('/deleteOrder', (req, res) => {

})

router.get('/getRoom', (req, res) => {
    var sql_name = $sql.room.select_name;
    // var sql_password = $sql.user.select_password;
    var params = req.body;
    console.log(params);
    if (params.name) {
        sql_name += "where username ='" + params.name + "'";
    }
    conn.query(sql_name, params.name, function (err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result);
        if (result[0] === undefined) {
            res.send('-1') //查询不出username，data 返回-1
        } else {
            jsonWrite(res, result);
        }
    })
});
router.get('/getHome1', (req, res) => {
    var sql_name = $sql.home1.select_name;
    var params = req.body;
    if (params.name) {
        sql_name += "where username ='" + params.name + "'";
    }
    conn.query(sql_name, params.name, function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result[0] == undefined) {
            res.send('-1')
        } else {
            jsonWrite(res, result);
        }
    })
})
router.get('/getHome2', (req, res) => {
    var sql_name = $sql.home2.select_name;
    var params = req.body;
    if (params.name) {
        sql_name += "where username ='" + params.name + "'";
    }
    conn.query(sql_name, params.name, function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result[0] == undefined) {
            res.send('-1')
        } else {
            jsonWrite(res, result);
        }
    })
})
router.get('/getSanya', (req, res) => {
    var sql_name = $sql.sanya.select_name;
    var params = req.body;
    if (params.name) {
        sql_name += "where username ='" + params.name + "'";
    }
    conn.query(sql_name, params.name, function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result[0] == undefined) {
            res.send('-1')
        } else {
            jsonWrite(res, result);
        }
    })
})
router.get('/getAnt', (req, res) => {
    var sql_name = $sql.ant.select_name;
    var params = req.body;
    if (params.name) {
        sql_name += "where username ='" + params.name + "'";
    }
    conn.query(sql_name, params.name, function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result[0] == undefined) {
            res.send('-1')
        } else {
            jsonWrite(res, result);
        }
    })
})
router.post('/addComment',(req,res)=>{
    var sql = $sql.comment.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.content, params.date], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
})
router.get('/getComment',(req,res)=>{
    var sql_comment=$sql.comment.select_comment;
    var params=req.body;
    conn.query(sql_comment,params.content,function(err,result){
        if(err){
            console.log(err);
            
        }
        if(result[0]==undefined){
            res.send('-1')
        }else{
            jsonWrite(res,result);
        }
    })
})
// router.get('/delComment',(req,res)=>{
//     var sql_comment=$sql.comment.delete_comment;
//     // console.log(req,res);
//     var params=req.body;
    
//     sql_comment+="where content='"+params.content+"'";
//     conn.query(sql_comment,function(err,result){
//         if(err){
//             console.log(err);
//         }
//         if(result[0]==undefined){
//             res.send('-1')
//         }else{
//             jsonWrite(res,result);
//         }
//     })
// })
module.exports = router;
