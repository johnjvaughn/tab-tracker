import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Songs'
import ShowSong from '@/components/ShowSong/ShowSong'
import NewSong from '@/components/NewSong'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/:id',
      name: 'song',
      component: ShowSong
    },
    {
      path: '/songs/new',
      name: 'songs-new',
      component: NewSong
    },
    {
      path: '/songs/:id/edit',
      name: 'song-edit',
      component: EditSong
    }
  ]
})
