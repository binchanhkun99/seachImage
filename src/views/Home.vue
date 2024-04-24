<script setup>
import { ref, defineComponent, onMounted, watch } from "vue";
import { h } from "vue";
import Card from "../components/Card.vue";

import { UploadOutlined, SearchOutlined } from "@ant-design/icons-vue";

import request from "../utils/request";
let index = 0;

const value = ref();
const inputRef = ref();
const name = ref();
const searchQuery = ref()
const rowPerPage = ref(10)
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



const currentPage = ref(1)
const pageSize = ref();
const page = ref()
const totalPage = ref()
const gptData = ref([])

const link = ref()
link.value = import.meta.env.VITE_API_URL
page.value = currentPage.value;
const listEvent = ref([])
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
        gptData.value = rss.data.events.slice(0, 6);
        listEvent.value = gptData.value.map(event => event.name_event)
        console.log("listEvent.value", listEvent.value);
        totalPage.value = rss.data.count;
        pageSize.value = Math.ceil(totalPage.value / rowPerPage.value);
        
      }
      
    })
    .catch((error) => {
      
      console.log(error);
    });

};

const eventValue = ref(1)
onMounted(()=>{
  fetchEvents()
})
</script>

<template>
  <div class="cover">
    <div class="container">
      <div class="search-home">
        <h5 class="text-center">Tìm ảnh</h5>
        <form
          action="https://enjoysport.vn/search"
          method="post"
          class="search-form-text"
        >
          <input type="hidden" name="_token" value="" />
          <div class="row flex-md-row flex-column">
            <div class="col">
            
              <a-select
                v-model:value="eventValue"
                placeholder=""
                style="width: 100%"
                :options="gptData.map(i => ({value: i.id, label: i.name_event}))"
              >
      
              </a-select>
            </div>
            <div class="col">
              <a-space style="width: 100%" direction="vertical">
                <a-input
                  style="width: 100%"
                  v-model:value="valueInput"
                  placeholder="Số Bib"
                />
              </a-space>
            </div>
            <div class="col-auto">
              <router-link style="width: 100%; display: flex;"
                    :to="`/detail-event/${eventValue}/${valueInput}`">
                  
              <a-button
                style="color: #fff; background-color: #0d6efd"
                type="submit"
                @click="searchForText"
              >
                <template #icon><SearchOutlined /></template>
              </a-button>
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="content py-5">
    <div class="container">
      <div class="mb-4">
        <h2>Sự kiện nổi bật</h2>
      </div>
      <div class="latest-events">
            <!-- map với dataImage -->
            <div v-if="gptData" class="col-12 col-md-4" v-for="(item, index) in gptData" :key="index">
              <router-link style="width: 100%; display: flex;"
                    :to="{ name: 'DetailEvent', params: { id: item.id } }"
                  >
                <div class="event-item shadow-sm rounded">
                  <div class="preview">
                    <img class="rounded-top" :src="item.banner.replace('banner\\', `${link}banner/`)">
                  </div>
                  <div class="p-3">
                    <div style="white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;" class="event-title text-truncate" title="UMC RUN - VƯƠN TẦM KHÁT VỌNG">{{ item.name_event }}</div>
                    <div class="small">{{item.start_date}}</div>
                  </div>
                </div>
              </router-link>
            </div>
        
    </div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  height: 600px;
  background: url(https://enjoysport.vn/images/cover.jpg) center center
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}
.search-home {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 0.5rem;
}
.search-home h5 {
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  margin-top: 0;
  font-weight: 500;
  line-height: 1.2;
  color: var(--bs-heading-color);
}
.col-12 {
  width: 100%;
  flex: 0 0 auto;
}
.content {
  background-color: rgb(248, 249, 250);
  display: flex;
}
.py-5 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.mb-4 {
  margin-bottom: 1.5rem;
}
.latest-events {
  display: flex;
  flex-wrap: wrap;
  margin: -0.875rem;
}
.latest-events a {
  color: unset;
}
.latest-events .event-item {
  margin: 0.875rem;
  background-color: #fff;
}
h5 {
  font-size: 1.25rem;
}
h2 {
  font-size: calc(1.325rem + 0.9vw);
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
.text-center {
  text-align: center;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.search-input > div {
  width: 100% !important;
}
.col {
  flex: 1 0 0%;
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
}
.w-full {
  width: 100% !important;
}
.flex-column {
  flex-direction: column !important;
}
.rounded {
  border-radius: 6px;
}
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.preview {
  position: relative;
  background: #f6f6f6;
  aspect-ratio: 3/2;
}
.event-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
img {
  vertical-align: middle;
}
.rounded-top {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.p-3 {
  padding: 16px;
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
