<template>
    <nav  class="w-full fixed top-0 bg-white dark z-10">
    <div class="container mx-auto py-5 flex items-center justify-between">
      <div class="flex justify-center items-center gap-2">
        <router-link to="/" class="flex gap-2">
          <img src="../../assets/github.png" alt="" class="w-8"/>
          <span class="text-2xl font-bold text-indigo-900">Portfolio</span>
        </router-link>
      </div>
        <ul v-show="!mobile" class="flex space-x-10 text-gray-600 font-bold text-sm uppercase">
          <li>
             <a @click="scroll('home')">Home</a>
          </li>
          <li>
            <a @click="scroll('about')">About Me</a>
          </li>
          <li>
            <a @click="scroll('works')">Works</a>
          </li>
          <li>
            <a @click="scroll('contact')">Contact</a>
          </li>
        </ul>
        <img class="w-5 hidden md:block cursor-pointer" src="../../assets/crescent-moon-png-35131.png" alt="">
        <div v-show="mobile" @click="showMenu"  class="space-y-1 bg-white  cursor-pointer z-20">
          <div class="w-6 h-0.5 bg-black"></div>
          <div class="w-6 h-0.5 bg-black"></div>
          <div class="w-6 h-0.5 bg-black"></div>
        </div>
        <transition name="mobiel-nav" >
          <ul v-show="mobileNav"  class="bg-indigo-900 absolute left-0 top-0 text-center w-full p-10 rounded-b-3xl space-y-8 uppercase text-white">
          <li>
             <a @click="scroll('home')">Home</a>
          </li>
          <li>
            <a @click="scroll('about')">About Me</a>
          </li>
          <li>
            <a @click="scroll('services')">Services</a>
          </li>
          <li>
            <a @click="scroll('works')">Works</a>
          </li>
          <li>
            <a @click="scroll('contact')">Contact</a>
          </li>
        </ul>
        </transition>
      </div>
    </nav>

  
</template>

<script setup>
import { ref } from "vue";

const mobile = ref(null);
const mobileNav = ref(false);
const windowWidth = ref(null);
const white = ref(true);



const scroll = (refName) => {
  const element = document.getElementById(refName);
  element.scrollIntoView({behavior: 'smooth'})
  
  if (mobile.value) {
    mobileNav.value = false;
    return;
  }

}



const checkScreen = function() {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 750) {
    mobile.value = true;
    return;
  }
  mobile.value = false
  mobileNav.value = false;
  return;
}
 
const showMenu = () => {
  mobileNav.value = !mobileNav.value
  white.value = !white.value
} 

window.addEventListener('resize', checkScreen)
checkScreen()

</script>

<style lang="scss" scoped>

nav {
  .animation {
    transition: .4s ease all;
  }

  li {
    cursor: pointer;
  }
  
  
  .nav-router-active-link {
    transition: .4s ease all;
    &:hover {
      color: gray;
    }
  }
  
  .white-text {
    color: #ffff;
  }

  // .mobiel-nav-enter-to,
  // .mobiel-nav-leave-from {
  //   transform: translateY(250px);
  // }
  .mobiel-nav-enter-active,
  .mobiel-nav-leave-active {
    transition: .4s ease all;
  }

  .mobiel-nav-enter-from,
  .mobiel-nav-leave-to {
    transform: translateY(-250px);
  }
  .mobiel-nav-enter-to,
  .mobiel-nav-leave-from  {
    transform: translateY(0);
  }
  
}


</style>