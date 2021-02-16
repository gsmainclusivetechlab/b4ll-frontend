<template>
  <div class="inner-header">
    <NavBar />
    <div class="inner-header-wrap">
      <div class="inner-banner-wrapper">
        <div class="container">
          <div class=" row">
            <div class="col-12">
              <div class="inner-content-frame">
                <h3>{{ tittle }}</h3>
                <h4>
                  {{ content }}
                </h4>
              </div>
              <div class="pagination-content">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li>
                    <a href=":breadCrumb.link">{{ breadCrumb.tittle }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./layout/NavBar";
export default {
  name: "AppHeader",
  components: { NavBar },
  props: {
    tittle: String,
    content: String,
    breadCrumb: {
      tittle: String,
      link: String,
    },
  },
};
</script>

<style>
.inner-header .topbar header {
  padding: 0;
  position: absolute;
  z-index: 999;
  width: 100%;
  -webkit-transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
  min-height: 100px;
  transition: all 0.5s ease-out;
  background: transparent;
}
.inner-header .inner-header-wrap {
  width: 100%;
  color: #fff;
  padding: 132px 0 29px;
  background-color: #aaa;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  position: relative;
  z-index: 0;
}
.inner-header .inner-header-wrap::before {
  content: "";
  background-image: url("../assets/images/banner-bg-gradient.png");
  background-position: top;
  position: absolute;
  top: 2px;
  left: 0;
  width: 421px;
  height: 360px;
  background-repeat: no-repeat;
}
.inner-header .inner-header-wrap {
  background-image: url("../assets/images/security.png");
  background-position: center;
  background-repeat: no-repeat;
  min-height: 374px;
  width: 100%;
  color: #fff;
}
.inner-banner-wrapper h3,
.inner-banner-wrapper h4 {
  color: #fff;
}
.inner-content-frame {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 40px;
}
.inner-header .inner-banner-wrapper {
  min-height: 260px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.pagination-content ul {
  padding-left: 0;
  display: block;
  margin-bottom: 0;
}
.pagination-content ul li,
.pagination-content ul li a {
  font-size: 13px;
}
.pagination-content ul li {
  display: inline-block;
  padding-right: 25px;
  position: relative;
  font-size: 13px;
}
.pagination-content ul li::after {
  content: "/";

  position: absolute;
  right: 9px;
  top: 0;
  bottom: 0;
}
.pagination-content ul li:last-child:after {
  content: " ";
  display: none;
}
.pagination-content ul li:last-child a {
  font-weight: bold;
}

@media only screen and (max-width: 993px) {
  .inner-header .topbar header {
    padding: 0;
    position: absolute;
    z-index: 999;
    width: 100%;
    -webkit-transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    min-height: 100px;
    transition: all 0.5s ease-out;
    background: transparent;
  }
  .inner-header .inner-header-wrap {
    width: 100%;
    color: #fff;
    padding: 132px 0 29px;
    background-color: #aaa;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;
    position: relative;
    z-index: 0;
  }
}
</style>
