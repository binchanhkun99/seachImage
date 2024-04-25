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



const limit = ref(4);
const totalPage = ref()
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
const page = ref(1);

const gptData = ref();
page.value = currentPage.value;
// 👉 Fetching gptData
const fetchEvents = async () => {
  await request
    .get(
      `events`
    )
    .then((rss) => {
    
      if (rss.status === 200) {
        totalPage.value =  rss.data.events.length;

        const offset = (page.value - 1) * limit.value;
        const slicedData = rss.data.events.slice(offset, offset + limit.value);
        gptData.value = slicedData
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
// Watch để theo dõi sự thay đổi của trang và gọi hàm getAllImage
watch(page, () => {
  fetchEvents();
});
watch(limit, () => {
  fetchEvents();
});
onMounted(() => {
  fetchEvents();
});

</script>

<template>
  <div class="event" style="position: relative">
    <div class="container">
      <span class="title-event" >Sự kiện</span>
                    <div class="item-event" v-for="(item, index) in gptData" :key="index">
                      <router-link style="width: 100%; display: flex;"
                    :to="{ name: 'DetailEvent', params: { id: item.id } }"
                  >
        <div class="img">
          <div class="box-date">
            <span class="numberdate">{{ item.number_date }}</span>
            <span class="startdate">{{ item.start_date }}</span>
          </div>
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
      <div class="pag" v-if="gptData && gptData.length > 0">
            <a-pagination
              v-model:current="page"
              :total="totalPage"
              v-model:page-size="limit"
              show-less-items
            />
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
.pag {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
}
.title-event {
  font-size: 16px;
  font-weight: 500;
  margin-top: 72px !important;

}
.numberdate{
  color: white;
  font-size: 18px;
  width: 100%;
}
.startdate{
  color: white;
  font-size: 12px;
  width: 100%;
}
.box-date{
  text-align: center;
    display: flex;
    padding-top: 8px;
    flex-direction: column;
    /* justify-content: center; */
    position: absolute;
    top: -7px;
    width: 70px;
    left: 8px;
    height: 75px;
    background-color: red;
    border-radius: 6px;
}
.title-event {
  font-size: 30px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 24px 0;
}
.item-event {
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  display: flex;
  width: 100%;
  height: 140px;
  /* overflow: hidden; */
  border-radius: 6px;
  position: relative;
  background-color: #ffffff;
  margin-bottom: 12px;
}
.item-event .img {
  width: 22%;
  height: 100%;
  border-radius: 8px;
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
}/* Reponsive */
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

  .col-md-4 {
    flex: 0 0 auto;
    width: calc(100% / 3);
  }
  .flex-md-row {
    flex-direction: row !important;
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
  h2 {
    font-size: 2rem;
  }
}
</style>
