<template>
    <div class="meetingsummaries">
        <div class="background-page">
            <NavigationMenu />
            <div class="container py-5">
                <div class="row h-100 align-items-center py-5">
                    <div class="col-lg-6">
                    <h1>NVHS Computing Team</h1>
                    <p class="lead text-muted mb-0">Main Building D200 | Thursdays 2:35-3:30</p>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block"><img src="../assets/nvabout.png" alt="nvclublogo" class="img-fluid rounded"></div>
                </div>
            </div>
        </div>
        <div class="bg-white py-5">
            <div class="container">
                <div class="row">
                    <div v-for="(card, index) of cards" :key="index" class="col-md-4 mt-2">
                        <div class="card">
                            <a :href="card.link" target="__blank"><img class="card-img-top" :src="`${publicPath}img/agendaimg/` + card.img + '.png'" alt=""></a>
                            <div class="card-body">
                                <h5 class="card-title border-bottom pb-3">{{ card.title }}</h5>
                                <p class="card-text-custom">{{ card.description }}</p>
                                <a :href="card.link" class="btn btn-md btn-info float-right" target="__blank">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue'

export default {
  name: 'MeetingSummaries',
  components: {
    NavigationMenu
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      cards: [
        {
          title: 'Agenda 3/5',
          description: 'New ACSL Topics',
          img: 'agenda35',
          link: 'https://docs.google.com/presentation/d/1hogqDJN_5mTzTrFMTVX4JdRHlQxV_jPulWBRo0Sk4zE/',
          show: ''
        },
        {
          title: 'Agenda 2/20',
          description: 'ProCom Check-In',
          img: 'agenda220',
          link: 'https://docs.google.com/presentation/d/1z6WyAHx7AExBFo2W8fLttfUEl4Zzx6z3JMnYHFEBpRs/',
          show: ''
        },
        {
          title: 'Agenda 1/23',
          description: 'List Processing Language',
          img: 'agenda123',
          link: 'https://docs.google.com/presentation/d/1N5v8Umz1VxszmMjQmnsaPPtpXPpUs5qyRP-tbPUrmp4/',
          show: ''
        },
        {
          title: 'Agenda 1/16',
          description: 'Pre-fix/In-fix/Post-fix Notation',
          img: 'agenda116',
          link: 'https://docs.google.com/presentation/d/1SHTwNv2nw2fNBbM3sGG2Ny8vYHskap3NXILlJ5mykoI/',
          show: ''
        },
        {
          title: 'Agenda 1/9',
          description: 'Bit-String Flicking',
          img: 'agenda19',
          link: 'https://docs.google.com/presentation/d/1A22RWND7cZupfLUT2pj7zA_szOaVkeFw3a9YXPfqewQ/',
          show: ''
        },
        {
          title: 'Agenda 12/5',
          description: 'Short Answer Practice',
          img: 'agenda1205',
          link: 'https://docs.google.com/presentation/d/1YsrvSt0GDoGEx1wZHtn2zt5QNuvtrFf8lFl50w8S6nc/',
          show: ''
        },
        {
          title: 'Agenda 11/14',
          description: 'Computer Number Systems',
          img: 'agenda1114',
          link: 'https://docs.google.com/presentation/d/1jiak1NpmuSD4k4votU-67mJtgWjQT0TkzMG2oScYCEc/',
          show: ''
        },
        {
          title: 'Agenda 11/7',
          description: 'ArrayList Practice',
          img: 'agenda1024',
          link: 'https://docs.google.com/presentation/d/1AqaTBw7ehM5uvPuY8MbrHNL_X2eOjJV8sHrWaFqN_cI/',
          show: ''
        },
        {
          title: 'Agenda 10/31',
          description: 'Happy Halloween!',
          img: 'agenda1031',
          link: 'https://docs.google.com/presentation/d/1L279-PChPT2HgKsvQ5mDZQZtlRdsjb45gtBsddtrsv0/',
          show: ''
        },
        {
          title: 'Agenda 10/24',
          description: 'Practice, Practice, Practice!',
          img: 'agenda1024',
          link: 'https://docs.google.com/presentation/d/1nYXbKczkPRNhWhTvazU1zncR1AaAJrzunw20wwNIl0I/',
          show: ''
        },
        {
          title: 'Agenda 10/17',
          description: 'Fee Collection for Contest',
          img: 'agenda926',
          link: 'https://docs.google.com/presentation/d/1pIx1ggAZQN1aF9r97dwhCinaHcQitX-U296bjy2pSlk/',
          show: ''
        },
        {
          title: 'Agenda 10/10',
          description: 'Codeforces Registration',
          img: 'agenda926',
          link: 'https://docs.google.com/presentation/d/1B7c5TFj5bM03UEm1P5HLDoj3gzWRtzcaWIc0hQiGEzo/',
          show: ''
        },
        {
          title: 'Agenda 9/19',
          description: 'Registration and ACSL Team',
          img: 'agenda912',
          link: 'https://docs.google.com/presentation/d/1ZhoPvxPNKG2ctBEypKe5vpPQImJ-JNB6sBaPbIFoxp8/',
          show: ''
        },
        {
          title: 'Agenda 9/12',
          description: 'First Meeting of the Year!',
          img: 'agenda912',
          link: 'https://docs.google.com/presentation/d/1fiZ_e-4rm9CuWl_9iG0qHq-YJpLc0lL_WHZmECFiNhY/',
          show: ''
        }
      ]
    }
  }
}
</script>
