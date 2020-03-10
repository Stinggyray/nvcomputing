<template>
  <div class="footer" :class="$route.name == 'home' || $route.name == 'about' ? 'bg-light' : ''">
    <div class="text-center text-muted mb-2">
      &copy; 2019-2020 Copyright: <router-link to="/">NVComputing.com</router-link>
    </div>
  </div>
</template>
