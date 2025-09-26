'use client';
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
export default function About() {
  return (
    <div>
        <Header />
      <h1>About Us</h1>
        <Button size="small" shape="rounded-sm"/>
        <Button size="medium" shape="rounded-md"/>
        <Button size="large" shape="rounded-full"/>
    </div>
  );
}