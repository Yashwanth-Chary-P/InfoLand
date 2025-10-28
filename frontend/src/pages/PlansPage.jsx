import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "₹499",
    desc: "Perfect for quick checks and small transactions.",
    features: ["Ownership check", "Govt map match", "1 day report"],
    color: "from-green-100 to-green-200",
  },
  {
    name: "Standard",
    price: "₹999",
    desc: "Ideal for secure land verification with legal validation.",
    features: [
      "+ Encumbrance check",
      "2 lawyer reviews",
      "Detailed PDF report",
    ],
    color: "from-blue-100 to-blue-200",
  },
  {
    name: "Premium",
    price: "₹1499",
    desc: "Complete peace of mind with expert legal assurance.",
    features: [
      "+ Legal certificate",
      "3 expert lawyers",
      "Priority 24/7 support",
    ],
    color: "from-purple-100 to-indigo-200",
  },
];

export default function PlansPage() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-bl from-sky-50 to-indigo-100 min-h-screen text-center">
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Choose Your Perfect Plan 💼
      </motion.h2>

      <p className="text-gray-600 mb-12 text-lg">
        Get expert-backed land verification reports at affordable prices.
      </p>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`relative bg-gradient-to-b ${p.color} rounded-3xl shadow-xl w-80 overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white opacity-70 blur-2xl" />
            <div className="relative p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {p.name}
              </h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <p className="text-4xl font-extrabold text-blue-600 mb-4">
                {p.price}
                <span className="text-sm text-gray-500 font-medium">
                  {" "}
                  / once
                </span>
              </p>
              <ul className="text-gray-700 space-y-2 mb-6 text-left">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-green-600">✅</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white rounded-full px-6 py-2 text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition"
              >
                Select Plan
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-gray-500 text-sm">
        ✨ Trusted by land buyers, lawyers & real estate experts across India.
      </div>
    </div>
  );
}
