<template lang="pug">
.about
  .about-skills
    h1.title-main Страница &#171Обо мне&#187
    .skills-list(v-for="(skillType, index) in skillsTypes")
      skills-list(
        :skills="skills"
        :skillType='skillType'
        :key='index'
        @addSkill="addSkill"
        @removeSkill="removeSkill"
      )
  .about-link
    a(href="" @click.prevent="saveSkill").save-btn Сохранить
</template>

<script>
import skillsList from './skills-list';
import { mapActions, mapGetters, mapMutations } from 'vuex';


export default {
  data() {
    return {
      skillsTypes: ['Frontend', 'Backend', 'Workflow']
    }
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['fetchSkills']),
    ...mapMutations(['addNewSkill', 'removeSavedSkill', 'saveSkill']),
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
  .about {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .about-skills {
    margin-bottom: rem(30px);
  }

  .skills-list {
    width: 40%;
    max-width: 50%;
    display: inline-flex;
  }

  .skills-list {
    margin-bottom: rem(20px);
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>

