<template>
  <div class="home">
    <AppHeader v-bind="props" />
    <div class="login-form-frame">
      <div class="container">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="sign-up-frame">
                    <h2>New Customer Payment</h2>
                    <form @submit.prevent="processForm" method="post">
                    <div class="form-group">
                        <label for="inputAddress">Amount ($)</label>
                        <input
                        type="number"
                        class="form-control"
                        id="inputAddress"
                        placeholder="Enter amount..."
                        v-model="amount"
                        />
                        <span class="error-msg" v-if="errors.amount.length != 0">
                        {{ errors.amount }}</span
                        >
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Customer Mobile Number</label>
                        <vue-tel-input
                        v-model="phone"
                        mode="international"
                        validCharactersOnly
                        ></vue-tel-input>
                        <span
                        class="error-msg"
                        v-if="errors.phone.length != 0 || errors.format.length != 0"
                        >
                        {{ errors.phone }} {{ errors.format }}
                        </span>
                    </div>

                    <a v-if=" !loading" href="#" class="btn1">
                        <input class="btn" type="submit" value="Submit Invoice Request" />
                    </a>
                    <b-spinner
                        style="margin-left: 45%"
                        v-if="loading"
                        label="Spinning"
                    ></b-spinner>
                    <div class="form-response" v-if="gotResponse">
                        <b-alert
                        variant="primary"
                        show
                        v-if="response.data.ResponseCode == 200"
                        >
                        {{ response.data.msg }}</b-alert
                        >
                        <b-alert
                        variant="danger"
                        show
                        v-if="response.data.ResponseCode == 623"
                        >
                        {{ response.data.msg }}</b-alert
                        >
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import AppHeader from "../components/AppHeader";
import Footer from "../components/layout/Footer";
import { VueTelInput } from "vue-tel-input";
export default {
  name: "Orange",
  components: { AppHeader, Footer, VueTelInput },
  data: () => ({
    props: {
      tittle: "IVR Call Centre Merchant Simulator",
      breadCrumb: {
        tittle: "Orange",
        link: "orange",
      },
    },
    value: "",
    phone: "",
    amount: "",
    termsConditions: "no",
    errors: {
      format: "",
      amount: "",
      phone: "",
      tc: "",
    }
  }),
  methods: {
    scrollBottom() {
      window.scrollTo({
        top: 10000,
        left: 0,
        behavior: "smooth",
      });
    },

    processForm(e) {
      this.errors = {
        format: "",
        amount: "",
        phone: "",
        tc: "",
      };
      this.response = {};
      this.gotResponse = false;
      let noformat = true;
      const number = this.phone.split(" ").join("");
      if (number.length > 17 || number.length < 12) {
        noformat = false;
        this.errors.format = "Enter phone number in correct format.";
      }

      if (
        this.phone &&
        this.amount &&
        this.termsConditions === "yes" &&
        noformat
      ) {
        this.loading = true;
        let postData = {
          Amount: this.amount,
          id: number,
        };

        this.axios
          .post(
            "https://6f0vqrhy90.execute-api.eu-west-2.amazonaws.com/dev/en-GB/webSignUp",
            postData,
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((res) => {
            this.loading = false;
            this.gotResponse = true;
            this.response = res;
            if (res.ResponseCode == 200) {
              this.showSubmit = false;
            }
          })
          .catch((err) => {
            this.loading = false;
            this.response = res;
          });
        return true;
      }
      if (!this.amount) {
        this.errors.amount = "Nick Name required.";
      }

      if (!this.phone) {
        this.errors.phone = "Phone required.";
      }

      if (this.termsConditions === "no") {
        this.errors.tc = "Accept terms and conditions.";
      }

      e.preventDefault();
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style>
.coming-soon-frame h4 {
  margin-bottom: 0;
  color: #fff;
  padding-top: 10px;
}
.try-frame {
  padding-top: 90px;
  padding-bottom: 90px;
}
.login-form-frame {
  padding-top: 71px;
  padding-bottom: 70px;
  position: relative;
}
.login-form-frame::before {
  content: "";
  background-image: url("../assets/images/phone-call.png");
  position: absolute;
  left: 49px;
  top: 17px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100px;
  height: 100px;
}
.login-form-frame::after {
  content: "";
  background-image: url("../assets/images/bg.png");
  position: absolute;
  right: -10px;
  top: -61px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 391px;
  height: 550px;
  z-index: -1;
}
.error-msg {
  font-size: 12px;
  color: red;
}
.form-control:focus {
  outline: none;
  box-shadow: none;
  border: 1px solid #95236c;
}
.login-form-frame .btn {
  width: 100%;
}
.mr-10 {
  margin-right: 10px;
}
.phone-call-frame img {
  margin-top: -7px;
}
.login-form-frame .content-login h4 {
  font-weight: bold;
  position: relative;
  /* padding-left: 35px; */
}
.login-form-frame .content-login p a {
  /* color: #000000; */
  font-size: 16px;
}
.biometric-content p a {
  color: #fff;
}
/* .biometric-content p a:hover,
.biometric-content p a {
  color: #ae52c4;
} */
.link-color:hover {
  color: #ae52c4;
  cursor: pointer;
}
/* .login-form-frame .content-login h4::before {
  content: "";
  position: absolute;
  background-image: url("../assets/images/phone-call-blue.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  left: 0;
  top: 0;
  bottom: 0;
  width: 25px;
  height: 25px;
} */
.login-form-frame .sign-up-frame p {
  font-size: 14px;
}

.login-form-frame .sign-up-frame h2,
.login-form-frame .sign-up-frame p {
  text-align: center;
}
.login-form-frame .sign-up-frame {
  background-color: #f9f9f9;
  border-radius: 18px;
  border: 1px solid #f2f2f2;
  width: 485px;
  /* height: 501px; */
  padding-left: 26px;
  padding-top: 34px;
  padding-right: 28px;
  padding-bottom: 51px;
}
::placeholder {
  font-size: 14px;
}
.login-form-frame .sign-up-frame .checkmark {
  position: absolute;
  top: 5px;
  margin-right: 5px;
  left: 0;
  border: 1px solid #979797;
  width: 14px;
  height: 14px;
}
.login-form-frame .content-login h4 a {
  color: #373737;
  font-size: 18px;
  font-weight: bold;
}
.login-form-frame .sign-up-frame .form-check {
  padding-left: 0;
}
.login-form-frame .sign-up-frame .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.form-check-label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.form-check-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Show the checkmark when checked */
.form-check-label input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.form-check-label .checkmark:after {
  left: 3px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid #95236c;
  border-width: 0 3px 3px 0;
  /* background-color: #95236c; */
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.form-response {
  text-align: center;
  margin-top: 20px;
}
@media only screen and (max-width: 1024px) {
  .login-form-frame .sign-up-frame {
    width: auto;
  }
  .login-form-frame::after {
    content: "";
    background-image: url("../assets/images/bg.png");
    position: absolute;
    right: 0;
    bottom: 0;
    top: auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 224px;
    height: 330px;
    z-index: -1;
  }
}
@media only screen and (max-width: 767px) {
  .coming-soon-frame h4 {
    margin-bottom: 30px;
  }
}
</style>
