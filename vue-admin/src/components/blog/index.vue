<template lang="pug">
	.blog
		h1.title-main Страница &#171Блог&#187
		form.form(action="/articles" method="POST" enctype="application/x-www-form-urlencoded") 
			.form-title
				.title-block Добавить запись
				if(msgblog)
					.status=msgblog
			label.form-row
				input(type="text" name="title" placeholder="Название").input-block
			label.form-row
				-
					var data = new Date().toLocaleDateString('ru', {
						year: 'numeric',
						month: '2-digit',
						day: '2-digit',
					})
				input(type="text" name="date" placeholder="Дата" value=`${data}`).input-block
			label.form-row   
				input(type="textarea" name="text" placeholder="Содержание").input-textarea
			.form-controls
				input(type="submit" value="Добавить").save-btn
				input(type="reset" value="Очистить").reset-btn
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.label {
  width: 100%;
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

.form-controls {
  margin-top: 5px;
}
  

</style>
