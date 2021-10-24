<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    let isMobile = this._isMobile()
    if(window.name === ""){
      // 判断是首次加载
      if (isMobile) {
        this.$router.replace('/mobile/home');
      } else {
        this.$router.replace('/pc/home');
      }
      window.name = "refresh";
    }
  },
  destroyed() {
    window.name = "";
  },
  methods: {
    // 判断是PC还是移动端
    _isMobile() {
      return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
}

h1 {
  font-family: 'Merriweather', serif;
}
.el-button {
  border-radius: 10px;
}
</style>
