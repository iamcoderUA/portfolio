<template lang="pug">
  div
    br
    .skills-title {{ skillType }}
    table.skill-table
        skill-item(
            v-for="(skill, index) in skills"
            v-if="checkSkillType(skillType) === skill.type"
            :key="index"
            :skill="skill"
            @removeSkill="removeSkill"
        )
    br
    .buttons
        button(@click="addSkill(skillType)") Добавить
        input(type="text" v-model="newSkill")
</template>

<script>
import skillItem from '../skills-item';

export default {
    data() {
        return {
            newSkill: ''
        }
    },
    props: {
        skillType: String,
        skills: Array
    },
    methods: {
        addSkill(skillType) {
            this.$emit('addSkill', {
                id: Math.round(Math.random() * 10000),
                name: this.newSkill,
                percents: 0,
                type: this.checkSkillType(skillType)
            })
            this.newSkill = '';
        },
        removeSkill(id) {
            this.$emit('removeSkill', id);
        },
        checkSkillType(skillType) {
            switch(skillType) {
                case 'Frontend':
                    return 1
                case 'Workflow':
                    return 2
                case 'Backend':
                    return 3
            }
        }
    },
    components: {
        skillItem
    }
    }
</script>

<style lang="scss" scoped>

</style>
