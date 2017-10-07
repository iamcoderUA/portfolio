<template lang="pug">
  .about
    h1.title Страница &#171Обо мне&#187
    .skills-list(v-for="(skillType, index) in skillsTypes")
      skills-list(
        :skills="skills"
        :skillType='skillType'
        :key='index'
        @addSkill="addSkill"
        @removeSkill="removeSkill"
      )

</template>

<script>
import skillsList from './skills-list';
import { mapActions, mapGetters, mapMutations } from 'vuex';


export default {
  data() {
    return {
      skillsTypes: ['Frontend', 'Workflow', 'Backend']
    }
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['fetchSkills']),
    ...mapMutations(['addNewSkill', 'removeSavedSkill']),
    addSkill(skill) {
      this.addNewSkill(skill);
    },
    removeSkill(id) {
      this.removeSavedSkill(id);
    }
  },
  created() {
    this. fetchSkills()
  },
  components: {
    skillsList,
  },

}
</script>

<style lang="scss" scoped>


</style>

