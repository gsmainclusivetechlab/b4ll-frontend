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
              <form class="form-element-frame">
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="Use key words such as Documents, Login…"
                  name="search"
                />
                <button type="submit">Search</button>
                <!-- <button @click="filteredArticles" type="submit">
                  Search
                </button> -->
              </form>
            </div>
            <div class="right-text-article">
              <div
                v-for="(article, index) in filteredArticles"
                :key="article.tittle"
                v-if="index < limitBy"
              >
                <div class="article-blockframe">
                  <h4>{{ article.tittle }}</h4>
                  <p>
                    {{ article.content }}
                  </p>
                </div>
                <hr />
              </div>
              <div
                class="btn-outline"
                v-if="articles.length == filteredArticles.length"
              >
                <a
                  class="btn-line"
                  @click="toggleView(articles.length)"
                  v-if="limitBy === 4"
                >
                  View more
                </a>
              </div>
            </div>
            <!-- <div class="right-text-article" v-if="showSearch == true">
              <div
                v-for="(article, index) in filteredArticles"
                :key="article.tittle"
                v-if="index < limitBy"
              >
                <div class="article-blockframe">
                  <h4>{{ article.tittle }}</h4>
                  <p>
                    {{ article.content }}
                  </p>
                </div>
                <hr />
              </div>
            </div>
            <div class="right-text-article" v-if="showSearch == false">
              <div
                v-for="(article, index) in articles"
                :key="article.tittle"
                v-if="index < limitBy"
              >
                <div class="article-blockframe">
                  <h4>{{ article.tittle }}</h4>
                  <p>
                    {{ article.content }}
                  </p>
                </div>
                <hr />
              </div>
            </div> -->
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
    searchQuery: "",
    // showSearch: false,
    defaultLimit: 4,
    limitBy: 4,
    props: {
      tittle: "FREQUENTLY ASKED QUESTIONS",
      content: `Protect yourself from unauthorized activity by using your\n biometric as your authentication`,
      breadCrumb: {
        tittle: "FAQs",
        link: "/faq",
      },
    },
    articles: [
      {
        tittle: "How do I login to the app?",
        content:
          "This document outlines the allocation principles applicable to\n the International Mobile Equipment Identity (IMEI) numbers.",
      },
      {
        tittle: "How can I increase my authentication security?",
        content:
          "This document provides recommendations on a framework for\n manufacturers and MNO's (mobile network operators) so they can\n technically configure Open Market.",
      },
      {
        tittle: "Can I delete my account and biometric data?",
        content:
          " The NFC Test Book stream is part of GSMA NFC activities. The\n participating GSMA TSG members have developed a set of test\n cases to be used for testing primarily the UICC based NFC\n functionality within a Mobile Device.",
      },
      {
        tittle: "How do I suggest new use cases?",
        content:
          "Network slicing is a key feature of 5G networks as defined by\n 3GPP and enables to build dedicated logical networks on\n shared infrastructure.",
      },
      {
        tittle:
          " IR.67 DNS and ENUM Guidelines for Service Providers and GRX\n and IPX Providers v17.0",
        content:
          "IR.67 provides guidelines and technical information for those\n who need to set up and/or maintain DNS servers for inter\n Service Provider services.",
      },
      {
        tittle: "TS.30 IMEI Database Application Forms",
        content:
          "TS.30 provides information which will help manufacturers with\n the completion and submission of the different application\n forms used within the GSMA IMEI database is defined and\n described in detail.",
      },
      {
        tittle: "TS.11 Device Field and Lab Test Guidelines",
        content:
          "TS.11 contains a set of guidelines for the tests that should\n be performed in the course of Field Test and Lab Tests carried\n out on Terminal Devices..",
      },
      {
        tittle: "SG.20 Voicemail Security Guidelines",
        content:
          " This PRD describes the security risks posed by voicemail\n services, how they can be mitigated with robust technical\n configurations and appropriate policies.",
      },
    ],
    filteredArticlesL: [],
  }),
  methods: {
    toggleView(filtersLength) {
      this.limitBy = filtersLength;
    },
    // searchArticles() {
    //   const search = this.searchQuery.toLowerCase().trim();

    //   // if (!search) return this.articles;
    //   this.showSearch = true;
    //   this.filteredArticlesL = this.articles.filter(
    //     (item) => item.tittle.toLowerCase().indexOf(search) > -1
    //   );
    // },
  },

  computed: {
    filteredArticles() {
      const search = this.searchQuery.toLowerCase().trim();

      if (!search) return this.articles;

      return this.articles.filter(
        (item) => item.tittle.toLowerCase().indexOf(search) > -1
      );
    },
  },
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
  font-size: 16px;
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
  font-size: 16px;
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
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  width: auto;
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
