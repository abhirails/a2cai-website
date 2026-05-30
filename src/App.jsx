import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  FileText,
  Globe2,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
  AlertCircle,
  ArrowLeft,
  DollarSign,
  UserCheck,
  Lock,
  Download,
} from "lucide-react";

const brand = {
  name: "A2C AI",
  tagline: "About to Change",
  domain: "a2cai.in",
  email: "contact@a2cai.in",
  founder: "Abhay Wahane",
  web3formsKey: "dcda3533-f6ed-436e-abb3-d1fea7e68792", // Web3Forms Key
};

// Unused products list removed for SaaS focus

const plans = [
  {
    name: "Demo",
    price: "Free",
    period: "",
    description: "Get started with basic AI recruitment tools.",
    features: ["10 resume scans", "Basic AI scoring", "Candidate pipeline preview", "Email support"],
  },
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    description: "For small teams starting with AI hiring.",
    features: ["100 resume scans/month", "AI scorecards", "Job assignment manager", "Standard support"],
  },
  {
    name: "Growth",
    price: "₹2,999",
    period: "/month",
    description: "For growing teams that need billing and roles.",
    featured: true,
    features: ["1,000 resume scans/month", "Multi-HR login", "RBAC and team roles", "Priority support"],
  },
  {
    name: "Agency Pro",
    price: "₹7,999",
    period: "/month",
    description: "For professional recruitment agencies.",
    features: ["10,000 resume scans/month", "Multiple client workspaces", "GST-ready billing and invoices", "Dedicated support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Need private cloud, custom workflows, dedicated database, or enterprise onboarding? Contact Sales for a dedicated deployment plan.",
    features: ["Private cloud or dedicated deployment", "Custom workflows", "Custom database and integration support", "SLA and onboarding support"],
  },
];

// Milestones list removed for SaaS positioning

const policyContent = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "A2C AI builds digital software products for business automation. We collect only the information needed to operate our products, respond to enquiries, create user accounts, process payments, and provide support.",
      "For products such as HireSetu, users may upload recruitment-related information such as resumes, job descriptions, candidate details, and billing information. Such data is used only for providing the requested product functionality.",
      "We do not sell customer data. Payment information is processed through third-party payment providers such as Razorpay. We do not store card or UPI credentials on our servers.",
      "Customers are responsible for ensuring they have the right to upload and process candidate or business data through our services.",
      "For privacy requests, contact us at contact@a2cai.in.",
    ],
  },
  terms: {
    title: "Terms & Conditions",
    body: [
      "By using A2C AI products, you agree to use the services only for lawful business purposes. Product access, pricing, and features may vary by plan.",
      "A2C AI provides software tools that assist business workflows. Customers remain responsible for final hiring, business, legal, financial, and operational decisions.",
      "Users must not misuse the service, upload unlawful content, attempt unauthorized access, or interfere with platform security.",
      "Subscriptions, renewals, cancellations, and payment terms are governed by the selected plan and invoice/payment confirmation details.",
      "A2C AI may update these terms as products evolve. Continued use of the service indicates acceptance of updated terms.",
      "For any queries regarding terms, please contact us at contact@a2cai.in."
    ],
  },
  refund: {
    title: "Cancellation & Refund Policy",
    body: [
      "A2C AI products are digital software services. Customers may request cancellation of future renewals by contacting support.",
      "Refund eligibility depends on the plan, activation status, usage, and the specific agreement at the time of purchase.",
      "For standard monthly SaaS subscriptions, refunds are generally not provided after workspace activation unless there is a confirmed duplicate payment or technical issue preventing access.",
      "Approved refunds, if any, will be processed through the original payment method within the timeline supported by the payment provider (usually 5-7 business days).",
      "For cancellation or refund requests, contact contact@a2cai.in with payment reference and account details.",
    ],
  },
  shipping: {
    title: "Shipping / Delivery Policy",
    body: [
      "A2C AI provides digital software products. No physical shipping is involved.",
      "Product access is delivered digitally after payment confirmation, account verification, and workspace activation.",
      "For SaaS subscriptions, access details are provided through the application dashboard, registered email, or onboarding communication.",
      "In cases requiring manual configuration, activation time may vary based on the selected plan and customer requirements (typically activated within 24 hours).",
      "For delivery/access issues, contact contact@a2cai.in.",
    ],
  },
};

