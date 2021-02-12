<template>
  <div class="topbar">
    <header>
      <b-container fluid>
        <b-navbar toggleable="lg">
          <b-navbar-brand href="#">
            <img
              src="../../assets/images/Bitmap.png"
              class="img-fluid normal-logo "
              alt="Logo"
          /></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-navbar-nav>
                <b-nav-item href="#">
                  <router-link to="/">Home</router-link>
                </b-nav-item>
                <b-nav-item href="#">
                  <router-link to="/">How it works</router-link>
                </b-nav-item>
                <b-nav-item-dropdown text="Knowledge Base" right>
                  <b-dropdown-item href="#">item-1</b-dropdown-item>
                  <b-dropdown-item href="#">item-2</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#">
                  <router-link to="/">Tutorials</router-link>
                </b-nav-item>
                <b-nav-item href="#">
                  <router-link to="/">About</router-link>
                </b-nav-item>
                <b-nav-item href="#">
                  <router-link to="/">FAQs</router-link>
                </b-nav-item>
              </b-navbar-nav>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <ul class="lang-menu">
          <li class="init">
            <a href="#">
              <img
                src="../../assets/images/globe-icon.svg"
                class="img-fluid"
                alt=""
            /></a>
          </li>
        </ul>
        <ul class="search-bar">
          <li>
            <img
              src="../../assets/images/search-icon.svg"
              class="img-fluid"
              alt=""
            />
          </li>
        </ul>
      </b-container>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.dropdown-down-logo {
  margin-left: -30px;
}
.navbar {
  background-color: transparent !important;
  padding: 20px 0;
  letter-spacing: 1px;
  background: 0 0;
  padding-right: 80px;
}
.topbar .navbar-light .navbar-nav .nav-link a,
.topbar .navbar-light .navbar-nav .nav-item.dropdown .nav-link a,
.navbar-light .navbar-nav .nav-item.dropdown .nav-link.dropdown-toggle {
  color: #fff !important;
  font-size: 14px;
  padding: 10px 20px;
  line-height: normal;
  font-weight: 400;
}
.navbar-brand .normal-logo {
  width: 66px;
  height: 64px;
}
.navbar-light .navbar-nav li a {
  color: #fff !important;
  font-size: 14px;
  font-weight: 400;
}
.topbar .navbar-nav .show > .nav-link {
  color: #fdfdfe !important;
}
.topbar .navbar-light .navbar-nav .nav-link:focus,
.topbar .navbar-light .navbar-nav .nav-link:hover {
  color: white !important;
}
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link {
  color: white !important;
}
.lang-menu {
  height: 27px;
  padding-right: 42px;
  position: absolute;
  padding-left: 0;
  right: 35px;
  top: 45px;
}
ul.search-bar {
  padding: 0;
  padding-left: 0;
  position: absolute;
  right: 20px;
  top: 45px;
}
a:hover {
  color: #ffffff;
  text-decoration: none;
}
a {
  font-weight: 400;
  font-size: 16px;
  color: #fdfdfe;
}
.navbar .dropdown-toggle:after {
  content: "";
  background-image: url("../../assets/images/arrow-white.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  font-size: 18px;
     position: absolute;
    border: none;
    bottom: 14px;
    right: 0;
    width: 10px;
    height: 10px;
    line-height: 10px;
}
.navbar-light .navbar-nav .nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-light .navbar-nav li a {
  padding: 10px 20px;
}
.navbar-light .navbar-nav .dropdown-item:hover,
.navbar-light .navbar-nav .dropdown-item.active {
  color: #6b3076 !important;
  background: #fff;
}
.navbar-expand-lg .navbar-nav .dropdown-menu {
  background: #95236c;
  padding: 0;
  margin: 0;
  left: 0;
}
.nav-link:focus,
.nav-link:hover {
  border: none;
  outline: none;
}
.navbar-light .navbar-toggler {
    color: transparent;
    border-color: transparent;
}
.navbar-light .navbar-toggler-icon {
  background-image: url("../../assets/images/menu.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
@media only screen and (min-width: 1025px) {
  .navbar {
    padding-left: 40px;
    margin-right: 40px;
  }
  .lang-menu {
    right: 60px;
  }
  ul.search-bar {
    right: 55px;
  }
}
@media only screen and (max-width: 993px) {
  .navbar-light .navbar-nav .nav-item.dropdown .nav-link.dropdown-toggle{
    padding-left: 20px;
  }
  .navbar-light .navbar-nav li a{
        padding: 10px 0px;
  }
  .navbar-light .navbar-nav .nav-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .dropdown-down-logo {
    margin-left: 0;
    width: 20px;
    height: 20px;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    
    position: absolute;
    padding-left: 19px;
}
  .navbar-nav {
    background: #95236c;
   
  }
  .navbar {
    padding-right: 0;
  }
  .lang-menu {
    right: 89px;
  }
  ul.search-bar {
    right: 85px;
  }
}
</style>
