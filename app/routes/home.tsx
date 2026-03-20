// Home.tsx
import welcome from "./welcome" //  Correct relative path

export function meta() {
  return [
    { title: "Infinity Dream Learning" },
    { name: "description", content: "Welcome to Infinity Dream Learning Platform" },
  ];
}

export default function Home() {
  return <welcome />; // Renders the Welcome / splash page
}