import { X } from "lucide-react";

export const InCorrect = () => (
  <div className="absolute top-0 left-0 w-screen h-screen z-10 bg-white/90 flex flex-col justify-center items-center gap-2 text-red-600">
    <X className="w-16 h-16 " />
    <p>Incorrect 😞</p>
  </div>
);
