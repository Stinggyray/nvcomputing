<template>
  <div class="about">
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
    <div class="bg-white pt-5">
        <div class="container pb-3">
            <div class="row align-items-center mb-5">
                <div class="col-lg-5 px-5 mx-auto d-none d-lg-block"><img src="../assets/objective.png" alt="Club Objectives" class="img-fluid mb-4 mb-lg-0"></div>
                <div class="col-lg-6 order-2 order-lg-1">
                <h2 class="font-weight-light font-weight-bold">Club Objectives</h2>
                <div class="mb-4">
                    <p class="lead text-capitalize">Create a community for open discussion of competitive programming.</p>
                    <div class="ml-3 text-muted">
                        <li>Former and Current <a href="http://www.usaco.org/" target="_blank">USACO</a> Contests.</li>
                        <li>Former and Current <a href="http://www.acsl.org/" target="_blank">ACSL</a> Problems at All Levels.</li>
                        <li>Online Competitions at <a href="http://codeforces.com/" target="_blank">Codeforces</a>, etc. </li>
                        <li>General Problem-Solving Techniques, Algorithms, and Data Structures.</li>
                    </div>
                </div>
                <div class="mb-4">
                    <p class="lead text-capitalize">Manage Neuqua's ACSL teams and potential local competitions nearby. </p>
                </div>
                <div>
                    <p class="text-muted text-right"><a href="contact.html" target="__blank" id="questionsref">Questions? Send Us An Email!</a></p>
                </div>
                </div>
            </div>
        </div>
        <div class="bg-light py-5">
            <div class="container py-5">
                <div class="row mb-4">
                <div class="col-lg-5">
                    <a name="contact"></a>
                    <h2 class="font-weight-light font-weight-bold">Club Leaders</h2>
                </div>
                </div>
                <div class="row text-center">
                <!-- Team item-->
                <div class="col-xl-3 mb-5 container-fluid">
                    <div class="bg-white rounded shadow-sm pt-5 pb-3 px-4 cards-custom">
                        <img src="../assets/avaempty.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                        <h5 class="mb-0">Joseph Koos</h5>
                        <span class="small text-uppercase text-muted">Club Sponsor</span>
                    </div>
                </div>
                <!-- End-->
                </div>
                <div class="row text-center">
                <!-- Team item-->
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm pt-5 pb-3 px-4 cards-custom">
                        <img src="../assets/avaempty.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                        <h5 class="mb-0">Cecilia Chen</h5>
                        <span class="small text-uppercase text-muted">Captain (Sr.)</span>
                    </div>
                </div>
                <!-- End-->
                <!-- Team item-->
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm pt-5 pb-3 px-4 cards-custom">
                        <img src="../assets/avaempty.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                        <h5 class="mb-0">Shivansh Gupta</h5>
                        <span class="small text-uppercase text-muted">Captain (Sr.)</span>
                    </div>
                </div>
                <!-- End-->
                <!-- Team item-->
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm pt-5 pb-3 px-4 cards-custom">
                        <img src="../assets/avaempty.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                        <h5 class="mb-0">Jonathan Li</h5>
                        <span class="small text-uppercase text-muted">Captain (Sr.)</span>
                    </div>
                </div>
                <!-- End-->
                <!-- Team item-->
                <div class="col-xl-3 col-sm-6 mb-5">
                    <div class="bg-white rounded shadow-sm pt-5 pb-3 px-4 cards-custom">
                        <img src="../assets/avaempty.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                        <h5 class="mb-0">Jonah Liu</h5>
                        <span class="small text-uppercase text-muted">Captain (Sr.)</span>
                    </div>
                </div>
                <div class="col-12 mb-5">
                    <div class="bg-white rounded shadow-sm pt-3 pb-3 px-4">
                        <h5 class="mb-0">Past Officers</h5>
                        <div class="row">
                            <div class="col-6">
                            <p class="text-muted">2018-2019</p>
                            <p>Jeffrey Tang (Sr.)</p>
                            <p>Bryan Qiu (Sr.)</p>
                            </div>
                            <div class="col-6">
                            <p class="text-muted">2017-2018</p>
                            <p>Jeffrey Tang (Jr.)</p>
                            <p>Bryan Qiu (Jr.)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End-->
                </div>
                <a href="contact.html" id="contactinforef">Contact Information</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue'

export default {
  name: 'about',
  components: {
    NavigationMenu
  }
}
</script>
