import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import MealList from '../views/MealList.vue'
import SearchByName from '../views/SearchByName.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByIngredient from '../views/SearchByIngredient.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home
            },
            {
                path: "/letter/:letter",
                name: "byLetter",
                component: MealList
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: SearchByName
            },
            {
                path: "/by-letter/:letter?",
                name: "byLetter",
                component: SearchByLetter
            },
            {
                path: "/by-ingredient/:ingredient?",
                name: "byIngredient",
                component: SearchByIngredient
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout
    },
    {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
