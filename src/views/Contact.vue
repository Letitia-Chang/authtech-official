<template>
  <div class="contact">
    <!-- 資料送出前 -->
    <!-- Cover Image -->
    <CoverImage
      v-if="formSubmitted == false"
      :page="'contact'"
      :brightness="1"
      :align="'center'"
      style="position: relative"
    >
      <template v-slot:cover-image-content>
        <p class="title-text">聯絡我們</p>
        <div class="subtitle-text-en">CONTACT US</div>
      </template>
    </CoverImage>

    <!-- Section -->
    <div v-if="formSubmitted == false" class="page-container2">
      <!-- ** 諮詢內容 ** -->
      <div class="section15 form1">
        <FormTitle :title="'諮詢內容(可複選)'" />

        <div class="form-item-container">
          <!-- 客服系統 / 線上訊息 -->
          <Checkbox
            @recieveCheckedItem="recieveCheckedItem($event)"
            :title="'客服系統 / 線上訊息'"
            :category="'onlineMsg'"
            :content="checkboxContent[0]"
          />

          <!-- 電商系統 -->
          <Checkbox
            @recieveCheckedItem="recieveCheckedItem($event)"
            :title="'電商系統'"
            :category="'eCommerce'"
            :content="checkboxContent[1]"
          />

          <!-- 精準分群行銷系統(省下大筆預算) -->
          <Checkbox
            @recieveCheckedItem="recieveCheckedItem($event)"
            :title="'精準分群行銷系統 (省下大筆預算)'"
            :category="'marketing'"
            :content="checkboxContent[2]"
          />

          <!-- 客戶關係管理 -->
          <Checkbox
            @recieveCheckedItem="recieveCheckedItem($event)"
            :title="'客戶關係管理'"
            :category="'crm'"
            :content="checkboxContent[3]"
          />

          <!-- 企業資源管理 -->
          <Checkbox
            @recieveCheckedItem="recieveCheckedItem($event)"
            :title="'企業資源管理'"
            :category="'erp'"
            :content="checkboxContent[4]"
          />
        </div>
      </div>

      <!-- ** 聯絡資料 ** -->
      <div class="section15 form2">
        <FormTitle :title="'客戶聯絡資料'" />

        <div class="form-item-container">
          <!-- 姓名 | 聯絡電話 -->
          <TextInput :content="textInput1" />

          <!-- 公司名稱 | 公司電話 -->
          <TextInput :content="textInput2" />

          <!-- E-mail  -->
          <TextInput :content="textInput3" />

          <!-- 約談日期 | 約談時段 -->
          <DateTimeInput
            :dateSetting="{ id: 'date', title: '約談日期', required: true }"
            :timeSetting="{
              id: 'time',
              title: '約談時段',
              required: true,
              unit: 0.5,
              range: [13, 20],
            }"
          />

          <!-- 消息來源 -->
          <Checkbox
            @recieveCheckedItem="recieveCheckedItem($event)"
            :title="'消息來源'"
            :content="checkboxContent2"
            :category="'source'"
            :alt="true"
          />

          <!-- ReCaptcha -->
          <vue-recaptcha
            ref="recaptcha"
            @verify="onVerify"
            @expired="onExpired"
            :sitekey="sitekey"
          >
          </vue-recaptcha>

          <!-- 送出按鈕 -->
          <div class="button-row d-flex flex-row justify-content-center w-100">
            <ButtonBasic
              @triggered="sendForm()"
              :text="'送出'"
              :fullAtMobile="true"
              :disabled="sendbuttonDisabled"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 資料送出後 -->
    <CoverImage
      v-else
      :page="'contact'"
      :brightness="1"
      :align="'center'"
      id="form-submitted"
      style="position: relative"
    >
      <template v-slot:floating-element>
        <div class="d-flex flex-row justify-content-center align-items-center">
          <div class="form-submitted d-flex flex-column">
            <p>成功送出！</p>
            <p>Hi ! 感謝您的預約，資訊已成功送出，將有專人與您聯絡！</p>
            <router-link to="/">
              <button>返回首頁</button>
            </router-link>
            <img src="@/assets/icons/contact-icon1.svg" alt="" />
          </div>
        </div>
      </template>
    </CoverImage>
  </div>

  <!-- Modal (fired when form submitted successfully) -->
  <!-- <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    aria-labelledby="myModal-label"
    aria-hidden="false"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        Modal Body
        <div class="modal-body">
          <div class="notice-card d-flex flex-row flex-wrap">SOmething</div>
        </div>

        Modal Footer
        <div class="modal-footer">
          <div data-bs-dismiss="modal">我知道了</div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { Modal } from "bootstrap";
