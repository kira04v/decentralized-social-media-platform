
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Post, PostProps } from '@/components/Post';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MOCK_POSTS: PostProps[] = [
  {
    id: "1",
    author: {
      name: "Alex Johnson",
      username: "alexj",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true
    },
    content: "Just minted my first NFT artwork collection on Ethereum! Check it out - 'Digital Dreams' explores the intersection of reality and digital consciousness. #NFTart #blockchain",
    image: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    timestamp: "2h ago",
    likes: 128,
    comments: 32,
    isNFT: true
  },
  {
    id: "2",
    author: {
      name: "Sophia Chen",
      username: "sophiac",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    content: "Web3 is revolutionizing how we think about digital ownership. No more centralized platforms controlling our data. The power is back in the hands of users!",
    timestamp: "4h ago",
    likes: 89,
    comments: 14
  },
  {
    id: "3",
    author: {
      name: "Marcus Wright",
      username: "mwright",
      avatar: "https://i.pravatar.cc/150?img=8",
      verified: true
    },
    content: "Excited to announce our DAO has voted to fund three new decentralized projects focused on privacy and security. Democracy in action on the blockchain!",
    timestamp: "6h ago",
    likes: 210,
    comments: 45
  },
  {
    id: "4",
    author: {
      name: "Elena Kim",
      username: "elenakim",
      avatar: "https://i.pravatar.cc/150?img=10",
      verified: true
    },
    content: "The future of finance is being built right now with DeFi protocols. Accessibility, transparency, and innovation are at the core of this revolution.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    timestamp: "1d ago",
    likes: 156,
    comments: 23,
    isNFT: false
  },
  {
    id: "5",
    author: {
      name: "David Torres",
      username: "davt",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    content: "Smart contracts are only as good as the developers who write them. Security audits are essential before deploying any contract that handles significant value.",
    timestamp: "1d ago",
    likes: 67,
    comments: 8
  }
];

const TRENDING_TOPICS = [
  "Ethereum",
  "NFTart",
  "DeFi",
  "SmartContracts",
  "Blockchain",
  "DAOs",
  "Web3"
];

const Explore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search posts, users, topics..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-[180px]">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Posts</SelectItem>
                    <SelectItem value="nft">NFT Posts</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                    <SelectItem value="recent">Most Recent</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-6">
              {MOCK_POSTS
                .filter(post => {
                  if (filter === 'nft') return post.isNFT;
                  return true;
                })
                .filter(post => {
                  if (!searchQuery) return true;
                  const query = searchQuery.toLowerCase();
                  return (
                    post.content.toLowerCase().includes(query) ||
                    post.author.name.toLowerCase().includes(query) ||
                    post.author.username.toLowerCase().includes(query)
                  );
                })
                .map(post => (
                  <Post key={post.id} {...post} />
                ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trending Topics</CardTitle>
                  <CardDescription>Popular discussions right now</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {TRENDING_TOPICS.map(topic => (
                      <Button 
                        key={topic} 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full"
                      >
                        #{topic}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Network Stats</CardTitle>
                  <CardDescription>Current blockchain activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Active Users</span>
                      <span className="font-medium">24,892</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Posts Today</span>
                      <span className="font-medium">3,457</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">NFTs Minted</span>
                      <span className="font-medium">842</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Gas Price (Gwei)</span>
                      <span className="font-medium">42</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Reputation Leaders</CardTitle>
                  <CardDescription>Users with highest trust scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Marcus Wright", username: "mwright", score: 98, avatar: "https://i.pravatar.cc/150?img=8" },
                      { name: "Elena Kim", username: "elenakim", score: 95, avatar: "https://i.pravatar.cc/150?img=10" },
                      { name: "Alex Johnson", username: "alexj", score: 93, avatar: "https://i.pravatar.cc/150?img=3" },
                    ].map(user => (
                      <div key={user.username} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-xs text-muted-foreground">@{user.username}</div>
                          </div>
                        </div>
                        <div className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium">
                          {user.score}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
