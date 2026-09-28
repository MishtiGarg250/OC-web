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

const contactFields = [
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
] as const;

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
  const [requestId, setRequestId] = useState("");

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
      setRequestId(payload.requestId || "");
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
      <div className="min-h-screen bg-[radial-gradient(circle_at_50%_10%,rgba(102,91,109,0.2),rgba(41,25,32,0.96)_40%,rgba(27,22,32,1)),linear-gradient(180deg,#1B1620_0%,#291920_50%,#1B1620_100%)] text-[#E6D8DB] flex items-center justify-center pt-32 pb-20">
        <BackgroundGradient className="max-w-md mx-auto p-8 rounded-[22px] bg-[#1B1620] text-center border border-[#665B6D]/30">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-[#CF9690]" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-[#FEF3ED]">Registration Successful!</h2>
          <p className="text-[#C9BCC4] mb-6">
            Thank you for your interest in sponsoring OpenCode&apos;26. A
            confirmation has been sent to your email, and our team will contact
            you about the next steps from geekhaven@iiita.ac.in.
          </p>
          {requestId && (
            <p className="mb-6 rounded-lg border border-[#CF9690]/30 bg-[#CF9690]/10 px-4 py-3 text-sm text-[#FEF3ED]">
              Reference ID: <strong>{requestId}</strong>
            </p>
          )}
          <Button
            borderRadius="1.75rem"
            className="bg-[#291920] text-[#FEF3ED] border border-[#665B6D]/40 hover:bg-[#312C34]"
            onClick={() => (window.location.href = "/")}
          >
            Return to Home
          </Button>
        </BackgroundGradient>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_10%,rgba(102,91,109,0.2),rgba(41,25,32,0.96)_40%,rgba(27,22,32,1)),linear-gradient(180deg,#1B1620_0%,#291920_50%,#1B1620_100%)] text-[#E6D8DB] antialiased pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FEF3ED] via-[#CF9690] to-[#E8C0BB] drop-shadow-[0_4px_24px_rgba(207,150,144,0.35)] mb-4">
            Sponsor Registration
          </h1>
          <p className="text-lg text-[#C9BCC4] max-w-3xl mx-auto">
            Join us in supporting the open-source community. Fill out the form
            below to become a sponsor for OpenCode&apos;26.
          </p>
        </div>

        <BackgroundGradient className="rounded-[22px] bg-[#1B1620]/95 backdrop-blur-md p-8 shadow-xl border border-[#665B6D]/40">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-[#E6D8DB] mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleInputChange}
                    required={field.label.includes("*")}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-[#665B6D]/30 bg-[#291920]/80 text-[#FEF3ED] placeholder-[#8E8391] focus:ring-2 focus:ring-[#CF9690] focus:border-transparent transition"
                  />
                </div>
              ))}

              {/* Company size */}
              <div>
                <label
                  htmlFor="companySize"
                  className="block text-sm font-medium text-[#E6D8DB] mb-2"
                >
                  Company Size
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#665B6D]/30 bg-[#291920]/80 text-[#FEF3ED] focus:ring-2 focus:ring-[#CF9690] focus:border-transparent transition"
                >
                  <option value="" className="bg-[#1B1620] text-[#FEF3ED]">Select company size</option>
                  <option value="1-10" className="bg-[#1B1620] text-[#FEF3ED]">1-10 employees</option>
                  <option value="11-50" className="bg-[#1B1620] text-[#FEF3ED]">11-50 employees</option>
                  <option value="51-200" className="bg-[#1B1620] text-[#FEF3ED]">51-200 employees</option>
                  <option value="201-1000" className="bg-[#1B1620] text-[#FEF3ED]">201-1000 employees</option>
                  <option value="1000+" className="bg-[#1B1620] text-[#FEF3ED]">1000+ employees</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-[#E6D8DB] mb-2"
                >
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#665B6D]/30 bg-[#291920]/80 text-[#FEF3ED] focus:ring-2 focus:ring-[#CF9690] focus:border-transparent transition"
                >
                  <option value="" className="bg-[#1B1620] text-[#FEF3ED]">Select industry</option>
                  <option value="Technology" className="bg-[#1B1620] text-[#FEF3ED]">Technology</option>
                  <option value="Finance" className="bg-[#1B1620] text-[#FEF3ED]">Finance</option>
                  <option value="Healthcare" className="bg-[#1B1620] text-[#FEF3ED]">Healthcare</option>
                  <option value="Education" className="bg-[#1B1620] text-[#FEF3ED]">Education</option>
                  <option value="E-commerce" className="bg-[#1B1620] text-[#FEF3ED]">E-commerce</option>
                  <option value="Manufacturing" className="bg-[#1B1620] text-[#FEF3ED]">Manufacturing</option>
                  <option value="Consulting" className="bg-[#1B1620] text-[#FEF3ED]">Consulting</option>
                  <option value="Other" className="bg-[#1B1620] text-[#FEF3ED]">Other</option>
                </select>
              </div>

              {/* Sponsorship type with tags */}
              <div className="md:col-span-2">
                <label
                  htmlFor="sponsorshipType"
                  className="block text-sm font-medium text-[#E6D8DB] mb-2"
                >
                  Sponsorship Type *
                </label>
                <select
                  id="sponsorshipType"
                  name="sponsorshipType"
                  onChange={handleSelectChange}
                  value=""
                  required={formData.sponsorshipType.length === 0}
                  className="w-full px-4 py-3 rounded-lg border border-[#665B6D]/30 bg-[#291920]/80 text-[#FEF3ED] focus:ring-2 focus:ring-[#CF9690] focus:border-transparent transition"
                >
                  <option value="" className="bg-[#1B1620] text-[#FEF3ED]">Select sponsorship type</option>
                  {sponsorshipOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#1B1620] text-[#FEF3ED]">
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
                        className="flex items-center bg-[#60434A]/50 border border-[#CF9690]/40 text-[#FEF3ED] px-3 py-1 rounded-full text-sm"
                      >
                        {label}
                        <button
                          type="button"
                          onClick={() => handleRemoveType(type)}
                          className="ml-2 text-[#CF9690] hover:text-[#FEF3ED] focus:outline-none"
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
                className="block text-sm font-medium text-[#E6D8DB] mb-2"
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
                className="w-full px-4 py-3 rounded-lg border border-[#665B6D]/30 bg-[#291920]/80 text-[#FEF3ED] placeholder-[#8E8391] focus:ring-2 focus:ring-[#CF9690] focus:border-transparent resize-vertical transition"
              />
            </div>

            <div className="text-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                borderRadius="1.75rem"
                className="bg-gradient-to-r from-[#9D767E] via-[#CF9690] to-[#E8C0BB] text-[#1B1620] font-semibold border-none hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#CF9690]/25"
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
