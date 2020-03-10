<template>
  <div class="home">
    <div class="background-code">
            <NavigationMenu />
            <div class="container pt-5">
                <carousel :items="1" :nav="false">
                    <img src="../assets/defaultlogo.png" alt="">
                    <img src="../assets/tshirt.png" alt="">
                    <img src="../assets/2018AllStars.png" alt="">
                </carousel>
            </div>
        </div>
        <div class="bg-light">
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-center">
                    <h2 class="font-weight-light font-weight-bold text-capitalize">Use code to solve problems</h2>
                    <p class="lead text-muted px-5 description-text">We program using the popular and powerful language of Java to solve complex problems competitively. Whether you're a wizard at coding, or still a Java novice, we have a place for you here to pursue your interest in programming with other like-minded individuals.</p>
                    <p class="text-muted px-5"><em>( It is recommended that you have completed or are currently in Computer Science A )</em></p>
                    </div>
                    <div class="col-lg-6 text-center pt-3 pt-lg-0">
                    <img src="../assets/Java_logo_icon.png" alt="" class="img-fluid large-image color">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <div class="container py-5">
                <div class="row align-items-center text-center">
                    <div class="col-lg-6 order-2 order-lg-1 pt-5 pt-lg-0">
                    <img src="../assets/Linux_terminal.png" alt="" class="img-fluid large-image">
                    </div>
                    <div class="col-lg-6 text-center order-1 order-lg-2">
                    <h2 class="font-weight-light font-weight-bold text-capitalize">Compete With Others</h2>
                    <p class="lead text-muted px-5 description-text">As our main focus of the club, we engage in competitions both over the internet and travel in person to compete against other programmers.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-light">
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-center">
                    <h2 class="font-weight-light font-weight-bold text-capitalize">Improve your programming skills</h2>
                    <p class="lead text-muted px-8 description-text">Our goal is to create an environment that promotes learning and the exchange of ideas between fellow programmers. Whether you're an expert or just a beginner, everyone can learn new skills and advance their coding abilities through the sport of coding competitively. From daily practice in each meeting to mentoring and lessons from our captains, learning is key.</p>
                    </div>
                    <div class="col-lg-6 text-center pt-3 pt-lg-0">
                    <img src="../assets/upward_trend.png" alt="" class="img-fluid large-image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue'
import carousel from 'vue-owl-carousel2'

export default {
  name: 'Home',
  components: {
    carousel,
    NavigationMenu
  }
}
</script>
