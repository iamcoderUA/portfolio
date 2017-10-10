<template lang="pug">
  .blog
    h1.title-main Страница &#171Блог&#187
    .blog-title
      .title-block Добавить запись
    .row
      input(type="text" placeholder="Название").input-block
    .row      
      input(type="text" placeholder="Дата").input-block
    .row   
      input(type="textarea" placeholder="Содержание").input-textarea
    .about-link
      a(href="").save-btn Добавить
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: column;
}

.blog-title {
  margin-bottom: rem(20px);
}

.input-textarea {
  width: rem(500px);
  height: rem(130px);
  padding: rem(10px) rem(10px) rem(95px) rem(15px);
  border: none;
  border-radius: rem(5px);
}
  

</style>
