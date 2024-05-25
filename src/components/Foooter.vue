<script setup>
import request from "../utils/request";
import { ref, onMounted, watch } from "vue";
import 'boxicons'

const company_name = ref()
const address_company = ref()

const phone = ref()
const email = ref()
const showEvent = async (id) => {
  try {
    const res = await request.get(`get_contact/1`);
    // console.log("HIHIHII", res);
    if (res.status === 200) {
      const data = res.data;
      company_name.value = data.company_name
      address_company.value = data.address_company
      phone.value = data.phone
      email.value = data.email

    }
  } catch (error) {
    console.log(error);
  }
};
onMounted(()=>{
  showEvent()
})

</script>
<template>
  <div class="footer" >
    <div class="container">
      <div class="list-footer">
        <div class="contact">
          <span class="title">Liên hệ chúng tôi</span>
          <div class="item-contact">{{ company_name }}</div>
          <!-- <div class="item-contact">
            Địa chỉ: {{ address_company }}
          </div>
          <div class="item-contact">Phone: {{ phone }}</div> -->
          <div class="item-contact">Email: {{ email }}</div>
        </div>
        <div class="support">
            <!-- <span class="title">Hỗ trợ</span>
          <div class="item-contact"><a href="">Hướng dẫn mua hàng</a></div>
          <div class="item-contact">
            <a href="">Chính sách thanh toán</a>
          </div>
          <div class="item-contact"><a href="">Hoàn tiền</a></div> -->
        
        </div>
        <div class="law">
            <span class="title">Pháp lý</span>
          <div class="item-contact"><a href="">Điều khoản chung</a></div>
          <div class="item-contact">
            <a href="">Chính sách bảo mật</a>
          </div>
          <div class="item-contact">
            <a href="https://www.facebook.com/SalaRunningHub">
                <box-icon type='logo' name='facebook-square'>
            
        </box-icon>
            </a>
</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  width: 100%;
}
.title {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
}
.container {
  width: 100%;
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-right: auto;
  margin-left: auto;
}
.list-footer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc(33.333% - 2px), 1fr)
  ); /* 3 items per row */
  gap: 2px;
  position: relative;
  overflow: hidden;
}
.contact{
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.item-contact{
    font-size: 15px;
    font-weight: 400;
    font-family: 'Roboto Condensed', sans-serif;
}
.item-contact a{
    text-decoration: none;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto Condensed', sans-serif;
}
.support{
    padding-left: 62px;
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.law{
    display: flex;
    flex-direction: column;
    gap: 6px;
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
@media (max-width: 768px) {

  .list-footer{
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .support{
      padding: 0px !important;
  }
  .title{
    /* text-align: center; */
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
