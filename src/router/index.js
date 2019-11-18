import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/index',
            component: resolve => require(['../components/moli/Index.vue'], resolve)
        },
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/brief',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [{
                    path: '/',
                    component: resolve => require(['../components/page/Brief.vue'], resolve)
                },
                // {
                //     path: '/upload',
                //     component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                // },         
                {
                    path: '/userCenter',
                    component: resolve => require(['../components/page/UserCenter.vue'], resolve) // 拖拽列表组件 
                },
                {
                    path: '/modifyUser',
                    component: resolve => require(['../components/page/ModifyUser.vue'], resolve)
                },
                {
                    path: '/modifyPassword',
                    component: resolve => require(['../components/page/ModifyPassword.vue'], resolve)
                },
                {
                    path: '/success',
                    component: resolve => require(['../components/page/Success.vue'], resolve)
                },
                {
                    path: '/room',
                    component: resolve => require(['../components/page/Room.vue'], resolve)
                },
                {
                    path: '/order',
                    component: resolve => require(['../components/page/Evaluate.vue'], resolve)
                },
                // {
                //     path:'/footer',
                //     component:resolve=>require(['../components/page/footer.vue'],resolve)
                // }

            ]
        },
        {
            path: '/register',
            component: resolve => require(['../components/page/Register.vue'], resolve)
        },
        {
            path: '/register-success',
            component: resolve => require(['../components/page/RegisterSuccess.vue'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/hotel',
            component: resolve => require(['../components/yangyunjiao/Home.vue'], resolve),
        },
        {
            path: '/tell',
            component: resolve => require(['../components/yangyunjiao/Tell.vue'], resolve)

        },
        {
            path: '/join',
            component: resolve => require(['../components/yangyunjiao/Join.vue'], resolve)
        },
        {
            path: '/about',
            component: resolve => require(['../components/yangyunjiao/About.vue'], resolve)
        },
        {
            path: '/problem',
            component: resolve => require(['../components/yangyunjiao/Problem.vue'], resolve)
        }


    ]
})
