import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Info, X, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}


const WEB3FORMS_ACCESS_KEY = "6190649b-10b5-489e-8241-4e856970e0e0";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
    phone: "",
    dataSource: "Google Sheets",
  });

  const plans: Plan[] = [
    {
      name: "Starter",
      price: billingCycle === "monthly" ? 19 : 15,
      description: "Ideal for solo-founders and early-stage projects.",
      features: [
        "1 Connected Data Source (Google Sheets)",
        "1 Chat Channel (WhatsApp or Telegram)",
        "Daily Morning Briefing",
        "Up to 150 Queries per Month",
        "Standard Email Support",
      ],
      cta: "Start 7-Day Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: billingCycle === "monthly" ? 49 : 39,
      description: "Best for growing businesses needing daily summaries.",
      features: [
        "Up to 3 Connected Data Sources",
        "Dual Chat Channels (WhatsApp & Telegram)",
        "Morning & Evening Briefings",
        "Unlimited Queries",
        "Monthly PDF Performance Reports",
        "Secure Workspace Sharing (Up to 3 users)",
        "Priority 24/7 Support",
      ],
      cta: "Get Professional",
      popular: true,
    },
    {
      name: "Ultimate",
      price: billingCycle === "monthly" ? 149 : 119,
      description: "For operations requiring full automation and customization.",
      features: [
        "Unlimited Connected Data Sources",
        "All Platforms (WhatsApp, Telegram & Slack)",
        "Custom Automated Schedules",
        "Unlimited Queries & Workspaces",
        "Custom-Branded PDF Reports",
        "Priority Model Routing (100% Uptime)",
        "Dedicated Account Manager",
      ],
      cta: "Get Ultimate",
      popular: false,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCheckoutForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutForm.name || !checkoutForm.email || !checkoutForm.phone || !checkoutForm.dataSource) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Subscription Request for ${selectedPlan?.name} Plan`,
          from_name: "Dayflow Website",
          name: checkoutForm.name,
          email: checkoutForm.email,
          phone: checkoutForm.phone,
          dataSource: checkoutForm.dataSource,
          plan: selectedPlan?.name,
          billing: billingCycle,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        toast.success("Subscription request submitted successfully!");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Background API call error:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
    setIsSuccess(false);
    setCheckoutForm({
      name: "",
      email: "",
      phone: "",
      dataSource: "Google Sheets",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pb-24">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Transform your business data into active insights. Choose the plan that scales with your growth.
            </p>

            <div className="inline-flex items-center justify-center p-1 bg-gray-100 rounded-full">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${billingCycle === "monthly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${billingCycle === "yearly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                Yearly <span className="text-xs text-pulse-600 font-bold ml-1">(Save 20%)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 ${plan.popular
                    ? "bg-gray-950 text-white shadow-xl scale-100 md:scale-105 border border-gray-800"
                    : "bg-white text-gray-900 border border-gray-200 shadow-elegant hover:shadow-elegant-hover"
                  }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-pulse-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-display">{plan.name}</h3>
                  <p className={`text-sm mt-2 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight font-display">
                    ${plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                    / month
                  </span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.popular ? "text-pulse-500" : "text-pulse-600"}`} />
                      <span className={`text-sm ${plan.popular ? "text-gray-300" : "text-gray-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 px-6 rounded-full font-medium text-center transition-colors duration-200 ${plan.popular
                      ? "bg-pulse-500 text-white hover:bg-pulse-600"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 sm:mt-24">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I connect my data source?",
                  a: "Once you subscribe, you can easily link your Google Sheets or databases by simply chatting with your DayFlow bot via WhatsApp or Telegram. The bot will securely authorize and link your sheet or database in seconds.",
                },
                {
                  q: "Can I upgrade or downgrade my plan?",
                  a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly through chat commands or your billing account manager.",
                },
                {
                  q: "Is my database connection secure?",
                  a: "Absolutely. DayFlow only queries the necessary data cells to generate briefings and never stores copies of your raw data. All credentials are fully encrypted.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="text-base font-semibold text-gray-900 mb-2 flex items-center">
                    <Info className="w-5 h-5 text-pulse-600 mr-2 shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-sm text-gray-600 pl-7 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-gray-950 p-6 text-white text-center">
              <h3 className="text-lg font-semibold text-gray-400">Subscribe to</h3>
              <h2 className="text-2xl font-bold font-display mt-1">{selectedPlan.name} Plan</h2>
              <div className="text-3xl font-bold mt-2 font-display">
                ${selectedPlan.price}
                <span className="text-sm font-normal text-gray-400 ml-1">/ month</span>
              </div>
            </div>

            {isSuccess ? (
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 bg-pulse-50 text-pulse-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">Request Submitted!</h3>
                  <p className="text-sm text-gray-600">
                    Your details have been submitted to the administrator for verification. Once your account is whitelisted, your bot will be active immediately.
                  </p>
                  <p className="text-xs text-pulse-600 font-semibold bg-pulse-50 py-2 px-3 rounded-lg border border-pulse-100">
                    Please note: Whitelisting and activation can take up to 24 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-colors duration-200"
                >
                  Return to Pricing
                </button>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="p-6 flex-grow overflow-y-auto space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={checkoutForm.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={checkoutForm.email}
                    onChange={handleInputChange}
                    placeholder="email@pseudosoft.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Phone Number (for Bot delivery)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={checkoutForm.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Select Data Source
                  </label>
                  <select
                    name="dataSource"
                    value={checkoutForm.dataSource}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pulse-500 bg-white"
                  >
                    <option value="Google Sheets">Google Sheets</option>
                    <option value="Notion">Notion</option>
                    <option value="Airtable">Airtable</option>
                    <option value="Supabase">Supabase</option>
                    <option value="Custom Data Source (API)">Custom Data Source (API)</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-center text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 mr-1 text-emerald-600" />
                  Your request will be securely sent directly to support.
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-pulse-500 hover:bg-pulse-600 disabled:bg-gray-400 text-white font-medium rounded-full transition-colors duration-200 mt-2"
                >
                  {isSubmitting ? "Submitting Request..." : "Request Subscription"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Pricing;
