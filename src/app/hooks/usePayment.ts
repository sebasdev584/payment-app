import { useCallback, useState } from "react";
import { Payment } from "../lib/types";
import { sendPayment } from "@/service/sendPayment";

export default function usePayment() {
  const [payment, setPayment] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const addPayment = useCallback(
    (payload: Payment) => {
      setLoading(true);
      sendPayment(payload)
        .then((res) => setPayment(res.data))
        .catch(setError)
        .finally(() => setLoading(false));
    },
    [setPayment]
  );

  return {
    payment,
    error,
    loading,
    addPayment,
  };
}
