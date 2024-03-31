import { Circle } from "lucide-react";

export const Correct = () => (
  <div className="absolute top-0 left-0 w-screen h-screen z-10 bg-white/90 flex flex-col justify-center items-center gap-2 text-lime-600">
    <Circle className="w-16 h-16 " />
    <p>Correct 🎉</p>
  </div>
);
