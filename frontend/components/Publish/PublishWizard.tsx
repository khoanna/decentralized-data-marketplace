"use client";
import { ArrowLeft, ArrowRight, Check, Database, DollarSign, FileText, Globe, Link, Loader, MapPin, Rocket, Settings, Upload } from "lucide-react";

import { useState } from "react";
import MetadataStep from "./MetadataStep";
import AssetLocationStep from "./AssetLocationStep";
import PricingStep from "./PricingStep";
import AdvancedSettingsStep from "./AdvancedSettingsStep";
import DeployProgress from "./DeployProgress";
import Button from "@/components/Common/Button";

export interface PublishFormData {
  // Metadata
  title: string;
  description: string;
  tags: string[];
  author: string;
  category: string;

  // Asset Location
  locationType: "url" | "ipfs" | "arweave" | "upload";
  locationValue: string;
  uploadedFile?: File;

  // Pricing
  pricingModel: "free" | "fixed" | "dynamic";
  price: number;
  license: string;

  // Advanced
  accessType: "download" | "compute";
  allowList: string[];
  whitelistedAlgorithms: string[];
  sampleAvailable: boolean;
  expirationDate?: string;
}

const INITIAL_FORM_DATA: PublishFormData = {
  title: "",
  description: "",
  tags: [],
  author: "",
  category: "",
  locationType: "url",
  locationValue: "",
  pricingModel: "fixed",
  price: 0,
  license: "CC0",
  accessType: "download",
  allowList: [],
  whitelistedAlgorithms: [],
  sampleAvailable: true,
};

const PublishWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<PublishFormData>(INITIAL_FORM_DATA);

  const steps = [
    { number: 1, title: "Metadata", icon: <FileText className="w-6 h-6" /> },
    { number: 2, title: "Asset Location", icon: <MapPin className="w-6 h-6" /> },
    { number: 3, title: "Pricing", icon: <DollarSign className="w-6 h-6" /> },
    { number: 4, title: "Advanced", icon: <Settings className="w-6 h-6" /> },
    { number: 5, title: "Deploy", icon: <Rocket className="w-6 h-6" /> },
  ];

  const updateFormData = (updates: Partial<PublishFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.title && formData.description && formData.category;
      case 2:
        return formData.locationValue || formData.uploadedFile;
      case 3:
        return formData.pricingModel === "free" || formData.price > 0;
      case 4:
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (canProceed() && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-12 reveal">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                    currentStep === step.number
                      ? "border-yuzu bg-yuzu/20 text-yuzu scale-110"
                      : currentStep > step.number
                        ? "border-success bg-success/20 text-success"
                        : "border-white/20 bg-white/5 text-gray-400"
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    step.icon
                  )}
                </div>
                <span
                  className={`font-mono text-xs mt-2 transition-colors ${
                    currentStep === step.number
                      ? "text-yuzu"
                      : currentStep > step.number
                        ? "text-success"
                        : "text-gray-500"
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 transition-colors ${
                    currentStep > step.number ? "bg-success" : "bg-white/10"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="glass-card p-8 mb-8 min-h-[500px] reveal delay-100">
        {currentStep === 1 && (
          <MetadataStep formData={formData} updateFormData={updateFormData} />
        )}
        {currentStep === 2 && (
          <AssetLocationStep formData={formData} updateFormData={updateFormData} />
        )}
        {currentStep === 3 && (
          <PricingStep formData={formData} updateFormData={updateFormData} />
        )}
        {currentStep === 4 && (
          <AdvancedSettingsStep formData={formData} updateFormData={updateFormData} />
        )}
        {currentStep === 5 && <DeployProgress formData={formData} />}
      </div>

      {/* Navigation Buttons */}
      {currentStep < 5 && (
        <div className="flex items-center justify-between reveal delay-200">
          <Button
            variant="ghost"
            size="lg"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>

          <Button
            variant="primary"
            size="lg"
            onClick={handleNext}
            disabled={!canProceed()}
          >
            {currentStep === 4 ? "Deploy" : "Next"}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PublishWizard;
