"use client";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Products />
    </main>
  );
}
