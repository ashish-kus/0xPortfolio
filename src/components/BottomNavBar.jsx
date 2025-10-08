import React, { useState } from "react";
import {
  Home,
  Search,
  FolderDot,
  Dumbbell,
  BookMarked,
  User,
  Menu,
  Settings,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home", to: "/" },
    { id: "projects", icon: FolderDot, label: "projects", to: "/projects" },

    { id: "messages", icon: MessageCircle, label: "Connect", to: "/connect" },
    { id: "profile", icon: User, label: "Profile", to: "/profile" },
  ];

  return (
    <nav className="mx-auto fixed bottom-0  left-0 right-0 bg-primary/95  border-t border-gray-700 z-9 max-w-full sm:max-w-[75%] lg:max-w-[50%]">
      <div className="px-1 py-2 sm:px-2 md:px-4  sm:py-3">
        <div className="flex items-center justify-between">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <Link
                key={item.id}
                to={item.to}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1 px-3  rounded-lg transition-all duration-200 flex-1 sm:flex-none sm:px-1 ${
                  isActive
                    ? "text-blue-500"
                    : "text-secondary hover:text-blue-500"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon
                  className={` transition-transform duration-200  ${
                    isActive ? "scale-110" : ""
                  }`}
                />
                <span
                  className={`text-xs sm:text-base hidden xs:block sm:block ${
                    isActive ? "text-blue-500" : ""
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;
