<script>
import "../assets/css/font.css";
export default {
  name: "HeroSection",
};
</script>

<template>
  <section class="hero text-center py-16 mt-20">
    <div class="container mx-auto">
      <div>
        <h1
          class="text-3xl md:text-5xl text-neutral-400 font-normal mb-1 Manrope"
        >
          Fast, Collaborative, AI-Native
        </h1>
        <p
          class="text-4xl md:text-5xl Manrope text-neutral-100 font-normal mb-3 lg:mb-5"
        >
          Content Management
        </p>
        <p class="mb-8 max-w-xl p-2 lg:p-0 Roboto mx-auto md:text-lg text-neutral-500">
          Make your website editable faster than ever with BaseHub, the Headless CMS built
          for speed and collaborative workflows—all with the help of AI.
        </p>
      </div>
      <p class="text-neutral-500 text-[11px] Roboto mb-3">Trusted by</p>
      <div class="logos grid-cols-2 grid items-center lg:flex lg:grid-cols-4 justify-center opacity-40 scale-75 gap-8 mb-8">
        <img
          src="https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg"
          alt="Basewell"
          class="h-8"
        />
        <img
          src="https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg"
          alt="Scale"
          class="h-8"
        />
        <img
          src="https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg"
          alt="RanchHouse"
          class="h-8"
        />
        <img
          src="https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg"
          alt="Basement"
          class="h-8"
        />
      </div>
      <button
        class="bg-orange-500 hover:shadow-2xl hover:shadow-neutral-400 text-black font-medium Roboto hover:text-neutral-100 hover:scale-95 transition-all duration-150 text-sm py-2 px-4 rounded-full"
      >
        Get Started
      </button>
    </div>
  </section>
</template>
