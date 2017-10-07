<template lang="pug">
  #app
    .header
      app-header
    .tabs
      app-tabs
    .content
      router-view

</template>

<script>
import appHeader from './components/header';
import appTabs from './components/tabs';
import appContent from './components/about';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    appHeader,
    appTabs,
  }
}
</script>

<style lang="scss">

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  background: url(~img/bg_index.jpg) center center no-repeat;
  background-size: cover;
}

</style>
