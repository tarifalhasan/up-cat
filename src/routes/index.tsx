import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import img1 from "../media/1.webp";
import img2 from "../media/2.webp";
import line from "../media/Line1.webp";
import catImage from "../media/cat.webp";

import { Header } from "~/components/header";
import { SocialLinks } from "~/components/social-links";

export default component$(() => {
  return (
    <>
      <div class=" xl:hidden">
        <Header />
      </div>
      <div class="min-h-screen flex flex-col items-center justify-center h-full w-full   relative  bg-black text-white">
        <div class="hidden xl:block">
          <Header />
        </div>
        <div
          class="w-full px-4 container mx-auto flex lg:flex-row
      flex-col xl:absolute xl:left-1/2 top-1/2 xl:-translate-y-1/2 xl:-translate-x-1/2 lg:items-center gap-6"
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
            <div class=" lg:block hidden">
              <SocialLinks />
            </div>
          </div>
          <div class="basis-full sm:gap-4 gap-10  lg:basis-1/2 flex flex-col sm:flex-row  lg:flex-row sm:items-center sm:justify-center ">
            <div class=" lg:hidden">
              <SocialLinks />
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
      <img
        src={img1}
        alt="polygon"
        width={64}
        height={64}
        class=" absolute top-0 right-0"
      />
      <img
        src={img2}
        alt="polygon"
        width={64}
        height={64}
        class=" absolute bottom-0 left-0"
      />
      <div class="absolute top-0 right-[25%] lg:right-[10%] h-[85px] w-[13px] bg-[#161616]"></div>
      <div class="absolute z-20 bottom-0 left-[25%] lg:left-[8%] lg:hidden xl:block h-[45px] xl:h-[85px] w-[13px] bg-[#161616]"></div>
      <div class="absolute z-20 top-0 right-[40%] lg:right-[15%] h-[45px] xl:h-[92px] w-[13px] bg-[#161616]"></div>
      <div class="absolute hidden sm:block bottom-0  left-1/2 h-[50px]  xl:h-[92px] w-[13px] bg-[#161616]"></div>
    </>
  );
});

export const head: DocumentHead = {
  // This will be used to resolve the <title> of the page
  title: "up cat",

  meta: [
    {
      name: "description",
      content: "The video of the kitten went viral in 2020. ",
    },

    // Open graph
    {
      property: "og:title",
      content: "up cat",
    },
    {
      property: "og:description",
      content:
        "also known as Standing Kitten, is a kitten that appeared to be standing in a video. ",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://example.com/about",
    },
  ],
};
