<template>
  <div class="container">
    <section class="login">
      <h1>MASUK</h1>
      <div class="icon-list">
        <i class="fab fa-facebook" style="color: #3B5998;"></i>
        <i class="fab fa-google" style="color: #ea4335;"></i>
        <h6>Atau masuk menggunakan email</h6>
      </div>
      <form class="ui form">
        <div class="field">
          <label>Username atau alamat email</label>
          <input type="text" name="first-name" placeholder="contoh: janeDoe">
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" name="first-name" placeholder="Password">
        </div>
        <div class="field">
          <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden">
          <label>Remember me</label>
          </div>
        </div>
         <div class="field">
          <label>Forgot your password?</label>
        </div>
        <div class="button">
          <ButtonResta
            background="yellow"
            label="MASUK"
            size="14"
            />
        </div>
        <span class="toLogin">Jika Anda sudah memiliki Akun, anda dapat masuk di sini.</span>
      </form>
    </section>
  </div>
</template>

<script>
import ButtonResta from '@/components/smallComponents/button'
export default {
  name: 'Login',
  components: {
    ButtonResta
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 400px;
  display: inline-block;
  text-align: left;
  label {
    font-weight: normal !important;
  }
}
.icon-list {
  i {
    font-size: 49px;
    padding: 0 8px;
  }
  h6 {
    font-size: 12px;
    color:#A3A3A3;
    margin: 15px 0;
    font-weight: normal;
  }
}
.button {
  margin-bottom: 15px;
  button {
    width: 100%;
  }
}
.toLogin {
  font-size: 12px;
  color: #A3A3A3;
}
@media screen and (max-width: 480px) {
  .login {
    width: 100%;
  }
}
</style>
