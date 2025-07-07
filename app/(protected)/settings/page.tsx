'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GamingCard } from '@/components/ui/gaming-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette,
  Save
} from 'lucide-react';

export default function Settings() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState('profile');

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

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input
                  id="name"
                  defaultValue={session.user?.name || ''}
                  className="mt-1 bg-black/50 border-purple-500/30 text-white"
                />
              </div>
              <div>
                <Label htmlFor="gamertag" className="text-white">Gamertag</Label>
                <Input
                  id="gamertag"
                  defaultValue={session.user?.gamertag || ''}
                  className="mt-1 bg-black/50 border-purple-500/30 text-white"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="bio" className="text-white">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself..."
                className="mt-1 bg-black/50 border-purple-500/30 text-white"
                rows={4}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="location" className="text-white">Location</Label>
                <Input
                  id="location"
                  placeholder="City, Country"
                  className="mt-1 bg-black/50 border-purple-500/30 text-white"
                />
              </div>
              <div>
                <Label htmlFor="website" className="text-white">Website</Label>
                <Input
                  id="website"
                  placeholder="https://yourwebsite.com"
                  className="mt-1 bg-black/50 border-purple-500/30 text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="twitch" className="text-white">Twitch URL</Label>
                <Input
                  id="twitch"
                  placeholder="https://twitch.tv/username"
                  className="mt-1 bg-black/50 border-purple-500/30 text-white"
                />
              </div>
              <div>
                <Label htmlFor="youtube" className="text-white">YouTube URL</Label>
                <Input
                  id="youtube"
                  placeholder="https://youtube.com/@username"
                  className="mt-1 bg-black/50 border-purple-500/30 text-white"
                />
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Email Notifications</h4>
                  <p className="text-gray-400 text-sm">Receive notifications via email</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Push Notifications</h4>
                  <p className="text-gray-400 text-sm">Receive push notifications in browser</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Tournament Updates</h4>
                  <p className="text-gray-400 text-sm">Get notified about tournament registrations</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Job Alerts</h4>
                  <p className="text-gray-400 text-sm">Receive notifications for new job postings</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Social Updates</h4>
                  <p className="text-gray-400 text-sm">Get notified about likes, comments, and follows</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Profile Visibility</h4>
                  <p className="text-gray-400 text-sm">Make your profile visible to everyone</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Show Online Status</h4>
                  <p className="text-gray-400 text-sm">Let others see when you're online</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Show Game Stats</h4>
                  <p className="text-gray-400 text-sm">Display your game statistics on profile</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Allow Direct Messages</h4>
                  <p className="text-gray-400 text-sm">Let anyone send you direct messages</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-3">Theme</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 border-2 border-purple-500 cursor-pointer">
                    <div className="w-full h-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded mb-2"></div>
                    <p className="text-white text-sm text-center">Dark (Current)</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border-2 border-transparent hover:border-purple-500/50 cursor-pointer">
                    <div className="w-full h-16 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 rounded mb-2"></div>
                    <p className="text-white text-sm text-center">Cyber Blue</p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border-2 border-transparent hover:border-purple-500/50 cursor-pointer">
                    <div className="w-full h-16 bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 rounded mb-2"></div>
                    <p className="text-white text-sm text-center">Matrix Green</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Reduced Motion</h4>
                  <p className="text-gray-400 text-sm">Reduce animations and transitions</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">High Contrast</h4>
                  <p className="text-gray-400 text-sm">Increase contrast for better visibility</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white font-orbitron mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <GamingCard className="p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-purple-500/20 text-purple-300'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </GamingCard>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <GamingCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white font-orbitron">
                  {tabs.find(tab => tab.id === activeTab)?.label}
                </h2>
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderTabContent()}
              </motion.div>
            </GamingCard>
          </div>
        </div>
      </div>
    </div>
  );
}