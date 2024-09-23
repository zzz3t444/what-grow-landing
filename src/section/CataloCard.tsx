import React from "react";
import "../assets/css/font.css";

const RealtimeMultiplayerPresence = () => {
  return (
    <main>
      <div className="p-5 pr-0 pb-0 w-full overflow-hidden bg-[#161616] border dark:border-neutral-800 rounded-2xl">
        <div className="flex items-start gap-10">
          <div>
            <h1 className="Manrope text-white mb-5">Realtime, Multiplayer Presence</h1>
            <p className="Roboto text-neutral-500 max-w-[270px]">Work with your team in real time. You’ll see their faces as they move through the Repository.</p>
          </div>
          <div>
            <img className="overflow-hidden" src="https://assets.basehub.com/9dbc0da9/N0cW8agITOBv170T-hc2U/real-time-presence.png?format=webp&quality=100" width={300} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

const AIStructureGeneration = () => {
  return (
    <main>
      <div className="p-5 pr-0 pb-0 overflow-hidden bg-[#161616] border dark:border-neutral-800 rounded-2xl">
        <div className="flex items-start gap-10">
          <div>
            <h1 className="Manrope text-white mb-5">Realtime, Multiplayer Presence</h1>
            <p className="Roboto text-neutral-500 max-w-[250px]">Work with your team in real time. You’ll see their faces as they move through the Repository.</p>
          </div>
          <div>
            <img src="https://assets.basehub.com/9dbc0da9/b98tmjtz6o02nd6z7iarkllc/tiny-png.png?format=webp&quality=100" width={300} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

const SafeSDK = () => {
  return (
    <main>
      <div className="p-5 pr-0 overflow-hidden pb-0 bg-[#161616] border dark:border-neutral-800 rounded-2xl">
        <div className="grid">
          <h1 className="Manrope text-white mb-5">A type-safe SDK</h1>
          <p className="Roboto text-neutral-500 text-sk max-w-sm">Install and run our SDK generator, which introspects your repositories’ content to output automatic TypeScript types. Learn more.</p>
          <div className="flex justify-end">
            <img className="mt-5" src="https://assets.basehub.com/9dbc0da9/x47x8awtppea1jdzk67oxwjz/image-bento-2.png?format=webp&quality=100" width={300} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

const Essentials = () => {
  return (
    <main>
      <div className="p-5 pr-0 pt-0 overflow-hidden bg-[#161616] border dark:border-neutral-800 rounded-2xl">
        <div className="grid">
          <div className="flex justify-end mb-5">
            <img className="rounded-bl-2xl" src="https://assets.basehub.com/9dbc0da9/dzwz5bpfny24vbrhm3f0zsmp/image-bento-4.png?format=webp&quality=100" width={300} alt="" />
          </div>
          <h1 className="Manrope text-white mb-5">All the essentials, and then some</h1>
          <p className="Roboto text-neutral-500 text-sk max-w-sm">Choose from a wide selection of blocks. Use primitive blocks—text, images, dates, etc—, or more complex ones—collections, components, and more.</p>
        </div>
      </div>
    </main>
  );
};

const ViewsLayout = () => {
  return (
    <main>
      <div className="p-5 pr-0 overflow-hidden w-full pb-0 bg-[#161616] border dark:border-neutral-800 rounded-2xl">
        <div className="grid">
          <h1 className="Manrope text-white mb-5">A type-safe SDK</h1>
          <p className="Roboto text-neutral-500 text-sk max-w-sm">Install and run our SDK generator, which introspects your repositories’ content to output automatic TypeScript types. Learn more.</p>
          <div className="flex justify-end">
            <img className=" mt-5" src="https://assets.basehub.com/9dbc0da9/lm_WcLH-Sl7j-L29zPZP1/diff-view.png?format=webp&quality=100" width={300} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

// Main component
const CatalogCard = () => {
  return (
    <main className="p-3 lg:p-0">
      <div className="mt-40">
        <h1 className="Manrope text-white text-center mb-5 text-3xl tracking-tighter">A Unique Take on Content Management</h1>
        <p className="Roboto max-w-xl mb-10 text-lg text-center mx-auto text-neutral-500">
          All the bells and whistles, plus some features that really set us apart. Oh, and <span className="text-white underline"><a href="#">check out our changelog</a></span> to see what we’ve been up to lately.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex pb-5 gap-5">
          <RealtimeMultiplayerPresence />
          <AIStructureGeneration />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex gap-5 justify-center">
        <SafeSDK />
        <Essentials />
        <ViewsLayout/>
      </div>
    </main>
  );
};

export default CatalogCard;
