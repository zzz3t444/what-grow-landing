<script>
import "../assets/css/font.css"; 

const SubscribeText = {
  template: `
    <div class="flex flex-col space-y-4 text-center lg:text-left">
      <h1 class="text-5xl font-bold text-neutral-200 Monterrat tracking-tighter leading-none">Stay with WhatGrow</h1>
      <p class="text-lg text-neutral-300 max-w-sm">Doloribus consectetur quasi ipsa quo neque culpa blanditiis ducimus recusandae a veritatis optio cumque, in harum ad nam!</p>
    </div>
  `,
};

const SubscribeForm = {
  props: ["value"],
  template: `
    <div class="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
      <div class="flex flex-row">
        <input
          type="text"
          placeholder="yourmail@gmail.com"
          class="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          v-model="value"
        />
        <button
          type="button"
          class="w-2/5 p-3 font-semibold hover:scale-95 duration-100 transition-all rounded-r-lg sm:w-1/3 dark:bg-lime-500 dark:text-gray-50"
          @click="$emit('subscribe')"
        >
          Subscribe
        </button>
      </div>
    </div>
  `,
};

export default {
  name: "SubscribeSection",
  components: {
    SubscribeText,
    SubscribeForm,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    subscribe() {
      // Handle subscription logic here
      console.log(`Subscribed with email: ${this.email}`);
      this.email = ""; // Clear the input after subscription
    },
  },
};
</script>

<template>
  <div class="py-6">
    <div class="container mx-auto flex flex-col justify-center mt-20 p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-evenly lg:flex-row">
      <SubscribeText />
      <SubscribeForm @subscribe="subscribe" v-model="email" />
    </div>
  </div>
</template>
