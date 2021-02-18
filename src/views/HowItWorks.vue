<template>
  <div class="home">
    <AppHeader v-bind="props" />
    <div class="digital-wrapper feature-wrap">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="feature-content text-center">
              <h2>Our Features</h2>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing <br />
                industries for previewing layouts and visual mockups.
              </p>
            </div>
            <div class="three-col-feature-frame">
              <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card-wrap">
                    <img
                      src="../assets/images/our-feature-icon-1.svg"
                      class="img-fluid"
                      alt=""
                    />
                    <h5>Data safety with supplier</h5>
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries.
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card-wrap">
                    <img
                      src="../assets/images/our-feature-icon-2.svg"
                      class="img-fluid"
                      alt=""
                    />
                    <h5>Data safety with supplier</h5>
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries.
                    </p>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <div class="card-wrap">
                    <img
                      src="../assets/images/our-feature-icon-3.svg"
                      class="img-fluid"
                      alt=""
                    />
                    <h5>Data safety with supplier</h5>
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="two-col-biometric-wrap text-white managing-content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <h2>
              The App manage everything <br />
              you need whatever
            </h2>
            <div class="managing-box">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-2.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Account balance</h5>
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-7.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Make a transfer</h5>
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-1.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Pay bill</h5>
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-4.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Bank transfer</h5>
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-5.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Internet Bills</h5>
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
                  <div class="twoline-managing-frame">
                    <div class="img-manage">
                      <img
                        src="../assets/images/feature-icon-6.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="content-manage-frame">
                      <h5>Electricity Bills</h5>
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="right-manage-img">
              <img
                src="../assets/images/mobile-screens-2.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tutorial-section text-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Watch a Quick Tutorial</h2>
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing <br />
              industries for previewing layouts and visual mockups.
            </p>
            <img src="../assets/images/button.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
export default {
  name: "HowItWorks",
  components: { AppHeader },
  data: () => ({
    props: {
      tittle: "SECURE YOUR TRANSACTIONS",
      content: `Protect yourself from unauthorized activity by using your\n biometric as your authentication`,
      breadCrumb: {
        tittle: "How it works",
        link: "/howitworks",
      },
    },
  }),
};
</script>

<style>
.feature-wrap .three-col-feature-frame {
  padding-top: 45px;
  padding-bottom: 97px;
}
.card-wrap {
  background-color: #ffffff;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
  min-height: 249px;
  border-radius: 10px;
  padding-top: 35px;
  padding-left: 25px;
  padding-bottom: 28px;
  padding-right: 25px;
}
.card-wrap img {
  padding-bottom: 35px;
}
.managing-content {
  padding-top: 64px;
  padding-bottom: 94px;
}
.managing-content h2 {
  margin-bottom: 40px;
}
.twoline-managing-frame {
  display: flex;
  justify-content: flex-start;
}
.twoline-managing-frame .img-manage {
  padding-right: 21px;
}
.twoline-managing-frame .img-manage img {
  max-width: 41px;
}
.tutorial-section {
  position: relative;
  padding-top: 71px;
  padding-bottom: 73px;
}
.tutorial-section p {
  padding-bottom: 35px;
}
.tutorial-section::before {
  content: "";
  position: absolute;
  left: 0;
  background-image: url(../assets/images/bio-left.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  top: 0;
  bottom: 0;
  width: 169px;
  left: 0;
}
.tutorial-section::after {
  content: "";
  position: absolute;
  right: 0;
  background-image: url(../assets/images/video-bg-1.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 400px;
  height: 290px;
  bottom: 0;
}
@media only screen and (max-width: 1024px) {
  .tutorial-section::after {
    width: 250px;
    height: 185px;
  }
}

@media only screen and (max-width: 993px) {
  .card-wrap {
    margin-bottom: 30px;
  }
  .right-manage-img {
    margin: auto;
    text-align: center;
  }
}
@media only screen and (max-width: 767px) {
  .tutorial-section::after {
    width: 150px;
    height: 111px;
  }
}
</style>
