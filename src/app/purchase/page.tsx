"use client";
import FormComponent from "../components/Form";
import PurchaseDetail from "../components/PurchaseDetail";
import Modal from "../components/ui/Modal";

export default function Purchase() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 mt-10">
      <div className="max-w-96 bg-gray-200 text-black rounded-md">
        <PurchaseDetail flag={true} />
        <div className="flex justify-center items-center">
          <Modal>
            <FormComponent />
            <span className="sm:hidden md:hidden lg:block">
              <PurchaseDetail flag={false} />
            </span>
          </Modal>
        </div>
      </div>
    </main>
  );
}
