<template>
  <div class="container">
    <section class="questioner">
      <div>
        <h3>RestaFund Profile</h3>
      </div>
      <div>
        <div class="ui indicating progress" :data-percent="percent">
          <div class="bar" :style="`width:${percent}%`"></div>
          <div class="label">Funding</div>
        </div>
      </div>
      <h4>Informasi Pekerjaan</h4>
      <p>Mohon informasikan pekerjaan Anda saat ini.</p>
      <div class="info">
        <div class="list-question">
          <div class="ui form">
            <div class="grouped fields">
              <label>Pekerjaan?</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="job" checked="checked">
                  <label>Karyawan</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="job">
                  <label>Wiraswasta</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="job">
                  <label>Profesional</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-question">
          <div class="ui form">
            <div class="grouped fields">
              <label>Lama Bekerja?</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="howlong" checked="checked">
                  <label>Kurang dari 1 Tahun</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="howlong">
                  <label>1-2 Tahun</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="howlong">
                  <label>Lebih dari 2 Tahun</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-question">
          <div class="ui form">
            <div class="grouped fields">
              <label>Level pengalaman Bekerja?</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="experience" checked="checked">
                  <label>Baru Mulai Bekerja (1-2 tahun bekerja)</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="experience">
                  <label>Cukup Berpengalaman (2-5 tahun bekerja)</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="experience">
                  <label>Berpengalaman (5-8 tahun bekerja)</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="experience">
                  <label>Sangat Berpengalaman (sudah bekerja di atas 8 tahun)</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-question">
          <label>Penghasilan Bersih per Bulan</label>
          <div class="ui right labeled input">
            <label for="amount" class="ui label">$</label>
            <input type="number" min='0' placeholder="Amount" id="amount">
            <div class="ui basic label">.00</div>
          </div>
        </div>
      </div>
      <buttonResta
          background="yellow"
          label="NEXT"
          size="14"
          @click="nextProgress('fun-gadai')"
        />
    </section>
  </div>
</template>

<script>
import buttonResta from '../../components/smallComponents/button'

export default {
  name: 'ProductDetail',
  layout: 'landingPage',
  components: {
    buttonResta
  },
  data () {
    return {
      percent: 25
    }
  },
  mounted () {
  },
  methods: {
    nextPage (link) {
      this.$router.push({
        path: '/listProduct/' + link
      })
    },
    nextProgress () {
      this.percent += 25
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
.questioner {
  text-align: left;
  width: 600px;
  display: inline-block;
  h3 {
    margin-bottom: 30px;
  }
  .progress {
    .bar {
      height: 10px;
    }
  }
  .info {
    margin: 30px 0;
    display: inline-block;
    .list-question {
      margin: 20px 0;
      label: {
        font-weight: 600;
      }
      .field {
            padding: 10px;
      }
      .input {
        width: 100%;
      }
    }
  }
}
</style>
