<script setup>
import { ref } from "vue";
import { UploadOutlined, SearchOutlined } from "@ant-design/icons-vue";
const value18 = ref();
const value19 = ref();
const activeKey = ref("1");
const dataImage = ref([]);
const page = ref(0);

function onFileChange(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const base64Image = event.target.result;
    sendImageToServer(base64Image);
  };

  reader.readAsDataURL(file);
}

async function sendImageToServer(base64Image) {
  try {
    const response = await fetch("api/....", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: base64Image }),
    });

    // 
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Error sending image to server:", error);
  }
}
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="title">
        <span>DALAT ULTRA TRAIL 2024</span>
      </div>

      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" tab="Chặng 1">
          <div class="input-search">
            <!-- Các input và button tương tự như trước -->
          </div>

          <input
            id="real-file"
            type="file"
            style="display: none"
            @change="onFileChange"
            ref="file"
          />

          <div class="list-img">
            <div class="item-img">
              <a-image
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </div>
        </a-tab-pane>

        <!-- Các tab khác tương tự -->
        <!-- Tab thứ 2 -->
        <a-tab-pane key="2" tab="Chặng 2" force-render
          >Content of Event Pane 2</a-tab-pane
        >
        <!-- Tab thứ 3 -->
        <a-tab-pane key="3" tab="Chặng 3">Content of Event Pane 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  min-height: calc(100vh - 10px);
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
  padding: 4px;
  box-sizing: border-box;
}

.container {
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
