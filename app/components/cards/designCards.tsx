"use client";
import FeatureCard from "@/app/hoc/featureCard";
import Lottie from "lottie-react";
import dOne from "../../lottiefiles/designLottie/VisualAssets1.json"
import dTwo from "../../lottiefiles/designLottie/Multimedia2.json"
import dThree from "../../lottiefiles/designLottie/buildingWebsites3.json"
import dFour from "../../lottiefiles/designLottie/creatVideo4.json"
import dFive from "../../lottiefiles/designLottie/craftingCompeling5.json"


export const designGraphic = (id: number) => {
  return (
    <FeatureCard id={id} gradient="from-green-100 to-green-200">
      <span>
      <Lottie 
      style={{ height: "95%", width: "100%" }}
      animationData={dOne}
      />
      </span>
    </FeatureCard>
  );
};

export const designCreation = (id: number) => {
  return (
    <FeatureCard id={id} gradient="from-red-100 to-red-200">
      <span>
      <Lottie 
      style={{ height: "95%", width: "100%" }}
      animationData={dTwo}
      />
      </span>
    </FeatureCard>
  );
};

export const designWeb = (id: number) => {
  return (
    <FeatureCard id={id} gradient="from-blue-100 to-blue-200">
      <span>
      <Lottie 
      style={{ height: "95%", width: "100%" }}
      animationData={dThree}
      />
      </span>
    </FeatureCard>
  );
};

export const designVideo = (id: number) => {
  return (
    <FeatureCard id={id} gradient="from-yellow-100 to-yellow-200">
      <span>
      <Lottie 
      style={{ height: "95%", width: "100%" }}
      animationData={dFour}
      />
      </span>
    </FeatureCard>
  );
};

export const designCopy = (id: number) => {
  return (
    <FeatureCard id={id} gradient="from-orange-100 to-orange-200">
      <span>
      <Lottie 
      style={{ height: "95%", width: "100%" }}
      animationData={dFive}
      />
      </span>
    </FeatureCard>
  );
};
