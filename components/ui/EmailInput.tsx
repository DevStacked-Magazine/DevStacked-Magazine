"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Image from "next/image";
import arrow from "@/public/icons/arrow.svg";

export default function Page({ className }: { className: string }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNavigation = (e: React.MouseEvent) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setError(false);
      router.push(`/contact?email=${encodeURIComponent(email)}`);
    } else {
      setError(true);
      console.log("Invalid email");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md gap-2">
      <div
        className={`flex items-center w-full border-2 rounded-3xl p-1 transition-all
          ${error ? "border-red-500" : "border-white/30 focus-within:border-white/60"} 
          ${className}`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(false);
          }}
          placeholder="Enter your email"
          className="w-full bg-transparent px-4 py-2 text-white focus:outline-none"
        />
        <Button
          className="rounded-3xl! py-2 px-4!"
          href="/contact"
          onClick={handleNavigation}
        >
          <Image src={arrow} alt="Arrow" width={18} height={18} />
        </Button>
      </div>
      {error && (
        <p className="text-red-500 text-xs ml-4">Please enter a valid email.</p>
      )}
    </div>
  );
}
