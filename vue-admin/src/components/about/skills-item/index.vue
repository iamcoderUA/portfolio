<template lang="pug">
   tr
    td.skill-name {{ skill.name }}
    td
     input(
         type=text
         v-model="skill.percents"
    ).skills-value
    td %
    td
        button(
            type="button"
            @click="removeSkill(skill.id, $event)"
        ).remove-btn Удалить
    
</template>

<script>
export default {
    props: {
        skill : Object
    },
    methods: {
        removeSkill(id) {
            this.$emit('removeSkill', id);
        },
    }

}
</script>

<style lang="scss" scoped>

.skills-value {
    width: rem(50px);
    border: none;
    text-align: center;
    border-radius: rem(5px);
    padding: rem(5px) 0;
}

.remove-btn {
    padding: rem(3px) rem(10px);
    border-radius: rem(5px);
}

.skill-name {
    width: rem(100px);
    font-family: "Roboto-Regular";
}


</style>


