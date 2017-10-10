<template lang="pug">
    .tabs
        ul.list
            li.item(v-for="tab in tabs")
                router-link(
                    :to="tab.href"
                    exact-active-class="my-custom-class"
                ).link {{tab.name}}
</template>


<script>
export default {
    data() {
        return {
            tabs: [
                {name: 'Добавление скиллов', href: '/admin'},
                {name: 'Добавление статей', href: '/blog'},
                {name: 'Добавление проектов', href: '/works'},
            ]
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
    color: $titles;
    padding: rem(20px);
    display: block;
    border-right: 2px solid #fff;
    text-transform: uppercase;
}

.my-custom-class {
    background: #fff;
}



</style>

