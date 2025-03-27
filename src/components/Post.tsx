
import React, { useState } from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Heart, MessageCircle, Share, MoreHorizontal, Bookmark, 
  Award
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface PostProps {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  isNFT?: boolean;
}

export const Post: React.FC<PostProps> = ({
  id,
  author,
  content,
  image,
  timestamp,
  likes,
  comments,
  isNFT,
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  
  const handleLike = () => {
    if (liked) {
      setCurrentLikes(prev => prev - 1);
    } else {
      setCurrentLikes(prev => prev + 1);
    }
    setLiked(!liked);
  };
  
  const handleSave = () => {
    setSaved(!saved);
  };
  
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm border p-4 transition-all duration-300 hover:shadow-md animate-scale-in">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 border">
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <img src={author.avatar} alt={author.name} className="h-full w-full object-cover" />
            </div>
          </Avatar>
          <div>
            <div className="flex items-center">
              <span className="font-semibold">{author.name}</span>
              {author.verified && (
                <span className="ml-1 inline-block bg-primary rounded-full p-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
              {isNFT && (
                <span className="ml-2 text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                  NFT
                </span>
              )}
            </div>
            <span className="text-sm text-muted-foreground">@{author.username} • {timestamp}</span>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal size={16} />
              <span className="sr-only">Options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Not interested</DropdownMenuItem>
            <DropdownMenuItem>Report post</DropdownMenuItem>
            {isNFT && <DropdownMenuItem>View NFT details</DropdownMenuItem>}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="mt-3">
        <p className="text-foreground text-balance">{content}</p>
        
        {image && (
          <div className="mt-3 rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt="Post image" 
              className="w-full h-auto object-cover max-h-[400px]" 
              loading="lazy"
            />
          </div>
        )}
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center space-x-1 ${liked ? 'text-destructive' : ''}`} 
            onClick={handleLike}
          >
            <Heart size={18} className={liked ? 'fill-destructive' : ''} />
            <span>{currentLikes}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <MessageCircle size={18} />
            <span>{comments}</span>
          </Button>
          
          <Button variant="ghost" size="sm">
            <Share size={18} />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          {isNFT && (
            <Button variant="outline" size="sm" className="text-xs flex items-center">
              <Award size={14} className="mr-1" />
              Collect
            </Button>
          )}
          
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleSave}>
            <Bookmark size={18} className={saved ? 'fill-foreground' : ''} />
          </Button>
        </div>
      </div>
    </div>
  );
};
