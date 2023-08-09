<script setup>
import { ref, computed } from 'vue'
import store from '../store';
import YoutubeButton from '../components/YoutubeButton.vue';

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    // we call action of the store
    store.dispatch('searchMeals', keyword.value)
}
</script>

<template>
    <div class="p-8 pb-0">
        <input 
            type="text"
            v-model="keyword" 
            class="rounded border-2 border-gray-200 w-full" 
            placeholder="Search for Meals" 
            @change="searchMeals"
        />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded-t-xl w-full h-64 object-cover" />
            <div class="p-3">
                <h3 class="font-semibold mb-4">{{ meal.strMeal }}</h3>
                <div class="flex items-center">
                   <YoutubeButton :href="meal.strYoutube"/>
                   <router-link 
                       :to="{name: 'mealDetails', params: {id: meal.idMeal}}" 
                       class="px-3 py-2 rounded border-2 border-purple-600 text-white bg-purple-500 hover:bg-purple-600"
                   >
                       View
                   </router-link>
                </div>
            </div>
        </div>
    </div>
</template>