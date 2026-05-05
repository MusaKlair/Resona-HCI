"use client";
import OnboardingWizard from '../../components/OnboardingWizard';

export default function Page() {
  return <OnboardingWizard onComplete={() => window.location.href='/home'} />;
}
