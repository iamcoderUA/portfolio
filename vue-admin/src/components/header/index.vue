<template lang="pug">
    header
        .title Панель администрирования
        a(href="").logout Вернуться на сайт
</template>


<script>
export default {
  
}
</script>

<style lang="scss" scoped>

header {
    background: $greenL;
    font-family: "Roboto-Medium";
    font-size: rem(28px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: rem(20px) rem(30px);
    color: #fff;
}

.logout {
    font-family: "Roboto-Medium";
    font-size: rem(16px);
    color: #fff;    
}


</style>

