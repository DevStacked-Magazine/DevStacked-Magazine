"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, Briefcase } from "lucide-react";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { variants, viewportConfig } from "@/lib/motion-presets";

function FormFields({ initialEmail }: { initialEmail: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: initialEmail,
    message: "",
    phone: "",
    company: "",
  });

  const [errors, setErrors] = useState({ email: "" });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }
    setErrors({ email: "" });
    console.log("Form Submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants.staggerContainer}
      className="mx-auto w-full max-w-4xl"
    >
      <motion.div
        variants={variants.fadeInUp}
        className="mb-8 text-center sm:mb-12"
      >
        <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">
          Get in Touch
        </h2>
        <p className="text-sm text-gray-300 sm:text-base">
          We&apos;d love to hear from you. Send us a message!
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        variants={variants.staggerContainer}
        className="space-y-5 sm:space-y-6"
      >
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {/* Name Input */}
          <motion.div
            variants={variants.fadeInUp}
            className="flex items-center gap-3 rounded-lg border-2 border-white/50 p-3 focus-within:border-red-active transition-colors duration-300 bg-gray-300/5"
          >
            <Briefcase className="w-5 h-5 shrink-0 text-white/50" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent text-white focus:outline-none"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            variants={variants.fadeInUp}
            className={`flex items-center gap-3 rounded-lg border-2 p-3 transition-colors duration-300 bg-gray-300/5 ${errors.email ? "border-red-500" : "border-white/50 focus-within:border-red-active"}`}
          >
            <Mail className="w-5 h-5 shrink-0 text-white/50" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-transparent text-white focus:outline-none"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          <motion.div
            variants={variants.fadeInUp}
            className="flex items-center gap-3 rounded-lg border-2 border-white/50 p-3 focus-within:border-red-active transition-colors duration-300 bg-gray-300/5"
          >
            <Phone className="w-5 h-5 shrink-0 text-white/50" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full bg-transparent text-white focus:outline-none"
            />
          </motion.div>
          <motion.div
            variants={variants.fadeInUp}
            className="flex items-center gap-3 rounded-lg border-2 border-white/50 p-3 focus-within:border-red-active transition-colors duration-300 bg-gray-300/5"
          >
            <Briefcase className="w-5 h-5 shrink-0 text-white/50" />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full bg-transparent text-white focus:outline-none"
            />
          </motion.div>
        </div>

        <motion.div
          variants={variants.fadeInUp}
          className="flex items-start gap-3 rounded-lg border-2 border-white/50 p-3 focus-within:border-red-active transition-colors duration-300 bg-gray-300/5"
        >
          <Mail className="w-5 h-5 shrink-0 mt-1 text-white/50" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-transparent text-white focus:outline-none resize-none"
          />
        </motion.div>

        {errors.email && (
          <p className="text-red-500 text-sm mt-[-10px] ml-2">{errors.email}</p>
        )}

        <motion.div variants={variants.fadeInUp}>
          <Button type="submit" className="w-full rounded-lg" variant="primary">
            Send Message
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}

function FormContainer() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  return <FormFields key={email} initialEmail={email} />;
}

export default function Form() {
  return (
    <Suspense
      fallback={<div className="text-white text-center">Loading form...</div>}
    >
      <FormContainer />
    </Suspense>
  );
}
