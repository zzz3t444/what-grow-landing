<script>
import "../assets/css/font.css";

const HeroButton = {
  props: ["text"],
  template: `
    <div class="flex justify-center">
      <button class="rounded-full border mt-10 mb-3 lg:mb-7 border-lime-500 border-opacity-40 text-neutral-500 py-1 Roboto px-3 tracking-tight bg-neutral-950 font-normal text-sm">
        {{ text }}
      </button>
    </div>
  `,
};

const HeroHeader = {
  template: `
    <div>
      <h1 class="text-2xl md:text-5xl text-neutral-400 font-normal lg:mb-1 Manrope">Welcome to Whatever Team</h1>
      <p class="text-2xl md:text-5xl Manrope text-neutral-100 font-normal mb-1 lg:mb-5">and Sinergi GrowBisnis</p>
    </div>
  `,
};

const HeroDescription = {
  template: `
    <p class="max-w-sm lg:max-w-xl p-2 lg:p-0 text-sm font-light lg:leading-6 lg:text-lg Roboto mx-auto text-neutral-400">
      we collaborate in the field of UMKM business, with us collaborating, everything will be achieved from any desire to grow rapidly.
    </p>
  `,
};

const TrustedBy = {
  template: `
    <div>
      <p class="text-neutral-400 mt-2 lg:mt-7 text-[11px] Roboto lg:mb-3">Trusted by</p>
      <div class="flex flex-wrap justify-center gap-10 opacity-50 scale-75 mb-8">
        <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg" alt="Basewell" class="h-8 w-auto" />
        <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg" alt="Scale" class="h-8 w-auto" />
        <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg" alt="RanchHouse" class="h-8 w-auto" />
        <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg" alt="Basement" class="h-8 w-auto" />
      </div>
    </div>
  `,
};

const ActionButtons = {
  template: `
    <div class="flex items-center justify-center gap-2">
      <a href="#banner">
        <button
          class="bg-lime-500 hover:shadow-2xl hover:shadow-neutral-400 text-white font-medium Roboto hover:text-neutral-100 hover:scale-95 transition-all duration-150 text-sm py-2 px-4 rounded-full">
          Get Started
        </button>
      </a>
      <button class="rounded-full py-2 px-4 bg-neutral-400 hover:shadow-2xl hover:shadow-neutral-400 hover:scale-95 transition-all duration-150 text-white Roboto bg-opacity-35">
        See other Company
      </button>
    </div>
  `,
};

export default {
  name: "HeroSection",
  components: {
    HeroButton,
    HeroHeader,
    HeroDescription,
    TrustedBy,
    ActionButtons,
  },
};
</script>

<template>
  <section class="hero text-center py-16 mt-10">
    <div class="container mx-auto">
      <HeroButton text="from whatever it wants to be, it grows rapidly" />
      <HeroHeader />
      <HeroDescription />
      <TrustedBy />
      <ActionButtons />
    </div>
  </section>
</template>
