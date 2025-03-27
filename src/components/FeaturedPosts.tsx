
import React from 'react';
import { Post, PostProps } from './Post';
import { Badge } from "@/components/ui/badge";
import { Flame } from 'lucide-react';

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
  }
];

export const FeaturedPosts: React.FC = () => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center mb-6">
        <Badge variant="outline" className="text-sm px-3 py-1.5 flex items-center gap-1.5 bg-background">
          <Flame size={16} className="text-primary" />
          <span>Trending on DecentSocial</span>
        </Badge>
      </div>
      
      <div className="grid gap-6">
        {MOCK_POSTS.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};
