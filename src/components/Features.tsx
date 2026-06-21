
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5 text-xl">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Key Capabilities</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Your Business, <br className="hidden sm:block" />Inside Your Chat
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            DayFlow bridges your live business data with the messaging tools you already use every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<span>🧠</span>}
            title="Smart Logic Engine"
            description="Ask “How are my sales today?” or “Summarize my expenses for the week” and get instant, context-aware breakdowns from your live data."
            index={0}
          />
          <FeatureCard
            icon={<span>🔁</span>}
            title="Dynamic Model Redundancy"
            description="A proprietary Model Routing Chain delivers 100% availability even during cloud provider maintenance or quota limits."
            index={1}
          />
          <FeatureCard
            icon={<span>🛡️</span>}
            title="Secure Workspaces"
            description="Isolate and connect multiple business accounts under a single subscription. Members securely manage data source settings via chat."
            index={2}
          />
          <FeatureCard
            icon={<span>🌅</span>}
            title="Morning Briefing"
            description="Automated daily snapshot of overdue invoices, stock alerts and priorities — delivered before your day begins."
            index={3}
          />
          <FeatureCard
            icon={<span>🌇</span>}
            title="Evening Summary"
            description="A professional wrap-up of the day’s revenue, spending and key activity, sent straight to your chat."
            index={4}
          />
          <FeatureCard
            icon={<span>🏆</span>}
            title="Monthly PDF Report"
            description="A high-end, multi-page branded performance report, automatically delivered on the 1st of every month at 12:00 AM."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
