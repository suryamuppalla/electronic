import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import AddItem from "../components/AddItem";
import UpdateItem from "../components/UpdateItem";
import ViewItem from "../components/ViewItem";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddItem',
      component: AddItem
    },
    {
      path: '/update/:id',
      name: 'UpdateItem',
      component: UpdateItem
    },
    {
      path: '/view/:id',
      name: 'ViewItem',
      component: ViewItem
    }
  ]
})
