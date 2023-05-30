<template>
  <div class="home">
    <AppHeader v-bind="props" />
    <div class="login-form-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="content-login">
              <h2>
                Sign up to test our <br />
                IVR Call Centre
              </h2>
              <p>The call centre is currently operating using two numbers:</p>
              <h4>
                <p>
                  <span class="phone-call-frame mr-10"
                    ><img
                      src="../assets/images/phone-call-blue.png"
                      class="img-fluid"
                      alt="phone-call-blue"
                    />
                  </span>
                  <b>English (UK): </b><a href="tel:+447888872097">+44 7888872097</a> / <a href="tel:+17372450200">+1 737 245 0200</a>
                </p>
                <p>
                  <span class="phone-call-frame mr-10"
                    ><img
                      src="../assets/images/phone-call-blue.png"
                      class="img-fluid"
                      alt="phone-call-blue"
                    /> </span
                  ><b>French (FR): </b> <a href="tel:+447723432543">+44 7723 432543</a>
                </p>
                <p>
                  <span class="phone-call-frame mr-10"
                    ><img
                      src="../assets/images/phone-call-blue.png"
                      class="img-fluid"
                      alt="phone-call-blue"
                    /> </span
                  ><b>Urdu (PK): </b> <a href="tel:+441485500402">+44 1485 500402</a>
                </p>
              </h4>
              <p>
                Follow the instructions to enrol using your voice print,
                enabling you to navigate through the use cases.
              </p>
              <p>
                If you would like to suggest a new use case to meet your
                business needs, contact the
                <a
                  href="https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/"
                  target="_blank"
                >
                  Inclusive Tech Lab</a
                >
                or
                <a @click="scrollBottom" class="link-color">
                  suggest a new use case.</a
                >
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="sign-up-frame">
              <h2>Sign up</h2>
              <form @submit.prevent="processForm" method="post">
                <div class="form-group">
                  <label for="inputAddress">Nickname</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter nickname"
                    v-model="nickName"
                  />
                  <span class="error-msg" v-if="errors.nickName.length != 0">
                    {{ errors.nickName }}</span
                  >
                </div>
                <div class="form-group">
                  <label for="inputAddress2">Mobile number</label>
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

                <div class="form-group">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        v-model="termsConditions"
                        true-value="yes"
                        false-value="no"
                      />
                      <span class="checkmark"></span>
                      <a href="./terms-and-condition.pdf" target="_blank"
                        >Accept the terms and conditions</a
                      >
                    </label>
                    <span class="error-msg" v-if="errors.tc.length != 0">
                      {{ errors.tc }}</span
                    >
                  </div>
                </div>

                <a v-if="showSubmit && !loading" href="#" class="btn1">
                  <input class="btn" type="submit" value="Submit Now" />
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
    <section class="two-col-biometric-wrap text-white">
      <b-container>
        <b-row class="justify-content-start align-items-center">
          <b-col cols="12" xl="6">
            <div class="biometric-content">
              <h2>
                Test Different <br />
                Biometric Providers
              </h2>
              <p>
                Biometrics For All allows mobile money providers to test
                multiple biometrics solutions available in the market. Our
                solution was structured with a modular and flexible
                architecture, allowing new biometrics providers to include their
                solutions to showcase both in our IVR call centre and in the
                mobile app. Our team is constantly evolving the assets,
                increasing the range of possible suppliers available. If you are
                a biometric supplier and would like to contribute to our
                showcase, please
                <a
                  href="https://www.gsma.com/mobilefordevelopment/mobile-money/gsma-inclusive-tech-lab/"
                  target="_blank"
                >
                  contact the Inclusive Tech lab.</a
                >
              </p>
            </div>
          </b-col>
          <b-col cols="12" xl="6">
            <div class="biometric-img-block">
              <b-row
                class="justify-content-center align-items-center gutter-20 flex-md-column"
              >
                <b-col cols="12" md="7">
                  <a href="https://enquanta.io/" target="_blank">
                  <div class="bg-biometric2 bg-white">
                    <img
                      src="../assets/images/enquanta-hex.gif"
                      class="img-fluid"
                      alt="biometric-provide-icon-1"
                      style="width: 24px; padding-top: 2px; margin-right: 3px;"
                    />
                    <img
                      src="../assets/images/enquanta-logo.png"
                      class="img-fluid"
                      alt="biometric-provide-icon-1"
                      style="width: 100px; padding-top: 5px; margin-left: 5px;"
                    />
                  </div>
                  </a>
                  <a href="https://telos.com/" target="_blank">
                  <div class="bg-biometric2 bg-white">
                    <svg width="147" height="40" viewBox="0 0 147 40" xmlns="http://www.w3.org/2000/svg">
                    <path class="dark" d="M69.853 8.864h-7.919l-3.422 28.315H51.67l3.424-28.315h-8.547l.69-5.685H70.54l-.687 5.685"></path>
                    <path d="M74.005 25.56l.58-4.729h5.494l.445-3.621c.295-2.415-.53-3.069-2.892-3.069-2.414 0-3.575.453-3.9 3.069l-1.437 11.72c-.29 2.364.86 2.819 3.025 2.819h8.448l-.666 5.43H71.985c-5.33 0-6.802-2.365-6.165-7.545L67.507 15.9c.727-5.936 5.222-6.89 10.303-6.89 5.433 0 9.907.454 9.113 6.89l-1.184 9.66H74.005m35.008 11.972c-6.54 0-9.391-1.356-8.534-8.35l1.446-11.77c.857-6.993 4-8.402 10.588-8.402 6.541 0 9.329 1.459 8.477 8.401l-1.446 11.771c-.852 6.94-3.992 8.35-10.531 8.35zm5.576-20.02c.296-2.413-.189-3.37-2.706-3.37-2.515 0-3.279.905-3.583 3.37l-1.42 11.57c-.302 2.467.24 3.368 2.754 3.368 2.518 0 3.238-.955 3.534-3.369l1.421-11.57zm22.658 17.252c-1.437 1.862-3.77 2.415-5.83 2.415h-10.312l.665-5.43h6.843c1.91 0 3.195-.2 3.466-2.415.21-1.712-.615-1.962-1.86-2.868l-3.512-2.567c-2.952-2.164-3.714-3.318-3.23-7.242.52-4.276 2.453-7.293 7.128-7.293h9.46l-.67 5.431h-6.035c-1.707 0-3.09.306-3.353 2.314-.192 1.463 1.048 2.055 2.108 2.858 1.517 1.155 3.11 2.174 4.578 3.33 2.432 1.91 2.555 2.567 2.154 5.834-.2 1.613-.52 4.227-1.6 5.633m-43.433 2.415c-1.959 0-3.905-.553-4.909-2.21-.966-1.562-.75-3.323-.52-5.185L91.592 3.66l6.626-2.363-3.372 27.48c-.41 3.322.483 3.018 3.403 3.018l-.662 5.383h-3.774" class="dark"></path>
                    <path d="M42.672 14.961c-1.028-.836-1.61-1.442-2.544-2.246-1.158-.735-6.503-1.623-10.01-1.676-2.424.102-4.351-.099-2.869 4.656 1.869 5.99 1.068 14.389-.515 18.866 4.293-5.922 7.955-9.122 15.16-14.16 2.111-1.463 2.525-4.015.778-5.44m-22.685 3.797c-1.257-2.557-4.064-7.352-6.015-7.63-3.955-.226-8.88.647-9.93 1.366a136.1 136.1 0 01-2.95 2.467c-1.747 1.425-1.334 3.976.778 5.443 8.235 5.752 12.72 10.238 17.682 17.681 1.263 1.906 3.397 1.906 4.663 0 .228-.344.458-.676.684-1.009-.476-6.545-2.015-12.495-4.912-18.319M21.704 0c-4.959 0-13.069 6.968-14.5 8.293 1.773-.932 3.843-1.488 6.065-1.953 0 0 1.423-.294 3.369-.542a47.295 47.295 0 015.276-.328c5.735.036 11.011 1.065 14.936 3.093C35.32 7.155 26.66 0 21.704 0" class="light"></path>
                    <path d="M146.462 11.691a2.32 2.32 0 01-2.352 2.35 2.318 2.318 0 01-2.35-2.35 2.32 2.32 0 012.35-2.351 2.32 2.32 0 012.352 2.351zm-4.334 0c0 1.125.846 2.016 1.982 2.016 1.138 0 1.985-.89 1.985-2.016 0-1.125-.847-2.016-1.985-2.016-1.136 0-1.982.891-1.982 2.016zm1.465 1.359h-.336v-2.718h1.043c.614 0 .885.265.885.753 0 .48-.316.695-.683.757l.81 1.208h-.393l-.764-1.208h-.562v1.208zm.442-1.491c.41 0 .815-.013.815-.474 0-.38-.315-.469-.643-.469h-.614v.943h.442z" class="dark"></path></svg>
                  </div>
                  </a>                  
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="about-content-wrapper try-frame">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="img-about-content">
              <img
                src="../assets/images/Guide.png"
                class="img-fluid"
                alt="Guide"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <h2>
              Use our documentation to get the most out of your experience
            </h2>
            <h6>
              B4LL allows you to experience different use cases. Our
              documentation guides you through happy and unhappy flows and tells
              you everything you need to know to make the correct use of the
              showcase. So please visit our documentation page and try to go
              over the flows which are outlined. There is an infinite number of
              open possibilities, so, help us to improve bringing your business
              needs so we can provide a customised experience to you.
            </h6>
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
  name: "TryB4All",
  components: { AppHeader, Footer, VueTelInput },
  data: () => ({
    props: {
      tittle: "EXPERIENCE THE BIOMETRICS SHOWCASE",
      breadCrumb: {
        tittle: "Try B4ll",
        link: "tryb4all",
      },
    },
    value: "",
    phone: "",
    nickName: "",
    termsConditions: "no",
    errors: {
      format: "",
      nickName: "",
      phone: "",
      tc: "",
    },
    showSubmit: true,
    loading: false,
    gotResponse: false,
    response: {},
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
        nickName: "",
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
        this.nickName &&
        this.termsConditions === "yes" &&
        noformat
      ) {
        this.loading = true;
        let postData = {
          Nickname: this.nickName,
          id: number,
        };

        this.axios
          .post(
            "https://kugxq13zgf.execute-api.eu-west-2.amazonaws.com/dev/en-GB/webSignUp",
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
      if (!this.nickName) {
        this.errors.nickName = "Nick Name required.";
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
svg .dark {
  fill: #0e315f;
}

svg .light {
  fill: #63a1d9;
}

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