import emailjs from "@emailjs/browser";
import { VueRecaptcha } from "vue-recaptcha";

import CoverImage from "@/components/CoverImage.vue";
import FormTitle from "@/components/forms/FormTitle.vue";
import Checkbox from "@/components/forms/Checkbox.vue";
import TextInput from "@/components/forms/TextInput.vue";
import DateTimeInput from "@/components/forms/DateTimeInput.vue";
import ButtonBasic from "@/components/buttons/ButtonBasic.vue";

export default defineComponent({
  name: "Contact",
  components: {
    CoverImage,
    FormTitle,
    Checkbox,
    TextInput,
    ButtonBasic,
    DateTimeInput,
    VueRecaptcha,
  },
  data() {
    return {
      // recaptcha
      sitekey: "6Le6kP8fAAAAAKJJM0LeMAry7v_BrHBRxNff-aNY",
      sendbuttonDisabled: true,
      inquiryType: {
        onlineMsg: [],
        eCommerce: [],
        marketing: [],
        crm: [],
        erp: [],
        source: [],
      } as {
        [key: string]: Array<string>;
      },
      personalInfo: {
        name: "",
        phone: "",
        companyName: "",
        companyPhone: "",
        email: "",
        date: "",
        time: "",
      } as {
        [key: string]: string | Array<string>;
      },
      formSubmitted: false,
      expand: false,
      selected: 13,
      recaptchaWork: "false",
      // myModal: null as any,
      checkboxContent: [
        [
          {
            id: "msg1",
            text: "客服事件管理",
          },
          {
            id: "msg2",
            text: "線上訊息整合(LINE@,Facebook,Instagram)",
          },
        ],
        [
          {
            id: "ecommerce1",
            text: "電商開發管理",
          },
        ],
        [
          {
            id: "marketing1",
            text: "行銷模式導入",
          },
        ],
        [
          {
            id: "crm1",
            text: "客服事件管理",
          },
          {
            id: "crm2",
            text: "邀約諮詢管理系統",
          },
        ],
        [
          {
            id: "erp1",
            text: "服務行程管理系統",
          },
          {
            id: "erp2",
            text: "訂單管理系統",
          },
          {
            id: "erp3",
            text: "財務管理系統",
          },
          {
            id: "erp4",
            text: "人事薪資系統",
          },
          {
            id: "erp5",
            text: "庫存管理系統",
          },
          {
            id: "erp6",
            text: "租賃管理系統",
          },
        ],
      ],
      checkboxContent2: [
        {
          id: "source1",
          text: "Google",
        },
        {
          id: "source2",
          text: "雜誌報導",
        },
        {
          id: "source3",
          text: "DM傳單",
        },
        {
          id: "source4",
          text: "Yahoo",
        },
        {
          id: "source5",
          text: "Facebook",
        },
        {
          id: "source6",
          text: "企業特約",
        },
        {
          id: "source7",
          text: "網友推薦",
        },
        {
          id: "source8",
          text: "企業特約廠商",
        },
      ],
      textInput1: [
        {
          id: "name",
          required: true,
          title: "姓名",
          placeholder: null,
        },
        {
          id: "phone",
          required: true,
          title: "聯絡電話",
          placeholder: null,
        },
      ],
      textInput2: [
        {
          id: "companyName",
          required: true,
          title: "公司名稱",
          placeholder: null,
        },
        {
          id: "companyPhone",
          required: true,
          title: "公司電話",
          placeholder: null,
        },
      ],
      textInput3: [
        {
          id: "email",
          required: true,
          title: "E-mail",
          placeholder: null,
        },
      ],
    };
  },
  methods: {
    onVerify(response: unknown) {
      console.log("ON VERIFY");
      console.log("Verify: " + response);
      this.sendbuttonDisabled = false; // Enable Send button
    },
    onExpired() {
      console.log("ON EXPIRED");
      this.sendbuttonDisabled = true;
    },
    sendForm() {
      // 諮詢內容
      let count = 0;

      for (let key in this.inquiryType) {
        let value = this.inquiryType[key];

        if (key == "source") {
          continue;
        }

        count += value.length;
      }

      if (count == 0) {
        alert("請至少勾選一項諮詢內容！");
      } else {
        // 個人資料
        let validateData = true;

        for (let key2 in this.personalInfo) {
          let target = document.getElementById(
            `input-${key2}`
          )! as HTMLInputElement;

          let value = target.value;
          console.log("GOT TARGET VALUE");

          // 檢查資訊
          if (value == "" || value == null) {
            alert("聯絡資料欄位不得空白！");
            validateData = false;
            break;
          } else if (
            key2 == "phone" &&
            (this.validateMobile(value) == null || value.length !== 10)
          ) {
            alert("請輸入有效手機號碼");
            validateData = false;
            break;
          } else if (key2 == "email" && this.validateEmail(value) == null) {
            alert("請輸入有效信箱");
            validateData = false;
            break;
          } else {
            this.personalInfo[`${key2}`] = value;
          }
        }

        // 發信
        if (validateData === true) {
          this.sendEmail();
        }
      }
    },
    validateMobile(phone: string) {
      return phone.match(/^09[0-9]/);
    },
    validateEmail(email: string) {
      return email.match(
        /* eslint-disable-next-line */
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    },
    recieveCheckedItem(data: Array<string>) {
      this.inquiryType[`${data[0]}`].push(data[1]);
    },
    sendEmail() {
      const templateParams = {
        onlineMsg: this.inquiryType["onlineMsg"].join(", "),
        eCommerce: this.inquiryType["eCommerce"].join(", "),
        marketing: this.inquiryType["marketing"].join(", "),
        crm: this.inquiryType["crm"].join(", "),
        erp: this.inquiryType["erp"].join(", "),
        source: this.inquiryType["source"].join(", "),
        name: this.personalInfo["name"],
        phone: this.personalInfo["phone"],
        companyName: this.personalInfo["companyName"],
        companyPhone: this.personalInfo["companyPhone"],
        email: this.personalInfo["email"],
        date: this.personalInfo["date"],
        time: this.personalInfo["time"],
      };

      console.log(templateParams);

      emailjs
        .send(
          "service_auth_contact",
          "template_lhbipyn",
          templateParams,
          "E7UwdchlPTaYKL1bo"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );

      // 重整頁面
      this.formSubmitted = true;
      // window.location.reload();
    },
  },
  // mounted() {
  //   const target = document.getElementById("myModal")! as HTMLElement;
  //   this.myModal = new Modal(target);
  //   this.myModal.show();
  // },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .form1 {
    margin-top: 72px;
  }

  .form2 {
    margin-top: 42px;
  }

  .form-item-container {
    padding: 0px 42px;
  }

  .button-row {
    margin-top: 80px;
    margin-bottom: 127px;
  }

  .form-submitted {
    @include size(1225px, 505px);
    border-radius: 20px;

    p:first-of-type {
      @include set-font(28px, 600);
      margin-bottom: 24px;
    }

    p:last-of-type {
      @include set-font(24px, 600);
      margin-bottom: 0px;
    }

    button {
      @include set-font(24px, 600);
      @include size(372px, 65px);
      margin-top: 25px;
    }

    img {
      width: 268px;
      margin-top: 50px;
    }
  }

  #form-submitted {
    height: calc(100vh - 243px);
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .form1 {
    margin-top: 32px;
  }

  .form2 {
    margin-top: 54px;
  }

  .form-item-container {
    padding: 0px 42px;
  }

  .button-row {
    margin-top: 54px;
    margin-bottom: 114px;
  }

  .form-submitted {
    @include size(900px, 400px);
    border-radius: 20px;

    p:first-of-type {
      @include set-font(24px, 600);
      margin-bottom: 16px;
    }

    p:last-of-type {
      @include set-font(20px, 600);
      margin-bottom: 0px;
    }

    button {
      @include set-font(20px, 600);
      @include size(310px, 56px);
      margin-top: 24px;
    }

    img {
      width: 268px;
      margin-top: 24px;
    }
  }

  #form-submitted {
    height: calc(100vh - 213px);
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .form1 {
    margin-top: 32px;
  }

  .form2 {
    margin-top: 32px;
  }

  .form-item-container {
    padding: 0px 42px;
  }

  .button-row {
    margin-top: 50px;
    margin-bottom: 96px;
  }

  .form-submitted {
    @include size(809px, 298px);
    border-radius: 20px;

    p:first-of-type {
      @include set-font(18px, 600);
      margin-bottom: 10px;
    }

    p:last-of-type {
      @include set-font(16px, 600);
      margin-bottom: 0px;
    }

    button {
      @include set-font(18px, 600);
      @include size(238px, 40px);
      margin-top: 16px;
    }

    img {
      width: 202px;
      margin-top: 14px;
    }
  }

  #form-submitted {
    height: calc(100vh - 188px);
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .form1 {
    margin-top: 24px;
  }

  .form2 {
    margin-top: 24px;
  }

  .form-item-container {
    padding: 0px 42px;
  }

  .button-row {
    margin-top: 32px;
    margin-bottom: 44px;
  }

  .form-submitted {
    @include size(701px, 277px);
    border-radius: 15px;

    p:first-of-type {
      @include set-font(16px, 600);
      margin-bottom: 16px;
    }

    p:last-of-type {
      @include set-font(14px, 600);
      margin-bottom: 0px;
    }

    button {
      @include set-font(16px, 600);
      @include size(200px, 32px);
      margin-top: 16px;
    }

    img {
      width: 198px;
      margin-top: 16px;
    }
  }

  #form-submitted {
    height: calc(100vh - 177px);
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .form1 {
    margin-top: 24px;
  }

  .form2 {
    margin-top: 24px;
  }

  .button-row {
    margin-top: 32px;
    margin-bottom: 165px;
  }

  .form-submitted {
    @include size(316px, 305px);
    border-radius: 10px;
    padding: 24px;

    p:first-of-type {
      @include set-font(16px, 600);
      margin-bottom: 16px;
    }

    p:last-of-type {
      @include set-font(14px, 600);
      margin-bottom: 0px;
    }

    button {
      @include set-font(14px, 600);
      @include size(184px, 32px);
      margin-top: 24px;
    }

    img {
      width: 198px;
      margin-top: 24px;
    }
  }

  #form-submitted {
    height: calc(100vh - 176px);
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .form1 {
    margin-top: 24px;
  }

  .form2 {
    margin-top: 24px;
  }

  .button-row {
    margin-top: 24px;
    margin-bottom: 60px;
  }

  .form-submitted {
    @include size(288px, 295px);
    border-radius: 10px;
    padding: 24px;

    p:first-of-type {
      @include set-font(16px, 600);
      margin-bottom: 16px;
    }

    p:last-of-type {
      @include set-font(14px, 600);
      margin-bottom: 0px;
    }

    button {
      @include set-font(14px, 600);
      @include size(184px, 32px);
      margin-top: 16px;
    }

    img {
      width: 198px;
      margin-top: 16px;
    }
  }

  #form-submitted {
    height: calc(100vh - 194px);
  }
}

// 其他固定CSS
.form-submitted {
  @extend %alignment1;
  background-color: rgba(255, 255, 255, 0.85);
  text-align: center;

  p:first-of-type {
    color: $theme-color;
  }

  button {
    @extend %button-basic;
  }
}

// COVER IMAGE
.title-text {
  @include cover-title-cn("white");
}

.subtitle-text-en {
  @include cover-subtitle-en("white");
}
</style>
