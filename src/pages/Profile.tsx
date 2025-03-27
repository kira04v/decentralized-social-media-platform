
import React from 'react';
import { Layout } from '@/components/Layout';
import { ProfileCard } from '@/components/ProfileCard';
import { Post, PostProps } from '@/components/Post';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MOCK_USER = {
  name: "Alex Johnson",
  username: "alexj",
  avatar: "https://i.pravatar.cc/150?img=3",
  bio: "Blockchain developer and NFT artist. Building the decentralized future one block at a time. DAO contributor @DecentralFuture.",
  followers: 1024,
  following: 256,
  posts: 89,
  nfts: 12,
  reputation: 95,
  walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
};

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
      name: "Alex Johnson",
      username: "alexj",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true
    },
    content: "The intersection of DeFi and NFTs is creating entirely new business models that were impossible just a few years ago. Excited to be working in this space!",
    timestamp: "2d ago",
    likes: 95,
    comments: 21
  },
  {
    id: "3",
    author: {
      name: "Alex Johnson",
      username: "alexj",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true
    },
    content: "Smart contracts are revolutionizing how we think about trust in digital agreements. Code is law, but we need to ensure it's ethical code.",
    timestamp: "5d ago",
    likes: 156,
    comments: 37
  }
];

const MOCK_NFTS: PostProps[] = [
  {
    id: "4",
    author: {
      name: "Alex Johnson",
      username: "alexj",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true
    },
    content: "'Digital Dreams #01' - The beginning of my exploration into digital consciousness. Limited edition of 10.",
    image: "https://images.unsplash.com/photo-1633186223974-61e7e054bbd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    timestamp: "2d ago",
    likes: 213,
    comments: 42,
    isNFT: true
  },
  {
    id: "5",
    author: {
      name: "Alex Johnson",
      username: "alexj",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true
    },
    content: "'Neural Pathways' - A visualization of how our thoughts connect in the digital age. Minted as an interactive NFT with evolving patterns.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    timestamp: "1w ago",
    likes: 178,
    comments: 29,
    isNFT: true
  }
];

const Profile: React.FC = () => {
  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto">
        <ProfileCard user={MOCK_USER} isOwnProfile={true} />
        
        <div className="mt-8">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="nfts">NFTs</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="posts" className="mt-6">
              <div className="space-y-6">
                {MOCK_POSTS.map(post => (
                  <Post key={post.id} {...post} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="nfts" className="mt-6">
              <div className="space-y-6">
                {MOCK_NFTS.map(nft => (
                  <Post key={nft.id} {...nft} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="activity" className="mt-6">
              <div className="p-8 text-center bg-muted rounded-lg">
                <h3 className="text-lg font-medium">Activity Feed</h3>
                <p className="text-muted-foreground mt-2">Your reputation score, interactions, and blockchain activity will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
