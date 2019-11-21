var sqlMap = {
    user: {
        add: 'insert into user (username, account, password, repeatPass, email, phone, card, birth, sex) values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from user', 
        update_user: 'update user set'
    },
    room:{
        add: 'insert into room(img_url,name,state,price) values (?,?,?,?)',
        select_name:'select * from room',
        update_user:'update room set'
    },
    home1:{
        select_name:'select * from home1'
    },
    home2:{
        select_name:'select * from home2'
    },
    sanya:{
        select_name:'select * from sanya'
    },
    ant:{
        select_name:'select * from ant'
    },
    comment:{
        add: 'insert into comment (content,date) values (?,?)',
        select_comment:'select * from comment',
        delete_comment:'delete from comment'
    }

}

module.exports = sqlMap;