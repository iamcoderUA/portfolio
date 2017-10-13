<template lang="pug">
  .works
    h1.title-main Страница &#171Мои работы&#187
    form.form(method="POST" @submit.prevent="fileload(work)" enctype="multipart/form-data") 
      .form-title
        .title-block Добавить работу
        if(msgfile)
          .status=msgfile
      label.form-row
        input(
          type="text" 
          name="name"
          v-model="work.name" 
          placeholder="Название проекта").input-block
      label.form-row      
        input(type="text" name="tech" v-model="work.tech" placeholder="Технологии").input-block
      label.form-row      
        input(type="text" name="link" v-model="work.link" placeholder="Ссылка на проект").input-block
      label.form-row
        input(type="file" name="photo" @change="changeFile($event)" required accept="image/*" placeholder="Загрузить картинку").input-photo
        .picker
        .row-text Загрузить картинку
      .form-controls
        input(type="submit" value="Добавить").save-btn
        input(type="reset" value="Очистить").reset-btn
      
</template>

<script>
export default {
  data() {
    return {
      work: {
        name: '',
        tech: '',
        link: '',
        file: ''
      }
    }
  },
  methods: {
    changeFile(event) {
      this.work.file = event.target.files[0]
    },
    fileload(work) {
      this.$store.commit('fileload', work)
    }
  },
}
</script>

<style lang="scss" scoped>

.form {
  width: 26%;
}

.input-photo {
  width: 0;
  height: 0;
}

.label {
  width: 100%;
}

.picker {
  width: 40px;
  height: 40px;
  background: svg('~img/icons/pick_img.svg', '#544565') center center no-repeat;
  margin-right: rem(15px);
  cursor: pointer;
  border: 0;

}

.row-text {
  display: flex;
  align-items: center;
  color: $greenL;
  cursor: pointer;
}

.form-controls {
  margin-top: 40px;
}

</style>
