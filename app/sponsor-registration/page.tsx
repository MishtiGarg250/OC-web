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
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload?.error || "Failed to submit form");
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      const message =
        error instanceof Error && error.message
          ? error.message
          : "There was an error submitting your form. Please try again later.";
      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 flex items-center justify-center pt-32 pb-20">
        <BackgroundGradient className="max-w-md mx-auto p-8 rounded-[22px] bg-[#111] text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-purple-400" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
          <p className="text-neutral-400 mb-6">
            Thank you for your interest in sponsoring OpenCode events. Our team
            will contact you within 24 hours to discuss the next steps.
          </p>
          <Button
            borderRadius="1.75rem"
            className="bg-[#111] text-white border-purple-700/20 hover:bg-[#120924]"
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
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-300 via-fuchsia-300 to-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.45)] mb-4">
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
                    className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                        className="flex items-center bg-purple-600/20 border border-purple-500/40 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {label}
                        <button
                          type="button"
                          onClick={() => handleRemoveType(type)}
                          className="ml-2 text-purple-300 hover:text-purple-400 focus:outline-none"
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
                Any thought you would like to share *
              </label>
              <textarea
                id="companyDetails"
                name="companyDetails"
                value={formData.companyDetails}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Share your thoughts…"
                className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-[#1a1a1a] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
              />
            </div>

            <div className="text-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                borderRadius="1.75rem"
                className="bg-[#1a1a1a] text-white border-purple-700/10 hover:bg-[#120924] disabled:opacity-50 disabled:cursor-not-allowed"
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
