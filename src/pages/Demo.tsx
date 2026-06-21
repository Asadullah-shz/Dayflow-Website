import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Database, Zap, Sparkles } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pb-24">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-pulse-50 text-pulse-600 rounded-full border border-pulse-100 mb-4 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" /> Product Demo
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
              See DayFlow in Action
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Watch how our digital assistant connects directly to your databases and schedules updates right to your messaging app.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16 sm:mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-950 aspect-video group">
              <video
                src="/DayFlow-Demo.webm"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-center text-gray-900 mb-12">
              Key Automation Walkthroughs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-pulse-50 text-pulse-600 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Connect Data Source</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Integrate your business dashboards, Sheets, Notion databases, or custom API endpoints in seconds through simple chat commands.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-pulse-50 text-pulse-600 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Chat on WhatsApp & Telegram</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Interact with the assistant directly inside WhatsApp or Telegram. Retrieve live data point-in-time metrics using natural language.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-pulse-50 text-pulse-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Automated Briefings</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Configure recurring morning and evening reports to keep your team aligned with daily performance targets and workflow updates.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center bg-gray-950 text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">Ready to automate your reporting?</h3>
              <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
                Get started today by requesting your subscription. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-pulse-500 text-white font-medium hover:bg-pulse-600 transition-colors group"
                >
                  View Plans & Pricing
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gray-900 text-gray-300 font-medium hover:bg-gray-800 transition-colors border border-gray-800"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
