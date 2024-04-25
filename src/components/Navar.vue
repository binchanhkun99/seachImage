<script setup>
import { ref, defineProps, watch, computed  } from 'vue';
const sidebarVisible = ref(false)

const sidebarTransform = ref('');
const props = defineProps({
  status: Boolean
});

const status = ref(props.status);

watch(() => props.status, (newValue, oldValue) => {
  closeSidebar()
});
 

function showSidebar() {
  sidebarVisible.value = true;
  setTimeout(() => {
    sidebarTransform.value = 'translateX(0)';
  }, 10);
}

function closeSidebar() {
  sidebarTransform.value = 'translateX(100%)';
  setTimeout(() => {
    sidebarVisible.value = false;
  }, 300);
}

const rdrHome = ()=>{
          window.location.href='https://runpic.vn'
        }
</script>

<template>
<header>
  <div class="container">
  <a href="/"><img src="../assets/logo.svg" alt="" class="logo"></a>  
        <nav>
          <ul class="navlinks">
                <li class="items"><RouterLink
                to="/"
                class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
                >Trang chủ</RouterLink
              ></li>
                <li class="items"><RouterLink
                to="/about"
                class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
                >Giới thiệu</RouterLink
              ></li>
                <li class="items"><RouterLink
                to="/event"
                class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
                >Sự kiện</RouterLink
              ></li>               
              <li @click="showSidebar"><svg class="toggle" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0);"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg></li>
            </ul>
            
            <ul class="sidebar" :style="{ display: sidebarVisible ? 'flex' : 'none', transform: sidebarTransform }">
              <li  @click="closeSidebar"><svg class="toggle" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0);"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg></li>                <li><RouterLink
                to="/"
                class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
                >Trang chủ</RouterLink
              ></li>
                <li><RouterLink
                to="/about"
                class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
                >Giới thiệu</RouterLink
              ></li>
                <li><RouterLink
                to="/event"
                class="app-logo d-flex align-center gap-x-2 app-title-wrapper"
                >Sự kiện</RouterLink
              ></li>

                <!-- <img src="https://t3.ftcdn.net/jpg/02/51/80/40/360_F_251804029_ON3oL8BkopdueiT61zXaDMOF3qfSiWNx.jpg" alt="" > -->
            </ul>
        </nav>
  </div>
       
    </header>

</template>
<style scoped>
header{
  height: 78px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
}
.header {
  width: 100%;
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
nav{
  display: flex;
    justify-content: center;
    align-items: center;
}
*{  
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
font-family: "Roboto Condensed", sans-serif;;
    
    background-size: cover;
    background-position: center;

}
.logo {
    position: relative
    ;
    left: 20px;
    width: 100px;
    cursor: pointer;
    width: 68px;
}

li, a, button{
  font-family: "Roboto Condensed", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: black;
    text-decoration: none;
    
}
header{
    background-color: #ffffff;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    z-index: 999;
}
header:hover{
    transition: 0.5s;
}
.navlinks li{
    display: inline-block;

    align-items: center;
}
.navlinks li a:hover{
    color: black;
    /* text-shadow: 1px 1px 5px black; */
}
.navlinks{
  display: flex;
    gap: 80px;
}

button{
    width: 100%;
    padding: 12px;
    background-color: black;
    border-radius: 50px;
    outline: none;
    cursor: pointer;
    transition: all 0.5s, ease 0s;
    border: none;
    z-index: 999;
}
button:hover{
    box-shadow: 1px 1px 5px black;
}
.sidebar{
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    z-index: 999;
    background-color: transparent;
    backdrop-filter: blur(10px);
    /* box-shadow: -3px 0 10px black; */
    display: none;
    justify-content: flex-start;
    list-style: none;
    flex-direction: column;
    transition: transform 0.3s ease;
    transform: translateX(100%);
}
.sidebar li{
    width: 100%;
    margin: 25px;
    /* text-shadow: 1px 1px 2px black; */
    
}
.sidebar img{
    position: absolute;
    bottom: 20px;
    width: 100%;
    height: 120px;
}
nav ion-icon{
    font-size: 2em;
    position: absolute;
    top: 35px;
    right: 20px;
}
h2{ 
    color: black;
    text-shadow: #ffffff -2px 2px 10px;
    font-size: 2em;
    margin: 20%;
    text-align: center;
}
@media only screen and (min-width: 830px){
    .navlinks .toggle{
        display: none;
        
    }
}
@media only screen and (max-width: 830px){
    .navlinks .items{
        display: none;
    }
}
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-right: auto;
  margin-left: auto;
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
@media screen and (max-width: 991.99px) {
  .nav{
    flex-direction: column !important;
    text-align: left !important;
    height: auto !important;
    align-items: left !important;
  }
  .menu-right ul {
    flex-direction: column;
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
