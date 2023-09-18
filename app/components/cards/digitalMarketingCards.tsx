"use client";
import FeatureCard from "@/app/hoc/featureCard";
import Lottie from "lottie-react";
import mOne from "../../lottiefiles/MarketingLottie/OrganicSearch1.json"
import mTwo from "../../lottiefiles/MarketingLottie/SocialMedia2.json"
import mThree from "../../lottiefiles/MarketingLottie/ValuableContent3.json"
import mFour from "../../lottiefiles/MarketingLottie/EmailCompain4.json"
import mFive from "../../lottiefiles/MarketingLottie/GoogleAnalytic5.json"
import mSix from "../../lottiefiles/MarketingLottie/FacebookAd6.json"

export const digitalSearch = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-green-100 to-green-200'>
      <span>
        <br />
        <Lottie 
        animationData={mOne}
        />
      </span>
    </FeatureCard>
  );
};

export const digitalSocial = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-red-100 to-red-200'>
      <span>
        <Lottie 
        animationData={mTwo}
        />
      </span>
    </FeatureCard>
  );
};

export const digitalContent = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-blue-100 to-blue-200'>
      <span>
        <Lottie 
        animationData={mThree}
        />
      </span>
    </FeatureCard>
  );
};

export const digitalEmail = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-yellow-100 to-yellow-200'>
      <span>
        <Lottie 
        animationData={mFour}
        />
      </span>
    </FeatureCard>
  );
};

export const digitalWeb = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-orange-100 to-orange-200'>
      <span>
        <Lottie
        animationData={mFive}
        />
      </span>
    </FeatureCard>
  );
};

export const digitalAdvertising = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-purple-100 to-purple-200'>
      <span>
        <br />
        <Lottie 
        animationData={mSix}
        />
      </span>
    </FeatureCard>
  );
};
