<template lang="pug">
  div
    .skills-title
        .title-block {{ skillType }}
    table.skill-table
        skill-item(
            v-for="(skill, index) in skills"
            v-if="checkSkillType(skillType) === skill.type"
            :key="index"
            :skill="skill"
            @removeSkill="removeSkill"
        )
    .buttons
        button(@click="addSkill(skillType)"
        :disabled="validation.hasError('newSkill')"
        ).buttons-add Добавить
        .buttons-wrapp
            input(
                type="text"
                v-model="newSkill"
                :class="{error : validation.hasError('newSkill')}"
            ).input-add
            .error-text {{validation.firstError('newSkill')}}
</template>

<script>
import skillItem from '../skills-item';
import { Validator } from 'simple-vue-validator';

export default {
    mixins: [require('simple-vue-validator').mixin],
    data() {
        return {
            newSkill: ''
        }
    },
    validators: {
        'newSkill'(value) {
            return Validator.value(value).required('Поле не может быть пустым!');
        }
    },
    props: {
        skillType: String,
        skills: Array
    },
    methods: {
        addSkill(skillType) {
            this.$validate().then(success => {
                if (!success) return;

                this.$emit('addSkill', {
                    id: Math.round(Math.random() * 10000),
                    name: this.newSkill,
                    percents: 0,
                    type: this.checkSkillType(skillType)
                })
            this.newSkill = '';
            this.validation.reset();
            })
            
        },
        removeSkill(id) {
            this.$emit('removeSkill', id);
        },
        checkSkillType(skillType) {
            switch(skillType) {
                case 'Frontend':
                    return 1
                case 'Backend':
                    return 2
                case 'Workflow':
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
    .skill-table {
        border-spacing: rem(20px) rem(5px);
        margin-bottom: rem(10px);
    }

    .buttons {
        display: flex;
        justify-content: space-between;
    }

    .buttons-add {
        padding: rem(0px) rem(15px);
        border-radius: rem(5px);

    }
    .buttons-wrapp {
        width: 60%;
        position: relative;
    }
    
    .input-add {
        padding: rem(10px) rem(5px);
        border: none;
        border-radius: rem(5px);
    }

    .error {
        border: 1px solid red;
    }

    .error-text {
        position: absolute;
        top: 100%;
        left: 0;
        font-size: rem(14px);
    }

</style>
