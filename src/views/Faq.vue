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
                    What is B4LL?
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
                    If I decide to adopt B4LL </br>
                    solution in my market, do I </br>
                    need to use the same </br>
                    biometric suppliers?
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
                    What the purpose of the call centre?
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
                  <p>Is it possible to change the </br>
                  content in the call centre? </p>
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
                  <p>Can I add new verification passphrases?</p>
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
    <Footer />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import Footer from "../components/layout/Footer";
export default {
  name: "Faq",
  components: { AppHeader, Footer },
  data: () => ({
    searchQuery: "",
    // showSearch: false,
    defaultLimit: 4,
    limitBy: 4,
    props: {
      tittle: "FREQUENTLY ASKED QUESTIONS",
      //content: `Protect yourself from unauthorized activity by using your\n biometric as your authentication`,
      breadCrumb: {
        tittle: "FAQs",
        link: "/faq",
      },
    },
    articles: [
      {
        tittle: "1. What is B4LL?",
        content:
          "B4LL is an acronym for Biometrics for All – a project supported by the GSMA Inclusive Tech Lab (ITL). The project aims to showcase multimodal biometric verification solutions (voice, face, fingerprint etc.) to enable digital service providers to test them in a safe environment.",
      },
      {
        tittle: "2.	What are the biometric modalities available under B4LL?",
        content: "Currently B4LL provides a voice enabled identification solution. In the near future, we also aim to provide fingerprint and face recognition solutions.",
      },
      {
        tittle: "3.	Is the GSMA ITL providing biometric verification solutions through B4LL commercially?",
        content: "No, B4LL is a completely free facility. The solutions housed within B4LL are not commercial offerings from the GSMA ITL. If service providers like the general experience of the solutions housed within B4LL, they are free to adopt them commercially in their markets. The GSMA ITL would not be privy to any such commercial adoption of biometric solutions by service providers. ",
      },
      {
        tittle: "4.	Are the biometric solutions showcased within B4LL owned or endorsed by the GSMA?",
        content: "B4LL provides simulations of the types of biometric solutions service providers are likely to find in the market. We do not own these solutions and do not endorse specific vendors offering similar solutions in the market. Our aim is to provide a safe environment within which to test these solutions so that service providers can make informed decisions on whether / how to adopt them. ",
      },
      {
        tittle: "5.	Will B4LL or the vendors associated with it be able to see the personal data of individuals using it?",
        content: "No, B4LL is not able to see the personal details of individuals testing solutions housed in its showcase.",
      },
      {
        tittle: "6.	I want to showcase my biometric solution on B4LL. How can I do that?",
        content: "We are always happy to engage with new partners. If you think you have a biometric solution that may be suitable to be showcased through B4LL, please get in touch with us.",
      },
      {
        tittle: "7.	I want to test one of the biometric solutions showcased on B4LL. How can I do that?",
        content: "We would be delighted to help you test any of the biometric solutions showcased on B4LL. Furthermore, the GSMA ITL Lab has in depth expertise in the area of biometrics and can also help to customise the solutions showcased on B4LL to address specific use case relevant for your market. If you would like to get more information about B4LL and the use of biometric verification in your market, please get in touch with us.",
      },
      {
        tittle: "8.	I would like to commercially adopt one of the biometric solutions showcased on B4LL. How can I do that?",
        content: "As mentioned earlier, B4LL is not a commercial facility and does not provide biometric verification solutions for sale. If you like the experience provided by a particular biometric solution showcased on B4LL, feel free to contact us and ask for more information about it. We can connect you with the biometric suppliers presented in B4LL",
      },
      {
        tittle: "9.	If I decide to adopt B4LL solution in my market, do I need to use the same biometric suppliers?",
        content: "No, the biometric suppliers here are helping the ITL to provide the showcase. You are free to reach any supplier you wish for your project.",
      },
      {
        tittle: "10.	What the purpose of the call centre?",
        content: "The call centre shows how the voice can be successfully used to enrolment and identity verification to unlock access to any digital service.",
      },
      {
        tittle: "11.	Is it possible to change the content in the call centre? ",
        content: "Yes, new use cases can be created to approach different scenarios for voice authentication. Also, the entire call centre can be restructured to attend your business needs. If you are interested in a different showcase, please contact us to support you with new voice authentication experiences for call centres.",
      },
      {
        tittle: "12.	Can I add new verification passphrases?",
        content: "Yes, we already have some verification passphrases available, but for another project you can create new passphrases to be more convenient for your company or local needs. ",
      },
      {
        tittle: "13.	Is it possible to see the call centre working in a different languages or dialects?",
        content: "o	Sure! You can have the call centre working in any language or dialect, or even multiple languages.",
      },
      {
        tittle: "14.	How do I test/use the call centre?",
        content: "First, you need to access the page Try B4LL and enrol the call centre with a nick name and a phone number you will use to call. Then you can reach one of the call centres numbers available. To understand how to navigate among the use cases and the different flows to follow, you can check the session call centre/use cases in our documentation. If you still have any doubt, please contact us. We will be happy to hear from you.",
      },
      //{
      //  tittle: "",
      //  content: "",
      //},
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
  cursor: pointer;
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
