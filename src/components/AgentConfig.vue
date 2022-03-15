<template>
  <div class="sign-up-frame">
    <div class="language-flags">
        <gb-flag
        code="fr"
        size="medium"
        v-bind:class="{ selected: (this.$i18n.locale==='fr')}"
        @click.native="changeLocale('fr')"
        />
        <gb-flag
        code="gb"
        size="medium"
        v-bind:class="{ selected: (this.$i18n.locale==='en')}"
        @click.native="changeLocale('en')"
        />
    </div>
    <h4>{{ $t("form.agent-payment-form") }}</h4>
    <form @submit.prevent="processForm" v-if="!generateQR">
      <!-- Operation type -->
      <div class="form-group">
        <label for="inputOperation">{{ $t("form.operation") }}</label>
        <b-form-select class="form-group" v-model="selectedOperation" :options="operationOptions" id="inputOperation"></b-form-select>
      </div>

      <!-- Token/Phone -->
      <div class="form-group">
        <label for="inputPhone">{{ $t("form.customer-number") }}</label>
            <vue-tel-input
            v-model="customerIdentifier"
            mode="international"
            validCharactersOnly
            ></vue-tel-input>
        <span class="error-msg" v-if="errors.inputPhone.length != 0"> {{ errors.inputPhone }}</span>
      </div>

      <div class="form-group" v-if="this.selectedOperation==='p2p'">
        <label for="inputRecipientPhone">{{ $t("form.recipient") }}</label>
        <b-form-select class="form-group" v-model="selectedRecipient" :options="recipientOptions"></b-form-select>
        <span class="error-msg" v-if="errors.inputRecipientPhone.length != 0"> {{ errors.inputRecipientPhone }}</span>
      </div>

      <!-- Amount -->
      <div class="form-group">
        <label for="inputAmount">{{ $t("form.amount") }}</label>
        <currency-input v-model="amount" :options="optionsCurrency" :placeholder="$t('form.placeholder-amount')" id="inputAmount" />
        <span class="error-msg" v-if="errors.inputAmount.length != 0"> {{ errors.inputAmount }}</span>
      </div>

      <a v-if="!loading && this.selectedOperation!='merchant-qr'" href="#" class="btn1">
        <input class="btn" type="submit" :value="$t('form.submit')" />
      </a>
      <a v-if="!qrLoading && this.selectedOperation=='merchant-qr'" href="#" class="btn1">
        <input class="btn" @click.prevent="generateQrCode" :value="$t('form.generate-qr')" />
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
  data: vm => ({
    selectedOperation: 'merchant-pay',
    operationOptions: [
      { value: 'merchant-pay', text: vm.$t('form.merchant-pay') },
      { value: 'merchant-qr', text: vm.$t('form.merchant-qr') },
      { value: 'cash-in', text: vm.$t('form.cash-in') },
      { value: 'cash-out', text: vm.$t('form.cash-out') },
      { value: 'p2p', text: vm.$t('form.p2p') },
    ],
    selectedRecipient: null,
    recipientOptions: [
      'John Doe (+447123456789)',
      'Jane Doe (+336123456789)',
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

        if (this.selectedOperation == 'p2p' && !this.selectedRecipient) {
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
            inputRecipientPhone: '',
          };

        const number = this.customerIdentifier.split(" ").join("");
        if (this.selectedRecipient) {
          var regExp = /\(([^)]+)\)/;
          var matches = regExp.exec(this.selectedRecipient);
          this.recipientIdentifier = matches[1];
          console.log(this.recipientIdentifier);
        }

          const language = (this.$i18n.locale === 'en') && 'en-GB' || (this.$i18n.locale === 'fr') && 'fr-FR'

          let postData = {
            id: number,
            language: language,
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
            case 'p2p':
              endpoint = 'webCashInOutOrange'
              break;
          }

          await this.axios.post('https://kugxq13zgf.execute-api.eu-west-2.amazonaws.com/dev/en-GB/' + endpoint, postData, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }).then(async (response) => {
              console.log(response);
              console.log(response.data.ResponseCode)
              if (response.data.ResponseCode===200) {
                  this.modalTitle = 'SUCCESS';
                  this.modalMessage = 'Operation was created successfully.';
                  this.modalShow = true;
              }
              if (response.data.ResponseCode===623) {
                  this.modalTitle = 'ERROR';
                  this.modalMessage = 'This user is not enrolled into our IVR system. Please check the phone number and try again.';
                  this.modalShow = true;
              }
          });

          this.errors.inputPhone = '';
          this.errors.inputAmount = '';
          this.errors.inputRecipientPhone = '';
          this.loading = false;


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
      if (!this.customerIdentifier && !this.amount) {
        this.errors.inputPhone = "Phone required.";
        this.errors.inputAmount = "Amount required.";
        errorFlag = true;
      }

      if (!this.customerIdentifier) {
        this.errors.inputPhone = "Phone required.";
        errorFlag = true;
      }

      if (!this.amount) {
        this.errors.inputAmount = "Amount required.";
        errorFlag = true;
      }
         
      const language = (this.$i18n.locale === 'en') && 'en-GB' || (this.$i18n.locale === 'fr') && 'fr-FR'

      if (this.amount && this.customerIdentifier) {
        const amount = this.amount;
        const number = this.customerIdentifier.split(" ").join("");
        this.url = `https://kugxq13zgf.execute-api.eu-west-2.amazonaws.com/dev/${language}/webPaymentOrange?Caller=${encodeURIComponent(number)}&amount=${amount}`
        console.log(this.url);
        this.generateQR = true;
      }
    },

    resetQr() {
      this.errors.inputPhone = '';
      this.errors.inputAmount = '';
      this.generateQR = false;
      errorFlag = false;
    },

    changeLocale(lang) {
      this.$i18n.locale = lang;
    }
  },
};
</script>

<style lang="scss" scoped>

.gb-flag {
  padding: 5px;
  cursor: pointer;
}

.selected {
  border-style: solid;
  border-color: #95236c;
}

</style>
