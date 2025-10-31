"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/moving-border";
import { CheckCircle } from "lucide-react";

interface SponsorFormData {
  companyName: string;
  ownerName: string;
  contactNumber: string;
  sponsorshipType: string[];
  companyDetails: string;
  email: string;
  website: string;
  companySize: string;
  industry: string;
}

export default function SponsorRegistration() {
  const [formData, setFormData] = useState<SponsorFormData>({
    companyName: "",
    ownerName: "",
    contactNumber: "",
    sponsorshipType: [],
    companyDetails: "",
    email: "",
    website: "",
    companySize: "",
    industry: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sponsorshipOptions = [
    { value: "monetary", label: "Monetary Support" },
    { value: "internship", label: "Internship Opportunities" },
    { value: "goodies", label: "Goodies & Swag" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value && !formData.sponsorshipType.includes(value)) {
      setFormData((prev) => ({
        ...prev,
        sponsorshipType: [...prev.sponsorshipType, value],
      }));
    }
  };

  const handleRemoveType = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      sponsorshipType: prev.sponsorshipType.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 flex items-center justify-center pt-32 pb-20">
        <BackgroundGradient className="max-w-md mx-auto p-8 rounded-[22px] bg-[#111] text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-blue-500" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
          <p className="text-neutral-400 mb-6">
            Thank you for your interest in sponsoring OpenCode events. Our team
            will contact you within 24 hours to discuss the next steps.
          </p>
          <Button
            borderRadius="1.75rem"
            className="bg-[#111] text-white border-neutral-700 hover:bg-[#222]"
            onClick={() => (window.location.href = "/")}
          >
            Return to Home
          </Button>
        </BackgroundGradient>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 mb-4">
            Sponsor Registration
          </h1>
          <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
            Join us in supporting the open-source community. Fill out the form
            below to become a sponsor for OpenCode events.
          </p>
        </div>

        <BackgroundGradient className="rounded-[22px] bg-[#111] p-8 shadow-xl border border-neutral-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "companyName",
                  label: "Company Name *",
                  type: "text",
                  placeholder: "Enter your company name",
                },
                {
                  id: "ownerName",
                  label: "Owner/Representative Name *",
                  type: "text",
                  placeholder: "Enter owner/representative name",
                },
                {
                  id: "contactNumber",
                  label: "Contact Number *",
                  type: "tel",
                  placeholder: "Enter contact number",
                },
                {
                  id: "email",
                  label: "Email Address *",
                  type: "email",
                  placeholder: "Enter email address",
                },
                {
                  id: "website",
                  label: "Company Website",
                  type: "url",
                  placeholder: "https://yourcompany.com",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-neutral-300 mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={(formData as any)[field.id]}
                    onChange={handleInputChange}
                    required={field.label.includes("*")}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              ))}

              {/* Company size */}
              <div>
                <label
                  htmlFor="companySize"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Company Size
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Sponsorship type with tags */}
              <div className="md:col-span-2">
                <label
                  htmlFor="sponsorshipType"
                  className="block text-sm font-medium text-neutral-300 mb-2"
                >
                  Sponsorship Type *
                </label>
                <select
                  id="sponsorshipType"
                  name="sponsorshipType"
                  onChange={handleSelectChange}
                  value=""
                  required={formData.sponsorshipType.length === 0}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select sponsorship type</option>
                  {sponsorshipOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* Tag-style chips */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {formData.sponsorshipType.map((type) => {
                    const label =
                      sponsorshipOptions.find((opt) => opt.value === type)
                        ?.label || type;
                    return (
                      <div
                        key={type}
                        className="flex items-center bg-blue-600/20 border border-blue-500/40 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {label}
                        <button
                          type="button"
                          onClick={() => handleRemoveType(type)}
                          className="ml-2 text-blue-300 hover:text-blue-400 focus:outline-none"
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Company details */}
            <div>
              <label
                htmlFor="companyDetails"
                className="block text-sm font-medium text-neutral-300 mb-2"
              >
                Company Details *
              </label>
              <textarea
                id="companyDetails"
                name="companyDetails"
                value={formData.companyDetails}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Tell us about your company, its mission, and why you want to sponsor OpenCode..."
                className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              />
            </div>

            <div className="text-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                borderRadius="1.75rem"
                className="bg-[#1a1a1a] text-white border-neutral-700 hover:bg-[#222] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
          </form>
        </BackgroundGradient>
      </div>
    </div>
  );
}
