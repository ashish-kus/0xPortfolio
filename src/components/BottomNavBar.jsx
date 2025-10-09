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
    <nav className="mx-auto fixed bottom-0 lg:top-0 lg:bottom-auto left-0 right-0 z-9 max-w-full sm:max-w-[75%] lg:max-w-[50%] overflow-hidden">
      <div className="px-1  sm:px-2 md:px-2 sm:py-3">
        <div className="flex items-center justify-around">
          <div className="flex w-full sm:w-auto bg-primary sm:rounded-3xl border border-gray-700 px-2 py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 px-3  rounded-lg transition-all duration-200 flex-1 sm:flex-none   px-4 py-1 font-bold ${
                    isActive
                      ? "text-blue-500"
                      : "text-secondary hover:text-blue-500"
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon
                    size={18}
                    className={` transition-transform mx-1 duration-200 ${
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
      </div>
    </nav>
  );
};

export default BottomNavBar;
