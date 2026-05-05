"use client";
import HomeFeed from '../../components/HomeFeed';

export default function Page() {
  return <HomeFeed onViewDetail={() => window.location.href='/contentdetail'} />;
}
