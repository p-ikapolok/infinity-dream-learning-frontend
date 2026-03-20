import type { Route } from "./+types/home";
import Welcome from "../pages/public/Welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Infinity Dream Learning" },
    { name: "description", content: "AI-powered learning platform" },
  ];
}

export default function Home() {
  return <Welcome />;
}