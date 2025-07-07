'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import { GamingCard } from '@/components/ui/gaming-card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Trophy, 
  Star,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Organizations() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!session) {
    redirect('/auth/signin');
  }

  // Mock organizations data
  const organizations = [
    {
      id: '1',
      name: 'Team Liquid',
      description: 'Professional esports organization competing in multiple games including League of Legends, CS2, and Valorant.',
      logo: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      banner: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      members: 156,
      games: ['League of Legends', 'CS2', 'Valorant'],
      isVerified: true,
      achievements: 23,
    },
    {
      id: '2',
      name: 'FaZe Clan',
      description: 'Content creation and competitive gaming organization with teams across various esports titles.',
      logo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      banner: 'https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg',
      members: 89,
      games: ['Call of Duty', 'Fortnite', 'CS2'],
      isVerified: true,
      achievements: 18,
    },
    {
      id: '3',
      name: 'Cloud9',
      description: 'North American esports organization with teams in League of Legends, CS2, and more.',
      logo: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      banner: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      members: 134,
      games: ['League of Legends', 'CS2', 'Overwatch'],
      isVerified: true,
      achievements: 31,
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white font-orbitron mb-4">Organizations</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 max-w-md gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search organizations..."
                  className="pl-10 bg-black/50 border-purple-500/30 text-white"
                />
              </div>
              <Button variant="outline" size="icon" className="border-purple-500/30 hover:bg-purple-500/10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
              <Plus className="mr-2 h-4 w-4" />
              Create Organization
            </Button>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GamingCard className="overflow-hidden hover:scale-105 transition-transform duration-300">
                {/* Banner */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={org.banner}
                    alt={`${org.name} banner`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Logo */}
                  <div className="absolute -top-8 left-6">
                    <Avatar className="h-16 w-16 border-4 border-card">
                      <AvatarImage src={org.logo} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold">
                        {org.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="mt-8">
                    {/* Name and verification */}
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white font-orbitron">{org.name}</h3>
                      {org.isVerified && (
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {org.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{org.members} members</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Trophy className="h-4 w-4" />
                        <span>{org.achievements} achievements</span>
                      </div>
                    </div>

                    {/* Games */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {org.games.slice(0, 3).map((game) => (
                        <Badge
                          key={game}
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                        >
                          {game}
                        </Badge>
                      ))}
                      {org.games.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-500/20 text-gray-400"
                        >
                          +{org.games.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Action Button */}
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                      View Organization
                    </Button>
                  </div>
                </div>
              </GamingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}