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
          <img :src="bigCircle">
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
            <img :src="fundImg">
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
        <span class="color-blue fz-36">Proyek Berjalan</span>
        <div class="project">
          <div class="wrapper-overflow">
            <div class="card-project" v-for="(project, index) in project" :key="index">
              <div class="img">
                <img :src="project.img" alt="house">
              </div>
              <div class="content">
                <span class="color-brown fz-12">{{ project.pendana }} Pendana</span>
                <p>
                  {{ project.description }}
                </p>
              </div>
              <div class="total">
                <span class="color-blue fz-16 f-bold">{{ project.price }}</span>
                <div class="progress-bar-resta">
                  <span class="behind" />
                  <span class="core" />
                </div>
              </div>
              <div class="fund-now">
                <buttonResta
                  background="yellow"
                  label='DANAI SEKARANG'
                  size='14'
                />
              </div>
            </div>
          </div>
          <div class="trigger-banner arrow-left" style="left: 0">
            <i class="fa fa-arrow-left" aria-hidden="true" />
          </div>
          <div class="trigger-banner arrow-right"  style="right: 0">
            <i class="fa fa-arrow-right" aria-hidden="true" />
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
export default {
  components: {
    sliderHome, buttonResta
  },
  head () {
    return {
      title: 'Home tutorial',
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
          icon: 'fa fa-shield',
          name: 'AMAN',
          description: 'Properti yang dijaminkan ataupun dijual lagi adalah bersertifikat dan telah dicek oleh BPN dan KRK nya.'
        },
        {
          icon: 'fa fa-diamond',
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
      project: [
        {
          img: 'https://assets0.biggerpockets.com/uploads/wordpress_blog_post/image/9112/pretty-home.jpg',
          pendana: '7',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 800.000.000'
        },
        {
          img: 'https://assets0.biggerpockets.com/uploads/wordpress_blog_post/image/9112/pretty-home.jpg',
          pendana: '12',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 900.000.000'
        },
        {
          img: 'https://assets0.biggerpockets.com/uploads/wordpress_blog_post/image/9112/pretty-home.jpg',
          pendana: '17',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 1.900.000.000'
        },
        {
          img: 'https://assets0.biggerpockets.com/uploads/wordpress_blog_post/image/9112/pretty-home.jpg',
          pendana: '34',
          description: 'AIRY ROOM ECO SYARIAH BSD SERPONG',
          price: 'Rp 12.900.000.000'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/styles/home.scss';
section {
  margin: 90px 0;
}
.benefit-section {
  width: 100%;
  text-align: center;
  margin: 150px 0;
  display: inline-block;
  .heading {
    height: 110px;
  }
  .list-benefit {
    vertical-align: top;
    margin: 0 15px;
    width: 280px;
    height: 256px;
    text-align: center;
    display: inline-block;
    span {
      font-size: 24px;
      text-transform: uppercase;
      color: #28458F;
      font-weight: bold;
    }
    i {
      display: block;
      font-size: 56px;
      color: #FFC80A;
    }
    p {
      font-size: 16px;
      color: #424242;
    }
  }
}
.group-info {
  width: 100%;
  display: inline-block;
  .box-info-border {
    border-radius: 16px;
    background-color: #FFFFFF;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,0.1);
    display: inline-block;
    padding: 40px 0px;
  }
  .content {
    width: 50%;
    float: left;
    display: inline-block;
    text-align: center;
    padding: 0px 60px;
    span {
    color: #28458F;
    font-size: 26px;
    }
    p {
    font-size: 18px;
    color: #424242;
    margin-bottom: 35px;
    }
  }
  .oval-home {
    position: absolute;
    left: 0;
    z-index: -1;
    img {
      position: absolute;
      bottom: 0;
    }
  }
}
.compare {
  // margin-top: 180px;
  display: inline-block;
  width: 100%;
  height: 250px;
  text-align: center;
  .head-cont {
    width: 480px;
    display: inline-block;
    margin-bottom: 50px;
  }
  .perbadingan {
    text-align: center;
    div {
      display: inline-block;
      width: calc(100%/4);
      float: left;
    }
  }
}
.long-fund {
  .wrapper-fund {
    width: 100%;
    height: 330px;
    border-radius: 16px;
    background-color: #FFF4CE;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,0.1);
    padding: 70px 100px;
    .img-fund {
      width: 40%;
      display: inline-block;
      text-align: center;
      float: left;
    }
    .content-fund {
      width: 60%;
      float: left;
      display: inline-block;
      text-align: center;
      .wrapper-button {
        padding-top: 30px;
      }
    }
  }
}
.core-project {
  padding: 0 50px;
  position: relative;
  .project {
    text-align: left;
    overflow: scroll;
    .wrapper-overflow {
      width: 1300px;
      display: inline-block;
    }
    .card-project {
      height: 420px;
      width: 310px;
      border-radius: 8px;
      background-color: #FFFFFF;
      box-shadow: 0 1px 5px 0 rgba(0,0,0,0.1);
      display: inline-block;
      float: left;
      margin: 0 7px;
      .img {
        height: 180px;
        width: 100%;
        img {
          width: 100%;
          border-radius: 8px;
        }
      }
    }
    .content {
      padding: 0 15px;
      p {
        font-size: 16px;
        font-weight: bold;
        color: #000000;
      }
    }
    .total {
      margin-top: 15px;
      padding: 0 15px;
      width: 100%;
      height: 60px;
      display: inline-block;

    }
    .fund-now {
      margin-top: 15px;
      padding: 0 15px;
    }
  }
}
.progress-bar-resta {
  position: relative;
  .behind {
    width: 100%;
    position: absolute;
    height: 20px;
    background-color: #E6E6E6;
    z-index: 1;
    border-radius: 12px;
  }
  .core {
    width: 70%;
    position: absolute;
    height: 20px;
    background: #28458F;
    border-radius: 12px;
    z-index: 2;
  }
}
.m-a-sm {
  margin: 15px 0;
}
</style>
