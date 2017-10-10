<template lang="pug">
  .works
    h1.title-main Страница &#171Мои работы&#187
    .works-title
      .title-block Добавить работу
    .row
      input(type="text" placeholder="Название проекта").input-block
    .row      
      input(type="text" placeholder="Технологии").input-block
    .row
      .picker
      .row-text Загрузить картинку
    .about-link
      a(href="").save-btn Добавить
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.works-title {
  margin-bottom: rem(20px);
}

.picker {
  width: 40px;
  height: 40px;
  background: svg('~img/icons/pick_img.svg', '#544565') center center no-repeat;
  margin-right: rem(15px);
  cursor: pointer;
}

.row-text {
  display: flex;
  align-items: center;
  color: $greenL;
  cursor: pointer;
}

.about-link {
  margin-top: rem(110px);
}

</style>