function LogoMark({ compact = false }) {
  return (
    <div className={`a2c-brand-logo ${compact ? "a2c-brand-logo--compact" : ""}`}>
      <style>{`
        .a2c-brand-logo {
          --a2c-blue: #00b4ff;
          --a2c-cyan: #20e3c2;
          --a2c-purple: #8b5cf6;
          --a2c-pink: #d946ef;
          --a2c-text: #f8fafc;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          min-width: 0;
        }

        .a2c-brand-logo__mark {
          position: relative;
          width: 78px;
          height: 52px;
          display: grid;
          place-items: center;
          isolation: isolate;
          flex: 0 0 auto;
        }

        .a2c-brand-logo__mark::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 72px;
          height: 72px;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          background: conic-gradient(
            transparent 20deg,
            var(--a2c-blue) 48deg,
            var(--a2c-cyan) 94deg,
            var(--a2c-purple) 160deg,
            transparent 246deg,
            transparent 360deg
          );
          mask: radial-gradient(farthest-side, transparent 66%, #000 69%, #000 72%, transparent 75%);
          -webkit-mask: radial-gradient(farthest-side, transparent 66%, #000 69%, #000 72%, transparent 75%);
          opacity: 0.92;
          z-index: 0;
          animation: a2cLogoOrbit 26s linear infinite;
        }

        .a2c-brand-logo__mark::after {
          content: "";
          position: absolute;
          inset: 5px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.16), rgba(139, 92, 246, 0.09) 48%, transparent 72%);
          z-index: -1;
          filter: blur(1px);
        }

        .a2c-brand-logo__letters {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: baseline;
          white-space: nowrap;
          font-weight: 950;
          letter-spacing: -0.1em;
          line-height: 1;
          color: var(--a2c-text);
          text-shadow: 0 10px 28px rgba(34, 211, 238, 0.18);
        }

        .a2c-brand-logo__a,
        .a2c-brand-logo__c {
          font-size: 1.65rem;
        }

        .a2c-brand-logo__two {
          font-size: 2.25rem;
          padding: 0 0.02em;
          background: linear-gradient(90deg, var(--a2c-blue), var(--a2c-cyan), var(--a2c-purple), var(--a2c-pink), var(--a2c-blue));
          background-size: 260% 260%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: a2cLogoGradient 4.8s ease infinite;
        }

        .a2c-brand-logo__content {
          min-width: 0;
          line-height: 1.05;
        }

        .a2c-brand-logo__name {
          font-size: 1.05rem;
          font-weight: 950;
          letter-spacing: -0.03em;
          color: #fff;
          white-space: nowrap;
        }

        .a2c-brand-logo__tagline {
          margin-top: 0.18rem;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(165, 243, 252, 0.78);
          white-space: nowrap;
        }

        .a2c-brand-logo--compact .a2c-brand-logo__content {
          display: none;
        }

        @keyframes a2cLogoOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes a2cLogoGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .a2c-brand-logo__mark::before,
          .a2c-brand-logo__two {
            animation: none;
          }
        }
      `}</style>

      <div className="a2c-brand-logo__mark" aria-hidden="true">
        <div className="a2c-brand-logo__letters">
          <span className="a2c-brand-logo__a">A</span>
          <span className="a2c-brand-logo__two">2</span>
          <span className="a2c-brand-logo__c">C</span>
        </div>
      </div>

      {!compact && (
        <div className="a2c-brand-logo__content">
          <div className="a2c-brand-logo__name">A2C AI</div>
          <div className="a2c-brand-logo__tagline">About to Change</div>
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function App() {
  const getPath = () => window.location.pathname || "/";
  const [currentPath, setCurrentPath] = useState(getPath());
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  // Parse query parameter for contact form
  const getInitialTopic = () => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const plan = searchParams.get("plan");
      if (plan) {
        return `HireSetu plan inquiry: ${plan}`;
      }
      const topic = searchParams.get("topic");
      if (topic) return topic;
    } catch {
      // ignore
    }
    return "HireSetu demo";
  };

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    topic: getInitialTopic(),
    message: "",
  });

  // Navigate utility using history pushState and state synchronization
  const handleNav = (to) => {
    setMobileOpen(false);

    // Get the pathname part for routing logic
    const targetPathname = new URL(to, window.location.origin).pathname;

    if (to.includes("#")) {
      const [basePathWithQuery, hash] = to.split("#");
      // Strip query parameters from basePath for routing matching
      const basePath = basePathWithQuery.split("?")[0];
      const normalizedBase = basePath === "" ? "/" : basePath;

      if (currentPath === normalizedBase) {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.history.pushState({}, "", to);
        setCurrentPath(normalizedBase);

        setTimeout(() => {
          const target = document.getElementById(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    } else {
      window.history.pushState({}, "", to);
      setCurrentPath(targetPathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Prefill contact topic if navigating to contact path
    if (targetPathname === "/contact") {
      const queryStr = to.includes("?")
        ? "?" + to.split("?")[1]
        : window.location.search;
      try {
        const searchParams = new URLSearchParams(queryStr);
        const plan = searchParams.get("plan");
        const topic = searchParams.get("topic");
        let prefill = "HireSetu demo";
        if (plan) {
          prefill = `HireSetu plan inquiry: ${plan}`;
        } else if (topic) {
          prefill = topic;
        }
        setContactForm((prev) => ({
          ...prev,
          topic: prefill,
        }));
      } catch {
        // ignore
      }
    }
  };

  // Listen to popstate event for browser back/forward routing
  useEffect(() => {
    const handlePopState = () => {
      const path = getPath();
      setCurrentPath(path);
      
      // Update contact form topic if popping back to /contact
      if (path === "/contact") {
        try {
          const searchParams = new URLSearchParams(window.location.search);
          const plan = searchParams.get("plan");
          const topic = searchParams.get("topic");
          let prefill = "HireSetu demo";
          if (plan) {
            prefill = `HireSetu plan inquiry: ${plan}`;
          } else if (topic) {
            prefill = topic;
          }
          setContactForm((prev) => ({
            ...prev,
            topic: prefill,
          }));
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const updateContactField = (field, value) => {
    setContactForm((current) => ({ ...current, [field]: value }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    if (!contactForm.email) {
      setErrorMessage("Please enter your email address.");
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: brand.web3formsKey || "YOUR_WEB3FORMS_ACCESS_KEY",
          name: contactForm.name,
          email: contactForm.email,
          subject: `A2C AI Website Enquiry: ${contactForm.topic}`,
          message: contactForm.message,
          from_name: "A2C AI Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
      } else {
        setErrorMessage(result.message || "Failed to send the enquiry. Please try again.");
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Enquiry submission error:", error);
      setErrorMessage("A network error occurred. Please check your connection and try again.");
      setSubmitStatus("error");
    }
  };

  const renderHome = () => {
    return (
      <>
        <section id="home" className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Parent brand for online AI SaaS</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
              A2C AI builds practical online AI SaaS products for growing businesses.
            </h1>
            
            <div className="mt-8 rounded-3xl border border-cyan-300/10 bg-cyan-300/5 p-6 backdrop-blur-md max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">Featured Product</span>
              </div>
              <h2 className="text-2xl font-black text-white">HireSetu</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                AI recruitment SaaS for Indian recruitment agencies and HR teams. Fully loaded with candidate scoring, job pipeline manager, team RBAC, and GST invoicing.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => handleNav("/hiresetu")}
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-4 text-sm font-black text-white shadow-[0_0_35px_rgba(34,211,238,0.28)] transition hover:scale-[1.02] cursor-pointer border-none"
              >
                Explore HireSetu
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleNav("/contact")}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-cyan-300/40 hover:bg-cyan-300/10 cursor-pointer"
              >
                Contact Sales
              </button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {["SaaS", "AI Agents", "Recruitment", "Automation"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-semibold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-600/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-2xl">
              <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs font-medium text-slate-400">A2C AI Product Console</span>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-cyan-100">Featured product</div>
                      <div className="mt-1 text-3xl font-black">HireSetu</div>
                    </div>
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">Early Access</div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      ["10k+", "Resumes Scored"],
                      ["200+", "HR Workspaces"],
                      ["GST", "Billing Live"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                        <div className="text-2xl font-black text-white">{value}</div>
                        <div className="text-xs text-slate-400">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {["Resume Screening", "Razorpay Checkout", "Billing Profile", "Printable Invoice"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <Check className="h-5 w-5 text-cyan-200" />
                      <span className="text-sm font-semibold text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-white/10">
          <SectionLabel>Products</SectionLabel>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end mb-12">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Automate your workflows with HireSetu.</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Starting with HireSetu, A2C AI is building practical SaaS tools that help small teams automate real business workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-slate-300">
              Domain: <span className="font-bold text-cyan-100">{brand.domain}</span>
            </div>
          </div>

          {/* HireSetu Spotlight Card */}
          <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.02] to-slate-950 p-6 shadow-2xl backdrop-blur-xl sm:p-10 mb-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100 uppercase tracking-wider">
                  Flagship SaaS
                </span>
                <h3 className="mt-4 text-3xl font-black text-white">HireSetu AI Recruitment SaaS</h3>
                <p className="mt-4 text-slate-300 leading-7 text-sm sm:text-base">
                  HireSetu is an online AI recruitment SaaS for Indian recruitment agencies and HR teams. Upload resumes, score candidates against job requirements, manage shortlists, assign jobs, track pipelines, and handle subscription billing with GST-ready invoices.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleNav("/hiresetu")}
                    className="inline-flex items-center justify-center gap-1 rounded-xl bg-cyan-400 px-5 py-3 text-xs font-black text-slate-950 hover:bg-cyan-300 transition cursor-pointer border-none"
                  >
                    View Product & Plans
                    <ArrowRight className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => handleNav("/contact")}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/10 cursor-pointer"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
              
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-[10px] font-bold text-slate-400">
                  <span>Match Scorecards</span>
                  <span className="text-emerald-400">GST Billing Active</span>
                </div>
                <div className="space-y-3">
                  {[
                    ["Aarav Kulkarni", "92%", "Senior React Developer"],
                    ["Priya Nair", "84%", "Sales Specialist"],
                    ["Rohan Shah", "61%", "Product Designer"],
                  ].map(([name, score, role]) => (
                    <div key={name} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs">
                      <div>
                        <div className="font-bold text-white">{name}</div>
                        <div className="text-[10px] text-slate-400">{role}</div>
                      </div>
                      <span className="font-black text-cyan-200">{score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Future Products section */}
          <div className="border-t border-white/5 pt-12">
            <h3 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">Future products under development</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "LeadSetu",
                  title: "AI Lead Agent",
                  desc: "Conversational lead capture, qualification, webhook integration, and pipelines for small business automation.",
                  label: "R&D Phase"
                },
                {
                  name: "Ingestion Engine",
                  title: "Document Parser Engine",
                  desc: "A universal ingestion layout for Excel, PDF, and messy business documents with validation layers.",
                  label: "In Ingestion R&D"
                }
              ].map((prod) => (
                <div key={prod.name} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-cyan-300/20 transition">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-black text-white text-base">{prod.name}</h4>
                      <p className="text-[10px] text-violet-200 font-semibold">{prod.title}</p>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-950 px-2.5 py-1 rounded-full border border-white/10">
                      {prod.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-5">{prod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hiresetu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.045] to-violet-500/10 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionLabel>Flagship Product Preview</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">A2C AI HireSetu</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  HireSetu helps recruitment teams screen resumes, evaluate candidates, manage jobs, control team access, and handle SaaS billing in one unified workflow.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Indian recruiter scoring weights",
                    "Hard flags and missing-info detection",
                    "Multi-HR login and RBAC",
                    "Razorpay checkout and GST invoices",
                    "Printable invoice view",
                    "GST tax invoice logs",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-sm text-slate-200">
                      <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => handleNav("/hiresetu")}
                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3.5 text-xs font-black text-slate-950 hover:bg-cyan-300 transition cursor-pointer border-none"
                  >
                    View Product & Plans
                  </button>
                  <button
                    onClick={() => handleNav("/contact")}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-white/10 cursor-pointer"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400">Candidate Scorecard</div>
                    <div className="text-xl font-black text-white">Senior React Developer</div>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-black text-emerald-200">Good Match</div>
                </div>
                <div className="grid gap-3">
                  {[
                    ["Aarav Kulkarni", "92", "Excellent"],
                    ["Priya Nair", "84", "Good"],
                    ["Rohan Shah", "61", "Review"],
                  ].map(([name, score, label]) => (
                    <div key={name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300/10 text-sm font-black text-cyan-100">{name.split(" ").map((n) => n[0]).join("")}</div>
                        <div>
                          <div className="font-bold text-white">{name}</div>
                          <div className="text-xs text-slate-400">{label}</div>
                        </div>
                      </div>
                      <div className="text-2xl font-black text-cyan-100">{score}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey section removed for SaaS positioning */}

        {/* Home page quick contact form */}
        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Quick Inquiry</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight text-white animate-pulse">Start your A2C AI journey.</h2>
              <p className="mt-4 text-slate-300 leading-7">
                Contact us for HireSetu demo access, subscription discussion, private deployment, or future A2C AI product enquiries.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-200" />
                  {brand.email}
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-cyan-200" />
                  {brand.domain}
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-cyan-200" />
                  A2C AI — Digital SaaS Products
                </div>
              </div>
            </div>
            
            <div>
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center p-8 rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 min-h-[350px]">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-400/20 text-emerald-400 mb-4">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Enquiry Sent!</h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-sm leading-6">
                    Thank you for reaching out. We have received your enquiry and will get back to you at <span className="text-cyan-200 font-semibold">{contactForm.email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus("idle");
                      setContactForm({ name: "", email: "", topic: "General Inquiry", message: "" });
                    }}
                    className="mt-6 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold text-white transition hover:bg-white/10 cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form className="grid gap-4" onSubmit={handleContactSubmit}>
                  {submitStatus === "error" && (
                    <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-200">
                      {errorMessage}
                    </div>
                  )}
                  <input
                    id="contact-name-home"
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(event) => updateContactField("name", event.target.value)}
                    disabled={submitStatus === "submitting"}
                    required
                  />
                  <input
                    id="contact-email-home"
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="Email address"
                    type="email"
                    value={contactForm.email}
                    onChange={(event) => updateContactField("email", event.target.value)}
                    disabled={submitStatus === "submitting"}
                    required
                  />
                  <select
                    id="contact-topic-home"
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition focus:border-cyan-300/50 text-slate-300"
                    value={contactForm.topic}
                    onChange={(event) => updateContactField("topic", event.target.value)}
                    disabled={submitStatus === "submitting"}
                  >
                    <option>HireSetu demo</option>
                    <option>Local deployment enquiry</option>
                    <option>Razorpay / billing setup</option>
                    <option>Other A2C AI product enquiry</option>
                  </select>
                  <textarea
                    id="contact-message-home"
                    className="min-h-32 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="Tell us what you need"
                    value={contactForm.message}
                    onChange={(event) => updateContactField("message", event.target.value)}
                    disabled={submitStatus === "submitting"}
                    required
                  />
                  <button
                    id="contact-submit-home"
                    type="submit"
                    disabled={submitStatus === "submitting"}
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-4 text-sm font-black text-white shadow-[0_0_35px_rgba(34,211,238,0.24)] transition hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
                  >
                    {submitStatus === "submitting" ? "Sending..." : "Send Enquiry"}
                    {submitStatus !== "submitting" && <ChevronRight className="ml-2 h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </>
    );
  };

  const renderHireSetu = () => {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={() => handleNav("/")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-200 transition cursor-pointer border-none bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
        </div>

        {/* Hero Header */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <SectionLabel>Flagship Recruitment SaaS</SectionLabel>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
              A2C AI HireSetu
            </h1>
            <p className="mt-4 text-xl font-bold bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Online AI Recruitment SaaS
            </p>
            <p className="mt-6 text-slate-300 leading-8 text-sm sm:text-base">
              HireSetu is an online AI recruitment SaaS that helps recruitment agencies and HR teams upload resumes, score candidates against jobs, manage shortlists, and move hiring faster.
            </p>

            <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-5">
              <div className="flex gap-3 text-sm text-cyan-200 leading-6">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Hosted Demo Invite</span>
                  <p className="mt-1 text-xs text-slate-400 leading-5">
                    The HireSetu hosted demo app is currently being prepared for verification. You can pre-register for trial access now — we will notify you immediately once your sandbox workspace is ready.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => handleNav("/contact?topic=HireSetu%20Demo%20Access")}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-4 text-sm font-black text-white shadow-[0_0_35px_rgba(34,211,238,0.25)] transition hover:scale-[1.02] cursor-pointer border-none"
              >
                Request Demo Access
              </button>
              <button
                onClick={() => handleNav("/contact?topic=HireSetu%207-Day%20Trial")}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-cyan-300/40 hover:bg-cyan-300/10 cursor-pointer"
              >
                Request 7-Day Trial
              </button>
            </div>
          </motion.div>

          {/* Interactive UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-blue-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-5 shadow-2xl backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-bold text-slate-400">HireSetu Candidate Engine</span>
                </div>
                <div className="rounded-full bg-cyan-400/15 px-2.5 py-0.5 text-[10px] font-black text-cyan-200">
                  GST Invoicing Live
                </div>
              </div>

              <div className="grid gap-4">
                {/* 1. Candidate Scorecard Mock */}
                <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">Aarav Kulkarni</h4>
                      <p className="text-xs text-slate-400">Senior React Developer • Mumbai</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded bg-emerald-400/10 px-2 py-0.5 text-xs font-bold text-emerald-300">
                        92% Match
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Experience: 5.2 Years
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Notice: Immediate
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      Skills: React, Redux, Tailwind
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Expected CTC: ₹12 LPA
                    </div>
                  </div>
                </div>

                {/* 2. Billing & GST Invoice Mock */}
                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                    <span className="font-bold text-slate-300">INVOICE #A2C-2026-0042</span>
                    <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-bold text-emerald-400">PAID</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-slate-300">
                    <div className="flex justify-between">
                      <span>Billed To:</span>
                      <span className="text-white">India Recruitment Ltd.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GSTIN:</span>
                      <span className="text-white">27AABCR1234F1Z0</span>
                    </div>
                    <div className="flex justify-between border-t border-white/5 pt-1 mt-1 font-sans">
                      <span>Growth Plan Subscription</span>
                      <span className="text-white">₹2,541.52</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CGST @ 9%:</span>
                      <span className="text-white">₹228.74</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SGST @ 9%:</span>
                      <span className="text-white">₹228.74</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-1 mt-1 font-bold font-sans text-sm text-cyan-200">
                      <span>Total Amount:</span>
                      <span>₹2,999.00</span>
                    </div>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-white/5">
                      Razorpay Txn: pay_N1x2y3z4 • 30 May 2026
                    </div>
                  </div>
                </div>

                {/* 3. Pipeline Board Visual */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-slate-400">
                  <div className="rounded-lg bg-slate-950/40 p-2">
                    <div className="border-b border-white/5 pb-1 mb-1.5 text-slate-300">Screening (3)</div>
                    <div className="rounded bg-white/5 py-0.5 text-slate-300 mb-1">Aarav K.</div>
                    <div className="rounded bg-white/5 py-0.5 text-slate-300">Priya N.</div>
                  </div>
                  <div className="rounded-lg bg-slate-950/40 p-2">
                    <div className="border-b border-white/5 pb-1 mb-1.5 text-slate-300">Interview (1)</div>
                    <div className="rounded bg-cyan-500/10 py-0.5 text-cyan-200">Maya M.</div>
                  </div>
                  <div className="rounded-lg bg-slate-950/40 p-2">
                    <div className="border-b border-white/5 pb-1 mb-1.5 text-slate-300">Offered (1)</div>
                    <div className="rounded bg-emerald-500/10 py-0.5 text-emerald-200">Vikram S.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid Section */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <SectionLabel>Product Features</SectionLabel>
          <h2 className="text-3xl font-black text-white sm:text-4xl">Everything required for Indian recruitment workflows.</h2>
          <p className="mt-4 text-slate-300 max-w-3xl leading-7 text-sm sm:text-base">
            HireSetu blends modern AI candidate scoring with localized enterprise compliance requirements, ensuring your hiring team stays efficient and GST-compliant.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Resume Upload",
                desc: "Upload PDF/DOCX resumes and extract structured candidate details such as skills, experience, education, notice period, and contact information.",
                icon: FileText
              },
              {
                title: "AI Scoring Engine",
                desc: "Indian recruiter scoring weights with automated hard-flag identification and missing-info alerts.",
                icon: Sparkles
              },
              {
                title: "Candidate Shortlisting",
                desc: "Intelligent candidates matching scorecard to isolate top talent before committing review time.",
                icon: ShieldCheck
              },
              {
                title: "Job Assignment Manager",
                desc: "Organise and associate candidates with specific job descriptions, mandates, or departments.",
                icon: BriefcaseBusiness
              },
              {
                title: "Pipeline Status Board",
                desc: "Visual Kanban pipeline board to track candidates through screening, interviewing, and offer releases.",
                icon: UserCheck
              },
              {
                title: "Multi-HR RBAC Access",
                desc: "Secure logins for multiple HR executives with role-based access controls and action history logs.",
                icon: Lock
              },
              {
                title: "Self-Serve Billing",
                desc: "Integrated Razorpay checkout supporting subscriptions, upgrades, and instant card or UPI payments.",
                icon: DollarSign
              },
              {
                title: "GST-Ready Invoices",
                desc: "Generate compliant B2B tax invoices with CGST/SGST breakdowns and printable dashboard view.",
                icon: Download
              }
            ].map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-300/30 transition">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-white text-lg">{feat.title}</h3>
                  <p className="mt-2 text-slate-400 text-xs leading-5">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="mt-24 border-t border-white/10 pt-16">
          <div className="text-center">
            <SectionLabel>Pricing Plans</SectionLabel>
            <h2 className="text-4xl font-black text-white sm:text-5xl">Transparent subscription billing.</h2>
            <p className="mt-4 text-slate-300 max-w-xl mx-auto leading-7 text-sm sm:text-base">
              Choose the plan that matches your monthly recruitment volume. Upgrade or cancel anytime.
            </p>
            
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              Demo Provisioning Notice: Sandboxes are allocated manually during beta.
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[1.75rem] border p-6 flex flex-col justify-between transition-all ${
                  plan.featured
                    ? "border-cyan-300/35 bg-cyan-300/10 shadow-[0_0_40px_rgba(34,211,238,0.1)] scale-[1.02]"
                    : "border-white/10 bg-white/[0.04] hover:bg-white/[0.06]"
                }`}
              >
                <div>
                  {plan.featured && (
                    <div className="mb-4 inline-flex rounded-full bg-cyan-300 px-3 py-0.5 text-[10px] font-black text-slate-950 uppercase tracking-wider">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-xl font-black text-white">{plan.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-300 min-h-[50px]">{plan.description}</p>
                  
                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-3xl font-black text-white">{plan.price}</span>
                    <span className="pb-1 text-xs text-slate-400">{plan.period}</span>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-xs text-slate-300 leading-5">
                        <Check className="h-3.5 w-3.5 text-cyan-200 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const topic = plan.name === "Demo"
                      ? "HireSetu Demo Access"
                      : plan.name === "Enterprise"
                        ? "HireSetu Enterprise Inquiry"
                        : "HireSetu 7-Day Trial";
                    handleNav(`/contact?topic=${encodeURIComponent(topic)}`);
                  }}
                  className={`mt-8 w-full rounded-xl py-3 text-xs font-black transition cursor-pointer border-none ${
                    plan.featured
                      ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:scale-[1.02]"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.name === "Demo" ? "Request Demo Access" : plan.name === "Enterprise" ? "Contact Sales" : "Request 7-Day Trial"}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-xs text-slate-400">
            *Deployment: HireSetu is delivered primarily as an online SaaS. Private cloud or dedicated deployment is available only for Enterprise customers.
          </div>
        </div>

        {/* Razorpay Flow Compliance Box */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <h3 className="flex items-center gap-2.5 text-lg font-black text-white border-b border-white/10 pb-4 mb-4">
            <ShieldCheck className="h-5 w-5 text-cyan-300" />
            Razorpay Integration & Onboarding Compliance Flow
          </h3>
          <p className="text-xs text-slate-400 leading-6 mb-6">
            For compliance and verification audits (including Razorpay setup), this diagram summarizes the complete, secure payment and workspace configuration pipeline implemented by HireSetu:
          </p>
          
          <div className="grid gap-4 md:grid-cols-6 text-center text-xs">
            {[
              { step: "1", label: "Choose Plan", desc: "Customer reviews HireSetu plans and selects Demo, Starter, Growth, Agency Pro, or Enterprise." },
              { step: "2", label: "Signup / Login", desc: "Customer creates an account or logs in to the HireSetu portal." },
              { step: "3", label: "Workspace Setup", desc: "Customer creates a recruitment workspace and verifies account details." },
              { step: "4", label: "Billing Profile", desc: "Customer enters billing name, email, address, and optional GSTIN." },
              { step: "5", label: "Razorpay Checkout", desc: "Customer completes payment securely through Razorpay using UPI, cards, netbanking, or supported payment methods." },
              { step: "6", label: "Activation & Invoice", desc: "After successful payment verification, the selected plan is activated and a GST-ready invoice is generated in the billing dashboard." }
            ].map((flow, index) => (
              <div key={flow.step} className="relative rounded-xl border border-white/5 bg-white/[0.01] p-4 flex flex-col items-center">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-cyan-300/10 text-xs font-black text-cyan-300 border border-cyan-300/20 mb-3">
                  {flow.step}
                </span>
                <span className="font-bold text-white block mb-1">{flow.label}</span>
                <p className="text-[10px] text-slate-400 leading-4">{flow.desc}</p>
                {index < 5 && (
                  <div className="absolute top-1/2 -right-3 hidden md:block text-slate-600 font-bold text-lg pointer-events-none transform -translate-y-1/2">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] backdrop-blur-xl">
          <div>
            <SectionLabel>Contact Us</SectionLabel>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Start your A2C AI journey.</h1>
            <p className="mt-4 text-slate-300 leading-7 text-sm sm:text-base">
              Contact us for HireSetu demo access, subscription discussion, private deployment, or general business enquiries.
            </p>
            
            <div className="mt-8 grid gap-4 text-sm sm:text-base text-slate-300">
              <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <Mail className="h-5 w-5 text-cyan-200 font-bold" />
                <div>
                  <div className="text-xs text-slate-400 font-bold">Official Email</div>
                  <a href={`mailto:${brand.email}`} className="font-bold text-white hover:text-cyan-200 transition">
                    {brand.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <Globe2 className="h-5 w-5 text-cyan-200 font-bold" />
                <div>
                  <div className="text-xs text-slate-400 font-bold">Website URL</div>
                  <span className="font-bold text-white">{brand.domain}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <Building2 className="h-5 w-5 text-cyan-200 font-bold" />
                <div>
                  <div className="text-xs text-slate-400 font-bold">Company Identity</div>
                  <span className="font-bold text-white">A2C AI — Online AI SaaS Products</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-2xl border border-amber-300/15 bg-amber-300/5 p-4 text-amber-200/90 text-sm leading-6">
              <span className="font-bold block mb-1">Looking for HireSetu Demo?</span>
              The hosted HireSetu app is in closed beta. Inquiries sent via this form will be prioritised for instant onboarding credentials as soon as they are generated.
            </div>
          </div>
          
          <div>
            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center text-center p-8 rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 min-h-[400px]">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-400/20 text-emerald-400 mb-4 animate-bounce">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-white">Enquiry Sent!</h3>
                <p className="mt-2 text-sm text-slate-300 max-w-sm leading-6">
                  Thank you for reaching out. We have received your enquiry and will get back to you at <span className="text-cyan-200 font-semibold">{contactForm.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitStatus("idle");
                    setContactForm({ name: "", email: "", topic: getInitialTopic(), message: "" });
                  }}
                  className="mt-6 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold text-white transition hover:bg-white/10 cursor-pointer border-none"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form className="grid gap-4" onSubmit={handleContactSubmit}>
                {submitStatus === "error" && (
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-200">
                    {errorMessage}
                  </div>
                )}
                
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Your Name</label>
                  <input
                    id="contact-name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="Abhay"
                    value={contactForm.name}
                    onChange={(event) => updateContactField("name", event.target.value)}
                    disabled={submitStatus === "submitting"}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                  <input
                    id="contact-email"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="email@example.com"
                    type="email"
                    value={contactForm.email}
                    onChange={(event) => updateContactField("email", event.target.value)}
                    disabled={submitStatus === "submitting"}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-topic" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Enquiry Subject</label>
                  <input
                    id="contact-topic"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="HireSetu Demo Access"
                    value={contactForm.topic}
                    onChange={(event) => updateContactField("topic", event.target.value)}
                    disabled={submitStatus === "submitting"}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    className="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                    placeholder="Tell us what you need"
                    value={contactForm.message}
                    onChange={(event) => updateContactField("message", event.target.value)}
                    disabled={submitStatus === "submitting"}
                    required
                  />
                </div>
                
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-4 text-sm font-black text-white shadow-[0_0_35px_rgba(34,211,238,0.24)] transition hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none"
                >
                  {submitStatus === "submitting" ? "Sending..." : "Send Enquiry"}
                  {submitStatus !== "submitting" && <ChevronRight className="ml-2 h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderPolicy = (key) => {
    const policy = policyContent[key];
    if (!policy) return render404();

    return (
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => handleNav("/")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:underline cursor-pointer border-none bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </button>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="border-b border-white/10 pb-6 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Legal Document</span>
            <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">{policy.title}</h1>
          </div>
          <div className="space-y-6 text-slate-300 leading-8 text-sm sm:text-base">
            {policy.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-5 text-cyan-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400">Questions or Clarifications?</div>
              <div className="mt-1 font-semibold">Contact our support team</div>
            </div>
            <button
              onClick={() => handleNav("/contact?topic=" + encodeURIComponent(policy.title + " Query"))}
              className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-black text-slate-950 hover:bg-cyan-300 transition cursor-pointer border-none font-bold"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    );
  };

  const render404 = () => {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/10 text-rose-400 mb-6">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-black text-white tracking-tight">404 - Page Not Found</h1>
        <p className="mt-4 text-slate-400 leading-7">
          The page you are looking for does not exist or has been relocated under a different address.
        </p>
        <div className="mt-8">
          <button
            onClick={() => handleNav("/")}
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-black text-white hover:scale-[1.02] transition cursor-pointer shadow-lg border-none"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Homepage
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (currentPath) {
      case "/":
        return renderHome();
      case "/hiresetu":
        return renderHireSetu();
      case "/contact":
        return renderContact();
      case "/privacy-policy":
        return renderPolicy("privacy");
      case "/terms":
        return renderPolicy("terms");
      case "/refund-policy":
        return renderPolicy("refund");
      case "/shipping-policy":
        return renderPolicy("shipping");
      default:
        return render404();
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col justify-between">
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => handleNav("/")} className="text-left cursor-pointer border-none bg-transparent">
            <LogoMark />
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => handleNav("/#products")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer border-none bg-transparent ${
                currentPath === "/" ? "text-cyan-200" : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => handleNav("/hiresetu")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer border-none bg-transparent ${
                currentPath === "/hiresetu" ? "text-cyan-200 bg-cyan-300/10" : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              HireSetu
            </button>
            <button
              onClick={() => handleNav("/hiresetu#pricing")}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white cursor-pointer border-none bg-transparent"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNav("/contact")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer border-none bg-transparent ${
                currentPath === "/contact" ? "text-cyan-200 bg-cyan-300/10" : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => handleNav("/contact?topic=HireSetu%20Demo%20Access")}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 cursor-pointer bg-transparent"
            >
              Request Demo
            </button>
            <button
              onClick={() => handleNav("/hiresetu#pricing")}
              className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-2.5 text-sm font-black text-white shadow-[0_0_28px_rgba(34,211,238,0.25)] transition hover:scale-[1.02] cursor-pointer border-none"
            >
              View Pricing
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-2xl border border-white/10 p-2 text-white md:hidden bg-transparent"
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
            <div className="grid gap-2">
              <button
                onClick={() => handleNav("/#products")}
                className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-200 hover:bg-white/10 cursor-pointer border-none bg-transparent"
              >
                Products
              </button>
              <button
                onClick={() => handleNav("/hiresetu")}
                className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-200 hover:bg-white/10 cursor-pointer border-none bg-transparent"
              >
                HireSetu
              </button>
              <button
                onClick={() => handleNav("/hiresetu#pricing")}
                className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-200 hover:bg-white/10 cursor-pointer border-none bg-transparent"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNav("/contact")}
                className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-200 hover:bg-white/10 cursor-pointer border-none bg-transparent"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 flex-grow">
        {renderContent()}
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 px-4 py-10 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <LogoMark />
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
              A2C AI builds digital SaaS products. HireSetu is our AI recruitment SaaS product for resume screening, candidate management, subscriptions, and invoices.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3 lg:grid-cols-5 lg:text-right">
            <button onClick={() => handleNav("/privacy-policy")} className="hover:text-cyan-100 text-left lg:text-right cursor-pointer border-none bg-transparent">Privacy Policy</button>
            <button onClick={() => handleNav("/terms")} className="hover:text-cyan-100 text-left lg:text-right cursor-pointer border-none bg-transparent">Terms & Conditions</button>
            <button onClick={() => handleNav("/refund-policy")} className="hover:text-cyan-100 text-left lg:text-right cursor-pointer border-none bg-transparent">Refund Policy</button>
            <button onClick={() => handleNav("/shipping-policy")} className="hover:text-cyan-100 text-left lg:text-right cursor-pointer border-none bg-transparent">Shipping / Delivery Policy</button>
            <button onClick={() => handleNav("/contact")} className="hover:text-cyan-100 text-left lg:text-right cursor-pointer border-none bg-transparent font-bold text-cyan-300">Contact Us</button>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 A2C AI. All rights reserved. Built by {brand.founder}.
        </div>
      </footer>
    </div>
  );
}

export default App;
