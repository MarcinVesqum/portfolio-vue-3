<template>
     <div class="w-full bg-gray-800">
      <div class="container mx-auto py-5 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img class="w-8" src="" alt="" />
          <span class="text-2xl font-bold text-white">Portfolio.</span>
        </div>
        <span class="hidden md:block font-medium text-white"
          >© 2022 Portfolio. Marcin Pełszyk</span
        >
        <div class="flex gap-2">
          <FacebookIcon />
          <LinkedinIcon />
        </div>
      </div>
    </div>
</template>

<script setup>
import FacebookIcon from '../../assets/icons8-facebook.svg';
import LinkedinIcon from '../../assets/linkedin-logo-png-2048.png';
</script>