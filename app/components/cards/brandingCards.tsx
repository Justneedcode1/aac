"use client";
import FeatureCard from "@/app/hoc/featureCard";
import Lottie from "lottie-react"
import bOne from "../../lottiefiles/brandingLottie/BrandingDef1.json"
import bTwo from "../../lottiefiles/brandingLottie/DesignLogo2.json"
import bThree from "../../lottiefiles/brandingLottie/CommunicationStrategy3.json"
import bFour from "../../lottiefiles/brandingLottie/experience4.json"
import bFive from "../../lottiefiles/brandingLottie/theMarket5.json"
import { AiOutlineFolderView } from "react-icons/ai";

export const BrandingValues = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-green-100 to-green-200'>
      <span>
      <Lottie 
      style={{ height: "95%", width: "100%" }}
      animationData={bOne}
      />
      </span>
    </FeatureCard>
  );
};

export const BrandingDesign = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-red-100 to-red-200'>
      <span>
      <Lottie 
      style={{ height: "95%", width: "100%" }}
      animationData={bTwo}
      />
      </span>
    </FeatureCard>
  );
};

export const BrandingCraft = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-blue-100 to-blue-200'>
      <span>
      <Lottie 
      style={{ height: "80%", width: "100%" }}
      animationData={bThree}
      />
      </span>
    </FeatureCard>
  );
};

export const BrandingExperience = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-yellow-100 to-yellow-200'>
      <span>
      <Lottie 
      style={{ height: "80%", width: "100%" }}
      animationData={bFour}
      />
      </span>
    </FeatureCard>
  );
};

export const BrandingAnalysis = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-purple-100 to-purple-200'>
      <span>
      <Lottie 
      style={{ height: "80%", width: "100%" }}
      animationData={bFive}
      />
      </span>
    </FeatureCard>
  );
};
