"use client";
import { useState } from "react";
import FormComponent from "../components/Form";
import PurchaseDetail from "../components/PurchaseDetail";
import Modal from "../components/ui/Modal";

export default function Purchase() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 mt-10">
      <div className="max-w-96 bg-gray-200 text-black rounded-md">
        <PurchaseDetail flag={true} />
        <div className="flex justify-center items-center">
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <FormComponent setShowModal={setShowModal} />
            <PurchaseDetail flag={false} />
          </Modal>
        </div>
      </div>
    </main>
  );
}
