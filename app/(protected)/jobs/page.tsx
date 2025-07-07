'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import { GamingCard } from '@/components/ui/gaming-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Briefcase, 
  MapPin, 
  Clock,
  DollarSign,
  Search,
  Filter,
  Plus
} from 'lucide-react';

export default function Jobs() {
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

  // Mock jobs data
  const jobs = [
    {
      id: '1',
      title: 'Senior Game Developer',
      company: 'Epic Games',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'Join our team to work on Fortnite and Unreal Engine. We are looking for experienced developers with strong C++ skills.',
      skills: ['C++', 'Unreal Engine', 'Game Development', 'Multiplayer'],
      postedAt: '2 days ago',
      applicants: 45,
    },
    {
      id: '2',
      title: 'Esports Manager',
      company: 'Team Liquid',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$80k - $120k',
      description: 'Manage our professional esports teams across multiple titles. Experience in team management and esports industry required.',
      skills: ['Team Management', 'Esports', 'Strategy', 'Communication'],
      postedAt: '1 week ago',
      applicants: 23,
    },
    {
      id: '3',
      title: 'Community Manager',
      company: 'Riot Games',
      location: 'Remote',
      type: 'Full-time',
      salary: '$60k - $90k',
      description: 'Build and maintain relationships with our gaming community. Create engaging content and manage social media presence.',
      skills: ['Social Media', 'Content Creation', 'Community Building', 'Gaming'],
      postedAt: '3 days ago',
      applicants: 67,
    },
    {
      id: '4',
      title: 'Game Designer',
      company: 'Blizzard Entertainment',
      location: 'Irvine, CA',
      type: 'Full-time',
      salary: '$90k - $140k',
      description: 'Design innovative gameplay mechanics for our next AAA title. Experience with game design tools and player psychology preferred.',
      skills: ['Game Design', 'Unity', 'Player Psychology', 'Prototyping'],
      postedAt: '5 days ago',
      applicants: 89,
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white font-orbitron mb-4">Gaming Jobs</h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-1 max-w-md gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-10 bg-black/50 border-purple-500/30 text-white"
                />
              </div>
              <Button variant="outline" size="icon" className="border-purple-500/30 hover:bg-purple-500/10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
              <Plus className="mr-2 h-4 w-4" />
              Post Job
            </Button>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GamingCard className="p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white font-orbitron mb-1">
                          {job.title}
                        </h3>
                        <p className="text-purple-400 font-medium">{job.company}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-green-500/20 text-green-300"
                      >
                        {job.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.postedAt}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.applicants} applicants</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:ml-6">
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
                      Save Job
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