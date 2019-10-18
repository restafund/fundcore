<template>
  <div class="container">
    <section class="product-detail">
      <div class="content-detail">
        <h1>FUN DEVELOP</h1>
        <p>Fund Development adalah pendanaan yang membantu para developer atau pemilik lahan atau pemilik proyek untuk membangun perumahan atau komersil yang sudah punya IMB dan siap dibangun.</p>
        <buttonResta
          background="yellow"
          label="AJUKAN FUN DEVELOP"
          size="14"
        />
      </div>
      <div class="img-content">
        <img :src="wallpaper">
      </div>
    </section>
    <section class="tab-wrapper">
      <div class="head-tab">
        <ul>
          <li class="active">FUN DEVELOP</li>
          <li>FUN GADAI</li>
          <li>FUN FLIP</li>
          <li>FUN INCOME</li>
        </ul>
      </div>
      <div class="body-tab">
        <div class="container">
          <TableComponent />
        </div>
      </div>
    </section>
    <section class="how-to-work">
      <h2>CARA KERJA</h2>
      <div class="wrapper-list" v-for="(list, i) in work" :key="i">
        <span>{{list.id}}</span>
        <p>{{list.content}}</p>
      </div>
    </section>
    <section class="document">
      <h2>DAFTAR KEBUTUHAN DOKUMEN</h2>
      <div class="icon-list">
        <div class="wrapper-icon" v-for="(list, i) in document" :key="i" >
          <div class="img-icon">
            <img :src="list.img"/>
          </div>
          <span>{{ list.content }}</span>
        </div>
      </div>
      <CardNotif label="Catatan: Terdapat Refund Guarantee dari pihak developer apabila pembeli default/gagal bayar."/>
    </section>
  </div>
</template>

<script>
import buttonResta from '../../components/smallComponents/button'
import wallpaper from '../../assets/wallpaper1.jpg'
import TableComponent from '@/components/tabTable'
import KTP from '@/assets/detail2.svg'
import NPWP from '@/assets/detail1.svg'
import NameCard from '@/assets/detail3.svg'
import Bank from '@/assets/detail4.svg'
import Document from '@/assets/detail5.svg'
import Report from '@/assets/detail6.svg'
import SPK from '@/assets/mail.svg'
import CardNotif from '@/components/smallComponents/card'

export default {
  name: 'productDetail',
  components: {
    buttonResta, TableComponent, CardNotif
  },
  data () {
    return {
      wallpaper,
      KTP,
      NPWP,
      NameCard,
      Bank,
      Document,
      Report,
      SPK,
      env: {
        users: [
          { id: 1, name: 'Kobe Bryant', number: 24 },
          { id: 2, name: 'Michael Jordan', number: 23 },
          { id: 3, name: 'Stephen Curry', number: 30 },
          { id: 4, name: 'Lebron James', number: 23 },
          { id: 5, name: 'Kevin Durant', number: 35 },
          { id: 6, name: 'Kyrie Irving', number: 2 }
        ]
      },
      work: [
        { id: '01', content: 'Semua proyek akan melalui tahap appraisal oleh KJPP rekanan untuk dicek Ketetapan Rencana Kota, studi kelayakan, presentasi kepada Komite Restafund dan kemampuan team sales proyek tersebut' },
        { id: '02', content: 'Proyek yang lolos seleksi akan di tampilkan untuk siap didanai' },
        { id: '03', content: 'Proyek yang lolos seleksi akan di tampilkan untuk siap didanai' },
        { id: '04', content: 'Proyek yang lolos seleksi akan di tampilkan untuk siap didanai' }
      ],
      document: [
        { img: KTP, content: 'Kartu Tanda Penduduk (KTP)' },
        { img: NPWP, content: 'Nomor Pokok Wajib Pajak (NPWP)' },
        { img: NameCard, content: 'Kartu Nama' },
        { img: Bank, content: 'Rekening bank 3 bulan terakhir' },
        { img: Document, content: 'Dokumen Legalitas Perusahaan' },
        { img: Report, content: 'Laporan Keuangan 2 tahun terakhir' },
        { img: SPK, content: 'Surat Perintah Kerja (SPK)' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: visible;
}
.content-detail {
  width: 35%;
  text-align: left;
  display: inline-block;
  float: left;
  padding-right: 30px;
  h1 {
    font-size: 36px;
    margin-bottom: 30px;
  }
  p {
    color: #444444;
    font-size: 18px;
    margin-bottom: 30px;
  }
}
.img-content {
  width: 65%;
  text-align: left;
  display: inline-block;
  float: left;
  img {
    width: 100%;
  }
}
.tab-wrapper {
  display: inline-block;
  width: 100%;
  .head-tab {
    ul {
      list-style: none;
      display: inline-block;
      width: 100%;
      padding: 0;
      li {
        display: inline-block;
        width: calc(100%/4);
        float: left;
        height: 60px;
        line-height: 60px;
        border-top: solid 2px #e1e1e1;
        font-weight: bold;
        cursor: pointer;
        &:hover {
          background-color: #f7f7f7;
        }
        &.active {
          color: #28458F;
          border-top: solid 4px #28458F;
        }
      }
    }
  }
  .body-tab {
    background-color: #F9F9F9;
    margin: 0 -15%;
  }
}
.how-to-work {
  text-align: left;
  .wrapper-list {
    position: relative;
    width: 25%;
    display: inline-block;
    float: left;
    padding: 15px;
    span {
      color: #EEEEEE;
      font-size: 128px;
      font-weight: bold;
    }
    p {
      font-size: 16px;
      color: #424242;
      margin-top: -80px;
    }
  }
}
.document {
  text-align: left;
  width: 100%;
  display: inline-block;
  h2 {
    margin-bottom: 30px;
  }
  .wrapper-icon {
    text-align: center;
    display: inline-block;
    width: 25%;
    margin: 30px 0;
    span {
      font-size: 15px;
      color: #111111;
    }
  }
}
</style>
