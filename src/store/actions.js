import axiosClient from '../axiosClient';

// the store action makes request to the server, gets the data and calls the mutation
export function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setSearchedMeals', data.meals)
        })
}