import { Payment } from "@/app/lib/types";

export const sendPayment = async (payload: Payment) => {
  const data = await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payload }),
  });

  if (data.status >= 400) {
    throw new Error(`Error ${data.statusText}`);
  }

  return await data.json();
};
