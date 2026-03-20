// pages/public/Welcome.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // redirect to the actual homepage
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold">Infinity Dream Learning</h1>
      <p>Loading...</p>
    </div>
  );
}