"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle, Lock, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

const plans = [
  { name: "Basic Access", price: 249, badge: "Starter Plan", features: ["Access to 2 Task Categories", "Digital WorkDen ID Card", "Email Support Only", "Standard Task Approval", "Minimum Withdrawal: Rs 1000 | No Maximum Limit"] },
  { name: "Full Access", price: 499, badge: "Most Popular", recommended: true, features: ["Access to All Tasks", "Digital WorkDen ID Card", "Basic Training Module Included", "Priority Email Support", "Minimum Withdrawal: Rs 1000 | No Maximum Limit"] },
  { name: "Ultimate Access", price: 699, badge: "VIP Premium", features: ["Full Access to All Tasks", "Professional VIP ID Card", "Step-by-Step Training", "Live + Priority Support", "Minimum Withdrawal: Rs 1000 | No Maximum Limit"] },
  { name: "Ultimate Pro Access", price: 999, badge: "Premium Gold / VIP Pro", features: ["Full Access to All Tasks", "Professional VIP ID Card", "Complete Training + Live Webinar", "Easy & Less Tasks", "Minimum Withdrawal: Rs 500 | No Maximum Limit"] },
];

const steps = ["Personal", "Work", "Plan", "Payment", "Finish"];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const selected = plans[selectedPlan];

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <Navbar />
      <FloatingSidebar />
      <main className="bg-[#F9FAFB] pt-16">
        <section className="section-shell py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h1 className="font-heading text-5xl font-extrabold text-gray-900">WorkDen Application</h1>
              <p className="mt-4 text-gray-500">Complete your structured onboarding process to access the platform.</p>
            </div>
            <Progress current={step} />
            <div className="workden-card mt-10 overflow-hidden p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 34, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -24, scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 32, mass: 0.7 }}>
                  {step === 1 && <Personal onNext={() => setStep(2)} />}
                  {step === 2 && <Work onBack={() => setStep(1)} onNext={() => setStep(3)} />}
                  {step === 3 && <Plan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} onBack={() => setStep(2)} onNext={() => setStep(4)} />}
                  {step === 4 && (
                    <Payment
                      selected={selected}
                      agreed={agreed}
                      setAgreed={setAgreed}
                      onBack={() => setStep(3)}
                      onPaymentSuccess={(id: string) => {
                        setPaymentId(id);
                        setStep(5);
                      }}
                    />
                  )}
                  {step === 5 && <Finish paymentId={paymentId} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Progress({ current }: { current: number }) {
  return (
    <div className="relative grid grid-cols-5 gap-2">
      <div className="absolute left-[10%] right-[10%] top-5 h-1 bg-gray-200" />
      <div
        className="absolute left-[10%] right-[10%] top-5 h-1 origin-left bg-[#3730A3] transition-transform duration-[var(--motion-duration-md)] ease-[var(--motion-spring)]"
        style={{ transform: `scaleX(${Math.max(0, current - 1) / 4})` }}
      />
      {steps.map((label, index) => {
        const num = index + 1;
        const complete = num < current;
        const active = num === current;
        return (
          <div key={label} className="relative z-10 text-center">
            <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-[transform,box-shadow,background-color,color,border-color] duration-[var(--motion-duration-sm)] ease-[var(--motion-spring)] ${complete || active ? "scale-105 bg-[#3730A3] text-white shadow-[0_10px_24px_rgba(55,48,163,0.24)]" : "border-2 border-gray-300 bg-white text-gray-400"}`}>
              {complete ? <CheckCircle className="h-5 w-5" /> : num}
            </div>
            <div className={`mt-2 text-xs font-bold ${active ? "text-[#3730A3]" : "text-gray-500"}`}>{label}</div>
          </div>
        );
      })}
    </div>
  );
}

function Personal({ onNext }: { onNext: () => void }) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900">Personal Information</h2>
      <p className="mt-2 text-sm text-gray-500">Please enter your details exactly as they appear on your Aadhar card.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Input label="Full Name (as per Aadhar)" placeholder="Enter your full name" />
        <Input label="Mobile Number (WhatsApp preferred)" placeholder="+91 XXXXX XXXXX" type="tel" />
        <Input label="Email Address" placeholder="you@example.com" type="email" />
        <Select label="Gender" options={["Male", "Female", "Other"]} />
        <Input label="Date of Birth" type="date" />
      </div>
      <NavButtons onNext={onNext} />
    </div>
  );
}

function Work({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900">Work Information</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Input label="State / City" placeholder="e.g. Bihar, Patna" />
        <Select label="Highest Qualification" options={["10th Pass", "12th Pass", "Graduate", "Post Graduate", "Other"]} />
        <Select label="Current Employment Status" options={["Student", "Homemaker", "Unemployed", "Part-time", "Full-time employed"]} />
        <Select label="Daily Available Hours" options={["1-2 hrs", "3-4 hrs", "5-6 hrs", "More than 6 hrs"]} />
        <div>
          <label className="text-sm font-bold text-gray-700">Device Available</label>
          <div className="mt-2 grid grid-cols-2 gap-2">{["Smartphone", "Laptop", "Desktop", "Tablet"].map((item) => <label key={item} className="rounded-lg border border-gray-200 p-3 text-sm"><input className="mr-2" type="checkbox" />{item}</label>)}</div>
        </div>
        <Select label="Internet Connection" options={["Mobile Data", "Broadband", "Both"]} />
      </div>
      <NavButtons onBack={onBack} onNext={onNext} />
    </div>
  );
}

function Plan({ selectedPlan, setSelectedPlan, onBack, onNext }: { selectedPlan: number; setSelectedPlan: (n: number) => void; onBack: () => void; onNext: () => void }) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900">Select Your Membership Plan</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {plans.map((plan, index) => (
          <button key={plan.name} className={`rounded-2xl border p-5 text-left shadow-sm transition-[transform,box-shadow,background-color,border-color] duration-[var(--motion-duration-md)] ease-[var(--motion-spring)] hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(55,48,163,0.14)] active:scale-[0.97] ${selectedPlan === index ? "border-2 border-[#3730A3] bg-[#E0E7FF] shadow-[0_16px_38px_rgba(55,48,163,0.16)]" : "border-gray-200 bg-white"}`} onClick={() => setSelectedPlan(index)}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-heading text-xl font-bold text-gray-900">{plan.name}</h3>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${plan.recommended ? "bg-[#3730A3] text-white" : "bg-gray-100 text-gray-600"}`}>{plan.badge}</span>
            </div>
            <div className="font-heading mt-3 text-3xl font-extrabold text-[#3730A3]">Rs {plan.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
          </button>
        ))}
      </div>
      <details className="mt-6 rounded-xl bg-[#F9FAFB] p-4">
        <summary className="cursor-pointer font-heading font-bold">What does the fee cover?</summary>
        <ul className="mt-3 space-y-2 text-sm text-gray-600"><li>Account setup and verification</li><li>Secure portal access</li><li>Infrastructure & platform security</li><li>Professional onboarding support</li></ul>
      </details>
      <NavButtons onBack={onBack} onNext={onNext} />
    </div>
  );
}

function Payment({ selected, agreed, setAgreed, onBack, onPaymentSuccess }: { selected: (typeof plans)[number]; agreed: boolean; setAgreed: (v: boolean) => void; onBack: () => void; onPaymentSuccess: (id: string) => void }) {
  const [processing, setProcessing] = useState(false);

  function startRazorpay() {
    if (!agreed) return;
    if (typeof window === "undefined" || !window.Razorpay) {
      alert("Payment gateway is loading. Please try again in a moment.");
      return;
    }

    setProcessing(true);

    const options = {
      key: "rzp_live_SMD4oIoMldhyzx",
      amount: selected.price * 100,
      currency: "INR",
      name: "WorkDen",
      description: "WorkDen Registration Fee",
      theme: { color: "#3730A3" },
      handler: function (response: { razorpay_payment_id: string }) {
        setProcessing(false);
        onPaymentSuccess(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function () {
          setProcessing(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-gray-900">Secure Payment</h2>
      <p className="mt-2 text-sm text-gray-500">Complete your registration by making the secure one-time payment.</p>

      <div className="mt-6 rounded-xl bg-[#E0E7FF] p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Selected Plan</p>
            <p className="font-heading text-xl font-bold text-gray-900">{selected.name}</p>
          </div>
          <div className="font-heading text-3xl font-extrabold text-[#3730A3]">₹{selected.price}</div>
        </div>
      </div>

      <div className="mt-5 rounded-xl bg-[#F9FAFB] p-4 text-sm leading-6 text-gray-600">
        Payments are securely processed via Razorpay. Portal access is activated after successful payment confirmation. Registration fees are non-refundable once access is activated.
      </div>

      <label className="mt-5 flex cursor-pointer gap-3 rounded-xl border border-gray-200 p-4 text-sm text-gray-600 transition-[transform,box-shadow,background-color] duration-[var(--motion-duration-sm)] ease-[var(--motion-spring)] hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-sm">
        <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[#3730A3] transition-transform duration-[var(--motion-duration-sm)] ease-[var(--motion-spring)] checked:scale-110" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        I have read and agree to the <Link href="/terms" className="text-[#3730A3] underline">Terms &amp; Conditions</Link>, <Link href="/refund" className="text-[#3730A3] underline">Refund Policy</Link>, and <Link href="/disclaimer" className="text-[#3730A3] underline">Disclaimer</Link>.
      </label>

      <div className="mt-6 rounded-2xl border border-[#3730A3]/20 bg-white p-6 text-center shadow-sm">
        <button
          type="button"
          onClick={startRazorpay}
          disabled={!agreed || processing}
          className="glass-cta w-full px-7 py-4 text-lg font-bold disabled:cursor-not-allowed disabled:opacity-50"
        >
          {processing ? "Processing..." : "Proceed to Secure Payment →"}
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-500">
          <Lock className="h-3.5 w-3.5" />
          100% Secure Payment powered by Razorpay
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
          <ShieldCheck className="h-5 w-5 text-[#3730A3]" />
          <div>
            <p className="text-xs font-bold text-gray-800">Secure Payment</p>
            <p className="text-[11px] text-gray-500">256-bit SSL encryption</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
          <CheckCircle className="h-5 w-5 text-emerald-500" />
          <div>
            <p className="text-xs font-bold text-gray-800">Verified Platform</p>
            <p className="text-[11px] text-gray-500">Registered MSME entity</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
          <Lock className="h-5 w-5 text-purple-500" />
          <div>
            <p className="text-xs font-bold text-gray-800">Instant Activation</p>
            <p className="text-[11px] text-gray-500">Access within minutes</p>
          </div>
        </div>
      </div>

      <NavButtons onBack={onBack} onNext={startRazorpay} nextLabel="Pay & Continue →" disabled={!agreed || processing} />
    </div>
  );
}

function Finish({ paymentId }: { paymentId: string | null }) {
  return (
    <div className="mx-auto max-w-xl py-10 text-center">
      <CheckCircle className="mx-auto h-20 w-20 text-emerald-500" />
      <h2 className="font-heading mt-5 text-3xl font-extrabold text-gray-900">Payment Successful!</h2>
      <p className="mt-4 leading-7 text-gray-600">Your payment has been received and your application is being processed. Our team will review and respond within 2-3 business hours via your registered email.</p>
      {paymentId && (
        <div className="mt-5 rounded-xl bg-[#E0E7FF] p-4">
          <p className="text-xs font-medium text-gray-500">Razorpay Payment ID</p>
          <p className="mt-1 font-mono text-sm font-bold text-[#3730A3]">{paymentId}</p>
        </div>
      )}
      <p className="mt-3 text-sm text-gray-400">Keep your payment ID safe for support queries.</p>
      <Link href="/" className="mt-7 inline-flex rounded-xl border-2 border-[#3730A3] px-8 py-3 font-bold text-[#3730A3]">← Back to Home</Link>
    </div>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return <label className="block text-sm font-bold text-gray-700">{label}<input className="focus-ring mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-normal" required {...props} /></label>;
}

function Select({ label, options }: { label: string; options: string[] }) {
  return <label className="block text-sm font-bold text-gray-700">{label}<select className="focus-ring mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 font-normal" defaultValue=""><option value="" disabled>Select option</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

function NavButtons({ onBack, onNext, nextLabel = "Continue ->", disabled = false }: { onBack?: () => void; onNext: () => void; nextLabel?: string; disabled?: boolean }) {
  return (
    <div className="mt-8 flex flex-col justify-end gap-3 sm:flex-row">
      {onBack && <button className="rounded-lg border-2 border-[#3730A3] px-7 py-3 font-bold text-[#3730A3]" onClick={onBack}>&lt;- Back</button>}
      <button className="glass-cta px-7 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-50" disabled={disabled} onClick={onNext}>{nextLabel}</button>
    </div>
  );
}
