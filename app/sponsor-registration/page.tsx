"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/moving-border";

interface SponsorFormData {
  companyName: string;
  ownerName: string;
  contactNumber: string;
  sponsorshipType: string;
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
    sponsorshipType: "",
    companyDetails: "",
    email: "",
    website: "",
    companySize: "",
    industry: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
  
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] antialiased flex items-center justify-center pt-32 pb-20">
        <BackgroundGradient className="max-w-md mx-auto p-8 rounded-[22px] bg-white dark:bg-zinc-900 text-center">
          <div className="text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-black dark:text-neutral-200 mb-4">
            Registration Successful!
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Thank you for your interest in sponsoring OpenCode events. Our team will contact you within 24 hours to discuss the next steps.
          </p>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </Button>
        </BackgroundGradient>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] antialiased pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-4">
            Sponsor Registration
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in supporting the open-source community. Fill out the form below to become a sponsor for OpenCode events.
          </p>
        </div>

        <BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-black dark:text-neutral-200 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

        
              <div>
                <label htmlFor="ownerName" className="block text-sm font-medium text-black dark:text-neutral-200 mb-2">
                  Owner/Representative Name *
                </label>
                <input
                  type="text"
                  id="ownerName"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter owner/representative name"
                />
              </div>

      
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-black dark:text-neutral-200 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter contact number"
                />
              </div>

        
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black dark:text-neutral-200 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>

        
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-black dark:text-neutral-200 mb-2">
                  Company Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="https://yourcompany.com"
                />
              </div>

  
              <div>
                <label htmlFor="companySize" className="block text-sm font-medium text-black dark:text-neutral-200 mb-2">
                  Company Size
                </label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-black dark:text-neutral-200 mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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

      
              <div className="md:col-span-2">
                <label htmlFor="sponsorshipType" className="block text-sm font-medium text-black dark:text-neutral-200 mb-2">
                  Sponsorship Type *
                </label>
                <select
                  id="sponsorshipType"
                  name="sponsorshipType"
                  value={formData.sponsorshipType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select sponsorship type</option>
                  <option value="monetary">Monetary Support</option>
                  <option value="internship">Internship Opportunities</option>
                  <option value="goodies">Goodies & Swag</option>
    
                </select>
              </div>
            </div>

            {/* Company Details */}
            <div>
              <label htmlFor="companyDetails" className="block text-sm font-medium text-black dark:text-neutral-200 mb-2">
                Company Details *
              </label>
              <textarea
                id="companyDetails"
                name="companyDetails"
                value={formData.companyDetails}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-zinc-800 text-black dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-vertical"
                placeholder="Tell us about your company, its mission, products/services, and why you want to sponsor OpenCode events..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
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
