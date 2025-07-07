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
  GamepadIcon
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Users,
      title: 'Connect with Gamers',
      description: 'Build your network and find like-minded players in your favorite games.',
      color: 'purple' as const,
    },
    {
      icon: Trophy,
      title: 'Compete in Tournaments',
      description: 'Join epic tournaments and prove your skills against the best.',
      color: 'cyan' as const,
    },
    {
      icon: Briefcase,
      title: 'Find Gaming Jobs',
      description: 'Discover career opportunities in the gaming industry.',
      color: 'green' as const,
    },
    {
      icon: MessageCircle,
      title: 'Real-time Chat',
      description: 'Stay connected with your team through instant messaging.',
      color: 'orange' as const,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl font-orbitron">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  GameNet
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
                The ultimate social platform for gamers. Connect, compete, and collaborate with players worldwide. 
                Build your gaming legacy today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg"
                >
                  <Link href="/auth/signup">
                    <GamepadIcon className="mr-2 h-5 w-5" />
                    Start Gaming
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="px-8 py-4 text-lg border-purple-500/50 text-purple-300 hover:bg-purple-500/10">
                  <Link href="/feed">Explore Feed</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 animate-pulse rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 animate-pulse rounded-full bg-green-500/20 blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-orbitron">
              Level Up Your Gaming Experience
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Everything you need to thrive in the gaming community
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <GamingCard glowColor={feature.color} className="p-6 h-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 mb-4">
                      <feature.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-orbitron">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </GamingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                { label: 'Active Gamers', value: '10K+', icon: Users },
                { label: 'Tournaments', value: '500+', icon: Trophy },
                { label: 'Job Listings', value: '200+', icon: Briefcase },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <GamingCard className="p-8 text-center">
                    <stat.icon className="mx-auto h-12 w-12 text-cyan-400 mb-4" />
                    <div className="text-4xl font-bold text-white font-orbitron mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </GamingCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-orbitron">
                Ready to Game?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Join thousands of gamers already building their legacy on GameNet
              </p>
              <div className="mt-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg"
                >
                  <Link href="/auth/signup">
                    <Star className="mr-2 h-5 w-5" />
                    Join GameNet
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}