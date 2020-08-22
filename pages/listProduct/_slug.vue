<template>
  <div class="container">
    <section class="product-detail">
      <div class="content-detail">
        <h1>{{ title }}</h1>
        <i v-if="$device.isMobile" class="fas fa-angle-left left" @click="arrowPage('left')" />
        <i v-if="$device.isMobile" class="fas fa-angle-right right" @click="arrowPage('right')" />
        <div v-if="$device.isDesktop !== true" class="img-content hidden-md">
          <img :src="wallpaper">
        </div>
        <p>{{ content }}</p>
        <buttonResta
          background="yellow"
          :label="button"
          size="14"
        />
      </div>
      <div v-if="$device.isDesktop || $device.isTablet" class="img-content hidden-xs">
        <img :src="wallpaper">
      </div>
    </section>
    <section class="tab-wrapper">
      <div class="head-tab">
        <ul>
          <li :class="this.$route.params.slug === 'fun-develop' ? 'active' : '' " @click="nextPage('fun-develop')">
            FUN DEVELOP
          </li>
          <li :class="this.$route.params.slug === 'fun-gadai' ? 'active' : '' " @click="nextPage('fun-gadai')">
            FUN GADAI
          </li>
          <li :class="this.$route.params.slug === 'fun-flip' ? 'active' : '' " @click="nextPage('fun-flip')">
            FUN FLIP
          </li>
          <li :class="this.$route.params.slug === 'fun-income' ? 'active' : '' " @click="nextPage('fun-income')">
            FUN INCOME
          </li>
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
      <div class="onMobile">
        <div v-for="(list, i) in work" :key="i" class="wrapper-list">
          <span>{{ list.id }}</span>
          <p>{{ list.content }}</p>
        </div>
      </div>
    </section>
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
  </div>
</template>

<script>
import buttonResta from '@/components/smallComponents/button'
import wallpaper from '@/assets/wallpaper1.jpg'
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
  name: 'ProductDetail',
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
  asyncData ({ params, env, error }) {
    const user = env.users.find(user => String(user.slug) === params.slug)
    if (!user) {
      return error({ message: 'User not found', statusCode: 404 })
    }
    return user
  },
  mounted () {
  },
  methods: {
    nextPage (link) {
      this.$router.push({
        path: '/listProduct/' + link
      })
    },
    arrowPage (direction) {
      if (direction === 'left') {
        switch (this.$route.params.slug) {
          case 'fun-develop' :
            return {
              ...this.$router.push({
                path: '/listProduct/fun-income'
              })
            }
          case 'fun-income' :
            return {
              ...this.$router.push({
                path: '/listProduct/fun-flip'
              })
            }
          case 'fun-flip' :
            return {
              ...this.$router.push({
                path: '/listProduct/fun-gadai'
              })
            }
          case 'fun-gadai' :
            return {
              ...this.$router.push({
                path: '/listProduct/fun-develop'
              })
            }
        }
      } else {
        switch (this.$route.params.slug) {
          case 'fun-develop' :
            return {
              ...this.$router.push({
                path: '/listProduct/fun-income'
              })
            }
          case 'fun-income' :
            return {
              ...this.$router.push({
                path: '/listProduct/fun-flip'
              })
            }
          case 'fun-flip' :
            return {
              ...this.$router.push({
                path: '/listProduct/fun-gadai'
              })
            }
          case 'fun-gadai' :
            return {
              ...this.$router.push({
                path: '/listProduct/fun-develop'
              })
            }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/productListDetail';
</style>
