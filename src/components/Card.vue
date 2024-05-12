<script>
import { onMounted, watch, ref } from "vue";
import request from "../utils/request";

const currentPage = ref()
const pageSize = ref(0);
const page = ref()
const totalPage = ref()
const gptData = ref()
// page.value = currentPage.value;
// 👉 Fetching gptData
const fetchEvents = async () => {
    await request
    .get(
      `events/?page=${page.value}&limit=${rowPerPage.value}&search=${searchQuery.value}`
    )
    .then((rss) => {
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
onMounted(()=>{
  fetchEvents()
})
</script>
<template>
    <div class="latest-events">
            <!-- map với dataImage -->
            <div v-if="gptData" class="col-12 col-md-4" v-for="(item, index) in gptData" :key="index">
              <a href="">
                <div class="event-item shadow-sm rounded">
                  <div class="preview">
                    <img class="rounded-top" src="https://img.enjoysport.vn/v1/AUTH_63bc1636b6fd456893cd154b1d53ded7/img/event/ynzlmP5a.jpg" :alt="item.name_event">
                  </div>
                  <div class="p-3">
                    <div class="event-title text-truncate" title="UMC RUN - VƯƠN TẦM KHÁT VỌNG">{{ item.name_event }}</div>
                    <div class="small">21/04/2024</div>
                  </div>
                </div>
              </a>
            </div>
        
    </div>
</template>

<style scoped>
.col-12{
  width: 100%;
  flex: 0 0 auto;
}
.latest-events{
  display: flex;
  flex-wrap: wrap;
  margin: -.875rem;
}
.latest-events a{
  color: unset;
}
.latest-events .event-item{
  margin: .875rem;
  background-color: #fff;
}
.rounded{
  border-radius: 6px;
}
.shadow-sm{
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
}
.preview{
  position: relative;
  background: #F6F6F6;
  aspect-ratio: 3/2;
}
.event-item img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
img{
  vertical-align: middle;
}
.rounded-top{
  border-top-left-radius:6px;
  border-top-right-radius: 6px;
}
.p-3{
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
  .col-md-4{
    flex:0 0 auto;
    width: calc(100%/3);
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
