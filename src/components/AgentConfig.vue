<template>
  <div class="sign-up-frame">
    <h4>Agent Payment Forms</h4>
    <form @submit.prevent="processForm" v-if="!generateQR">
      <!-- Operation type -->
      <div class="form-group">
        <label for="inputOperation">Operation</label>
        <b-form-select class="form-group" v-model="selectedOperation" :options="operationOptions" id="inputOperation"></b-form-select>
      </div>

      <!-- Token/Phone -->
      <div class="form-group">
        <label for="inputPhone">Customer Mobile Number</label>
            <vue-tel-input
            v-model="customerIdentifier"
            mode="international"
            validCharactersOnly
            ></vue-tel-input>
        <span class="error-msg" v-if="errors.inputPhone.length != 0"> {{ errors.inputPhone }}</span>
      </div>

      <div class="form-group" v-if="this.selectedOperation==='cash-to-cash'">
        <label for="inputRecipientPhone">Payment Recipient</label>
        <b-form-select class="form-group" v-model="selectedRecipient" :options="recipientOptions" id="inputRecipient"></b-form-select>
        <span class="error-msg" v-if="errors.inputRecipientPhone.length != 0"> {{ errors.inputRecipientPhone }}</span>
      </div>

      <!-- Amount -->
      <div class="form-group">
        <label for="inputAmount">Amount</label>
        <currency-input v-model="amount" :options="optionsCurrency" placeholder="Enter Amount" id="inputAmount" />
        <span class="error-msg" v-if="errors.inputAmount.length != 0"> {{ errors.inputAmount }}</span>
      </div>

      <a v-if="!loading && this.selectedOperation!='merchant-qr'" href="#" class="btn1">
        <input class="btn" type="submit" value="Send Request" />
      </a>
      <a v-if="!qrLoading && this.selectedOperation=='merchant-qr'" href="#" class="btn1">
        <input class="btn" @click.prevent="generateQrCode" value="Generate QR Code" />
      </a>
      <b-spinner style="" v-if="loading" label="Spinning"></b-spinner>

      <b-modal v-model="modalShow" hide-footer :title="modalTitle">
        <span>{{ modalMessage }}</span>
      </b-modal>
    </form>

    <b-col cols="12" md="12">
      <a v-if="generateQR" v-on:click="resetQr" class="btn1">
        <input class="btn" value="Back" />
      </a>
      <div v-if="generateQR">
        <qrcode-vue :value="url" :size="qrSize" level="H" />                  
      </div>
    </b-col>
  </div>
</template>

<script>
import CurrencyInput from './CurrencyInput';
import { VueTelInput } from "vue-tel-input";
import QrcodeVue from 'qrcode.vue';

export default {
  name: 'AgentConfig',
  components: { CurrencyInput, VueTelInput, QrcodeVue },
  props: {
    selectedSystem: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    selectedOperation: 'merchant-pay',
    operationOptions: [
      { value: 'merchant-pay', text: 'Merchant Pay' },
      { value: 'merchant-qr', text: 'Merchant Pay (QR Code)' },
      { value: 'cash-in', text: 'Cash-In' },
      { value: 'cash-out', text: 'Cash-Out' },
      { value: 'cash-to-cash', text: 'Cash-to-Cash' },
    ],
    selectedRecipient: null,
    recipientOptions: [
      'Carlos (+447123456789)',
      'Person (+336123456789)',
    ],
    customerIdentifier: '',
    recipientIdentifier: null,
    amount: null,
    merchantCode: null,
    generateQR: false,
    errors: {
      inputPhone: '',
      inputRecipientPhone: '',
      inputAmount: '',
    },
    modalShow: false,
    modalTitle: '',
    modalMessage: '',
    loading: false,
    qrLoading: false,
    qrSize: 300,

    optionsCurrency: {
      locale: 'en-US',
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
      valueRange: {
        min: 0,
        // max: 500,
      },
      precision: 2,
      hideCurrencySymbolOnFocus: true,
      hideGroupingSeparatorOnFocus: true,
      hideNegligibleDecimalDigitsOnFocus: true,
      autoDecimalDigits: false,
      autoSign: true,
      useGrouping: true,
      accountingSign: false,
    },
  }),
  methods: {
    async processForm(e) {
      try {
        var errorFlag = false;
        if (!this.customerIdentifier) {
          this.errors.inputPhone = 'Customer Mobile required.';
          errorFlag = true;
        }

        if (this.selectedOperation == 'cash-to-cash' && !this.recipientIdentifier) {
          this.errors.inputRecipientPhone = 'Recipient Number required.';
          errorFlag = true;
        }

        if (!this.amount) {
          this.errors.inputAmount = 'Amount required.';
          errorFlag = true;
        } else {
          if (this.amount > 500) {
            this.errors.inputAmount = `Amount can't be greater than $500`;
            errorFlag = true;
          }
        }

        if (!errorFlag && this.customerIdentifier && this.amount && this.selectedOperation) {
          this.errors = {
            inputPhone: '',
            inputAmount: '',
            inputMerchant: '',
          };

        const number = this.customerIdentifier.split(" ").join("");

          let postData = {
            id: number,
            recipient: this.recipientIdentifier,
            amount: this.amount,
            type: this.selectedOperation,
          };

          this.loading = true;
          let endpoint = null;

          switch (this.selectedOperation) {
            case 'merchant-pay':
              endpoint = 'webPaymentOrange'
              break;
            case 'cash-in':
            case 'cash-out':
              endpoint = 'webCashInOutOrange';
              break;
            case 'cash-to-cash':
              endpoint = 'webCashInOutOrange'
              break;
          }

          await this.axios.post('https://e0pfv0uv98.execute-api.eu-west-2.amazonaws.com/dev/en-GB/' + endpoint, postData, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });

          this.loading = false;
          this.modalTitle = 'Success';
          this.modalMessage = 'Operation was created successfully.';
          this.modalShow = true;

          this.customerIdentifier = null;
          this.amount = null;
          this.merchantCode = null;

          this.$root.$emit('showPhoneInterface');
        }
      } catch (err) {
        if (this.axios.isAxiosError(err) && err.response) {
          this.modalTitle = 'Error';
          this.modalMessage = err.response.data.error;
          this.modalShow = true;
          this.loading = false;
        }
      }

      e.preventDefault();
    },

    generateQrCode() {
      const amount = this.amount;
      const number = this.customerIdentifier.split(" ").join("");
      this.url = `https://e0pfv0uv98.execute-api.eu-west-2.amazonaws.com/dev/en-GB/webPaymentOrange?Caller=${encodeURIComponent(number)}&amount=${amount}`
      console.log(this.url);
      this.generateQR = true;

      if (!this.customerIdentifier) {
        this.errors.inputPhone = "Phone required.";
        errorFlag = true;
      }

      if (!this.amount) {
        this.errors.inputAmount = "Amount required.";
        errorFlag = true;
      }
    },

    resetQr() {
      this.generateQR = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
