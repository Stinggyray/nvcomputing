<template>
   <div class="navbar-wrapper pt-3 mb-2">
      <b-navbar toggleable="md" type="dark" class="navbar-custom">
         <b-navbar-brand>
            <router-link to="/" class="navbar-brand d-block d-sm-none" id="navimgref-sm"><img src="../assets/nvct-logo.svg" alt="Neuqua Logo" id="navimg" class="img-fluid"></router-link>
            <router-link to="/" class="navbar-brand d-none d-sm-block" id="navimgref-lg"><img src="../assets/nvct-logo-h.svg" alt="Neuqua Logo" id="navimg" class="img-fluid"></router-link>
         </b-navbar-brand>
         <b-navbar-toggle target="nav-collapse" class="navbar-toggler-custom"></b-navbar-toggle>
         <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
               <b-nav-item><router-link to="/" class="nav-link" :class="$route.name == 'home' ? 'active' : ''">Home</router-link></b-nav-item>
               <b-nav-item><router-link to="/about" class="nav-link" :class="$route.name == 'about' ? 'active' : ''">About</router-link></b-nav-item>
               <b-nav-item><router-link to="/meetingsummaries" class="nav-link" :class="$route.name == 'meetingsummaries' ? 'active' : ''">Meeting Summaries</router-link></b-nav-item>
               <b-nav-item><router-link to="/contact" class="nav-link" :class="$route.name == 'contact' ? 'active' : ''">Contact</router-link></b-nav-item>
            </b-navbar-nav>
         </b-collapse>
      </b-navbar>
   </div>
</template>
