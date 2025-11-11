import { useNavigate } from "react-router-dom";
import {
  Map,
  Grid3X3,
  ArrowRight,
  Building,
  MapPin,
  Users,
  ShieldCheck,
  DollarSign,
  FileCheck,
  Quote,
} from "lucide-react"; // Keeping lucide-react as it's in your provided code

export default function Home() {
  const navigate = useNavigate();

  /* --- Data (No Changes) --- */
  const reasons = [
    {
      icon: <DollarSign className="text-green-600 w-8 h-8" />,
      title: "No Brokers Needed",
      desc: "Save up to 10% commission with direct owner-buyer verification.",
      color: "from-green-50 to-green-100",
    },
    {
      icon: <ShieldCheck className="text-blue-600 w-8 h-8" />,
      title: "100% Legal Trust",
      desc: "Every land record cross-verified by certified property lawyers.",
      color: "from-blue-50 to-blue-100",
    },
    {
      icon: <MapPin className="text-purple-600 w-8 h-8" />,
      title: "Govt Survey Match",
      desc: "Instant matching with government survey maps and plot boundaries.",
      color: "from-purple-50 to-indigo-100",
    },
    {
      icon: <FileCheck className="text-pink-600 w-8 h-8" />,
      title: "Affordable Plans",
      desc: "Choose flexible verification plans from basic to full legal check.",
      color: "from-pink-50 to-rose-100",
    },
  ];

  const opinions = [
    {
      name: "Adv. Rajesh Sharma",
      title: "Land Law Expert",
      quote: "InfoLand brings true transparency with verified land records.",
    },
    {
      name: "Adv. Neha Reddy",
      title: "Property Legal Advisor",
      quote:
        "Unlike brokers, InfoLand ensures legal accuracy with digital checks.",
    },
    {
      name: "Adv. Arjun Mehta",
      title: "Real Estate Consultant",
      quote: "Government map match + lawyer review = 100% confidence.",
    },
  ];

  const features = [
    { icon: MapPin, label: "Interactive Maps", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: Building, label: "Construction Insights", color: "text-green-600", bg: "bg-green-100" },
    { icon: Users, label: "Expert Recommendations", color: "text-purple-600", bg: "bg-purple-100" },
    { icon: ShieldCheck, label: "Fraud Prevention", color: "text-amber-600", bg: "bg-amber-100" },
  ];

  const navCards = [
    {
      title: "Select From Cards",
      desc: "Browse verified plots in a card layout",
      icon: Grid3X3,
      color: "text-blue-600",
      bg: "bg-blue-100",
      to: "/cards",
    },
    {
      title: "Select From Map",
      desc: "Explore real plots through interactive mapping",
      icon: Map,
      color: "text-green-600",
      bg: "bg-green-100",
      to: "/plot",
    },
    {
      title: "Select From Colony Map",
      desc: "Explore colony-based land view",
      icon: Map,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      to: "/map",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 bg-white">

      {/* ───── HERO SECTION ───── */}
      <section className="pt-24 pb-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Land <span className="text-blue-600">Insight</span> Portal
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent land verification with <b>government map checks</b> &
            <b> certified legal review.</b>
          </p>

          {/* FEATURES GRID */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center max-w-2xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md ${f.bg} transition-transform duration-300 ease-in-out hover:scale-110`}
                >
                  <f.icon className={`w-8 h-8 ${f.color}`} />
                </div>
                <p className="text-sm font-medium mt-3">{f.label}</p>
              </div>
            ))}
          </div>

          {/* NAVIGATION CARDS GRID */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {navCards.map((card, i) => (
              <div
                key={i}
                onClick={() => navigate(card.to)}
                className="group bg-white rounded-3xl p-8 border shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300 ease-in-out"
              >
                <div
                  className={`w-16 h-16 ${card.bg} rounded-full flex items-center justify-center mx-auto transition-transform duration-300 ease-in-out group-hover:scale-110`}
                >
                  <card.icon className={`w-8 h-8 ${card.color}`} />
                </div>
                <h3 className="text-xl font-semibold mt-5 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm mb-5">{card.desc}</p>

                <div
                  className={`flex items-center justify-center mt-4 ${card.color} font-medium`}
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHY US SECTION ───── */}
      <section className="py-24 bg-gradient-to-r from-purple-50 via-pink-50 to-rose-100">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Why Choose <span className="text-purple-600">InfoLand?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            A perfect blend of technology + legal verification.
          </p>

          {/* GRID INSTEAD OF CAROUSEL */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 shadow-lg bg-gradient-to-br ${r.color} text-left transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-full shadow-md">{r.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{r.title}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── LAWYERS' SECTION ───── */}
      <section className="py-24 bg-gradient-to-tr from-yellow-50 via-amber-100 to-orange-50">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-16">
            Lawyers’ Opinions ⚖️
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {opinions.map((op, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-xl relative border-t-4 border-amber-400 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute top-6 right-6 opacity-10 text-amber-300">
                  <Quote size={48} />
                </div>
                <p className="italic text-gray-700 text-lg mb-6 relative z-10">
                  “{op.quote}”
                </p>

                <div className="border-t border-gray-100 pt-5 text-left">
                  <h3 className="font-semibold text-lg">{op.name}</h3>
                  <p className="text-sm text-amber-600 font-medium">{op.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TRUST BANNER ───── */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-3">
          Zero Brokers. Zero Fraud. Total Transparency.
        </h3>
        <p className="mt-2 text-blue-100 text-lg">
          Backed by verified land records & certified legal review.
        </p>
      </section>
    </div>
  );
}