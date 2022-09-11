<template>
    <div id="home" class="after:h-1/2 h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        <img class="absolute bottom-0 lg:left-0 sm:right-1/3 lg:right-0   mx-auto h-1/2 object-cover rounded-full"  src="../assets/121064192_3118140138297902_9021244024849818408_n.jpg" alt="">
        <div
        class="hidden sm:block absolute bottom-0 md:-bottom-1/4 right-0 left-0 mx-auto sm:h-1/2  md:w-144 md:h-144 bg-indigo-900 rounded-full -z-10"
      ></div>
      
      <!-- animated text -->
      <div
        class="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold"
      >
      <VTypical
        :steps="['Frelance', 500]"
        :wrapper="'span'"
        />
        <VTypical
            class="typicalWrapper"
            style="color: red;"
            :steps="['Designer', 1000, 'Developer', 500, 'Developer', 1000]"
            :loop="2"
            :wrapper="'p'"
        />

      </div>
      <!-- texts -->
      <div
        class="hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 m-auto right-10 bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3"
      >
        <h1 class="text-4xl font-bold text-indigo-900">Hi, I'm Marcin</h1>
        <p class="text-gray-400">
          I am a graduate of CodersLab. 
          Together with mentors and participants, 
          I spent a year and a half programming, 
          designing and managing projects using Frameworks.
        </p>
        <a
          class="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#contact"
          >Hire Me</a
        >
      </div>
    </div>
    <!-- about -->
     <div id="about" class="px-10 dark:bg-slate-900">
      <div
        class="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20"
      >
        <!-- left -->
        <div class="relative">
          <img
            class="h-1/5 absolute top-0 left-0 -z-10"
            src="../assets/121064192_3118140138297902_9021244024849818408_n.jpg"
            alt=""
          />
          <div class="hidden sm:flex h-2/5 rounded-full overflow-hidden">
            <img src="../assets/121064192_3118140138297902_9021244024849818408_n.jpg" alt="" />
          </div>
        </div>
        <!-- right -->
        <div class="my-auto flex flex-col gap-3">
          <h1 class="text-indigo-600 font-bold uppercase">Information About me</h1>
          <h1 class="text-3xl font-medium dark:text-white"> Dveloper</h1>
          <h1 class="text-3xl font-medium dark:text-white">
             Experience
          </h1>
          <p class="text-gray-400">
            I am a graduate of
							CodersLab. Together with
							mentors and participants
							I spent a year and a half on
							programming,
							designing and
							solving problems with
							using
							Vue, Django. Currently
							I skipped on the front-
							end, with which I associate
							future.
          </p>
          <h2 class="text-3xl font-extrabold mt-10">My skill</h2>
          <div class="container flex justify-center items-center">
              <img class="h-5" src="../assets/vue.svg" alt="">
              <h2 class="text-gray-600  font-bold mx-2">HTML
              </h2>
              <div class="w-full bg-gray-200 h-1.5 rounded-md">
                <div class="w-full bg-red-600 h-1.5 rounded-md"></div>
              </div>
            </div>
            <div class="container flex justify-center items-center">
              <img class="h-5" src="../assets/vue.svg" alt="">
              <h2 class="text-gray-600  font-bold mx-2">JavaScrip<span class="text-sm">(ES6+) JSON and AJAX</span> 
              </h2>
              <div class="w-full bg-gray-200 h-1.5 rounded-md">
                <div class="w-full bg-yellow-600 h-1.5 rounded-md"></div>
              </div>
            </div>
            <div class="container flex justify-center items-center">
              <img class="h-5" src="../assets/vue.svg" alt="">
              <h2 class=" text-gray-600  font-bold mx-2">Vue3<span class="text-sm">(Router, VueX)</span> 
              </h2>
              <div class="w-full bg-gray-200 h-2 rounded-md">
                <div class="w-full bg-green-600 h-1.5 rounded-md"></div>
              </div>
            </div>
            <div class="container flex justify-center items-center">
              <img class="h-5" src="../assets/vue.svg" alt="">
              <h2 class=" text-gray-600  font-bold mx-2">Git 
              </h2>
              <div class="w-full bg-gray-200 h-2 rounded-md">
                <div class="w-full bg-black h-1.5 rounded-md"></div>
              </div>
            </div>
        </div>
      </div>
    </div>
    
    <!-- works -->
    <div id="works" class="py-1 dark:bg-slate-900">
      <div class="container mx-auto">
        <!-- top -->
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 class="text-3xl dark:text-white">Works & Projects</h1>
          <p class="w-1/2 text-center text-gray-400">
            I help designers, small agencies and businesses bring their ideas to
            life. Powered by Figma, VS Code and coffee, I turn your requirements
            into a well-designed websites
          </p>
        </div>
        <!-- bottom -->
        <div class="p-5 sm:p-0 flex flex-wrap justify-between">
          <!-- card -->
          <div
            class="w-full z-10 md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <h3 class="text-xl py-1 ">Me Portfolio</h3>
            <a class="" href="https://github.com/MarcinVesqum/portfolio-vue-3" target="_blank">
              <GitHub class="absolute  right-1 top-1 cursor-pointer hover:scale-50" />
            </a>
              
            <a class="" href="https://marcinp-portfolio.netlify.app">
              <img src="../assets/projects/portfolio.png" />

            </a>
          </div>
          <!-- card -->
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <h3 class="text-xl py-1 ">Invoice App</h3>
            <a href="https://github.com/MarcinVesqum/Invoicing-Application-Vue3/tree/main/InvoiceApp" target="_blank">
              <GitHub class="absolute  right-1 top-1 cursor-pointer hover:scale-50" />
            </a>
            <a href="https://invoices-app-pl.netlify.app" target="_blank">

              <img  src="../assets/projects/invoiceapp.png" />
            </a>
          </div>
          <!-- card -->
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src="" />
          </div>
          <!-- card -->
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src="" />
          </div>
          <!-- card -->
          <div
            class="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
          >
            <img src="" />
          </div>
          
				<div class="container sm:mx-5  items-center py-10 md:flex flex-col lg:pt-10">
          <h4 class="text-3xl text-indigo-600 py-2  font-bold ">My Timeline</h4>
          <hr class="bg-black  w-40">
					<div class="pt-2 shadow-sm">
						<p class="font-bold ">2022 - present</p>
						<h5 class="font-bold">Web Developer<span class="text-indigo-600"> - Gogler</span></h5>
						<p>
							Responsibilities:
							<br>
							- designing and creating websites <br>
							- cutting and coding of templates to HTML and CSS <br>
							- optimizing websites for Responsive Web Design <br>
							- cooperation with SEO Specialist and Graphic Designer
						</p>
					</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contacgt FOrm -->
    <ContactForm />

   
    <Footer/>
   
</template>


<script setup>
import VTypical from 'vue-typical';
import Footer from '../components/layout/Footer.vue';
import ContactForm from '../components/ContactForm.vue';
import GitHub from '../assets/iconmonstr-github-1.svg'

</script>


<style lang="scss" scoped>
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>