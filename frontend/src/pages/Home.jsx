import { Link, useNavigate } from "react-router-dom";
import {
  Map,
  Grid3X3,
  ArrowRight,
  Building,
  MapPin,
  Users,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-gray-100 overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl font-extrabold text-gray-800 mb-6 tracking-tight">
            Land <span className="text-blue-600">Insight</span> Portal
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering you with <b>transparent land verification</b> and{" "}
            <b>AI-driven construction recommendations</b>. Explore, analyze,
            and invest confidently — all in one platform.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-10 mb-14">
            {[
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
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 ${f.bg} rounded-full flex items-center justify-center mb-2 shadow-md`}
                >
                  <f.icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  {f.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Navigation Cards */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {[
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
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                onClick={() => navigate(item.to)} // 👈 added navigation here
                className="group p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 w-72 text-center hover:scale-105 border border-gray-100 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-4 ${item.hoverBg} transition-colors`}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
                <div
                  className={`flex items-center justify-center ${item.color} font-medium`}
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Glowing Background Accent */}
        <div className="absolute w-[600px] h-[600px] bg-blue-200 opacity-20 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2 -z-10"></div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20 mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Platform Overview 🌍
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: "21",
                label: "Available Plots",
                color: "text-blue-600",
              },
              {
                number: "3",
                label: "Soil Types Analyzed",
                color: "text-green-600",
              },
              {
                number: "5+",
                label: "Construction Categories",
                color: "text-purple-600",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl"
              >
                <div
                  className={`text-5xl font-extrabold ${stat.color} mb-2 tracking-tight`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center mt-16">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-2">
            No Brokers. No Middlemen. 100% Transparency.
          </h3>
          <p className="text-blue-100">
            Backed by expert lawyers and verified records — InfoLand gives you
            the trust that no broker ever can.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
