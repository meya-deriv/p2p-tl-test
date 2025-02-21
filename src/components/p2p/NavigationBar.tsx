import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingBag, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  activeRoute?: string;
  onNavigate?: (route: string) => void;
}

const NavigationBar = ({
  activeRoute = "/p2p",
  onNavigate = () => {},
}: Props) => {
  const navigationItems = [
    {
      label: "Home",
      icon: <Home className="h-5 w-5" />,
      route: "/p2p",
    },
    {
      label: "Orders",
      icon: <ShoppingBag className="h-5 w-5" />,
      route: "/p2p/orders",
    },
    {
      label: "My Ads",
      icon: <FileText className="h-5 w-5" />,
      route: "/p2p/ads",
    },
    {
      label: "Profile",
      icon: <User className="h-5 w-5" />,
      route: "/p2p/profile",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:relative md:border-t-0 md:px-6 md:py-4">
      <div className="flex justify-around md:justify-end md:space-x-4">
        {navigationItems.map((item) => (
          <TooltipProvider key={item.route}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={activeRoute === item.route ? "default" : "ghost"}
                  size="sm"
                  className="flex flex-col md:flex-row items-center gap-1 md:gap-2"
                  onClick={() => onNavigate(item.route)}
                  asChild
                >
                  <Link to={item.route}>
                    {item.icon}
                    <span className="text-xs md:text-sm">{item.label}</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Go to {item.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
