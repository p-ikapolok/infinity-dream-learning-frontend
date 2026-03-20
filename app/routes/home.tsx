import type { Route } from "./+types/home";
export { default } from "../pages/public/Home"; // this is all you need

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Infinity Dream Learning" },
    { name: "description", content: "AI-powered learning platform" },
  ];
}