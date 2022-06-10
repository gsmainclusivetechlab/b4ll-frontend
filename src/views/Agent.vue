<template>
  <div class="home">
    <AppHeader v-bind="props" />

    <!-- FRAME 02: USE CASES  -->
    <div class="digital-wrapper feature-wrap bg-greys">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="feature-content text-center">
              <h2>Use Cases</h2>
              <h6>
                This page was created to be used as a Agent simulator and as a guide to those who are testing the show case.
              </h6>
            </div>
            <div class="three-col-feature-frame">
              <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card-wrap">
                    <img
                      src="../assets/images/resetpin.png"
                      class="img-fluid"
                      alt="development"
                    />
                    <h5>Reset Pin</h5>
                    <h6>
                      This use case approaches the need of the user to change 
                      their PIN number. There are two possibilities to test this use case:
                      calling the call centre, and using SMS/USSD.
                    </h6>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card-wrap">
                    <img
                      src="../assets/images/merchant.png"
                      class="img-fluid"
                      alt="trusted"
                    />
                    <h5>Merchant Payments</h5>
                    <h6>
                      This use case simulates a merchant payment initiated 
                      by the customer or by the merchant (agent) and can be done 
                      by call centre, QR Code, and SMS/USSD.
                    </h6>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card-wrap">
                    <img
                      src="../assets/images/cashtocash.png"
                      class="img-fluid"
                      alt="smartphones"
                    />
                    <h5>Cash-in / Cash-out / P2P Transfer</h5>
                    <h6>
                      The simulations of cash-in/out and p2p transfers can be initiate by
                      the customer or the agent and can be done by call centre (P2P transfer), 
                      SMS/USSD and QR Code.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- FRAME 03: RESET PIN  -->
    <section class="two-col-biometric-wrap text-white bg-greys">
      <b-container>
        <b-row class="justify-content-start align-items-center">
          <b-col cols="6">
            <div>
              <h2>
                Use Case 01 <br />
                Reset PIN Number
              </h2>
              <p>
                We are approaching here two different situations that can happen: change a current
                PIN Number and renew a PIN number, following the intructions on the right.
              </p>
              <p>
                To chenge the PIN number using the call centre the user can enter ther previous PIN 
                (1234 is our default value) and then update the PIN number.
              </p>
              <p>
                If the user forgot the PIN number the reset can be done using a SMS/USSD to request 
                and the voice recognition to validate the user and create a new PIN. 
              </p>  
            </div>
          </b-col>
          <b-col cols="6">
            <div>
              <h5>Call Centre</h5>
                <p>
                  1. Use one of the call centre numbers available for this project.
                  </br>2. Select the option 4 in the main menu
                  </br>3. Insert your previous PIN (1234 for demo purposes)
                  </br>4. Insert your new PIN Number
                </p>
              <h5>SMS/USSD</h5>
                <p>
                  1. Send an SMS to one of numbers available for this project.
                  </br> - SMS message style: <b>RESETPIN</b>
                  </br> - USSD code style: <b>*104#</b>
                  </br>2. Receive an inbound call    
                  </br>3. Authenticate with voice and reset your PIN 
                </p>
            </div>                
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- FRAME 04: MERCHANT PAYMENT  -->
    <div class="about-content-wrapper try-frame">
      <b-container>
        <b-row class="justify-content-start align-items-center">
          <b-col cols="6">
            <div>
              <h2>
                  Use Case 02 <br />
                  Merchant Payments
              </h2>
              <p>
                The merchant payment can be initiated by the customer or by the merchant.
              </p>
              <p>
                The user can initiate the payment using the call centre and selecting 
                the option pay a bill, starting the transaction throught a QR Code, or sending a 
                SMS/USSD code message. The merchant simultation can be done using the form to request payment.
              </p>
              <p>
                In most of these cases, the procedure will trigger the system to call back the user
                and ask the user to validade the identity using voice authenticatio.
              </p>
            </div>
          </b-col>
          <b-col cols="6">
            <div>
            
                      <h5>Customer Initiated Merchant Payment</h5>
                      <p>
                          1. Call Centre: Call the call centre and use the option <b>Pay a Bill</b> under <b>Mobile Money Services</b>
                          </br>2. SMS: Use the code <b>MERCHANTPAY CODE AMOUNT</b> </br> <i>(e.g. MERCHANTPAY 12345 20)</i>
                          </br>3. USSD: Use the code <b>*160*MERCHANTCODE*AMOUNT*#</b> </br> <i>(e.g. *160*12345*10*#)</i>
                          </br>4. QR Code: Use the field below and fill out the information required to create a QR code. 
                          The merchant number is default (12345). Read the QR code and receive an inbound call 
                          to proceed with voice authentication.
                      </p>
                  
                      <h5>Merchant Initiated Merchant Payment</h5>
                      <p>
                          1. Use the fields below and enter the customer's information 
                          </br>2. The customer will receives a call to authorize the payment using voice
                      </p>
              
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div> 
    
    <!-- FRAME 05: CASH IN / OUT / P2P TRANSFER -->
    <section class="two-col-biometric-wrap text-white">
      <b-container>
        <div class="row">
          <div class="col-6">
            <div>
              <h2>
                  Use Case 03 <br />
                  Cash-In | Cash-Out | P2P Transfer
              </h2>
              <p>
                The user can initiate the payment using the call centre and selecting 
                the option pay a bill, starting the transaction throught a QR Code, or sending a 
                SMS/USSD code message. The merchant simultation can be done using the form to request payment.
              </p>
              <p>
                In most of these cases, the procedure will trigger the system to call back the user
                and ask the user to validade the identity using voice authenticatio.
              </p>
            </div>

          </div>

          <b-col cols="6">
            <div>
            
                <h5>CASH-IN</h5>
                  <p>
                    1. The agent initiates the transaction selecting the operation, the customer and the amount.
                    </br> 2. The customer receives a call to proceed with authorisation
                  </p>

                <h5>CASH-OUT</h5>
                  <p>
                    1. The agent initiates the transaction selecting the operation, the customer and the amount.
                    </br> 2. The customer receives a call to proceed with authorisation
                  </p>

                <h5>P2P Transfer</h5>
                  <p>
                    1. The agent initiates the transaction selecting the operation, the payer, the payee and the amount.
                    </br> 2. The user receives a call to proceed with authorisation
                  </p>
          
            </div>
          </b-col>
         </div>
      </b-container>
    </section>

    <!-- FRAME 06: CASH IN / OUT / P2P TRANSFER (ALL USE CASE FORMS) -->
    <div class="about-content-wrapper try-frame">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div align="center">
              <h2>Agent Simulator </h2>
            </div>
            <div align="center" class="col-12">
            <AgentConfig :selectedSystem="selectedSystem" />
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
import VueI18n from 'vue-i18n'
Vue.use(VueAxios, axios, VueI18n);
import AppHeader from "../components/AppHeader";
import Footer from "../components/layout/Footer";
import AgentConfig from '../components/AgentConfig.vue';
import QrcodeVue from 'qrcode.vue'
import { VueTelInput } from "vue-tel-input";
export default {
  name: "Merchant",
  components: { AppHeader, Footer, VueTelInput, AgentConfig, QrcodeVue },
  data: () => ({
    props: {
      tittle: "IVR Call Centre - Agent Simulator",
      breadCrumb: {
        tittle: "Agent Simulator",
        link: "Agent",
      },
    },
    selectedSystem: 'mock',
    value: "",
    url: "",
    size: 300,
    phone: "",
    phoneInvoice: "",
    phoneQR: "",
    nickName: "",
    amount: "",
    amountQr: "",
    termsConditions: "no",
    signUpErrors: {
      format: "",
      nickName: "",
      amount: "",
      phone: "",
      phoneInvoice: "",
      tc: "",
    },
    invoiceErrors: {
      format: "",
      amount: "",
      phone: "",
    },
    qrErrors: {
      format: "",
      amount: "",
      phone: "",
    },
    showSubmit: true,
    generateQR: false,
    signUpLoading: false,
    invoiceLoading: false,
    qrLoading: false,
    gotSignUpResponse: false,
    gotInvoiceResponse: false,
    gotQrResponse: false,
    response: {},
    invoiceResponse: {},
    qrResponse: {},
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
      this.signUpErrors = {
        format: "",
        nickName: "",
        phone: "",
        tc: "",
      };
      this.response = {};
      this.gotSignUpResponse = false;
      let noformat = true;
      const number = this.phone.split(" ").join("");
      if (number.length > 17 || number.length < 12) {
        noformat = false;
        this.signUpErrors.format = "Enter phone number in correct format.";
      }

      if (
        this.phone &&
        this.nickName &&
        this.termsConditions === "yes" &&
        noformat
      ) {
        this.signUpLoading = true;
        let postData = {
          nickName: this.nickName,
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
            this.signUpLoading = false;
            this.gotSignUpResponse = true;
            this.response = res;
            if (res.ResponseCode == 200) {
              this.showSubmit = false;
            }
          })
          .catch((err) => {
            this.signUpLoading = false;
            this.response = res;
          });
        return true;
      }
      if (!this.nickName) {
        this.signUpErrors.nickName = "Nick Name required.";
      }

      if (!this.phone) {
        this.signUpErrors.phone = "Phone required.";
      }

      if (this.termsConditions === "no") {
        this.signUpErrors.tc = "Accept terms and conditions.";
      }

      e.preventDefault();
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style>

/* vue-tel-input dropdown  */
.vti__dropdown {
  background-color: #f3f3f3;
}
.vti__dropdown-item strong{
  color: black;
}

.vti__dropdown-item span{
  color: black;
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
.biometric-content p a:hover,
.biometric-content p a {
  color: #ae52c4;
}
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

.sign-up-frame {
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
    background-image: url("../assets/images/bg-try.png");
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
