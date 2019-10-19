<template>
  <div class="container">
    <section class="product-detail">
      <div class="content-detail">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <buttonResta
          background="yellow"
          :label=button
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
          <li @click="nextPage('fun-develop')" :class="this.$route.params.slug === 'fun-develop' ? 'active' : '' ">FUN DEVELOP</li>
          <li @click="nextPage('fun-gadai')"  :class="this.$route.params.slug === 'fun-gadai' ? 'active' : '' ">FUN GADAI</li>
          <li @click="nextPage('fun-flip')" :class="this.$route.params.slug === 'fun-flip' ? 'active' : '' ">FUN FLIP</li>
          <li @click="nextPage('fun-income')"  :class="this.$route.params.slug === 'fun-income' ? 'active' : '' ">FUN INCOME</li>
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
  asyncData ({ params, env, error }) {
    const user = env.users.find(user => String(user.slug) === params.slug)
    if (!user) {
      return error({ message: 'User not found', statusCode: 404 })
    }
    return user
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
  },
  mounted () {
    console.log(this.$route)
  },
  methods: {
    nextPage (link) {
      this.$router.push({
        path: '/listProduct/' + link
      })
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
