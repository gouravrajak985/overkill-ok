'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GamingCard } from '@/components/ui/gaming-card';
import { 
  Users, 
  Trophy, 
  Briefcase, 
  MessageCircle, 
  Zap, 
  Shield,
  Star,
  GamepadIcon,
  Play,
  ArrowRight,
  CheckCircle,
  Globe,
  Target,
  Rocket
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Users,
      title: 'Connect & Network',
      description: 'Build meaningful connections with gamers, streamers, and industry professionals worldwide.',
      color: 'purple' as const,
      stats: '50K+ Active Users',
    },
    {
      icon: Trophy,
      title: 'Compete & Win',
      description: 'Join tournaments, climb leaderboards, and showcase your skills in competitive gaming.',
      color: 'cyan' as const,
      stats: '1K+ Tournaments',
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Discover gaming industry opportunities and advance your professional gaming career.',
      color: 'green' as const,
      stats: '500+ Job Listings',
    },
    {
      icon: MessageCircle,
      title: 'Team Communication',
      description: 'Coordinate with your team through real-time chat, voice, and strategic planning tools.',
      color: 'orange' as const,
      stats: '24/7 Real-time Chat',
    },
  ];

  const testimonials = [
    {
      name: 'Alex "ProGamer" Chen',
      role: 'Esports Professional',
      content: 'GameNet helped me connect with my current team and land my dream job in esports.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    {
      name: 'Sarah "StreamQueen" Johnson',
      role: 'Content Creator',
      content: 'The networking opportunities here are incredible. I\'ve grown my community exponentially.',
      avatar: 'https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg',
    },
    {
      name: 'Mike "CodeWarrior" Davis',
      role: 'Game Developer',
      content: 'Found my co-founder and built our indie game studio through connections made on GameNet.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
    },
  ];

  const stats = [
    { label: 'Active Gamers', value: '50K+', icon: Users, description: 'Verified gaming profiles' },
    { label: 'Tournaments Hosted', value: '1,200+', icon: Trophy, description: 'Competitive events' },
    { label: 'Career Opportunities', value: '500+', icon: Briefcase, description: 'Gaming industry jobs' },
    { label: 'Organizations', value: '200+', icon: Shield, description: 'Professional teams' },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 animate-pulse rounded-full bg-green-500/10 blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8"
              >
                <Zap className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-medium">The Future of Gaming Social Networks</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 font-orbitron">
                Level Up Your{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                    Gaming
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
                <br />
                <span className="text-gray-300">Network</span>
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-12 max-w-4xl mx-auto">
                Connect with elite gamers, join professional tournaments, discover career opportunities, 
                and build the gaming community of tomorrow. Your journey to gaming greatness starts here.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg h-auto group"
                >
                  <Link href="/auth/signup">
                    <GamepadIcon className="mr-3 h-6 w-6" />
                    Start Your Journey
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="px-8 py-6 text-lg h-auto border-purple-500/50 text-purple-300 hover:bg-purple-500/10 group"
                >
                  <Link href="/feed">
                    <Play className="mr-3 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-wrap items-center justify-center gap-8 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Trusted by 50K+ Gamers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-400" />
                  <span>Global Community</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-purple-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 font-orbitron">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Dominate
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive tools and features designed for serious gamers who want to excel
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <GamingCard glowColor={feature.color} className="p-8 h-full relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 font-orbitron">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="text-sm font-medium text-purple-300">
                      {feature.stats}
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </GamingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-black/20 relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
              Trusted by the{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Gaming Elite
              </span>
            </h2>
            <p className="text-xl text-gray-300">Join thousands of professionals already building their legacy</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <GamingCard className="p-8 text-center group hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white font-orbitron mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-medium text-gray-300 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </GamingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
              Success Stories from{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Community
              </span>
            </h2>
            <p className="text-xl text-gray-300">Real gamers, real achievements, real impact</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <GamingCard className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-purple-500/30 mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-purple-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </GamingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-purple-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 font-orbitron">
              Ready to{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Dominate
              </span>
              ?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Join the elite gaming community where legends are born and careers are made. 
              Your next level awaits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-10 py-6 text-xl h-auto group"
              >
                <Link href="/auth/signup">
                  <Rocket className="mr-3 h-6 w-6" />
                  Join GameNet Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="px-10 py-6 text-xl h-auto border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
              >
                <Link href="/feed">
                  <Target className="mr-3 h-6 w-6" />
                  Explore Platform
                </Link>
              </Button>
            </div>

            {/* Additional Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free to Join</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-400" />
                <span>Instant Access</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}