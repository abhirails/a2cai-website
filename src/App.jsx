import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
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
} from "lucide-react";

const brand = {
  name: "A2C AI",
  tagline: "About to Change",
  domain: "a2cai.in",
  email: "abhaywahane38@gmail.com",
  founder: "Abhay Wahane",
};

const products = [
  {
    name: "HireSetu",
    label: "Buyer-ready",
    icon: BriefcaseBusiness,
    title: "AI Recruitment SaaS",
    description:
      "Resume parsing, candidate scoring, job assignment, hiring pipeline, team roles, Razorpay checkout, GST invoices, and buyer-ready onboarding.",
    bullets: ["AI resume screening", "Indian recruiter scorecards", "Multi-HR RBAC", "GST billing + invoices"],
  },
  {
    name: "LeadSetu",
    label: "Coming next",
    icon: Bot,
    title: "AI Lead Agent",
    description:
      "Conversational lead capture, qualification, transcript storage, admin pipeline, and business automation workflows for small teams.",
    bullets: ["Lead qualification", "Admin pipeline", "Webhook logs", "Client-ready demo flow"],
  },
  {
    name: "Ingestion Engine",
    label: "R&D / SaaS engine",
    icon: FileText,
    title: "Messy Document Intelligence",
    description:
      "A universal ingestion direction for Excel, PDF, and messy business documents with validation, structured extraction, and local deployment options.",
    bullets: ["Excel/PDF ingestion", "Validation layers", "Database connectors", "Enterprise-ready direction"],
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "/month",
    description: "For small teams testing AI hiring workflows.",
    features: ["1 workspace", "Resume upload", "AI scorecards", "Candidate pipeline", "Email support"],
  },
  {
    name: "Professional",
    price: "₹2,499",
    period: "/month",
    description: "For recruitment teams that need billing, roles, and stronger workflow control.",
    featured: true,
    features: ["Everything in Starter", "Multi-HR login", "RBAC", "Razorpay checkout", "GST invoice records", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For agencies and businesses needing local deployment or custom setup.",
    features: ["Custom deployment", "Local database discussion", "Custom branding", "Implementation support", "SLA options"],
  },
];

const milestones = [
  "Built A2C AI as the parent brand: About to Change.",
  "Created HireSetu as a full-stack recruitment SaaS with candidate scoring and multi-HR workflows.",
  "Added buyer trust layers: email verification, forgot password, Razorpay checkout, GST billing, invoice records, and release documentation.",
  "Prepared the brand for multiple future products under one domain: HireSetu, LeadSetu, and document intelligence tools.",
];

const policyContent = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "A2C AI builds digital software products for business automation. We collect only the information needed to operate our products, respond to enquiries, create user accounts, process payments, and provide support.",
      "For products such as HireSetu, users may upload recruitment-related information such as resumes, job descriptions, candidate details, and billing information. Such data is used only for providing the requested product functionality.",
      "We do not sell customer data. Payment information is processed through third-party payment providers such as Razorpay. We do not store card or UPI credentials on our servers.",
      "Customers are responsible for ensuring they have the right to upload and process candidate or business data through our services.",
      "For privacy requests, contact us at abhaywahane38@gmail.com.",
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
    ],
  },
  refund: {
    title: "Cancellation & Refund Policy",
    body: [
      "A2C AI products are digital software services. Customers may request cancellation of future renewals by contacting support.",
      "Refund eligibility depends on the plan, activation status, usage, and the specific agreement at the time of purchase.",
      "For standard monthly SaaS subscriptions, refunds are generally not provided after workspace activation unless there is a confirmed duplicate payment or technical issue preventing access.",
      "Approved refunds, if any, will be processed through the original payment method within the timeline supported by the payment provider.",
      "For cancellation or refund requests, contact abhaywahane38@gmail.com with payment reference and account details.",
    ],
  },
  shipping: {
    title: "Shipping / Delivery Policy",
    body: [
      "A2C AI provides digital software products. No physical shipping is involved.",
      "Product access is delivered digitally after payment confirmation, account verification, and workspace activation.",
      "For SaaS subscriptions, access details are provided through the application dashboard, registered email, or onboarding communication.",
      "In cases requiring manual configuration, activation time may vary based on the selected plan and customer requirements.",
      "For delivery/access issues, contact abhaywahane38@gmail.com.",
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

function PolicyModal({ policyKey, onClose }) {
  const policy = policyContent[policyKey];
  if (!policy) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="max-h-[86vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">A2C AI Policy</div>
            <h2 className="mt-1 text-2xl font-black text-white">{policy.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Close policy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[65vh] space-y-4 overflow-y-auto px-6 py-6 text-sm leading-7 text-slate-300">
          {policy.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-4 text-cyan-100">
            Contact: <span className="font-semibold">{brand.email}</span>
          </div>
        </div>
      </motion.div>
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [policyKey, setPolicyKey] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    topic: "HireSetu demo",
    message: "",
  });

  const navItems = useMemo(
    () => [
      { label: "Products", href: "#products" },
      { label: "HireSetu", href: "#hiresetu" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const goTo = (href) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateContactField = (field, value) => {
    setContactForm((current) => ({ ...current, [field]: value }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`A2C AI enquiry: ${contactForm.topic}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name || "Not provided"}\n` +
        `Email: ${contactForm.email || "Not provided"}\n` +
        `Topic: ${contactForm.topic}\n\n` +
        `Message:\n${contactForm.message || "Not provided"}`
    );

    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => goTo("#home")} className="text-left">
            <LogoMark />
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => goTo(item.href)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => goTo("#contact")}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              Request Demo
            </button>
            <button
              onClick={() => goTo("#pricing")}
              className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-2.5 text-sm font-black text-white shadow-[0_0_28px_rgba(34,211,238,0.25)] transition hover:scale-[1.02]"
            >
              View Pricing
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-2xl border border-white/10 p-2 text-white md:hidden"
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => goTo(item.href)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-200 hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel>Parent brand for AI SaaS products</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              A2C AI builds products that help businesses become
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">about to change.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We are building practical AI software for recruitment, lead management, and messy document intelligence — starting with HireSetu, a buyer-ready AI recruitment SaaS.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => goTo("#hiresetu")}
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-4 text-sm font-black text-white shadow-[0_0_35px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]"
              >
                Explore HireSetu
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => goTo("#contact")}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
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
                    <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">Release Candidate</div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      ["282", "Tests"],
                      ["0", "Lint errors"],
                      ["GST", "Invoices"],
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

        <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionLabel>Products</SectionLabel>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">One brand, multiple AI products.</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                A2C AI is designed as a parent brand. HireSetu is the first flagship SaaS, with more automation products planned under the same trusted identity.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-slate-300">
              Domain: <span className="font-bold text-cyan-100">{brand.domain}</span>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-white/[0.075]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{product.label}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-white">{product.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-violet-200">{product.title}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{product.description}</p>
                  <div className="mt-6 grid gap-2">
                    {product.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className="h-4 w-4 text-cyan-200" />
                        {bullet}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="hiresetu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-white/[0.045] to-violet-500/10 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionLabel>Flagship Product</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">A2C AI HireSetu</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  HireSetu helps recruitment teams screen resumes, evaluate candidates, manage jobs, control team access, and handle SaaS billing in one buyer-ready workflow.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Indian recruiter scoring weights",
                    "Hard flags and missing-info detection",
                    "Multi-HR login and RBAC",
                    "Razorpay checkout and GST invoices",
                    "Printable invoice view",
                    "Release documentation included",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-sm text-slate-200">
                      <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                      {item}
                    </div>
                  ))}
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

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionLabel>Journey</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Built from real product execution.</h2>
          <div className="mt-10 grid gap-4">
            {milestones.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                <div className="grid h-10 w-10 flex-none place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-black">{index + 1}</div>
                <p className="pt-2 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionLabel>Pricing</SectionLabel>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Simple SaaS pricing for early buyers.</h2>
            <p className="mt-4 text-slate-300">Pricing can be customized for deployment, local installation, and enterprise requirements.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[1.75rem] border p-6 shadow-2xl backdrop-blur-xl ${
                  plan.featured
                    ? "border-cyan-300/35 bg-cyan-300/10"
                    : "border-white/10 bg-white/[0.05]"
                }`}
              >
                {plan.featured && <div className="mb-4 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">Recommended</div>}
                <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-300">{plan.description}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="pb-1 text-sm text-slate-400">{plan.period}</span>
                </div>
                <button
                  onClick={() => goTo("#contact")}
                  className={`mt-6 w-full rounded-2xl px-5 py-3 text-sm font-black transition ${
                    plan.featured
                      ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:scale-[1.02]"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Request Access
                </button>
                <div className="mt-6 grid gap-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check className="h-4 w-4 text-cyan-200" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight text-white">Start your A2C AI journey.</h2>
              <p className="mt-4 text-slate-300">
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
            <form className="grid gap-4" onSubmit={handleContactSubmit}>
              <input
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                placeholder="Your name"
                value={contactForm.name}
                onChange={(event) => updateContactField("name", event.target.value)}
              />
              <input
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                placeholder="Email address"
                value={contactForm.email}
                onChange={(event) => updateContactField("email", event.target.value)}
              />
              <select
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition focus:border-cyan-300/50"
                value={contactForm.topic}
                onChange={(event) => updateContactField("topic", event.target.value)}
              >
                <option>HireSetu demo</option>
                <option>Local deployment enquiry</option>
                <option>Razorpay / billing setup</option>
                <option>Other A2C AI product enquiry</option>
              </select>
              <textarea
                className="min-h-32 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                placeholder="Tell us what you need"
                value={contactForm.message}
                onChange={(event) => updateContactField("message", event.target.value)}
              />
              <button className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-4 text-sm font-black text-white shadow-[0_0_35px_rgba(34,211,238,0.24)] transition hover:scale-[1.01]">
                Send Enquiry
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
              <p className="text-xs leading-5 text-slate-500">This button opens the visitor's email app with the enquiry details pre-filled. Later, you can connect it to Formspree, Google Forms, or your own backend API.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <LogoMark />
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
              A2C AI builds digital SaaS products. HireSetu is our AI recruitment SaaS product for resume screening, candidate management, subscriptions, and invoices.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:text-right">
            <button onClick={() => setPolicyKey("privacy")} className="hover:text-cyan-100">Privacy Policy</button>
            <button onClick={() => setPolicyKey("terms")} className="hover:text-cyan-100">Terms & Conditions</button>
            <button onClick={() => setPolicyKey("refund")} className="hover:text-cyan-100">Refund Policy</button>
            <button onClick={() => setPolicyKey("shipping")} className="hover:text-cyan-100">Shipping / Delivery Policy</button>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 A2C AI. All rights reserved. Built by {brand.founder}.
        </div>
      </footer>

      {policyKey && <PolicyModal policyKey={policyKey} onClose={() => setPolicyKey(null)} />}
    </div>
  );
}

export default App;
