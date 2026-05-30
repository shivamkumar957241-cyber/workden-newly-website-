import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BorderRotate } from "@/components/ui/animated-gradient-border";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact2() {
  return (
    <section className="mt-12">
      <BorderRotate
        className="mx-auto max-w-screen-xl shadow-[0_18px_55px_rgba(55,48,163,0.10)]"
        borderRadius={28}
        borderWidth={1}
        animationSpeed={7}
        backgroundColor="rgba(255,255,255,0.88)"
      >
      <div className="flex flex-col justify-between gap-10 rounded-[27px] bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(245,243,255,0.88))] p-6 lg:flex-row lg:gap-14 lg:p-10">
        <div className="flex max-w-sm flex-col justify-between gap-8">
          <div>
            <h2 className="font-heading text-4xl font-extrabold text-gray-900 lg:text-5xl">Submit Query</h2>
            <p className="mt-4 text-sm leading-7 text-gray-500">
              Send your application, login, payment verification, or task-related query through the official WorkDen support form.
            </p>
          </div>
          <div>
            <h3 className="font-heading mb-5 text-2xl font-bold text-gray-900">Support Details</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#3730A3]" />
                <span><strong>WhatsApp:</strong> +91 92627 25686</span>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#3730A3]" />
                <span><strong>Email:</strong> support@workden.online</span>
              </li>
              <li className="flex gap-2">
                <Send className="mt-0.5 h-4 w-4 shrink-0 text-[#3730A3]" />
                <span><strong>Telegram:</strong> workden_helpdesk</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            Use your registered email and keep your payment reference ID ready for faster review.
          </div>
        </div>

        <BorderRotate
          className="w-full max-w-screen-md"
          borderRadius={20}
          borderWidth={1}
          animationMode="rotate-on-hover"
          animationSpeed={4}
          backgroundColor="rgba(255,255,255,0.82)"
        >
        <form className="flex flex-col gap-4 sm:gap-5 rounded-[19px] bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="support-name">Full Name</Label>
              <Input type="text" id="support-name" placeholder="Enter your full name" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="support-email">Email Address</Label>
              <Input type="email" id="support-email" placeholder="you@example.com" />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="support-category">Subject / Category</Label>
            <select
              id="support-category"
              className="flex h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3730A3]/30"
              defaultValue=""
            >
              <option value="" disabled>Choose a category</option>
              <option>Application Status</option>
              <option>Login Issue</option>
              <option>Payment Verification</option>
              <option>Task Query</option>
              <option>Other</option>
            </select>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="support-message">Message</Label>
            <Textarea placeholder="Type your query with complete details." id="support-message" />
          </div>
          <Button className="glass-cta h-12 w-full text-base font-bold">Submit Query -&gt;</Button>
          <p className="text-center text-sm text-gray-500">All support requests are assigned a unique reference ID for tracking.</p>
        </form>
        </BorderRotate>
      </div>
      </BorderRotate>
    </section>
  );
}
