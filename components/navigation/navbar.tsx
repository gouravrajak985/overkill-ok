'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Home, 
  Users, 
  Briefcase, 
  Trophy, 
  MessageCircle, 
  Settings, 
  LogOut,
  User,
  Bell
} from 'lucide-react';
import { GamingCard } from '@/components/ui/gaming-card';

export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo and Navigation */}
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron">
              OverKill
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/feed"
              className="transition-colors hover:text-purple-400 text-white/80 hover:text-white flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Feed
            </Link>
            <Link
              href="/organizations"
              className="transition-colors hover:text-purple-400 text-white/80 hover:text-white flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Organizations
            </Link>
            <Link
              href="/jobs"
              className="transition-colors hover:text-purple-400 text-white/80 hover:text-white flex items-center gap-2"
            >
              <Briefcase className="h-4 w-4" />
              Jobs
            </Link>
            <Link
              href="/tournaments"
              className="transition-colors hover:text-purple-400 text-white/80 hover:text-white flex items-center gap-2"
            >
              <Trophy className="h-4 w-4" />
              Tournaments
            </Link>
            <Link
              href="/chat"
              className="transition-colors hover:text-purple-400 text-white/80 hover:text-white flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Chat
            </Link>
          </nav>
        </div>
        
        {/* Right side - User menu or auth buttons */}
        <div className="flex items-center space-x-4">
          {session ? (
            <div className="flex items-center space-x-3">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative hover:bg-white/10">
                <Bell className="h-5 w-5 text-white/80" />
                <span className="sr-only">Notifications</span>
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-purple-500 animate-pulse" />
              </Button>
              
              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:bg-white/10">
                    <Avatar className="h-10 w-10 border-2 border-purple-500/30">
                      <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500">
                        {session.user?.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-md border-white/20" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium text-white">{session.user?.name}</p>
                      <p className="w-[200px] truncate text-sm text-purple-400">
                        @{session.user?.gamertag}
                      </p>
                      <p className="text-xs text-gray-400">
                        Level {session.user?.level} • {session.user?.experience} XP
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem asChild className="hover:bg-white/10">
                    <Link href="/profile" className="cursor-pointer text-gray-300 hover:text-white">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-white/10">
                    <Link href="/settings" className="cursor-pointer text-gray-300 hover:text-white">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/20" />
                  <DropdownMenuItem
                    className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Button variant="ghost" asChild className="text-white/80 hover:text-white hover:bg-white/10">
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
        
        {/* Mobile menu button - you can add this later if needed */}
        <div className="md:hidden">
          {/* Mobile menu toggle would go here */}
        </div>
      </div>
    </header>
  );
}

{/* Mobile Navigation - Hidden for now, can be implemented later */}
function MobileNav() {
  return (
    <div className="md:hidden">
      {/* Mobile navigation content */}
    </div>
  );
}