import type { Route } from "./+types/home";
import Welcome from "../pages/public/Welcome";

// Added this line
export { default } from "../pages/public/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Infinity Dream Learning" },
    { name: "description", content: "AI-powered learning platform" },
  ];
}

export default function Home() {
  return <Welcome />;
}