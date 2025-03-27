
import React from 'react';
import { Layout } from '@/components/Layout';
import { FeaturedPosts } from '@/components/FeaturedPosts';
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, Users, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto">
        <div className="py-12 md:py-16 lg:py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down tracking-tight">
            Your social presence,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">decentralized</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-down animation-delay-100">
            A social platform where you own your data, content becomes NFTs, and community moderation replaces corporate censorship.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-down animation-delay-200">
            <Button size="lg" asChild>
              <Link to="/explore">
                Explore Network
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/create">
                Create Post
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12 animate-fade-in">
            <div className="bg-card border shadow-sm rounded-xl p-6 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User-Owned Profiles</h3>
              <p className="text-muted-foreground">Your profile lives on the blockchain, giving you complete ownership of your digital identity.</p>
            </div>
            
            <div className="bg-card border shadow-sm rounded-xl p-6 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <BadgeDollarSign size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">NFT Posts</h3>
              <p className="text-muted-foreground">Turn your posts into tradable NFTs, allowing you to monetize your content directly.</p>
            </div>
            
            <div className="bg-card border shadow-sm rounded-xl p-6 transition-all hover:shadow-md">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <ShieldCheck size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Censorship Resistant</h3>
              <p className="text-muted-foreground">Community-governed moderation ensures freedom of expression while maintaining quality standards.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trending Posts</h2>
          <FeaturedPosts />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
