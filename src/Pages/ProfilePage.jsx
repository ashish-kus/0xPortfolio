import React, { useRef, useState } from "react";
import { Mail, Github, Linkedin, Globe, Share2, Loader2 } from "lucide-react";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
import ActionButtonList from "../components/ActionButtonList.jsx";
import LatestBlogs from "../components/LatestBlogs.jsx";

const ProfilePage = ({ basics }) => {
  const cardRef = useRef(null);
  const [isSharing, setIsSharing] = useState(false);
  const {
    name,
    title,
    tags,
    email,
    github,
    linkedin,
    x,
    phone,
    instagram,
    telegram,
    whatsapp,
    portfolio,
  } = basics;

  const handleShare = async () => {
    setIsSharing(true);
    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        cacheBust: true,
        useCORS: true,
      });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], `${name}_Profile.png`, {
        type: "image/png",
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `${name}'s Profile`,
          text: "Check out this developer profile!",
          files: [file],
        });
      } else {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${name}_Profile.png`;
        link.click();
      }
    } catch (error) {
      console.error("Error sharing profile:", error);
      alert("Couldn't capture image. Try again or use another browser.");
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="flex items-center justify-center px-6 overflow-hidden">
        <div ref={cardRef} className="bg-primary relative p-4">
          {/* Profile Image */}
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {name}
          </h2>
          <p className="text-lg sm:text-xl font-bold mt-2">{title}</p>

          <div className="flex-wrap gap-2 mt-4 flex ">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm sm:text-base rounded-md border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
            {/* Social Links */}
            <div className="flex flex-col gap-3 text-gray-400">
              <a
                href={`mailto:${email}`}
                className="hover:text-white transition flex items-center gap-2"
              >
                <Mail size={18} />
                {email}
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition flex items-center gap-2"
              >
                <Github size={18} />
                {github}
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition flex items-center gap-2"
              >
                <Linkedin size={18} />
                {linkedin}
              </a>
              <a
                href="https://ashishkus.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition flex items-center gap-2"
              >
                <Globe size={18} />
                {portfolio}
              </a>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              <QRCode
                value="https://ashishkus.com"
                bgColor="#111"
                fgColor="#ffffff"
                size={110}
              />
            </div>
          </div>
          {/* Action Buttons */}
          <ActionButtonList />
          <button
            onClick={handleShare}
            disabled={isSharing}
            className={`absolute top-0 right-1 p-3 rounded-full shadow-lg transition ${
              isSharing
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-200"
            }`}
            title="Share this profile as image"
          >
            {isSharing ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Share2 size={20} />
            )}
          </button>
        </div>

        {/* Floating Share Button */}
      </div>

      <LatestBlogs />
    </div>
  );
};

export default ProfilePage;
