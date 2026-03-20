// Home.tsx
import Welcome from "./Welcome" //  Correct relative path

export function meta() {
  return [
    { title: "Infinity Dream Learning" },
    { name: "description", content: "Welcome to Infinity Dream Learning Platform" },
  ];
}

export default function Home() {
  return <Welcome />; // Renders the Welcome / splash page
}