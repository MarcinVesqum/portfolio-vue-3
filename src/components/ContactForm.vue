<template>
     <!-- contact -->
    <div id="contact" class="dark:bg-slate-900 pt-40">
      <div class="container mx-auto">
        <!-- top -->
        <div class="flex flex-col gap-3 items-center">
          <h1 class="text-indigo-600 font-bold">CONTACT</h1>
          <h1 class="text-3xl dark:text-white">Have a Question?</h1>
          <p class="w-1/2 text-center text-gray-400">
            Do you have an idea? Let's discuss it and see what we can do
            together.
          </p>
        </div>
        <!-- bottom -->
        <form @submit.prevent="sendEmail" class="mt-5 p-8 flex flex-col gap-5 items-center">
          <!-- ErrorMsg -->
          <div v-if="statusMsg || errorMsg" class="mb-10 p-4 bg-light-grey rounded-md shadow-lg">
            <p class="text-gray-500">{{ statusMsg }}</p>
            <p class="text-red-600">{{ errorMsg }}</p>
          </div>
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="text"
            placeholder="Name Surname"
            v-model="fullName"
          />
          <input
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            type="email"
            placeholder="Email"
            v-model="email"
            required
          />
          <textarea
            class="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
            cols="30"
            rows="10"
            required
            placeholder="Message..."
            v-model="message"
          ></textarea>
          <button
            class="w-1/2 bg-indigo-600 text-white font-medium 
            px-3 py-2 rounded-md cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
</template>

<script setup>
import emailjs from 'emailjs-com';
import { ref } from 'vue';



const fullName = ref(null);
const email = ref(null);
const message = ref(null);
const statusMsg = ref(null);
const errorMsg = ref(null);


const sendEmail = () => {
  try {
    emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
      name: fullName.value, 
      email: email.value, 
      message: message.value
      },
      import.meta.env.VITE_EMAILJS_USER_ID
      );
        statusMsg.value = 'Succes: Send the email Message'
        setTimeout(() => {
          statusMsg.value = null;
        }, 5000)
  } 
  catch(error) {
      errorMsg.value = `Error: ${error.message}`
      setTimeout(() => {
      errorMsg.value = null;
      }, 5000)
  }
}

</script>

