"use client";
import FeatureCard from "@/app/hoc/featureCard";
import Lottie from "lottie-react";
import sOne from "../../lottiefiles/StrategyLottie/planStrategy1.json"
import sTwo from "../../lottiefiles/StrategyLottie/competetiveAnalysis2.json"
import sThree from "../../lottiefiles/StrategyLottie/automationTools3.json"
import sFour from "../../lottiefiles/StrategyLottie/data-Driven4.json"
import sFive from "../../lottiefiles/StrategyLottie/budgets5.json"

export const strategyPlanning = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-green-100 to-green-200'>
       <span>
        <Lottie 
        animationData={sOne}
        />
      </span>
    </FeatureCard>
  );
};

export const strategyMarket = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-red-100 to-red-200'>
       <span>
        <Lottie 
        animationData={sTwo}
        />
      </span>
    </FeatureCard>
  );
};

export const strategyAutomation = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-blue-100 to-blue-200'>
       <span>
        <Lottie 
        animationData={sThree}
        />
      </span>
    </FeatureCard>
  );
};

export const strategyPerformance = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-yellow-100 to-yellow-200'>
       <span>
        <Lottie 
        animationData={sFour}
        />
      </span>
    </FeatureCard>
  );
};

export const strategyBudgeting = (id: number) => {
  return (
    <FeatureCard id={id} gradient='from-orange-100 to-orange-200'>
      <span>
        <Lottie 
        animationData={sFive}
        />
      </span>
    </FeatureCard>
  );
};
