// routes/home.tsx
import type { Route } from "./+types/home";
import HomePage from "../pages/public/Home";

export { default } from "../pages/public/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Infinity Dream Learning" },
    { name: "description", content: "AI-powered learning platform" },
  ];
}