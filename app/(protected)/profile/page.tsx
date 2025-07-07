'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import { GamingCard } from '@/components/ui/gaming-card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Star,
  Zap,
  MapPin,
  Link as LinkIcon,
  Calendar,
  Settings,
  Edit
} from 'lucide-react';

export default function Profile() {
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

  // Mock profile data
  const achievements = [
    { id: '1', name: 'First Victory', icon: '🏆', description: 'Won your first match' },
    { id: '2', name: 'Team Player', icon: '🤝', description: 'Joined 5 organizations' },
    { id: '3', name: 'Social Butterfly', icon: '💬', description: 'Made 100 posts' },
    { id: '4', name: 'Tournament Champion', icon: '👑', description: 'Won a tournament' },
  ];

  const gameStats = [
    { game: 'Valorant', rank: 'Immortal 2', hours: 450, winRate: '68%' },
    { game: 'CS2', rank: 'Global Elite', hours: 1200, winRate: '72%' },
    { game: 'League of Legends', rank: 'Diamond 1', hours: 800, winRate: '65%' },
  ];

  const recentActivity = [
    { id: '1', type: 'post', content: 'Just hit Immortal rank in Valorant!', timestamp: '2 hours ago' },
    { id: '2', type: 'achievement', content: 'Earned "Tournament Champion" achievement', timestamp: '1 day ago' },
    { id: '3', type: 'join', content: 'Joined Team Liquid organization', timestamp: '3 days ago' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main Profile Card */}
            <GamingCard className="p-6">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="h-24 w-24 border-4 border-purple-500/30">
                    <AvatarImage src={session.user?.image || ''} />
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl">
                      {session.user?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-1">
                    <Star className="h-4 w-4 text-white fill-current" />
                  </div>
                </div>
                
                <h1 className="text-2xl font-bold text-white font-orbitron mb-1">
                  {session.user?.name}
                </h1>
                <p className="text-purple-400 mb-2">@{session.user?.gamertag}</p>
                
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <span className="text-white font-medium">Level {session.user?.level}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{session.user?.experience} XP</span>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  Competitive gamer and content creator. Always looking for new challenges and teammates!
                </p>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined Jan 2024</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">1.2K</div>
                    <div className="text-xs text-gray-400">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">856</div>
                    <div className="text-xs text-gray-400">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">42</div>
                    <div className="text-xs text-gray-400">Posts</div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 mb-2">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full border-purple-500/30 hover:bg-purple-500/10">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </GamingCard>

            {/* Achievements */}
            <GamingCard className="p-6">
              <h3 className="font-semibold text-white mb-4 font-orbitron flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg p-3 text-center hover:scale-105 transition-transform"
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-medium text-white">{achievement.name}</div>
                  </div>
                ))}
              </div>
            </GamingCard>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Game Stats */}
            <GamingCard className="p-6">
              <h3 className="font-semibold text-white mb-4 font-orbitron">Game Statistics</h3>
              <div className="space-y-4">
                {gameStats.map((stat, index) => (
                  <motion.div
                    key={stat.game}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-black/30 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{stat.game}</h4>
                      <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500">
                        {stat.rank}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Hours Played:</span>
                        <span className="text-white ml-2">{stat.hours}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Win Rate:</span>
                        <span className="text-green-400 ml-2">{stat.winRate}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GamingCard>

            {/* Recent Activity */}
            <GamingCard className="p-6">
              <h3 className="font-semibold text-white mb-4 font-orbitron">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                      {activity.type === 'post' && '📝'}
                      {activity.type === 'achievement' && '🏆'}
                      {activity.type === 'join' && '👥'}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.content}</p>
                      <p className="text-gray-400 text-xs mt-1">{activity.timestamp}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GamingCard>
          </div>
        </div>
      </div>
    </div>
  );
}