<template>
  <div class="container">
    <section class="questioner">
      <div>
        <h3>RestaFund Profile</h3>
      </div>
      <div>
        <div :data-percent="percent" class="ui indicating progress">
          <div :style="`width:${percent}%`" class="bar" />
          <div class="label">
            Funding
          </div>
        </div>
      </div>
      <h4>Informasi Diri</h4>
      <p>Mohon informasikan Anda saat ini.</p>
      <div class="info">
        <div v-for="(quest, i) in showQuestion" :key="i" class="list-question">
          <div v-if="quest.IsVisible || formSend.PekerjaanAnda === 'Karyawan'" class="ui form">
            <div class="grouped fields">
              <label>{{ quest.Description }} :</label>
              <div v-if="quest.Option">
                <div v-for="(Option, index) in quest.Option" :key="index" class="field">
                  <div class="ui radio checkbox">
                    <input v-model="formSend[quest.Question]" :value="Option" :id="Option" :name="quest.Id" type="radio">
                    <label :for="Option">{{ Option }}</label>
                  </div>
                </div>
              </div>
              <div v-else class="ui right labeled input">
                <label v-if="quest.Prefix" for="amount" class="ui label">{{ quest.Prefix }}</label>
                <input v-model="formSend[quest.Question]" id="amount" :placeholder="quest.Description" type="number" min="0">
                <div v-if="quest.Prefix" class="ui basic label">
                  .00
                </div>
              </div>
            </div>
          </div>
        </div>
        <buttonResta
          @click="nextProgress('fun-gadai')"
          background="yellow"
          label="NEXT"
          size="14"
        />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import buttonResta from '../../components/smallComponents/button'

export default {
  name: 'ProductDetail',
  layout: 'landingPage',
  components: {
    buttonResta
  },
  data () {
    return {
      percent: 25,
      indexQuestion: 0,
      showQuestion: [],
      question: [],
      formSend: {
        PekerjaanAnda: ''
      }
    }
  },
  mounted () {
    this.getQuestion()
  },
  methods: {
    nextPage (link) {
      this.$router.push({
        path: '/listProduct/' + link
      })
    },
    nextProgress () {
      const { question, indexQuestion } = this
      if (indexQuestion + 1 < question.length) {
        this.percent += 25
        this.indexQuestion += 1
        this.showQuestion = question[indexQuestion + 1]
        this.sendQuestion()
      } else {
        this.$router.push({
          path: '/landingpage/'
        })
      }
    },
    getQuestion () {
      axios
        .get('https://learnwebapimongo20200114092830.azurewebsites.net/api/surveys')
        .then((response) => {
          const loop = Math.ceil(response.data.length / 4)
          const newQuest = []
          for (let a = 0; a < loop; a++) {
            const temp = response.data.splice(0, 4)
            newQuest.push(temp)
          }
          this.question = newQuest
          this.showQuestion = newQuest[0]
          // alert(response)
          console.log(this.question)
        })
        .catch(error => alert(error))
    },
    sendQuestion () {
      axios
        .post('https://learnwebapimongo20200114092830.azurewebsites.net/api/answers', this.formSend, { headers: {
          'Content-Type': 'application/json'
        } })
        .then((response) => {
          console.log(response)
        })
        .catch(error => alert(error))
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
