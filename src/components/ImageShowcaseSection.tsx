
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Start in Minutes, No Coding Required
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Get DayFlow up and running for your business. Subscribe, link your data sources securely via chat, 
            and get real-time business insights delivered directly to your device.
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll bg-gray-900">
          <div className="p-6 sm:p-8 text-base text-gray-100 overflow-x-auto space-y-6">
            <div>
              <div className="text-pulse-400 font-bold text-xs uppercase tracking-wider mb-1">Step 1: Choose Plan & Subscribe</div>
              <div className="text-lg font-semibold text-white">Select the perfect plan for your business</div>
              <div className="text-gray-400 text-sm mt-1">Get your secure onboarding link and instant chat assistant invite via email.</div>
            </div>
            
            <div className="border-t border-gray-800 pt-4">
              <div className="text-pulse-400 font-bold text-xs uppercase tracking-wider mb-1">Step 2: Connect Data Source</div>
              <div className="text-lg font-semibold text-white">Link your database with a single tap</div>
              <div className="text-gray-400 text-sm mt-1">Securely connect Google Sheets, Notion, Airtable, or Supabase directly inside your chat.</div>
            </div>
            
            <div className="border-t border-gray-800 pt-4">
              <div className="text-pulse-400 font-bold text-xs uppercase tracking-wider mb-1">Step 3: Request Live Insights</div>
              <div className="text-lg font-semibold text-white">Ask your assistant anything in plain English</div>
              <div className="text-gray-400 text-sm mt-1">Get immediate KPI updates or schedule automated daily summaries straight to your team.</div>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Subscription Features</h3>
            <ul className="text-gray-700 text-sm sm:text-base space-y-3">
              <li><span className="font-semibold text-pulse-600">Secure Setup</span> — Instant connection and secure multi-channel delivery via WhatsApp or Telegram.</li>
              <li><span className="font-semibold text-pulse-600">Flexible Data Integration</span> — Sync Google Sheets, Notion tables, Airtable, Supabase, or Custom Data Sources.</li>
              <li><span className="font-semibold text-pulse-600">Automated Briefings</span> — Receive scheduled morning/evening briefings and premium monthly performance PDFs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
