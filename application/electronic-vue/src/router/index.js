import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../components/home/Home";
import AddItem from "../components/add-item/AddItem";
import UpdateItem from "../components/update-item/UpdateItem";
import ViewItem from "../components/view-item/ViewItem";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: `/add`,
        name: `AddItem`,
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

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHashHistory(),
    hashbang: true,
    mode: 'history',
    routes
})

export default router
