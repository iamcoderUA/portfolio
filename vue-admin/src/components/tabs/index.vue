<template lang="pug">
    .tabs
        ul.list
            li.item(v-for="tab in tabs")
                a(href="").link {{ tab }}
</template>


<script>
export default {
    data() {
        return {
            tabs: ['Добавление скиллов', 'Добавление статей', 'Добавление проектов']
        }
    }
  
}
</script>

<style lang="scss" scoped>

.tabs {
    background: $tabs;
}

.list {
    display: inline-flex;
}

.link {
    font-family: 'Roboto-Medium';
    font-size: rem(16px);
    padding: rem(20px);
    display: block;
    border-right: 2px solid #fff;
    text-transform: uppercase;
}



</style>

