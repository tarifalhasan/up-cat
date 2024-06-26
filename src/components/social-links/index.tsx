import { component$ } from "@builder.io/qwik";
import { FaTelegram, FaXTwitter } from "@qwikest/icons/font-awesome";
import dex_scanner from "../../media/dex-scanner.svg";
import dex_tool from "../../media/dex-tool.svg";
export const SocialLinks = component$(() => {
  return (
    <div class=" relative z-50 order-last sm:order-first  flex-col   sm:max-w-max   sm:gap-5  grid grid-cols-2 sm:flex gap-8 sm:flex-col ">
      <a
        href="/"
        target="_blank"
        class="text-base gap-3 flex  items-center font-normal text-white transition-all  duration-700 hover:text-[#FFE167]"
      >
        <FaTelegram class=" w-4 h-4" />
        <span>Telegram</span>
      </a>
      <a
        href="https://twitter.com/upcat_solana"
        target="_blank"
        class="text-base gap-3 flex  items-center font-normal text-white transition-all duration-700 hover:text-[#FFE167]"
      >
        <FaXTwitter class=" w-4 h-4" />
        <span>X</span>
      </a>
      <a
        href="/"
        target="_blank"
        class="text-base gap-3 flex basis-1/2 w-1/2 sm:w-full sm:basis-full items-center font-normal text-white transition-all hover:fill-[#ffe167] duration-700 hover:text-[#FFE167]"
      >
        <img
          src={dex_scanner}
          alt="lied"
          width={20}
          class=" w-5 h-5 block "
          height={20}
        />
        <span>Dexscreener</span>
      </a>
      <a
        href="/"
        target="_blank"
        class="text-base gap-3 flex basis-1/2 w-1/2 sm:w-full sm:basis-full items-center font-normal text-white transition-all hover:fill-[#ffe167] duration-700 hover:text-[#FFE167]"
      >
        <img src={dex_tool} alt="lied" width={20} class="block " height={20} />
        <span>Dextools</span>
      </a>
    </div>
  );
});
