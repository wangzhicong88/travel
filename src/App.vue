<template>
  <div id="app">
    <!-- exclude 不被缓存的页面 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>