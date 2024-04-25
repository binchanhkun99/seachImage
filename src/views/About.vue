<script setup>



</script>
<template>
  <div class="about-container">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col t2">
          <img src="https://enjoysport.vn/images/runnertag-3.png" alt="none" />
        </div>
        <div class="col t1">
          <h1 class="fw-bold">Nhận diện số lib thông minh</h1>
          <p class="lead mt-4">
            Công nghệ mạnh mẽ cho phép người tham gia tìm thấy tất cả ảnh của họ
            một cách nhanh chóng và dễ dàng.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="about-container bg-light">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col t1">
          <h1 class="fw-bold">Mua ảnh chất lượng cao dễ dàng</h1>
          <p class="lead mt-4">
            Hỗ trợ nhiều hình thức thanh toán giúp người tham gia mua ảnh chất
            lượng cao một cách dễ dàng.
          </p>
        </div>
        <div
          class="col t2"
          style="align-items: end; display: flex; justify-content: end"
        >
          <img src="https://enjoysport.vn/images/about-2.png" alt="none" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  padding-top: 3rem;
  padding-bottom: 3rem;
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
}
</style>
