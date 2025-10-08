import {
  Facebook,
  Twitter,
  MessageCircle,
  Instagram,
  Mail,
  Send,
  Github,
  Linkedin,
} from "lucide-react";

export default function ContactPage() {
  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      color: "hover:bg-blue-600",
    },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-sky-500" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "#",
      color: "hover:bg-green-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "hover:bg-pink-600",
    },
    { icon: Mail, label: "Email", href: "#", color: "hover:bg-gray-600" },
    { icon: Send, label: "Telegram", href: "#", color: "hover:bg-blue-500" },
    { icon: Github, label: "GitHub", href: "#", color: "hover:bg-gray-800" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="text-center">
        <div className="flex gap-6 justify-center flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className={`w-16 h-16 bg-gray-600 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:shadow-xl hover:scale-110 group`}
            >
              <social.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
