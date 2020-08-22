<template>
  <div>
    <section class="landing-section">
      <div class="container">
        <div class="wrapper-question">
          <div>
            <h2>PEMINJAM</h2>
            <p class="fz-16">Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself. Like buying a new car before you actually got that new job. Well, when setting and obtaining your goals, you need to “Count your chicken before they hatch” in your mind. What I mean by this is you have to start seeing yours.</p>
            <buttonResta
              background="yellow"
              label="DAFTAR SEKARANG"
              size="14"
              @click="nextPage"
            />
          </div>
        </div>
        <div class="wrapper-question">
          <div class="icon-landing">
            <img :src="NameCard">
          </div>
        </div>
      </div>
    </section>
    <section class="product-component">
      <ListProduct />
    </section>
    <section class="question">
      <div class="container">
        <h1>Pertanyaan yang sering ditanyakan</h1>
        <ul class="list-question">
          <li>Siapakah yang memberikan saya cicilan?</li>
          <li>Kapan saya akan menerima cicilan dari pembeli?</li>
          <li>Bagaimana restafund dapat menguntungkan saya?</li>
          <li>Bagaimana restafund mengatur resiko?</li>
          <li>Bagaimana cara agar saya dapat mengirim dana ke restafund?</li>
          <li>Kapan saya dapat menerima pembayaran dari pinjaman?</li>
          <li>Apakah saya boleh memberikan pinjaman kepada lebih dari satu pembeli?</li>
          <li>Apabila saya ingin membeli properti untuk keperluan pribadi, bisakah saya mendapatkan harga khusus dari developer rekanan RESTAFUND?</li>
        </ul>
      </div>
    </section>
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
import ListProduct from '@/pages/listProduct'
export default {
  components: {
    buttonResta, ListProduct
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
@import '@/styles/peminjam.scss';
.landing-section {
  margin: 0;
  background-color:#FFF4CE;
//   background-image: url('../../assets/p4.jpg');
  padding: 60px 0;
  height: 600px;
  .container {
    margin-top: 80px;
    overflow: auto;
  }
}
.wrapper-question {
  display: block;
  width: 50%;
  float: left;
  text-align: left;
  height: 300px;
  position: relative;
//   background-color: #F7F8F9;
  border-radius: 5px;
  padding: 20px;
  .icon-landing {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 100px;
  }
  h2 {
    margin: 20px 0;
  }
  hr {
    margin: 15px 0;
  }
}
.benefit-section {
  margin-top: 20px;
}
.question {
  .list-question {
    text-align: left;
    border: solid 1px #111111;
    border-radius: 5px;
    li {
      padding: 15px 0;
      border-bottom: solid 1px #111;
      cursor: pointer;
      &:hover {
        font-weight: bold;
      }
      // &::before {
      //   content: '\2023';
      //   size: 12px;
      // }
    }
  }
}
</style>
