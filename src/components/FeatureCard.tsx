import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-[#3468C0] p-8 rounded-2xl  ">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 border-2 border-black">
        <Icon className="w-6 h-6 text-black" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}

//[#FFAE00]
