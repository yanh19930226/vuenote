import Home from './components/Home.vue'
import Column from './components/Column.vue'
import Follow from './components/Follow.vue'
import UserInfo from './components/UserInfo.vue'
import Article from './components/Article.vue'


export default[
   {
     path:'/home',
     component:Home
   },
   {
    path:'/follow',
    component:Follow
  },
  {
    path:'/column',
    component:Column
  },
  {
    path:'/userinfo',
    component:UserInfo
  },
  {
    path:'/article/:id',
    component:Article
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'*',
    redirect:'/home'
  }
]