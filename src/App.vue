<script setup>

</script>

<template>
  <div>
    <!-- App.vue只需要留一个路由出口 router-view即可 -->
    <router-view></router-view>
  </div>

  <div class="test">test scss</div>
</template>

<style scoped lang="scss">

.test {
  color: $helpColor;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
