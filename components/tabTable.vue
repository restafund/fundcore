<template>
  <div class="wrapper-table">
    <section style="border:none;">
      <div class="left">
        <h2>Tenor</h2>
      </div>
      <div class="right">
        <div class="col-12">
          <p>3-6 bulan</p>
        </div>
      </div>
    </section>
    <section>
      <div class="left">
        <h2>Timeline</h2>
      </div>
      <div class="right">
        <div class="col-12">
          <p>
            1. Durasi dari pengajuan pinjaman hingga pinjaman dicairkan maksimal 3 minggu <br>
            2. Pencairan dana langsung dilakukan ke rekening PT yang mengajukan pinjaman <br>
            3. Pelunasan kepada RESTAFUND dilakukan 1x, yaitu pada akhir tenor pinjaman (berikut bunga)
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="left">
        <h2>Struktur Biaya</h2>
      </div>
      <div class="right">
        <div class="col-6">
          <h4>Deposit (Refundable)</h4>
          <p>Dibayarkan saat pengajuan pinjaman senilai 1% dari nilai pinjaman. Dikembalikan di akhir tenor setelah pelunasan</p>
        </div>
        <div class="col-6">
          <h4>Provisi</h4>
          <p>Provisi senilai 1% dari pengajuan pinjaman, dipotong langsung dari pencairan pinjaman.</p>
        </div>
        <div class="col-6">
          <h4>Pelunasan Pinjaman</h4>
          <p>Nominal pelunasan sesuai dengan pokok ditambah dengan bunga yang telah disepakati. Hasil penilaian credit scoring tidak mempengaruhi tingkat bunga yang dikenakan.</p>
        </div>
        <div class="col-6">
          <h4>Admin Fee</h4>
          <p>Sebesar Rp 500.000,- dibayarkan ketika melakukan pengajuan FUND DEVELOP</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'table component'
}
</script>

<style lang="scss" scoped>
.wrapper-table {
  padding: 30px;
  section {
    border-top: 1px solid #E1E1E1;
    text-align: left;
    margin: 0;
    display: inline-block;
    width: 100%;
    min-height: 60px;
    padding: 30px 0;
    .left {
      width: 30%;
      display: inline-block;
      float: left;
      h2 {
        font-weight: 300;
        color: #28458F;
      }
    }
    .right {
      width: 60%;
      display: inline-block;
      float: left;
      p {
        font-size: 16px;
        color: #424242;
      }
      .col-6 {
        width: 50%;
        display: inline-block;
        float: left;
        margin-bottom: 10px;
        min-height: 150px;
      }
    }
  }
}
</style>
