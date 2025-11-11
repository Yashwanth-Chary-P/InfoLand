import {  useState, useEffect } from "react";
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
  Star,
  CheckCircle,
  Zap,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Gem,
  Crown,
  Globe,
  Lock,
  Rocket,
  Heart,
  Eye,
  BarChart3,
  Layers,
  Target,
  ZapOff,
  Infinity,
  Flame,
  Diamond,
  Building2,
  Compass,
  
  FileText,
  Gavel,
  BadgeCheck,
  TrendingUpIcon,
  Coins,
  Shield,
  Landmark,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* --- Enhanced Data --- */
  const reasons = [
    {
      icon: <Coins className="text-emerald-400 w-10 h-10 drop-shadow-lg" />,
      title: "Zero Commission",
      desc: "Save up to 15% with direct owner verification. No hidden fees.",
      color: "from-emerald-400 via-teal-500 to-cyan-600",
      stat: "15% Savings",
      bgPattern: "bg-gradient-to-br from-emerald-50/90 to-teal-100/90",
      glow: "shadow-emerald-500/50",
      particle: "emerald",
    },
    {
      icon: <Shield className="text-blue-400 w-10 h-10 drop-shadow-lg" />,
      title: "Blockchain Security",
      desc: "Military-grade encryption with immutable land records.",
      color: "from-blue-400 via-indigo-500 to-purple-600",
      stat: "100% Secure",
      bgPattern: "bg-gradient-to-br from-blue-50/90 to-indigo-100/90",
      glow: "shadow-blue-500/50",
      particle: "blue",
    },
    {
      icon: <Globe className="text-violet-400 w-10 h-10 drop-shadow-lg" />,
      title: "Satellite Mapping",
      desc: "Real-time satellite imagery with AI-powered boundary detection.",
      color: "from-violet-400 via-purple-500 to-pink-600",
      stat: "Live Maps",
      bgPattern: "bg-gradient-to-br from-violet-50/90 to-purple-100/90",
      glow: "shadow-violet-500/50",
      particle: "violet",
    },
    {
      icon: <Diamond className="text-rose-400 w-10 h-10 drop-shadow-lg" />,
      title: "Premium Plans",
      desc: "Exclusive VIP access to premium properties and concierge service.",
      color: "from-rose-400 via-pink-500 to-red-600",
      stat: "VIP Access",
      bgPattern: "bg-gradient-to-br from-rose-50/90 to-pink-100/90",
      glow: "shadow-rose-500/50",
      particle: "rose",
    },
  ];

  const opinions = [
    {
      name: "Adv. Rajesh Sharma",
      title: "Supreme Court Lawyer",
      quote: "InfoLand has revolutionized property verification with its blockchain technology. Absolutely game-changing!",
      rating: 5,
      avatar: "RS",
      verified: true,
    },
    {
      name: "Adv. Neha Reddy",
      title: "Property Law Expert",
      quote: "The AI-powered boundary detection is 99.9% accurate. This is the future of real estate.",
      rating: 5,
      avatar: "NR",
      verified: true,
    },
    {
      name: "Adv. Arjun Mehta",
      title: "Real Estate Mogul",
      quote: "I've processed 500+ properties through InfoLand. Zero fraud, maximum efficiency.",
      rating: 5,
      avatar: "AM",
      verified: true,
    },
    {
      name: "Adv. Priya Patel",
      title: "Legal Tech Advisor",
      quote: "The smart contract integration has reduced paperwork by 90%. Incredible innovation!",
      rating: 5,
      avatar: "PP",
      verified: true,
    },
    {
      name: "Adv. Vikram Singh",
      title: "Property Consultant",
      quote: "InfoLand's satellite mapping technology is light years ahead of competitors.",
      rating: 5,
      avatar: "VS",
      verified: true,
    },
  ];

  const features = [
    { 
      icon: Compass, 
      label: "3D Maps", 
      color: "text-blue-400", 
      bg: "bg-gradient-to-br from-blue-100/80 to-indigo-200/80",
      detail: "Immersive navigation",
      shimmer: "from-blue-200 to-cyan-200",
      glow: "glow-blue",
    },
    { 
      icon: Building2, 
      label: "AR View", 
      color: "text-emerald-400", 
      bg: "bg-gradient-to-br from-emerald-100/80 to-teal-200/80",
      detail: "Augmented reality",
      shimmer: "from-emerald-200 to-teal-200",
      glow: "glow-emerald",
    },
    { 
      icon: Layers, 
      label: "Deep Analytics", 
      color: "text-violet-400", 
      bg: "bg-gradient-to-br from-violet-100/80 to-purple-200/80",
      detail: "Predictive insights",
      shimmer: "from-violet-200 to-pink-200",
      glow: "glow-violet",
    },
    { 
      icon: Flame, 
      label: "Hot Deals", 
      color: "text-amber-400", 
      bg: "bg-gradient-to-br from-amber-100/80 to-orange-200/80",
      detail: "Exclusive offers",
      shimmer: "from-amber-200 to-orange-200",
      glow: "glow-amber",
    },
    { 
      icon: Infinity, 
      label: "Lifetime Access", 
      color: "text-rose-400", 
      bg: "bg-gradient-to-br from-rose-100/80 to-pink-200/80",
      detail: "One-time payment",
      shimmer: "from-rose-200 to-pink-200",
      glow: "glow-rose",
    },
    { 
      icon: Rocket, 
      label: "Fast Track", 
      color: "text-indigo-400", 
      bg: "bg-gradient-to-br from-indigo-100/80 to-purple-200/80",
      detail: "Priority processing",
      shimmer: "from-indigo-200 to-purple-200",
      glow: "glow-indigo",
    },
  ];

  const navCards = [
    {
      title: "Luxury Cards",
      desc: "Premium properties with virtual tours and 4K imagery.",
      icon: Grid3X3,
      color: "text-white",
      bg: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600",
      to: "/cards",
      popular: true,
      gradient: "from-indigo-500 to-purple-600",
      badge: "EXCLUSIVE",
      glow: "shadow-purple-500/50",
    },
    {
      title: "Quantum Maps",
      desc: "AI-powered mapping with real-time property insights.",
      icon: Map,
      color: "text-white",
      bg: "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600",
      to: "/plot",
      gradient: "from-emerald-500 to-teal-600",
      badge: "NEW",
      glow: "shadow-emerald-500/50",
    },
    {
      title: "Metaverse View",
      desc: "Explore properties in virtual reality from anywhere.",
      icon: Globe,
      color: "text-white",
      bg: "bg-gradient-to-br from-rose-600 via-pink-600 to-red-600",
      to: "/map",
      gradient: "from-rose-500 to-pink-600",
      badge: "VR",
      glow: "shadow-rose-500/50",
    },
  ];

  // Carousel controls
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % opinions.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + opinions.length) % opinions.length);
  };

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % Math.ceil(features.length / 3));
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + Math.ceil(features.length / 3)) % Math.ceil(features.length / 3));
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-gray-800 bg-black overflow-x-hidden relative">
      
      {/* Dynamic Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease-out',
        }}
      />

      {/* ───── HERO SECTION WITH ULTRA PREMIUM EFFECTS ───── */}
      <section className="relative pt-32 pb-40 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Multi-layered Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            >
              <div className={`w-2 h-2 bg-gradient-to-r ${
                ['from-purple-400 to-pink-400', 'from-blue-400 to-indigo-400', 'from-emerald-400 to-teal-400'][i % 3]
              } rounded-full`}></div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center px-6 relative z-20">
          {/* Premium Badge with Glow */}
          <div className={`inline-flex items-center px-8 py-4 mb-12 text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-2xl transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } hover:scale-105`}>
            <BadgeCheck className="w-6 h-6 mr-3" />
            Trusted by 100,000+ Elite Property Buyers
          </div>

          <h1 className={`text-7xl sm:text-9xl font-black leading-none mb-8 tracking-tighter transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient bg-300">
              Land Insight
            </span>
            <span className="block text-6xl sm:text-8xl text-white mt-2">Portal</span>
          </h1>

          <p className={`text-2xl sm:text-4xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">ultimate</span> land verification platform powered by 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-bold"> quantum computing</span> and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-bold"> blockchain technology</span>.
          </p>

          {/* Premium CTA Buttons with Advanced Effects */}
          <div className={`mt-16 flex flex-col sm:flex-row gap-8 justify-center transition-all duration-1000 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => navigate("/cards")}
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>
              <span className="relative z-10 flex items-center text-xl">
                <Rocket className="w-6 h-6 mr-3" />
                Explore Properties
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            <button className="group relative px-12 py-6 bg-white/10 backdrop-blur-xl text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40">
              <span className="flex items-center text-xl">
                <Sparkles className="w-6 h-6 mr-3" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Features Carousel with 3D Effect */}
          <div className={`mt-24 relative transition-all duration-1000 delay-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center justify-between mb-12">
              <button 
                onClick={prevFeature}
                className="p-4 bg-white/10 backdrop-blur-xl rounded-full shadow-2xl hover:shadow-purple-500/50 hover:bg-white/20 transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <h3 className="text-3xl font-bold text-white">Cutting-Edge Features</h3>
              <button 
                onClick={nextFeature}
                className="p-4 bg-white/10 backdrop-blur-xl rounded-full shadow-2xl hover:shadow-purple-500/50 hover:bg-white/20 transition-all transform hover:scale-110"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>
            
            <div className="overflow-hidden perspective-1000">
              <div 
                className="flex gap-8 transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentFeature * 100}%)` }}
              >
                {[...Array(Math.ceil(features.length / 3))].map((_, pageIndex) => (
                  <div key={pageIndex} className="min-w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {features.slice(pageIndex * 3, (pageIndex + 1) * 3).map((f, i) => (
                      <div key={i} className="group relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${f.shimmer} opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-500 blur-xl`}></div>
                        <div className={`relative p-10 rounded-3xl ${f.bg} backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-white/10`}>
                          <div className={`w-20 h-20 mx-auto rounded-3xl bg-white/20 backdrop-blur-xl shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ${f.glow}`}>
                            <f.icon className={`w-10 h-10 ${f.color}`} />
                          </div>
                          <p className="text-xl font-bold text-white mb-2">{f.label}</p>
                          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{f.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Cards with 3D Hover */}
          <div className={`mt-32 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000 delay-1500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {navCards.map((card, i) => (
              <div
                key={i}
                onClick={() => navigate(card.to)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-5 hover:scale-105 preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90`}></div>
                {card.popular && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-2xl animate-pulse">
                      {card.badge}
                    </div>
                  </div>
                )}
                
                <div className="relative p-12 text-white">
                  <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                    <card.icon className="w-12 h-12" />
                  </div>

                  <h3 className="text-3xl font-black mb-4">{card.title}</h3>
                  <p className="text-white/90 mb-8 text-lg">{card.desc}</p>

                  <div className="flex items-center justify-center font-bold text-lg">
                    Explore Now
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── STATS SECTION WITH HOLOGRAPHIC EFFECT ───── */}
      <section className="py-24 bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-pink-900/50 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100K+", label: "Verified Properties", icon: <Landmark className="w-8 h-8" />, color: "from-purple-400 to-pink-400" },
              { value: "99.99%", label: "Accuracy Rate", icon: <Target className="w-8 h-8" />, color: "from-blue-400 to-indigo-400" },
              { value: "24/7", label: "AI Support", icon: <Zap className="w-8 h-8" />, color: "from-emerald-400 to-teal-400" },
              { value: "500+", label: "Legal Experts", icon: <Gavel className="w-8 h-8" />, color: "from-amber-400 to-orange-400" },
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className={`flex justify-center mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.icon}
                  </div>
                  <p className="text-5xl font-black text-white mb-2">{stat.value}</p>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── WHY US SECTION WITH ADVANCED EFFECTS ───── */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-6xl font-black mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Why Choose InfoLand?
            </span>
          </h2>

          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-24 font-light">
            Experience the future of property verification with our revolutionary technology
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`group relative p-10 rounded-3xl ${r.bgPattern} backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-5 hover:scale-105 overflow-hidden border border-white/10`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${r.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {r.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{r.title}</h3>
                  <p className="text-black mb-6 text-lg">{r.desc}</p>
                  <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${r.color} text-white text-sm font-bold shadow-xl`}>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {r.stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS CAROUSEL WITH GLASSMORPHISM ───── */}
      <section className="py-32 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center px-6 relative">
          <h2 className="text-6xl font-black mb-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Elite Testimonials ⚖️
            </span>
          </h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-16 border border-white/10">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-20 h-20 mx-auto mb-10 text-purple-400/30" />

              <p className="text-3xl text-gray-200 italic mb-12 font-light leading-relaxed">
                "{opinions[currentTestimonial].quote}"
              </p>

              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-2xl mr-6 shadow-2xl">
                  {opinions[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">{opinions[currentTestimonial].name}</h3>
                    {opinions[currentTestimonial].verified && (
                      <BadgeCheck className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                  <p className="text-purple-300 text-lg">{opinions[currentTestimonial].title}</p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex justify-center items-center gap-6 mt-12">
                <button 
                  onClick={prevTestimonial}
                  className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-110"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <div className="flex gap-3">
                  {opinions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-12' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-110"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── ULTRA PREMIUM CTA SECTION ───── */}
      <section className="py-32 bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer"></div>
        
        <div className="max-w-6xl mx-auto text-center px-6 relative">
          <div className="inline-flex items-center px-8 py-4 mb-12 text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-2xl animate-pulse">
            <TrendingUpIcon className="w-6 h-6 mr-3" />
            Join 100,000+ Elite Property Investors
          </div>
          
          <h3 className="text-5xl sm:text-7xl font-black text-white mb-8 leading-tight">
            Zero Risk.<br />
            Maximum Returns.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Total Transparency.
            </span>
          </h3>
          <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto font-light">
            Powered by quantum computing, blockchain security, and AI-driven insights. Your dream property is just a click away.
          </p>
          
          <button
            onClick={() => navigate("/cards")}
            className="group relative px-16 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 text-xl"
          >
            <span className="flex items-center">
              <Rocket className="w-8 h-8 mr-4" />
              Launch Your Journey
              <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-3 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div>
              <h4 className="font-black mb-8 text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Product</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-8 text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-lg">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-8 text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Resources</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-8 text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Legal</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg mb-6 md:mb-0">© 2024 InfoLand. All rights reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
        .delay-1500 {
          animation-delay: 1500ms;
        }
        .glow-blue {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
        }
        .glow-emerald {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
        }
        .glow-violet {
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
        }
        .glow-amber {
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
        }
        .glow-rose {
          box-shadow: 0 0 30px rgba(244, 63, 94, 0.5);
        }
        .glow-indigo {
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </div>
  );
}