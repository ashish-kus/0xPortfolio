import {
  PhoneCall,
  Twitter,
  MessageCircle,
  Instagram,
  Mail,
  Send,
  Github,
  Linkedin,
} from "lucide-react";

export default function ContactPage({ basics }) {
  const { email, github, linkedin, x, phone, instagram, telegram, whatsapp } =
    basics;

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${email}`,
      color: "hover:bg-red-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: github,
      color: "hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: linkedin,
      color: "hover:bg-blue-700",
    },
    {
      icon: Twitter,
      label: "Twitter / X",
      href: x,
      color: "hover:bg-sky-500",
    },
    {
      icon: Send,
      label: "Telegram",
      href: telegram,
      color: "hover:bg-blue-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: whatsapp,
      color: "hover:bg-green-500",
    },
    {
      icon: PhoneCall,
      label: "Call",
      href: `tel:${phone}`,
      color: "hover:bg-green-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: instagram,
      color: "hover:bg-pink-600",
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
              target="_blank"
              rel="noopener noreferrer"
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
