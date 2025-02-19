"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function TermsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`text-sm font-semibold underline ${
          isDark
            ? "text-teal-400 hover:text-teal-300"
            : "text-teal-700 hover:text-teal-800"
        }`}
      >
        View Terms and Conditions
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  className={`w-full max-w-3xl transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all ${
                    isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                  }`}
                >
                  <DialogTitle
                    as="h3"
                    className={`text-2xl font-bold leading-6 ${
                      isDark ? "text-teal-300" : "text-teal-700"
                    }`}
                  >
                    Supplier Terms & Conditions
                  </DialogTitle>

                  <div className="mt-4 h-[60vh] overflow-y-auto pr-4">
                    {renderTermsContent(isDark)}
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium transition-colors ${
                        isDark
                          ? "bg-teal-600 text-white hover:bg-teal-700"
                          : "bg-teal-100 text-teal-900 hover:bg-teal-200"
                      }`}
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function renderTermsContent(isDark: boolean) {
  return (
    <div className="space-y-6 text-sm">
      <section className="space-y-2">
        <h4
          className={`font-semibold ${
            isDark ? "text-teal-300" : "text-teal-700"
          }`}
        >
          1. Introduction
        </h4>
        <p className="text-gray-500">
          By submitting this form to Nitibu, you agree to be bound by these
          Terms and Conditions. Please read them carefully before submitting
          your application.
        </p>
      </section>

      <section className="space-y-2">
        <h4
          className={`font-semibold ${
            isDark ? "text-teal-300" : "text-teal-700"
          }`}
        >
          2. Eligibility
        </h4>
        <p className="text-gray-500">
          Applicants must be legally registered businesses with valid
          operational licenses. All products/services must comply with Kenyan
          regulations and quality standards.
        </p>
      </section>

      <section className="space-y-2">
        <h4
          className={`font-semibold ${
            isDark ? "text-teal-300" : "text-teal-700"
          }`}
        >
          3. Submission Process
        </h4>
        <p className="text-gray-500">
          All information provided must be accurate and complete. Nitibu
          reserves the right to verify any information and conduct background
          checks through third-party services.
        </p>
      </section>

      <section className="space-y-2">
        <h4
          className={`font-semibold ${
            isDark ? "text-teal-300" : "text-teal-700"
          }`}
        >
          4. Confidentiality
        </h4>
        <p className="text-gray-500">
          Nitibu will treat all submitted information as confidential. However,
          we may share necessary details with partners for verification
          purposes.
        </p>
      </section>

      <section className="space-y-2">
        <h4
          className={`font-semibold ${
            isDark ? "text-teal-300" : "text-teal-700"
          }`}
        >
          5. Approval Process
        </h4>
        <p className="text-gray-500">
          Submission does not guarantee approval. Nitibu reserves the sole right
          to accept or reject applications without explanation. Approved
          suppliers will receive formal onboarding documentation.
        </p>
      </section>

      <section className="space-y-2">
        <h4
          className={`font-semibold ${
            isDark ? "text-teal-300" : "text-teal-700"
          }`}
        >
          6. Compliance
        </h4>
        <p className="text-gray-500">
          Approved suppliers must maintain consistent quality standards,
          delivery timelines, and ethical business practices. Nitibu conducts
          regular audits and reserves the right to terminate partnerships for
          non-compliance.
        </p>
      </section>
    </div>
  );
}
