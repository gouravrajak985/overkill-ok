'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import { GamingCard } from '@/components/ui/gaming-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Trophy, 
  Users, 
  Calendar,
  DollarSign,
  Search,
  Filter,
  Plus,
  Clock
} from 'lucide-react';

export default function Tournaments() {
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

  // Mock tournaments data
  const tournaments = [
    {
      id: '1',
      title: 'Valorant Champions Cup',
      game: 'Valorant',
      organizer: 'Riot Games',
      banner: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      startDate: '2024-02-15',
      endDate: '2024-02-18',
      prizePool: '$50,000',
      participants: 128,
      maxParticipants: 128,
      format: 'Single Elimination',
      status: 'Registration Open',
      registrationDeadline: '2024-02-10',
    },
    {
      id: '2',
      title: 'CS2 Major Championship',
      game: 'Counter-Strike 2',
      organizer: 'ESL Gaming',
      banner: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      startDate: '2024-03-01',
      endDate: '2024-03-05',
      prizePool: '$100,000',
      participants: 64,
      maxParticipants: 64,
      format: 'Double Elimination',
      status: 'Registration Closed',
      registrationDeadline: '2024-02-25',
    },
    {
      id: '3',
      title: 'League of Legends Spring Split',
      game: 'League of Legends',
      organizer: 'Riot Games',
      banner: 'https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg',
      startDate: '2024-02-20',
      endDate: '2024-04-15',
      prizePool: '$200,000',
      participants: 32,
      maxParticipants: 32,
      format: 'Round Robin',
      status: 'Ongoing',
      registrationDeadline: '2024-02-15',
    },
    {
      id: '4',
      title: 'Apex Legends Arena Cup',
      game: 'Apex Legends',
      organizer: 'EA Sports',
      banner: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      startDate: '2024-02-25',
      endDate: '2024-02-27',
      prizePool: '$25,000',
      participants: 45,
      maxParticipants: 60,
      format: 'Swiss System',
      status: 'Registration Open',
      registrationDeadline: '2024-02-22',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Registration Open':
        return 'bg-green-500/20 text-green-300';
      case 'Registration Closed':
        return 'bg-red-500/20 text-red-300';
      case 'Ongoing':
        return 'bg-blue-500/20 text-blue-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white font-orbitron mb-4">Tournaments</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 max-w-md gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search tournaments..."
                  className="pl-10 bg-black/50 border-purple-500/30 text-white"
                />
              </div>
              <Button variant="outline" size="icon" className="border-purple-500/30 hover:bg-purple-500/10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
              <Plus className="mr-2 h-4 w-4" />
              Create Tournament
            </Button>
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GamingCard className="overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                {/* Banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tournament.banner}
                    alt={`${tournament.title} banner`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(tournament.status)}>
                      {tournament.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white font-orbitron mb-1">
                      {tournament.title}
                    </h3>
                    <p className="text-purple-300 font-medium">{tournament.game}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(tournament.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <DollarSign className="h-4 w-4" />
                      <span>{tournament.prizePool}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{tournament.participants}/{tournament.maxParticipants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Trophy className="h-4 w-4" />
                      <span>{tournament.format}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">Organized by</p>
                    <p className="text-white font-medium">{tournament.organizer}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">Registration Deadline</p>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-400" />
                      <span className="text-orange-300">
                        {new Date(tournament.registrationDeadline).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                      disabled={tournament.status === 'Registration Closed'}
                    >
                      {tournament.status === 'Registration Closed' ? 'Registration Closed' : 'Register'}
                    </Button>
                    <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
                      View Details
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