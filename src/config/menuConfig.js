const menuList =  [
    {
        title:'首页',
        key:'/admin/home'
    },
    {
        title:'在线客服',
        key:'/admin/kf',
        children:[
            {
                title:'当前会话',
                key:'/admin/fk/now'
            },
            {
                title:'历史会话',
                key:'/admin/fk/history'
            }
        ]
    },
    {
        title:'语句管理',
        key:'/admin/speechArt',
       
    },
    {
        title:'标签管理',
        key:'/admin/labels',
       
    },
    {
        title:'留言管理',
        key:'/admin/leavemsg',
       
    },
    {
        title:'客服管理',
        key:'/admin/kfment',
        children:[
            {
                title:'客服账户',
                key:'/admin/kfment/account'
            },
            {
                title:'客服坐席',
                key:'/admin/kfment/keftake'
            }
        ]
    },
    {
        title:'聊天管理',
        key:'/admin/chat',
        children:[
            {
                title:'客服账户',
                key:'/admin/chat/record'
            },
            {
                title:'客服坐席',
                key:'/admin/chat/reception'
            }
        ]
    },
]
 export default menuList