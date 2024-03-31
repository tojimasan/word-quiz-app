import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => (
  <div className="flex justify-between w-full p-4">
    <span className="font-bold text-slate-700">Word Quiz App</span>
    <Button variant="ghost" size="icon">
      <Menu className="h-4 w-4" />
    </Button>
  </div>
);
