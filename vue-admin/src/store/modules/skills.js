const skills = {
    state: {
        data: [],
    },
    getters: {
        skills(state) {
            return state.data;
        }
    },
    mutations: {
        addNewSkill(state, skill) {
            state.data.push(skill);
        },
        removeSavedSkill(state, id) {
            state.data = state.data.filter(skill => skill.id !== id);
        },
    },
    actions: {
        fetchSkills({ state, rootGetters }) {
            const { $http } = rootGetters;
            $http.get('/src/components/about/data.json').then(response => {
                state.data = response.body
            }, error => {
                console.error(error)
            })

        }
    }
}

export default skills