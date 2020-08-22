<template>
  <div>
    <section class="landing-section">
      <div class="container">
        <div class="wrapper-question">
          <div>
            <h3>Nikmati penawaran terbaik dari kami</h3>
            <hr />
            <p>Jawab pertanyaan dari kami untuk mendakapatkan data data yang kami butuhkan dan dapatkan penawaran terbaik</p>
            <buttonResta
              background="yellow"
              label="CEK AJA DISINI"
              size="14"
              @click="nextPage"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="benefit-section">
      <div
        v-for="(list, index) in benefit"
        :key="index"
        class="list-benefit"
      >
        <div class="heading">
          <i :class="list.icon" aria-hidden="true" />
          <div class="m-a-sm">
            <span>{{ list.name }}</span>
          </div>
        </div>
        <p>{{ list.description }}</p>
      </div>
    </section>
    <div class="container">
      <section class="document">
        <h2>DAFTAR KEBUTUHAN DOKUMEN</h2>
        <div class="icon-list">
          <div v-for="(list, i) in document" :key="i" class="wrapper-icon">
            <div class="img-icon">
              <img :src="list.img">
            </div>
            <span>{{ list.content }}</span>
          </div>
        </div>
        <CardNotif label="Catatan: Terdapat Refund Guarantee dari pihak developer apabila pembeli default/gagal bayar." />
      </section>

      <section class="compare">
        <div class="head-cont">
          <p class="color-blue fz-36">
            Perbandingan Tingkat Pengembalian Per Tahun
          </p>
        </div>
        <div class="perbadingan">
          <div class="chart">
            <img :src="Chart">
          </div>
        </div>
      </section>

      <section class="news-blog">
        <span class="color-blue fz-36" style="margin-bottom: 30px;">Berita Terbaru</span>
        <div class="blog-list">
          <div class="info">
            Business
          </div>
          <div class="content">
            Sebelum Ikut Investasi di Lokasi Ibu Kota Baru, Perhatikan Beberapa Hal Ini!
            <span>9 September 2019</span>
          </div>
          <div class="img-blog">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="aaa">
          </div>
        </div>
        <div class="blog-list">
          <div class="img-blog hidden-xs">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="test">
          </div>
          <div class="info" style="background-color:#FFC80A;">
            GROWTH
          </div>
          <div class="content">
            Ibu Kota Pindah, Investasi Properti Bakal Meroket
            <span>10 September 2019</span>
          </div>
          <div class="img-blog hidden-md">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="test">
          </div>
        </div>
        <div class="blog-list">
          <div class="info" style="background-color: #28458F;">
            INVEST
          </div>
          <div class="content">
            Mustika Land Bangun Rumah Rp 200 Jutaan di Cikarang
            <span>9 September 2019</span>
          </div>
          <div class="img-blog">
            <img src="https://picsum.photos/seed/picsum/200/300" alt="tesss">
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Chart from '@/assets/charts.svg'
import groupInfo from '@/assets/groupShare.svg'
import buttonResta from '@/components/smallComponents/button'
import bigCircle from '@/assets/oval.svg'
import fundImg from '@/assets/fund.svg'
import purpleImg from '@/assets/Mask.svg'
import defaultImg from '@/assets/pretty-home-min.jpg'
import KTP from '@/assets/detail2.svg'
import NPWP from '@/assets/detail1.svg'
import NameCard from '@/assets/detail3.svg'
import Bank from '@/assets/detail4.svg'
import Document from '@/assets/detail5.svg'
import Report from '@/assets/detail6.svg'
import SPK from '@/assets/mail.svg'
export default {
  components: {
    buttonResta
  },
  head () {
    return {
      title: 'Restafund',
      meta: [
        {
          hid: 'dio ganteng nih',
          name: 'description dio ganss',
          content: 'Best nih dio'
        }
      ]
    }
  },
  layout: 'landingPage',
  data () {
    return {
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
      ],
      benefit: [
        {
          icon: 'fa fa-search',
          name: 'pantau',
          description: 'Investor dapat mengunjungi lokasi proyek kapanpun dan memantau kondisi proyek secara langsung.'
        },
        {
          icon: 'fas fa-shield-alt',
          name: 'AMAN',
          description: 'Properti yang dijaminkan ataupun dijual lagi adalah bersertifikat dan telah dicek oleh BPN dan KRK nya.'
        },
        {
          icon: 'far fa-gem',
          name: 'UNTUNG',
          description: 'Tingkat imbal hasil menarik yang saling menguntungkan antara Pendana dan Peminjam.'
        },
        {
          icon: 'fa fa-industry',
          name: 'RESIKO KECIL',
          description: 'Market end-user, fast moving project, fokus di area matang, dianalisa oleh tim dengan pengalaman 19 tahun.'
        }
      ],
      groupInfo,
      bigCircle,
      fundImg,
      Chart,
      purpleImg,
      project: [
        {
          img: defaultImg,
          pendana: '7',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 800.000.000'
        },
        {
          img: defaultImg,
          pendana: '12',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 900.000.000'
        },
        {
          img: defaultImg,
          pendana: '17',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 1.900.000.000'
        },
        {
          img: defaultImg,
          pendana: '34',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 12.900.000.000'
        }
      ],
      windowTop: ''
    }
  },
  methods: {
    nextPage (link) {
      this.$router.push({
        path: '/landingpage/randomQuestion/'
      })
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/styles/home.scss';
@import '@/styles/productListDetail';
.landing-section {
  margin: 0;
  // background-color: gray;
  background-image: url('../../assets/p4.jpg');
  padding: 60px 0;
  .container {
    overflow: auto;
  }
}
.wrapper-question {
  display: block;
  width: 350px;
  float: left;
  height: 300px;
  background-color: #F7F8F9;
  border-radius: 5px;
  padding: 20px;
  hr {
    margin: 15px 0;
  }
}
.benefit-section {
  margin-top: 20px;
}
</style>
