<script>
import "../assets/css/font.css";

const RoadmapText = {
  template: `
    <div>
      <h1 class="Manrope text-3xl font-medium mb-4 text-white tracking-tighter">Our roadmap to rise</h1>
      <p class="text-neutral-500 Roboto max-w-sm">
        we share a little bit of Whatever Team and PT GrowBisnis collaboration journey in the field of UMKM
      </p>
      <p class="text-[12px] max-w-[200px] mt-10 leading-6 Roboto text-neutral-500">
        Have some feature request? 
        <span class="underline text-white">Join our Discord</span> and tell us more!
      </p>
    </div>
  `,
};

const RoadmapImage = {
  template: `
    <div>
      <img src="https://res.cloudinary.com/ddy7p8yrj/image/upload/v1729597363/ll507nbyd0oonimqbgcc.jpg" class="rounded-2xl" width="600" alt="" />
    </div>
  `,
};

export default {
  name: "MainSection",
  components: {
    RoadmapText,
    RoadmapImage,
  },
};
</script>

<template>
  <main class="mt-32">
    <div class="grid lg:flex grid-cols-1 gap-10 lg:gap-16 p-3 mt-60 mb-20 lg:p-0 lg:grid-cols-2 items-start justify-center">
      <RoadmapText />
      <RoadmapImage />
    </div>
  </main>
</template>
