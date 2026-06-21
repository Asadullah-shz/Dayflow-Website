import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Info } from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
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
      description: "Best for growing businesses needing deep daily summaries.",
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
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  billingCycle === "monthly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  billingCycle === "yearly"
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
                className={`relative flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.popular
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
                  className={`w-full py-3 px-6 rounded-full font-medium text-center transition-colors duration-200 ${
                    plan.popular
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
                  a: "Once you subscribe, simply send a setup command to your DayFlow bot via WhatsApp or Telegram (e.g., $ setup google-sheets). The bot will securely authorize and link your sheet or database in seconds.",
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

      <Footer />
    </div>
  );
};

export default Pricing;
