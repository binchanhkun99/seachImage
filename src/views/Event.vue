<script setup>
import { ref, defineComponent, onMounted, watch } from "vue";
import { h } from "vue";
import Card from "../components/Card.vue";

import { UploadOutlined, SearchOutlined } from "@ant-design/icons-vue";

import request from "../utils/request";
let index = 0;
const items = ref(["jack", "lucy"]);
const value = ref();
const inputRef = ref();
const name = ref();
const searchQuery = ref();
const rowPerPage = ref(10);
// console.log("nameSearch:", name.value);
const VNodes = defineComponent({
  props: {
    vnodes: {
      type: Object,
      required: true,
    },
  },
  render() {
    return this.vnodes;
  },
});

const valueInput = ref("");
watch(valueInput, () => {
  console.log(valueInput.value);
});
const link = ref('')

link.value = import.meta.env.VITE_API_URL
const currentPage = ref(1);
const pageSize = ref();
const page = ref();
const totalPage = ref();
const gptData = ref();
page.value = currentPage.value;
// 👉 Fetching gptData
const fetchEvents = async () => {
  console.log("Vào đâyy rồi");
  await request
    .get(
      `events?page=${page.value}&limit=${rowPerPage.value}&search=${searchQuery.value}`
    )
    .then((rss) => {
      console.log("Test status", rss.data);
      if (rss.status === 200) {
        gptData.value = rss.data.events;
        totalPage.value = rss.data.count;
        pageSize.value = Math.ceil(totalPage.value / rowPerPage.value);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
onMounted(() => {
  fetchEvents();
});

</script>

<template>
  <div class="event" style="position: relative; top: 44px;">
    <div class="container">
      <span class="title-event" >Sự kiện</span>
      
                    <div class="item-event" v-for="(item, index) in gptData" :key="index">
                      <router-link style="width: 100%; display: flex;"
                    :to="{ name: 'DetailEvent', params: { id: item.id } }"
                  >
        <div class="img">
          <img
            :src="
              item.banner.replace('banner\\', `${link}banner/`)
            "
            alt=""
          />
        </div>
        <div class="content-event">
          <span class="name-event">{{item.name_event}}</span>
          <span class="address">{{ item.address }}</span>
        </div>
        </router-link>
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
.content-event {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 28px;
}
.name-event {
  color: #000000;
  font-size: 24px;
  margin-top: 28px;
}
</style>
