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
  BarChart3,
  AlertTriangle,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  const stats = [
    { number: "1.2M+", label: "Transactions Verified", color: "text-emerald-600" },
    { number: "22%", label: "Fraud Cases Detected", color: "text-red-500" },
    { number: "85%", label: "Safer Land Deals", color: "text-green-600" },
  ];

  const reasons = [
    {
      icon: <DollarSign className="text-green-500 w-8 h-8" />,
      title: "No Brokers Needed",
      desc: "Save up to 10% commission. Direct owner-to-buyer verification with zero middlemen.",
      color: "from-green-100 to-green-50",
    },
    {
      icon: <ShieldCheck className="text-blue-500 w-8 h-8" />,
      title: "100% Legal Trust",
      desc: "Every land record is cross-verified by certified lawyers for complete legal assurance.",
      color: "from-blue-100 to-blue-50",
    },
    {
      icon: <MapPin className="text-purple-500 w-8 h-8" />,
      title: "Govt Map & Survey Match",
      desc: "We instantly match your plot with government survey maps for verified boundaries.",
      color: "from-purple-100 to-indigo-50",
    },
    {
      icon: <FileCheck className="text-pink-500 w-8 h-8" />,
      title: "Transparent & Affordable Plans",
      desc: "Choose from flexible plans designed for all — from quick checks to full legal verification.",
      color: "from-pink-100 to-rose-50",
    },
  ];

  const opinions = [
    {
      name: "Adv. Rajesh Sharma",
      title: "Land Law Expert",
      quote:
        "InfoLand ensures transparency through verified land records. It’s transforming how people validate ownership and avoid frauds.",
    },
    {
      name: "Adv. Neha Reddy",
      title: "Property Legal Advisor",
      quote:
        "Unlike brokers, InfoLand provides authentic legal background checks backed by certified documentation and digital verification.",
    },
    {
      name: "Adv. Arjun Mehta",
      title: "Real Estate Consultant",
      quote:
        "With government map matching and expert review, InfoLand gives buyers 100% confidence before any land purchase.",
    },
  ];

  const features = [
    {
      icon: MapPin,
      color: "text-blue-600",
      bg: "bg-blue-100",
      label: "Interactive Maps",
    },
    {
      icon: Building,
      color: "text-green-600",
      bg: "bg-green-100",
      label: "Construction Insights",
    },
    {
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-100",
      label: "Expert Recommendations",
    },
    {
      icon: ShieldCheck,
      color: "text-amber-600",
      bg: "bg-amber-100",
      label: "Fraud Prevention",
    },
  ];

  const navCards = [
    {
      title: "Select From Cards",
      desc: "Browse verified plots in an organized card layout",
      icon: Grid3X3,
      color: "text-blue-600",
      bg: "bg-blue-100",
      to: "/cards",
      hoverBg: "hover:bg-blue-200",
    },
    {
      title: "Select From Map",
      desc: "Explore real plots through interactive maps",
      icon: Map,
      color: "text-green-600",
      bg: "bg-green-100",
      to: "/plot",
      hoverBg: "hover:bg-green-200",
    },
    {
      title: "Select From Colony Map",
      desc: "Explore real plots through interactive maps",
      icon: Map,
      color: "text-blue-600",
      bg: "bg-blue-100",
      to: "/map",
      hoverBg: "hover:bg-green-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-gray-100 text-gray-800">

      
      {/* HERO + NAVIGATION SECTION */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-gray-100 text-center">
        <motion.h1
          className="text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Land <span className="text-blue-600">Insight</span> Portal
        </motion.h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Empowering you with <b>transparent land verification</b> and <b>AI-driven construction recommendations</b>.
        </p>

        <div className="flex flex-wrap justify-center gap-10 mb-14">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <div className={`w-14 h-14 ${f.bg} rounded-full flex items-center justify-center mb-2 shadow-md`}>
                <f.icon className={`w-7 h-7 ${f.color}`} />
              </div>
              <span className="text-sm font-medium">{f.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {navCards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              onClick={() => navigate(item.to)}
              className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all w-72 text-center hover:scale-105 border cursor-pointer"
            >
              <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
              <div className={`flex items-center justify-center ${item.color} font-medium`}>
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Land Transaction Insights 📊
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-teal-100 p-10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-lg text-gray-700 mb-3">
            Every year, over <b className="text-emerald-600">1.2 million</b> land transactions take place in India.
          </p>
          <p className="text-red-500 font-semibold text-xl">
            ⚠️ 22% involve fraudulent or disputed ownership claims.
          </p>
          <p className="mt-4 text-gray-700">
            <b>InfoLand</b> empowers buyers with verified data, reducing fraud risk by up to <b>85%</b>.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 px-6 max-w-6xl mx-auto">
          {[
            { icon: <BarChart3 size={40} />, label: "1.2M+ Transactions", desc: "Verified records analyzed yearly." },
            { icon: <AlertTriangle size={40} />, label: "22% Frauds Detected", desc: "Ownership disputes prevented." },
            { icon: <ShieldCheck size={40} />, label: "85% Safer Deals", desc: "AI + legal verification ensures trust." },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex flex-col items-center">
                {s.icon}
                <h3 className="text-xl font-semibold mt-3">{s.label}</h3>
                <p className="text-sm opacity-90">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-rose-100 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Why Choose <span className="text-purple-600">InfoLand?</span> 🌟
        </motion.h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          We’re redefining land transactions with trust, technology, and transparency.
        </p>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -6 }}
              className={`bg-gradient-to-br ${r.color} w-80 p-8 rounded-3xl shadow-xl text-left relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-full shadow-md">{r.icon}</div>
                  <h3 className="text-lg font-bold">{r.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LAWYERS SECTION */}
      <section className="py-20 bg-gradient-to-tr from-yellow-50 via-amber-100 to-orange-50 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-8 relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Lawyers’ Opinion ⚖️
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Hear what top property lawyers say about <b>InfoLand</b> and our verified background system.
        </p>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {opinions.map((op, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white w-80 p-8 rounded-3xl shadow-xl border-t-4 border-amber-400 text-left"
            >
              <div className="opacity-20 absolute top-4 right-4">
                <Quote size={48} />
              </div>
              <p className="text-gray-700 italic mb-6">“{op.quote}”</p>
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold">{op.name}</h3>
                <p className="text-sm text-amber-600">{op.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* TRUST BANNER */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-2">
            No Brokers. No Middlemen. 100% Transparency.
          </h3>
          <p className="text-blue-100">
            Backed by expert lawyers and verified records — InfoLand gives you trust no broker can.
          </p>
        </div>
      </section>
    </div>
  );
}
