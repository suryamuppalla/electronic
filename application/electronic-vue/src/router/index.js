import {createRouter, createWebHistory} from 'vue-router'
import Home from "../components/Home";
import AddItem from "../components/AddItem";
import UpdateItem from "../components/UpdateItem";
import ViewItem from "../components/ViewItem";

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
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
