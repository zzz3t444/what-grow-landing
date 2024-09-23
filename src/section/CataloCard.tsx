import React from "react";
import "../assets/css/font.css";

// Realtime, Multiplayer Presence component
const RealtimeMultiplayerPresence = () => {
  return (
    <main>
      <div className="p-5 pr-0 bg-[#161616] border dark:border-neutral-800 rounded-2xl">
        <div className="flex items-start gap-10">
          <div>
            <h1 className="Manrope text-white mb-5">Realtime, Multiplayer Presence</h1>
            <p className="Roboto text-neutral-500 max-w-[250px]">Work with your team in real time. You’ll see their faces as they move through the Repository.</p>
          </div>
          <div>
            <img className="overflow-hidden" src="https://assets.basehub.com/9dbc0da9/N0cW8agITOBv170T-hc2U/real-time-presence.png?format=webp&quality=100" width={200} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

// AI Structure Generation component
const AIStructureGeneration = () => {
  return (
    <main>
      <div className="p-5 pr-0 bg-[#161616] border dark:border-neutral-800 rounded-2xl">
        <div className="flex items-start gap-10">
          <div>
            <h1 className="Manrope text-white mb-5">Realtime, Multiplayer Presence</h1>
            <p className="Roboto text-neutral-500 max-w-[250px]">Work with your team in real time. You’ll see their faces as they move through the Repository.</p>
          </div>
          <div>
            <img className="overflow-hidden" src="https://assets.basehub.com/9dbc0da9/b98tmjtz6o02nd6z7iarkllc/tiny-png.png?format=webp&quality=100" width={200} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

// Main component
const CatalogCard = () => {
  return (
    <main>
      <div className="mt-40">
        <h1 className="Manrope text-white text-center mb-5 text-3xl tracking-tighter">A Unique Take on Content Management</h1>
        <p className="Roboto max-w-xl mb-5 text-lg text-center mx-auto text-neutral-500">
          {" "}
          All the bells and whistles, plus some features that really set us apart. Oh, and check out our changelog to see what we’ve been up to lately.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-5 p-10">
          <RealtimeMultiplayerPresence />
          <AIStructureGeneration />
        </div>
      </div>
    </main>
  );
};

export default CatalogCard;
