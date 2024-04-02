import { component$ } from "@builder.io/qwik";
import logo from "../media/logo.svg";
export const Header = component$(() => {
  return (
    <div class="flex w-full   px-4 lg:px-10 py-6">
      <img width={112} height={34} src={logo} alt="logo" />
    </div>
  );
});
