<template>
  <div class="login-form">
    <form @submit="login" class="login-card">
      <img alt="" src="@/assets/image/logo_machbaseNeo_general_a.png" />
      <div class="input-form">
        <input
          v-model="sLoginName"
          @keydown.enter="login"
          class="input-id input normal-text"
          placeholder="User ID"
          type="text"
        />
        <input
          class="input-password input normal-text"
          placeholder="Password"
          type="password"
        />
      </div>
      <div class="input-checkboxwrap">
        <input class="checkbox" type="checkbox" />
        <p class="input-checkbox-p">Remember User ID</p>
      </div>
      <div class="button-form">
        <router-link to="/home"
          ><button class="login-button" type="submit">
            SIGN IN
          </button></router-link
        >
      </div>
    </form>
    <div class="sns">
      <a href="#"><Home></Home></a>
      <a href="#"><Facebook></Facebook></a>
      <a href="#"><Github></Github></a>
      <a href="#"><Linkedin></Linkedin></a>
      <a href="#"><Slideshare></Slideshare></a>
      <a href="#"><Twitter></Twitter></a>
    </div>
  </div>
</template>
<script setup>
import Home from "@/components/svg/Home.vue";
import Facebook from "@/components/svg/Facebook.vue";
import Github from "@/components/svg/Github.vue";
import Linkedin from "@/components/svg/Linkedin.vue";
import Slideshare from "@/components/svg/Slideshare.vue";
import Twitter from "@/components/svg/Twitter.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";

.login-form {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(@/assets/image/img_login_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
}
.input-form {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  background-color: #fff;

  input {
    padding-left: 60px;
    width: 266px !important;
    height: 30px;
    margin-bottom: 12px;
    text-indent: 32px;
    background-color: #fcfcfc;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  input::placeholder {
    color: #a7a7a7;
    font-family: Pretendard;
    font-size: 14px;
    text-decoration: none;
  }
  .input-id {
    background-image: url(@/assets/image/login_id.png);
    background-repeat: no-repeat;
    background-position: 8px 6px;
  }
  .input-password {
    background-image: url(@/assets/image/login_password.png);
    background-repeat: no-repeat;
    background-position: 8px 6px;
  }
  margin-bottom: -10%;
}
.login-card {
  height: 380px;
  width: 420px;
  background-color: #fff;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  @include theme() {
    background-color: theme-get("bg-color-button") !important;
    border-color: theme-get("border-color") !important;
  }
  img {
    margin: 0 auto;
    margin-top: 60px;
  }
  .input-checkboxwrap {
    margin-top: 12px;
    margin-left: 70px;
    display: flex;
    .checkbox {
      margin-right: 4px;
      width: 16px;
      height: 16px;
      border: 0;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.18);
    }
    .input-checkbox-p {
      margin-top: 4px;
      margin-left: 2px;
      font-family: Pretendard;
      font-size: 12px;
      color: #a7a7a7;
    }
  }
  .button-form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 52px;
    .login-button {
      @include theme() {
        border: 1px solid theme-get("border-color-input") !important;
        color: theme-get("border-color-input") !important;
      }
      border-radius: 8px;
      width: 280px;
      height: 40px;
      padding: 4px 6px;
      border: 0;
      color: #fff;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      background-image: linear-gradient(
        97deg,
        #3da8d9 0%,
        #1a3ee2 52%,
        #3da8d9 101%
      );
    }
    .login-button:hover {
      @include theme() {
        background-color: theme-get("border-color") !important;
        // color: theme-get('login-btn') !important;
        border-color: theme-get("login-btn") !important;
      }
    }
    .no-input {
      @include theme() {
        border: 1px solid theme-get("border-color-input") !important;
        background-color: theme-get("border-color") !important;
        color: theme-get("login-btn") !important;
        border-color: theme-get("login-btn") !important;
      }
      border-radius: 4px;
      width: 80%;
      padding: 4px 6px;
    }
  }

  .input {
    @include theme() {
      border: 1px solid theme-get("border-color-input");
    }
    border-radius: 4px;
    padding: 4px 6px;
    width: 100%;
  }
  .normal-text {
    @include theme() {
      color: theme-get("text-color") !important;
    }
    font-style: italic;
  }
}
.sns {
  padding: 32px 24px 0 24px;
  width: 420px;
  display: flex;
  justify-content: space-between;
  svg {
    fill: rgba(255, 255, 255, 0.5);
    &:hover {
      fill: rgba(255, 255, 255, 1);
    }
  }
}
</style>
