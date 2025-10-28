import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic Verification",
    emoji: "🟩",
    price: "₹499",
    desc: "Quick property background check before shortlisting.",
    includes: [
      "Fetch data directly from government records",
      "Ownership details & Encumbrance Certificate (EC)",
      "Property boundaries & survey number validation",
      "Check for duplicate or overlapping registration",
      "Instant digital report (no manual lawyer review)",
      "Ideal for quick authenticity check before proceeding",
    ],
    color: "from-green-100 to-green-200",
  },
  {
    name: "Standard Legal Verification",
    emoji: "🟦",
    price: "₹1,999",
    desc: "Expert-verified document validation for confident property purchase.",
    includes: [
      "Everything in Basic, plus:",
      "Document review by certified legal team",
      "Title chain summary (past ownership sequence)",
      "Basic dispute and mortgage verification",
      "Draft legal opinion by partnered lawyer",
      "Delivered within 2–3 working days",
      "Perfect before paying advance or signing agreement",
    ],
    color: "from-blue-100 to-blue-200",
  },
  {
    name: "Premium + On-Ground Check",
    emoji: "🟧",
    price: "₹4,999",
    desc: "Comprehensive verification with legal opinion and field inspection.",
    includes: [
      "Everything in Standard, plus:",
      "Lawyer-signed detailed legal opinion",
      "Field verification of property boundaries",
      "Physical record check at sub-registrar office (if needed)",
      "Encumbrance & litigation re-check from multiple sources",
      "Dedicated phone support & report explanation session",
      "Verified report with ‘Verified Property’ certificate",
    ],
    color: "from-orange-100 to-yellow-100",
  },
];

export default function PlansSection() {
  return (
    <section
      id="plans"
      className="pt-24 pb-20 bg-gradient-to-bl from-sky-50 to-indigo-100 min-h-screen text-center"
    >
      <motion.h2
        className="text-5xl font-extrabold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Choose Your Verification Plan
      </motion.h2>

      <p className="text-gray-600 mb-16 text-lg max-w-2xl mx-auto leading-relaxed">
        Get authentic, expert-verified land reports powered by government data and
        reviewed by professionals. Perfect for every stage of your property journey.
      </p>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`relative bg-gradient-to-b ${p.color} rounded-3xl shadow-2xl w-96 overflow-hidden border border-gray-200`}
          >
            <div className="absolute inset-0 bg-white opacity-70 blur-2xl" />

            <div className="relative p-8 text-left">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-800">
                  {p.name}
                </h3>
                <span className="text-3xl">{p.emoji}</span>
              </div>

              <p className="text-gray-600 mb-5 italic leading-snug">{p.desc}</p>

              <div className="mb-6">
                <p className="text-4xl font-extrabold text-blue-700">
                  {p.price}
                </p>
                <p className="text-sm text-gray-500 font-medium">One-time payment</p>
              </div>

              <ul className="text-gray-700 space-y-2 mb-8 list-disc list-inside">
                {p.includes.map((f, j) => (
                  <li key={j} className="leading-relaxed">
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-700 text-white rounded-full px-6 py-3 text-lg font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg transition"
              >
                Select Plan
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-gray-500 text-sm">
        ✨ Trusted by buyers, lawyers, and real estate professionals across India.
      </div>
    </section>
  );
}
