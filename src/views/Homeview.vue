<script setup>
import { ref, onMounted, watch } from "vue";
import { h } from "vue";
import request from "../utils/request";

import { useRoute } from "vue-router";

import {
  UploadOutlined,
  SearchOutlined,
  DownloadOutlined,
} from "@ant-design/icons-vue";
const value18 = ref();
const value19 = ref();
const activeKey = ref("1");
const dataImage = ref([]);
const page = ref(1);
const limit = ref(30);
const pgs = ref(30);
const open = ref(false);
// const {id} = defineProps({
//     id:{
//         type: string,
//         require: true
//     }
// })
const link = ref();
link.value = import.meta.env.VITE_API_URL;
console.log("link.value", link.value);
const route = useRoute();

const idEvent = route.params.id;
const bibEvent = route.params.bib
const gptData = ref([]);
const race_limit = ref(null);

const Edit = ref({
  name_event: "",
  address: "",
  folder: "",
  banner: "",
  start_date: "",
  number_date: "",
});
const folder = ref()
const showEvent = async (id) => {
  try {
    const res = await request.get(`events_by_id?event_id=${idEvent}`);
    // console.log("HIHIHII", res);
    if (res.status === 200) {
      const data = res.data;
      Edit.value.name_event = data.name_event;
      Edit.value.address = data.address;
      Edit.value.folder = data.folder;
      Edit.value.banner = data.banner;
      folder.value = Edit.value.folder;
      Edit.value.start_date = data.start_date;
      Edit.value.number_date = data.number_date;

    }
  } catch (error) {
    console.log(error);
  }
};
const showModal = () => {
  open.value = true;
};
const current = ref();

