import React from "react";
import {
  MessageCircle,
  Wrench,
  GraduationCap,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  return (
    <footer className="bg-[#181F1C] text-[#D9C5AD] px-6 py-10 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3" onClick={()=>{navigate('/')}}>
          <div className="text-4xl md:text-5xl itali cursor-pointer hover:text-accent transition-all">Folklore</div>

        </div>

        {/* Center: Links */}
        <div className="flex space-x-8 text-sm md:text-base items-center">
          <a onClick={()=>{navigate('/contact')}} className="cursor-pointer flex items-center space-x-1 hover:underline">
            <MessageCircle size={16} />
            <span>LET'S CONNECT</span>
          </a>
          <a onClick={()=>{navigate('/gallery')}} className="cursor-pointer flex items-center space-x-1 hover:underline">
            <Wrench size={16} />
            <span>PORTFOLIO</span>
          </a>
          <a onClick={()=>{navigate('/about')}}  className="cursor-pointer flex items-center space-x-1 hover:underline">
            <GraduationCap size={16} />
            <span>ABOUT</span>
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-5">
          <a href="https://www.instagram.com/folkloreproductions_" target="_blank" rel="noreferrer">
            <Instagram className="text-[#D9C5AD] hover:opacity-80" size={20} />
          </a>
          <a href="https://www.youtube.com/channel/UC2kgNgYUK7z91b8M6CPhomw/posts?pvf=CAI%253D" target="_blank" rel="noreferrer">
            <Youtube className="text-[#D9C5AD] hover:opacity-80" size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="text-[#D9C5AD] hover:opacity-80" size={20} />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-xs text-[#8b9c8e] mt-6">
        © 2024 by FolkLore - Crafting Perfect Moments | <a onClick={()=>{navigate('/privacy-policy')}} className="underline cursor-pointer">Privacy Policy</a>
      </div>
    </footer>
  );
}
