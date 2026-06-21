import React, { useRef } from "react";

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="expertise" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>Why DayFlow</span>
            </div>
            <h2 className="section-title mb-6">Beyond a bot — a real business partner</h2>
            <p className="text-lg text-gray-700 mb-6">
              DayFlow is engineered by PseudoSoft Inc. for modern entrepreneurs and SMEs. It connects your real
              operational data with the chat tools your team already lives in, so every decision is informed,
              every alert is timely, and every report is automatic.
            </p>
            <ul className="space-y-4">
              {[
                "Pluggable data adapters for Google Sheets, Notion, Airtable, Supabase, and Custom Data Sources",
                "Native WhatsApp & Telegram integration — no new app to learn",
                "Per-subscriber configuration: each business uses its own data source set at setup",
                "Production-grade architecture: structured logging and boot-time validation",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-elegant p-6 sm:p-8 border border-gray-100">
            <div className="pulse-chip mb-4">
              <span>💳 Subscription & Setup</span>
            </div>
            <p className="text-gray-700 mb-4">
              Manage your monthly subscription and configure your data source directly from WhatsApp or Telegram. 
              Subscribers can register their database or sheets securely to start receiving instant insights.
            </p>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-gray-900 text-gray-100 rounded-lg p-3 overflow-x-auto">
                <span className="text-pulse-400">$</span> status
              </div>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-3 overflow-x-auto">
                <span className="text-pulse-400">$</span> setup google-sheets {`{"sheetId":"1abc..."}`}
              </div>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-3 overflow-x-auto">
                <span className="text-pulse-400">$</span> subscribe
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Flexible monthly billing: Update your connected data sources or change plans anytime directly through simple chat commands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