const getAllImage = async () => {
  ctRs.value = ''
  const apiUrl = link.value;

  try {
    const urlWithParams = new URL(apiUrl + 'image');
    urlWithParams.searchParams.append('folder_data_search', folder.value);
    const requestOptionsGetAll = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(urlWithParams, requestOptionsGetAll);

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    const responseData = await response.json();

    // Tính toán số trang dựa trên số lượng phần tử và giới hạn
    // totalPage.value = Math.ceil(responseData.length / limit.value);
    totalPage.value = responseData.length;
    // Tính toán offset dựa trên trang hiện tại và giới hạn
    const offset = (page.value - 1) * limit.value;
    // Lấy dữ liệu phân trang từ mảng dữ liệu
    const slicedData = responseData.slice(offset, offset + limit.value);
    // Cập nhật dữ liệu hiển thị
    dataImage.value = slicedData;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
watch(activeKey, async (newVal, oldVal) => {
  if (newVal == 2) {
    loading.value = true;
    try {
      const apiUrl = link.value
  ;
  const urlWithParams = new URL(apiUrl + 'image');
    urlWithParams.searchParams.append('folder_data_search', folder.value);
    const requestOptionsGetAll = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(urlWithParams, requestOptionsGetAll);

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    const responseData = await response.json();


      // Loại bỏ 30 phần tử đầu
      const slicedData = responseData.slice(30);

      // Cập nhật dữ liệu hiển thị
      dataImage.value = slicedData;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  } else if (newVal == 1) {
   await showEvent();
     getAllImage();
  }
});

// Watch để theo dõi sự thay đổi của trang và gọi hàm getAllImage
watch(page, () => {
  getAllImage();
});
watch(limit, () => {
  getAllImage();
});
const base64String = ref("");
const fileType = ref("");
const showImg = ref();
function onFileChange(event) {
  const ctx = document.getElementById("real-file");
  ctx.click();
  if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    showImg.value = URL.createObjectURL(file);
    fileType.value = file.name.split(".").pop();
    const reader = new FileReader();

    reader.onload = function (event) {
      base64String.value = event.target.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      // console.log(base64String.value);

      // Check if base64String is not empty before calling searchImage()
      if (base64String.value) {
        searchImage();
      } else {
        console.error("No base64 string found.");
      }
    };

    reader.readAsDataURL(file);
  }
}
const ctRs = ref(false);
// const ttRs = ref('')
let ttRs = "";

value18.value = bibEvent
const totalPage = ref();
const searchForText = async () => {
  showImg.value =''
  if (!value18.value) {
    getAllImage();
  }
  ttRs = value18.value;
  const apiUrl = link.value;
  loading.value = true;
  dataImage.value = [];
  try {
    const requestOptionsGet = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      apiUrl + `search/${value18.value.trim()}/${folder.value}`,
      requestOptionsGet
    );
    if (!response.ok) {
      throw new Error("Text Error");
    }
    const responseData = await response.json();
    dataImage.value = responseData;
    totalPage.value = dataImage.value.length;
    loading.value = false;
    ctRs.value = true;
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
};


async function searchImage() {
  loading.value = true;
  const apiUrl = link.value;
  const data = {
    type: fileType.value,
    base64_string: base64String.value,
    folder_data_search: folder.value
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(apiUrl + "search", requestOptions); // Chú ý: Sử dụng "/search" thay vì "search"
    if (!response.ok) {
      throw new Error("image error");
    }
    base64String.value = "";
    fileType.value = "";
    const responseData = await response.json();
    // Xử lý dữ liệu trả về nếu cần
    // Cập nhật dữ liệu hiển thị
    dataImage.value = responseData;
    totalPage.value = dataImage.value.length;
    // console.log(JSON.stringify(responseData, null, 2));
    loading.value = false;
  } catch (error) {
    loading.value = false;
    console.error("Error:", error);
  }
}

const loading = ref(false);
onMounted(async() => {
 await showEvent();
  
  if(bibEvent){

    searchForText()
  }
  else getAllImage();
});
</script>

<template>
  <div class="banner">
    <div class="container">
      <div class="img">
        <img :src="Edit.banner.replace(`banner\\`, `${link}banner/`)" alt="" />
      </div>
    </div>
  </div>
  <div class="main">
    <div class="container">
      <div class="title">
        <span>{{ Edit.name_event }}</span>
       
      </div>

      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" tab="Tất cả">
          <div class="input-search">
            <!-- Các input và button tương tự như trước -->
            <a-input-group
              compact
              style="
                align-items: center;
                display: flex;
                justify-content: center;
              "
            >
              <a-input
                placeholder="Tìm kiếm bằng Bib"
                v-model:value="value18"
                style="width: calc(100% - 200px)"
              >
              </a-input>
              <a-button type="primary" @click="searchForText">
                <template #icon><SearchOutlined /></template>
              </a-button>
            </a-input-group>
            <a-input-group
              compact
              style="
                align-items: center;
                display: flex;
                justify-content: center;
              "
            >
              <a-input
                disabled
                v-model:value="value19"
                placeholder="Tìm kiếm bằng hình ảnh"
                style="width: calc(100% - 200px)"
              >
              </a-input>
              <a-button
                for="real-file"
                @click="onFileChange"
                id="custom-button"
                type="primary"
              >
                <template #icon><UploadOutlined /></template>
              </a-button>
            </a-input-group>
          </div>

          <input
            id="real-file"
            type="file"
            style="display: none"
            @change="onFileChange"
            ref="file"
          />
          <span v-if="ctRs" class="content-result"
            >Kết quả tìm kiếm cho: <b>{{ ttRs }}</b>
          </span>
          <span v-if="showImg" class="content-result"
            >Kết quả tìm kiếm cho: <img style="    width: 48px;
    object-fit: cover;
    background-repeat: no-repeat;" :src="showImg" alt="">
          </span>
         <div v-if="!dataImage.length>0" style="width: 100%; display: flex; justify-content: center; text-align: center">
        <span>Không tìm thấy kết quả phù hợp</span></div>
          <div class="list-img" v-else>
            <a-image-preview-group>
              <div
                class="item-img"
                v-for="(item, index) in dataImage"
                :key="index"
              >
                <a-image
                  :preview="{}"
                  :width="200"
                  :src="
                   item.replace(`${folder}/`, `${link}${folder}/`)
                  "
                />
              </div>
            </a-image-preview-group>
          </div>
          <div>
            <!-- {{ totalPage }}dgg -->
          </div>
          <div class="pag" v-if="dataImage && dataImage.length > 0">
            <a-pagination
              v-model:current="page"
              :total="totalPage"
              v-model:page-size="limit"
              show-less-items
            />
          </div>
        </a-tab-pane>

        <!-- Các tab khác tương tự -->
        <!-- Tab thứ 2 -->
        <a-tab-pane key="2" tab="Chặng 2" force-render>
          <div class="input-search">
            <!-- Các input và button tương tự như trước -->
            <a-input-group
              compact
              style="
                align-items: center;
                display: flex;
                justify-content: center;
              "
            >
              <a-input
                placeholder="Tìm kiếm bằng Bib"
                v-model:value="value18"
                style="width: calc(100% - 200px)"
              >
              </a-input>
              <a-button type="primary" @click="searchForText">
                <template #icon><SearchOutlined /></template>
              </a-button>
            </a-input-group>
            <a-input-group
              compact
              style="
                align-items: center;
                display: flex;
                justify-content: center;
              "
            >
              <a-input
                disabled
                v-model:value="value19"
                placeholder="Tìm kiếm bằng hình ảnh"
                style="width: calc(100% - 200px)"
              >
              </a-input>
              <a-button
                for="real-file"
                @click="onFileChange"
                id="custom-button"
                type="primary"
              >
                <template #icon><UploadOutlined /></template>
              </a-button>
            </a-input-group>
          </div>

          <input
            id="real-file"
            type="file"
            style="display: none"
            @change="onFileChange"
            ref="file" />
          <span v-if="ctRs" class="content-result"
            >Kết quả tìm kiếm cho: <b>{{ ttRs }}</b>
          </span>
          <div class="list-img">
            <a-image-preview-group>
              <div
                class="item-img"
                v-for="(item, index) in dataImage"
                :key="index"
              >
                <a-image
                  :preview="{}"
                  :width="200"
                  :src="
                    item.replace(`${folder}/`, `${link}${folder}/`)
                  "
                />
              </div>
            </a-image-preview-group>
          </div>
          <div>
            <!-- {{ totalPage }}dgg -->
          </div>
          <div class="pag" v-if="dataImage && dataImage.length > 0">
            <a-pagination
              v-model:current="page"
              :total="totalPage"
              v-model:page-size="limit"
              show-less-items
            /></div
        ></a-tab-pane>
        <!-- Tab thứ 3 -->
        <!-- <a-tab-pane key="3" tab="Chặng 3">Content of Event Pane 3</a-tab-pane> -->
      </a-tabs>
    </div>
  </div>

  <!-- <a-button type="primary" @click="showModal">Open Modal with customized footer</a-button> -->
  <a-modal v-model:open="loading" :maskClosable="false" closable="true">
    <template #footer>
      <a-button style="display: none" key="back" @click="handleCancel"
        >Return</a-button
      >
      <a-button
        style="display: none"
        key="submit"
        type="primary"
        :loading="loading"
        @click="handleOk"
        >Submit</a-button
      >
    </template>
    <a-spin />
  </a-modal>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: calc(100vh - 10px);
  background-color: #f8f9fa;
  margin-bottom: 12px;
}
.title {
  width: 100%;
  display: flex;
  margin-top: 28px;
}
.title span {
  margin: 0 auto;
  color: rgb(13, 110, 253);
  font-size: 1.5rem;
  font-weight: 500;
  font-family: "Roboto Condensed", sans-serif;
}

.input-search {
  width: 100%;
  display: flex;
  margin: 24px 0;
}
.list-img {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc(16.666% - 4px), 1fr)
  ); /* 3 items per row */
  gap: 4px;
  position: relative;
  overflow: hidden;
}

.item-img {
  height: 120px;
  padding: 4px;
  box-sizing: border-box;
  overflow: hidden;
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
  margin: 18px 0;
}
.ant-modal-close-x {
  display: none !important;
}
.banner {
  width: 100%;
  position: relative;
  padding-top: 100px;
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
@media (max-width: 791px) {
  .list-img {
    grid-template-columns: repeat(auto-fill, minmax(calc(33.333% - 4px), 1fr)) !important; /* 3 items per row on screens wider than 576px */
  }
  .input-search{
    display: flex;
    flex-direction: column;
    gap: 12px;

  }
}

@media (max-width: 992px) {
  .list-img {
    grid-template-columns: repeat(auto-fill, minmax(calc(25% - 4px), 1fr)); /* 4 items per row on screens wider than 992px */
  }
}
</style>
