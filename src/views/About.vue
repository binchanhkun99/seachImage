<script setup></script>
<template>
  <div class="about-container">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col t2 i1">
          <img
          style="    max-width: 400px;"
            class="img-first"
            src="../assets/abbib.jpg"
            alt="none"
          />

        </div>
        <div class="col t1">
          <h1 class="fw-bold">Nhận diện số BIB thông minh</h1>
          <p class="lead mt-4">

            Công nghệ trí tuệ nhân tạo mạnh mẽ, cho phép hệ thống “đọc” và “ghi
            nhớ” khuôn mặt đúng với số BIB, cho phép người tham gia tìm thấy tất
            cả ảnh của họ một cách nhanh chóng và dễ dàng.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="about-container bg-light">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col t1">
          <h1 class="fw-bold">Hình ảnh chất lượng cao</h1>
          <p class="lead mt-4">
            Tốc độ đăng tải và xử lý ảnh nhanh chóng, cho phép người dùng tìm
            kiếm và tải xuống hình ảnh chất lượng cao ngay lập tức.
         </p>
        </div>
        <div
          class="col t2"
          style="align-items: end; display: flex; justify-content: end"
        >
          <img style="max-width: 400px;" src="../assets/ab1.jpg" alt="none" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  padding-top: 3rem;
  padding-bottom: 3rem;
  overflow: hidden;
}

.bg-light {
  --bs-bg-opacity: 1;
  --bs-light-rgb: 248, 249, 250;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}
.container {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  margin-right: auto;
  margin-left: auto;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
}
.col {
  flex: 1 0 0%;
}
.fw-bold {
  font-weight: 700;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
.mt-4 {
  margin-top: 1.5rem;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.text-end {
  text-align: right;
}
.about-container {
  margin-top: 38px;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
  h1 {
    font-size: 2.5rem;
  }
}
@media (max-width: 991px) {
  .row .col {
    flex-direction: column;
  }
  .row {
    display: flex;
    flex-direction: column;
  }
  .t1 {
    width: 80%;
  }
  .img-first {
    width: 423px;
    margin-right: 100px;
  }
  .i1 {
    margin-right: -123px;
  }
}
</style>
