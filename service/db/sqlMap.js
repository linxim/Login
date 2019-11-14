var sqlMap = {
    user: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from user', 
        update_user: 'update user set'
    },
    evaluate:{
        add: 'insert into evaluate(nowtime,u-content) values (?,?)',
        select_name:'select * from evaluate',
        update_user:'update evaluate set'
    },
    room:{
        add: 'insert into room(img_url,name,state,price) values (?,?,?,?)',
        select_name:'select * from room',
        update_user:'update room set'
    }
}

module.exports = sqlMap;