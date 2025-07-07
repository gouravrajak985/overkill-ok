'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import { GamingCard } from '@/components/ui/gaming-card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Heart, 
  MessageCircle, 
  Repeat2, 
  Share, 
  MoreHorizontal,
  Trophy,
  Star,
  Zap
} from 'lucide-react';

export default function Feed() {
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

  // Mock feed data
  const posts = [
    {
      id: '1',
      author: {
        name: 'ProGamer_X',
        gamertag: 'ProGamer_X',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
        level: 87,
        isVerified: true,
      },
      content: 'Just hit Master rank in Valorant! The grind was worth it. Time to push for Radiant! 🔥',
      gameTag: 'Valorant',
      timestamp: '2 hours ago',
      likes: 42,
      comments: 12,
      reposts: 5,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    },
    {
      id: '2',
      author: {
        name: 'StreamQueen',
        gamertag: 'StreamQueen',
        avatar: 'https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg',
        level: 65,
        isVerified: true,
      },
      content: 'Going live in 10 minutes! Tonight we\'re attempting a speedrun of Hollow Knight. Come watch me probably fail spectacularly! 😅',
      gameTag: 'Hollow Knight',
      timestamp: '4 hours ago',
      likes: 78,
      comments: 23,
      reposts: 15,
      isLive: true,
    },
    {
      id: '3',
      author: {
        name: 'CodeWarrior',
        gamertag: 'CodeWarrior',
        avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
        level: 42,
        isVerified: false,
      },
      content: 'Looking for a team for the upcoming CS2 tournament. I main AWP and have over 2000 hours. DM me if interested!',
      gameTag: 'CS2',
      timestamp: '6 hours ago',
      likes: 24,
      comments: 8,
      reposts: 3,
    },
  ];

  const trendingGames = [
    { name: 'Valorant', players: '12.5M', trend: '+5%' },
    { name: 'League of Legends', players: '8.2M', trend: '+2%' },
    { name: 'CS2', players: '6.8M', trend: '+8%' },
    { name: 'Apex Legends', players: '4.3M', trend: '+1%' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Profile Card */}
            <GamingCard className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="h-16 w-16 border-2 border-purple-500/30">
                  <AvatarImage src={session.user?.image || ''} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500">
                    {session.user?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-white font-orbitron">{session.user?.name}</h3>
                  <p className="text-purple-400">@{session.user?.gamertag}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Level {session.user?.level}</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-white">1.2K</div>
                  <div className="text-xs text-gray-400">Followers</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">856</div>
                  <div className="text-xs text-gray-400">Following</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">42</div>
                  <div className="text-xs text-gray-400">Posts</div>
                </div>
              </div>
            </GamingCard>

            {/* Trending Games */}
            <GamingCard className="p-6">
              <h3 className="font-semibold text-white mb-4 font-orbitron flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
                Trending Games
              </h3>
              <div className="space-y-3">
                {trendingGames.map((game, index) => (
                  <div key={game.name} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white">{game.name}</div>
                      <div className="text-sm text-gray-400">{game.players} players</div>
                    </div>
                    <div className="text-green-400 text-sm font-medium">
                      {game.trend}
                    </div>
                  </div>
                ))}
              </div>
            </GamingCard>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <GamingCard className="p-6">
              <div className="flex space-x-4">
                <Avatar className="h-10 w-10 border-2 border-purple-500/30">
                  <AvatarImage src={session.user?.image || ''} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500">
                    {session.user?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <textarea
                    placeholder="What's happening in your gaming world?"
                    className="w-full bg-transparent text-white placeholder-gray-400 resize-none border-none outline-none text-lg"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4 text-gray-400">
                      <button className="hover:text-purple-400 transition-colors">
                        📷 Photo
                      </button>
                      <button className="hover:text-purple-400 transition-colors">
                        🎮 Game Tag
                      </button>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </GamingCard>

            {/* Posts */}
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GamingCard className="p-6">
                  <div className="flex space-x-4">
                    <Avatar className="h-12 w-12 border-2 border-purple-500/30">
                      <AvatarImage src={post.author.avatar} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500">
                        {post.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-white">{post.author.name}</h4>
                        {post.author.isVerified && (
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        )}
                        <span className="text-gray-400">@{post.author.gamertag}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400 text-sm">{post.timestamp}</span>
                        {post.isLive && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                            LIVE
                          </span>
                        )}
                      </div>
                      
                      <p className="text-white mb-3">{post.content}</p>
                      
                      {post.gameTag && (
                        <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mb-3">
                          #{post.gameTag}
                        </span>
                      )}
                      
                      {post.image && (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <img
                            src={post.image}
                            alt="Post content"
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-pink-400">
                          <Heart className="h-4 w-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-400">
                          <Repeat2 className="h-4 w-4 mr-2" />
                          {post.reposts}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                          <Share className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-400">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </GamingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}