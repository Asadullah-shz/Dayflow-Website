
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
          <div className="p-6 sm:p-8 font-mono text-sm text-gray-100 overflow-x-auto">
            <div className="text-gray-500"># 1. Choose Plan & Subscribe</div>
            <div><span className="text-pulse-400">$</span> subscribe starter</div>
            <div className="text-gray-400">Receive your secure setup token and chat link.</div>
            <div className="mt-4 text-gray-500"># 2. Connect Data Source</div>
            <div><span className="text-pulse-400">$</span> setup google-sheets {`{"sheetId":"1abc..."}`}</div>
            <div className="text-gray-400">Securely link your Sheets, Notion, or Airtable.</div>
            <div className="mt-4 text-gray-500"># 3. Request Live Insights</div>
            <div><span className="text-pulse-400">$</span> sales today</div>
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Subscription Features</h3>
            <ul className="text-gray-700 text-sm sm:text-base space-y-2">
              <li><code className="text-pulse-600">Secure Adapters</code> — Instant setup and secure multi-channel delivery via WhatsApp or Telegram.</li>
              <li><code className="text-pulse-600">Pluggable Sources</code> — Sync your Google Sheets, Notion tables, Airtable, Supabase, or Custom Data Sources.</li>
              <li><code className="text-pulse-600">Automated Delivery</code> — Receive scheduled morning/evening briefings and premium monthly performance PDFs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
