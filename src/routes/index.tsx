import { component$ } from "@builder.io/qwik";
import { FaTelegram, FaXTwitter } from "@qwikest/icons/font-awesome";
import line from "/Line1.png";
import catImage from "/cat.png";
import dex_scanner from "/dex-scanner.svg";
import dex_tool from "/dex-tool.svg";
import logo from "/logo.svg";
export default component$(() => {
  return (
    <div class="min-h-screen  relative overflow-hidden bg-black text-white">
      <div class="flex w-full  px-4 lg:px-10 py-6">
        <img width={112} height={34} src={logo} alt="logo" />
      </div>
      <div
        class="w-full px-4 container mx-auto flex lg:flex-row
      flex-col absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:items-center gap-6"
      >
        <div class="basis-full space-y-6 lg:basis-1/2">
          <h2 class=" text-[#FFE167] leading-none font-normal text-[2.5rem] md:text-[4.25rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[4.25rem]">
            Miguel / Michael,{" "}
          </h2>
          <p class="text-xl md:text-4xl lg:text-2xl xl:text-4xl font-normal text-[#9B9B9B]">
            also known as <span class="text-white">Standing Kitten</span>,{" "}
            <br class="hidden md:block" /> is a kitten that appeared to be
            standing in a video.{" "}
          </p>
          <div class="sm:max-w-[269px] flex basis-1/2 w-1/2 sm:w-full sm:basis-full items-center sm:gap-5 sm:ml-20 2xl:ml-[10rem]">
            <img
              src={line}
              alt="lied"
              width={1}
              class="hidden sm:block "
              height={47}
            />
            <p class="  text-base font-normal sm:text-2xl lg:text-base xl:text-xl 2xl:text-2xl  text-[#A5A5A5]">
              The video of the kitten went viral in 2020.
            </p>
          </div>
        </div>
        <div class="basis-full sm:gap-4 gap-10  lg:basis-1/2 flex flex-col sm:flex-row  lg:flex-row sm:items-center sm:justify-center ">
          <div class=" order-last sm:order-first  flex-col xl:absolute mt-6  lg:left-[2%] lg:-bottom-14 xl:-bottom-2 sm:max-w-max mx-auto   sm:gap-5  grid grid-cols-2 sm:flex gap-8 sm:flex-col ">
            <a
              href="/"
              target="_blank"
              class="text-base gap-3 flex  items-center font-normal text-white transition-all  duration-700 hover:text-[#FFE167]"
            >
              <FaTelegram class=" w-4 h-4" />
              <span>Telegram</span>
            </a>
            <a
              href="/"
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
              <img
                src={dex_tool}
                alt="lied"
                width={20}
                class="block "
                height={20}
              />
              <span>Dextools</span>
            </a>
          </div>
          <img
            width={651}
            class="max-w-[214px] block mx-auto sm:max-w-[320px] lg:max-w-[345px] xl:max-w-[480px] 2xl:max-w-[651px]"
            height={739}
            src={catImage}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
});
