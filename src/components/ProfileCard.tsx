
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, ExternalLink, Award } from 'lucide-react';

export interface ProfileCardProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    bio: string;
    followers: number;
    following: number;
    posts: number;
    nfts: number;
    reputation: number;
    walletAddress: string;
  };
  isOwnProfile?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user, isOwnProfile = false }) => {
  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  
  return (
    <div className="bg-card rounded-xl shadow-sm border overflow-hidden animate-fade-in">
      <div className="h-32 bg-gradient-to-r from-primary/30 to-accent/30"></div>
      
      <div className="px-6 pb-6 relative">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-12 sm:-mt-16 mb-4 sm:mb-0">
            <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-card">
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
              </div>
            </Avatar>
            
            <div className="mt-2 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <div className="flex items-center justify-center sm:justify-start text-muted-foreground">
                <span>@{user.username}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center text-xs">
                  <span className="text-xs mr-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12.2222C21 17.5 15 22 12 22C9 22 3 17.5 3 12.2222C3 6.94444 7.02944 3 12 3C16.9706 3 21 6.94444 21 12.2222Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M15 12.2222C15 14.3162 13.6569 16 12 16C10.3431 16 9 14.3162 9 12.2222C9 10.1282 10.3431 8.44444 12 8.44444C13.6569 8.44444 15 10.1282 15 12.2222Z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <span>{truncateAddress(user.walletAddress)}</span>
                  <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                    <ExternalLink size={10} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center sm:justify-end">
            {isOwnProfile ? (
              <Button variant="outline">Edit Profile</Button>
            ) : (
              <Button>
                <UserPlus size={16} className="mr-2" />
                Follow
              </Button>
            )}
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-balance">{user.bio}</p>
          
          <div className="flex items-center mt-4 space-x-2">
            <Badge className="flex items-center gap-1 px-3 py-1.5">
              <Award size={14} />
              <span>Reputation: {user.reputation}</span>
            </Badge>
          </div>
          
          <div className="grid grid-cols-4 gap-2 mt-4 text-sm sm:text-base">
            <div className="text-center p-2 rounded-lg bg-muted/50">
              <div className="font-semibold">{user.posts}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Posts</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-muted/50">
              <div className="font-semibold">{user.nfts}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">NFTs</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-muted/50">
              <div className="font-semibold">{user.followers}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Followers</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-muted/50">
              <div className="font-semibold">{user.following}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Following</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
