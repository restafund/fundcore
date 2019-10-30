<template>
  <div class="container">
    <section class="login">
      <h1>DAFTAR</h1>
      <div class="icon-list">
        <i class="fab fa-facebook" style="color: #3B5998;"></i>
        <i class="fab fa-google" style="color: #ea4335;"></i>
        <h6>Atau daftar menggunakan email</h6>
      </div>
      <form class="ui form">
        <div class="field">
          <label>Username</label>
          <input type="text" name="first-name" placeholder="Username">
        </div>
        <div class="field">
          <label>Nama depan</label>
          <input type="text" name="last-name" placeholder="Nama depan">
        </div>
        <div class="field">
          <label>Nama belakang</label>
          <input type="text" name="first-name" placeholder="Nama belakan">
        </div>
        <div class="field">
          <label>Email</label>
          <input type="email" name="first-name" placeholder="Email">
        </div>
        <div class="field">
          <label>Nomor Handphone</label>
          <input type="number" name="first-name" placeholder="Nomor Handphone">
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" name="first-name" placeholder="Password">
        </div>
        <div class="field">
          <label>Ulangi Password</label>
          <input type="password" name="first-name" placeholder="Password">
        </div>
        <div class="button">
          <ButtonResta
            background="yellow"
            label="DAFTAR"
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
  name: 'Register',
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
</style>
