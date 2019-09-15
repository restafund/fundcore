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
      <h2 class="subtitle">
        restafund Core
        <i class="fa fa-address-book" aria-hidden="true" />
      </h2>
    </div>
  </div>
</template>

<script>
import sliderHome from '../components/sliderHome'
export default {
  components: {
    sliderHome
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
      ]
    }
  }
}
</script>

<style lang="scss" scope>
@import '@/styles/home.scss';
.benefit-section {
  text-align: center;
  margin: 150px 0;
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
.m-a-sm {
  margin: 15px 0;
}
</style>
