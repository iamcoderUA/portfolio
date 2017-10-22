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
        saveSkill(state) {
            const xhr = new XMLHttpRequest();
            const jsonData = JSON.stringify(state.data);
            xhr.open('POST', 'api/sendSkills', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(jsonData);
            xhr.onreadystatechange = function () {
                if (xhr.status !== 301) {
                    console.log(`${xhr.status} : ${xhr.statusText}`);                               
                } else {
                    console.log(`${xhr.status} : ${xhr.statusText}`);
                }
            }
        }
    },
    actions: {
        fetchSkills({ state, rootGetters }) {
            const { $http } = rootGetters;
            $http.get('api/getSkills').then((response) => {
            state.data = response.body;
      }, (error) => {
        console.error(error);
      })
        }
    }
}

export default skills;
