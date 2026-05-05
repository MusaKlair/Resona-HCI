"use client";
import Auth from '../../components/Auth';

export default function Page() {
  return <Auth onSuccess={() => window.location.href='/onboarding'} />;
}
