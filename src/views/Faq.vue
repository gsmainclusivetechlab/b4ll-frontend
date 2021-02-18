<template>
  <div class="home">
    <AppHeader v-bind="props" />
    <div class="article-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="left-article-content">
              <h5>Popular Articles</h5>
              <div
                class="article-frame-title d-flex justify-content-start align-items-start"
              >
                <div class="img-article">
                  <img
                    src="../assets/images/book.svg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="content-article">
                  <p>
                    What happens if I delete the <br />
                    Fingerprint?
                  </p>
                </div>
              </div>
              <div
                class="article-frame-title d-flex justify-content-start align-items-start"
              >
                <div class="img-article">
                  <img
                    src="../assets/images/book.svg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="content-article">
                  <p>
                    What is the difference between <br />
                    fingerprint and face recog?
                  </p>
                </div>
              </div>
              <div
                class="article-frame-title d-flex justify-content-start align-items-start"
              >
                <div class="img-article">
                  <img
                    src="../assets/images/book.svg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="content-article">
                  <p>
                    How are Leads, Accounts, Contac- ts, <br />
                    and Deals associated in a sales process?
                  </p>
                </div>
              </div>

              <div
                class="article-frame-title d-flex justify-content-start align-items-start"
              >
                <div class="img-article">
                  <img
                    src="../assets/images/book.svg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="content-article">
                  <p>How many emails can I send per day from Biometric?</p>
                </div>
              </div>
              <div
                class="article-frame-title d-flex justify-content-start align-items-start"
              >
                <div class="img-article">
                  <img
                    src="../assets/images/book.svg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="content-article">
                  <p>What is the difference between a Lead and Contact?</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12  col-md-9">
            <div class="search-content">
              <form class="form-element-frame" action="/action_page.php">
                <input
                  type="text"
                  placeholder="Use key words such as Documents, Login…"
                  name="search"
                />
                <button type="submit">Search</button>
              </form>
            </div>
            <div class="right-text-article">
              <div class="article-blockframe">
                <h4>How do I login to the app?</h4>
                <p>
                  This document outlines the allocation principles applicable to
                  the International Mobile Equipment Identity (IMEI) numbers.
                </p>
              </div>
              <hr />
              <div class="article-blockframe">
                <h4>How can I increase my authentication security?</h4>
                <p>
                  This document provides recommendations on a framework for
                  manufacturers and MNO's (mobile network operators) so they can
                  technically configure Open Market.
                </p>
              </div>
              <hr />
              <div class="article-blockframe">
                <h4>Can I delete my account and biometric data?</h4>
                <p>
                  The NFC Test Book stream is part of GSMA NFC activities. The
                  participating GSMA TSG members have developed a set of test
                  cases to be used for testing primarily the UICC based NFC
                  functionality within a Mobile Device.
                </p>
              </div>
              <hr />
              <div class="article-blockframe">
                <h4>How do I suggest new use cases?</h4>
                <p>
                  Network slicing is a key feature of 5G networks as defined by
                  3GPP and enables to build dedicated logical networks on a
                  shared infrastructure.
                </p>
              </div>
              <hr />
              <div class="article-blockframe">
                <h4>
                  IR.67 DNS and ENUM Guidelines for Service Providers and GRX
                  and IPX Providers v17.0
                </h4>
                <p>
                  IR.67 provides guidelines and technical information for those
                  who need to set up and/or maintain DNS servers for inter
                  Service Provider services.
                </p>
              </div>
              <hr />
              <div class="article-blockframe">
                <h4>TS.30 IMEI Database Application Forms</h4>
                <p>
                  TS.30 provides information which will help manufacturers with
                  the completion and submission of the different application
                  forms used within the GSMA IMEI database is defined and
                  described in detail.
                </p>
              </div>
              <hr />
              <div class="article-blockframe">
                <h4>TS.11 Device Field and Lab Test Guidelines</h4>
                <p>
                  TS.11 contains a set of guidelines for the tests that should
                  be performed in the course of Field Test and Lab Tests carried
                  out on Terminal Devices..
                </p>
              </div>
              <hr />
              <div class="article-blockframe">
                <h4>SG.20 Voicemail Security Guidelines</h4>
                <p>
                  This PRD describes the security risks posed by voicemail
                  services, how they can be mitigated with robust technical
                  configurations and appropriate policies.
                </p>
              </div>
              <div class="btn-outline">
                <a href="#" class="btn-line">View More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  name: "Faq",
  components: { AppHeader },
  data: () => ({
    props: {
      tittle: "FREQUENTLY ASKED QUESTIONS",
      content: `Protect yourself from unauthorized activity by using your\n biometric as your authentication`,
      breadCrumb: {
        tittle: "FAQs",
        link: "/faq",
      },
    },
  }),
};
</script>
<style>
.btn-outline {
  text-align: center;
  margin-top: 42px;
  margin-bottom: 75px;
}
.btn-line {
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #982a71;
  min-width: 172px;
  min-height: 49px;
  font-size: 14px;
  color: #95236c;
  text-align: center;
  padding-top: 17px;
  padding-bottom: 18px;
  padding-left: 44px;
  padding-right: 63px;
}
.btn-outline a:hover {
  color: #95236c;
  box-shadow: 0 16px 40px rgb(0 0 0 / 10%);
}
.article-wrapper {
  padding: 73px 0;
}
.article-wrapper .left-article-content .article-frame-title {
  margin-bottom: 20px;
}
.article-wrapper .left-article-content .img-article {
  margin-right: 12px;
}
.article-wrapper .left-article-content .img-article img {
  height: 20px;
  line-height: 20px;
  width: 20px;
  display: block;
  position: relative;
}
.article-wrapper .left-article-content h5 {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 15px;
}
.article-wrapper .left-article-content .content-article p {
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  color: #373737;
}

::placeholder {
  font-size: 12px;
  color: #9a9a9a;
}
.search-content {
  padding-bottom: 36px;
}
.search-content form.form-element-frame input:focus {
  outline: none;
  border: none;
}
.search-content form.form-element-frame input[type="text"] {
  padding: 10px;
  font-size: 17px;

  float: left;
  width: 80%;
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #c4c4c4;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  min-height: 45px;
}

.search-content form.form-element-frame button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #95236c;
  color: white;
  font-size: 14px;
  cursor: pointer;
  color: #fff;

  min-height: 46px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: none;
}

.search-content form.form-element-frame button:hover {
  background: #95236c;
}

.search-content form.form-element-frame::after {
  content: "";
  clear: both;
  display: table;
}
.right-text-article h5 {
  font-size: 15px;
  font-weight: bold;
  color: #373737;
}
.right-text-article hr {
  margin-bottom: 2rem;
  border-top: 1px solid #c4c4c4;
}
.right-text-article .article-blockframe h4 {
  font-size: 15px;
  font-weight: bold;
  color: #373737;
}
@media only screen and (max-width: 767px) {
  .search-content form.form-element-frame input[type="text"] {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    width: 100%;
    margin-bottom: 20px;
  }
  .search-content form {
    text-align: center;
  }
  .search-content form.form-element-frame button {
    margin: auto;
    float: none;
    text-align: center;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}
</style>
