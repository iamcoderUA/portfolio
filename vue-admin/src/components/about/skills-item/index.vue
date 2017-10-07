<template lang="pug">
   tr
    td {{ skill.name }}
    td
     input(
         type=text
         :value="skill.percents"
    )
    td %
    td
        button(
            type="button"
            @click="removeSkill(skill.id)"
        ) Удалить
</template>

<script>
export default {
    props: {
        skill : Object
    },
    methods: {
        removeSkill(id) {
            this.$emit('removeSkill', id);
        }
    }

}
</script>

