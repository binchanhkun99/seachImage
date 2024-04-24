<script setup>
const rdrHome = ()=>{
          window.location.href='https://runpic.vn'
        }
</script>
<template>
  <div class="header">
    <div class="container">
      <div class="nav">
        <div class="logo"><img style="cursor: pointer;" @click="rdrHome" src="../assets/logo.svg" alt="" /></div>
        <div class="menu-right">
          <ul>
            <li>
              <RouterLink
                to="/"
                class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
                >Trang chủ</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about"
                class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
                >Giới thiệu</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/event"
                class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
                >Sự kiện</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</template>
<style>
.header {
  width: 100%;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.nav {
  width: 100%;
  height: 60px;
 
  display: flex;
  justify-content: space-between;

  align-items: center;
  text-align: center;
  font-family: "Roboto Condensed", sans-serif;
}
.logo {
  width: auto;
  height: auto;
  /* margin-left: 10%; */
}
.logo img {
  width: auto;
  height: 30px;
}
.menu-right {
  /* margin-right: 6%; */
}
.menu-right ul {
  display: flex;
  list-style: none;
  gap: 54px;
}
.menu-right a {
  color: #000000;
}
.container {
  width: 100%;
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-right: auto;
  margin-left: auto;
}
.banner {
  width: 100%;
  position: relative;
  margin: 18px 0 0 0;
}
.banner img {
  width: 100%;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 12px;
}
.banner .img {
  width: auto;
  height: auto;
  overflow: hidden;
  border-radius: 12px;
}
/* Reponsive */
@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container,
  .container-md,
  .container-sm {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px;
  }
}
</style>
