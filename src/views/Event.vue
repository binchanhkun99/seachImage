<script setup>
import { ref } from "vue";
</script>
<template>
  <div class="event">
    <div class="container">
      <span class="title-event">Sự kiện</span>
      <div class="item-event">
        <div class="img">
          <img
            src="https://img.enjoysport.vn/v1/AUTH_63bc1636b6fd456893cd154b1d53ded7/img/event/WQYUeY9F.jpg"
            alt=""
          />
        </div>
        <div class="content-event">
          <span class="name-event">VIỆT NAM FESTRIVAL BÌNH THUẬN 2024</span>
          <span class="address">Bình Thuận</span>
        </div>
      </div>
      <div class="item-event">
        <div class="img">
          <img
            src="https://img.enjoysport.vn/v1/AUTH_63bc1636b6fd456893cd154b1d53ded7/img/event/WQYUeY9F.jpg"
            alt=""
          />
        </div>
        <div class="content-event">
          <span class="name-event">VIỆT NAM FESTRIVAL BÌNH THUẬN 2024</span>
          <span class="address">Bình Thuận</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.event {
  width: 100%;
  height: calc(100vh - 180px);
  background-color: #f8f9fa;
  margin-bottom: 12px;
}
.container {
  width: 100%;
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-right: auto;
  margin-left: auto;
}
.title-event {
  font-size: 16px;
  font-weight: 500;
}
.title-event {
  font-size: 30px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 24px 0;

}
.item-event {
  display: flex;
  width: 100%;
  height: 140px;
  overflow: hidden;
  border-radius: 6px;
  position: relative;   
  background-color: #ffffff;
  margin-bottom: 12px;
}
.item-event .img {
  width: 22%;
  height: 100%;
}
.item-event .img img {
  width: 100%;
  background-repeat: no-repeat;
  object-fit: cover;
  height: 100%;
}
.content-event{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 28px;
    
}
.name-event{
    color: #000000;
    font-size: 24px;
    margin-top: 28px;
}
</style>
