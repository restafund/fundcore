<template>
  <div>
    <sliderHome />
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
      <section class="group-info">
        <div class="box-info-border">
          <img :src="groupInfo" alt="group info">
          <div class="content">
            <span>Pendana</span>
            <p>Apakah keuntungan yang dapat diperoleh apabila menjadi pendana di RESTAFUND?</p>
            <buttonResta
              background="yellow"
              label="PELAJARI LEBIH LANJUT"
              size="14"
            />
          </div>
          <div class="content">
            <span>Peminjam</span>
            <p>Jika menjadi peminjam di RESTAFUND apakah manfaat yang dapat diperoleh?</p>
            <buttonResta
              background="blue"
              label="PELAJARI LEBIH LANJUT"
              size="14"
            />
          </div>
        </div>
        <div class="oval-home">
          <img :src="bigCircle" alt="circle">
        </div>
      </section>

      <section class="compare">
        <div class="head-cont">
          <p class="color-blue fz-36">
            Perbandingan Tingkat Pengembalian Per Tahun
          </p>
        </div>
        <div class="perbadingan">
          <div class="calculate">
            <span class="color-blue fz-36">1.32%</span>
            <p class="color-gray fz-18">
              Tanah, tabungan
            </p>
          </div>
          <div class="calculate">
            <span class="color-blue fz-36">2,79%</span>
            <p class="color-gray fz-18">
              Rumah, Ruko, Deposito USD
            </p>
          </div>
          <div class="calculate">
            <span class="color-blue fz-36">6,78%</span>
            <p class="color-gray fz-18">
              Apartemen, Deposito, Emas
            </p>
          </div>
          <div class="calculate">
            <span class="color-blue fz-36">12%</span>
            <p class="color-gray fz-18">
              Restafund
            </p>
          </div>
        </div>
      </section>

      <section class="long-fund">
        <div class="wrapper-fund">
          <div class="img-fund">
            <img :src="fundImg" alt="img">
          </div>
          <div class="content-fund">
            <span class="color-blue fz-36">Tabungan Berjangka</span>
            <p class="color-gray fz-16">
              Cooking Healthy For Radiant Health
            </p>
            <div class="wrapper-button">
              <buttonResta
                background="yellow"
                label="MULAI MENABUNG"
                size="14"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="core-project">
        <div style="position:relative;">
          <span class="color-blue fz-36">Proyek Berjalan</span>
          <div class="project">
            <div class="wrapper-overflow">
              <div v-for="(projectData, index) in project" :key="index" class="card-project">
                <div class="img">
                  <img :src="projectData.img" alt="house">
                </div>
                <div class="content">
                  <span class="color-brown fz-12">{{ projectData.pendana }} Pendana</span>
                  <p>
                    {{ projectData.description }}
                  </p>
                </div>
                <div class="total">
                  <span class="color-blue fz-16 f-bold">{{ projectData.price }}</span>
                  <div class="progress-bar-resta">
                    <span class="behind" />
                    <span class="core" />
                  </div>
                </div>
                <div class="fund-now">
                  <buttonResta
                    background="yellow"
                    label="DANAI SEKARANG"
                    size="14"
                  />
                </div>
              </div>
            </div>
            <div class="trigger-banner arrow-left-proyek">
              <i class="fa fa-arrow-left" aria-hidden="true" />
            </div>
            <div class="trigger-banner arrow-right-proyek">
              <i class="fa fa-arrow-right" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div class="purple-img">
          <img :src="purpleImg" alt="purple">
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
import sliderHome from '../components/sliderHome'
import groupInfo from '../assets/groupShare.svg'
import buttonResta from '../components/smallComponents/button'
import bigCircle from '../assets/oval.svg'
import fundImg from '../assets/fund.svg'
import purpleImg from '../assets/Mask.svg'
import defaultImg from '../assets/pretty-home-min.jpg'
export default {
  components: {
    sliderHome, buttonResta
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
  }
}
</script>

<style lang="scss" scope>
@import '@/styles/home.scss';
</style>
