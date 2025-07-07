'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GamingCard } from '@/components/ui/gaming-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  Search,
  Plus,
  MoreVertical,
  Phone,
  Video,
  Paperclip
} from 'lucide-react';

export default function Chat() {
  const { data: session, status } = useSession();
  const [selectedChat, setSelectedChat] = useState('1');
  const [message, setMessage] = useState('');

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

  // Mock chat data
  const chats = [
    {
      id: '1',
      name: 'ProGamer_X',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      lastMessage: 'Ready for the tournament tonight?',
      timestamp: '2 min ago',
      unread: 2,
      isOnline: true,
    },
    {
      id: '2',
      name: 'Team Liquid Squad',
      avatar: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      lastMessage: 'StreamQueen: Let\'s practice before the match',
      timestamp: '15 min ago',
      unread: 0,
      isGroup: true,
      isOnline: false,
    },
    {
      id: '3',
      name: 'CodeWarrior',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      lastMessage: 'Thanks for the game tips!',
      timestamp: '1 hour ago',
      unread: 0,
      isOnline: false,
    },
  ];

  const messages = [
    {
      id: '1',
      sender: 'ProGamer_X',
      content: 'Hey! Ready for tonight\'s tournament?',
      timestamp: '2:30 PM',
      isOwn: false,
    },
    {
      id: '2',
      sender: 'You',
      content: 'Absolutely! I\'ve been practicing all week. What time does it start?',
      timestamp: '2:32 PM',
      isOwn: true,
    },
    {
      id: '3',
      sender: 'ProGamer_X',
      content: 'Registration opens at 7 PM, matches start at 8 PM. Make sure you\'re warmed up!',
      timestamp: '2:33 PM',
      isOwn: false,
    },
    {
      id: '4',
      sender: 'You',
      content: 'Perfect! I\'ll be there. Good luck to both of us! 🎮',
      timestamp: '2:35 PM',
      isOwn: true,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-8rem)]">
          {/* Chat List */}
          <div className="lg:col-span-1">
            <GamingCard className="h-full flex flex-col">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white font-orbitron">Messages</h2>
                  <Button size="sm" className="bg-gradient-to-r from-purple-500 to-cyan-500">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-10 bg-black/50 border-purple-500/30 text-white"
                  />
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {chats.map((chat) => (
                  <motion.div
                    key={chat.id}
                    whileHover={{ backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                    className={`p-4 cursor-pointer border-b border-gray-700/50 ${
                      selectedChat === chat.id ? 'bg-purple-500/20' : ''
                    }`}
                    onClick={() => setSelectedChat(chat.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={chat.avatar} />
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500">
                            {chat.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {chat.isOnline && (
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-card" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-white truncate">
                            {chat.name}
                            {chat.isGroup && (
                              <Badge variant="secondary" className="ml-2 text-xs">
                                Group
                              </Badge>
                            )}
                          </h3>
                          <span className="text-xs text-gray-400">{chat.timestamp}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                          {chat.unread > 0 && (
                            <Badge className="bg-purple-500 text-white text-xs">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GamingCard>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2">
            <GamingCard className="h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500">
                        P
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-white">ProGamer_X</h3>
                      <p className="text-sm text-green-400">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.isOwn
                          ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                          : 'bg-gray-700 text-white'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${msg.isOwn ? 'text-purple-100' : 'text-gray-400'}`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-black/50 border-purple-500/30 text-white"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </GamingCard>
          </div>
        </div>
      </div>
    </div>
  );
}