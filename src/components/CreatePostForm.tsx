
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Image as ImageIcon, 
  Sparkles, 
  Video, 
  X, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { Avatar } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const CreatePostForm: React.FC = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [isNFT, setIsNFT] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const mockUser = {
    name: "Alex Johnson",
    username: "alexj",
    avatar: "https://i.pravatar.cc/150?img=3"
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast.error("Please add some content to your post.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      toast.success(isNFT ? "NFT post created!" : "Post created successfully!");
      setContent('');
      setImage(null);
      setIsNFT(false);
      setIsSubmitting(false);
    }, 1000);
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const removeImage = () => {
    setImage(null);
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-sm border p-4 animate-fade-in">
      <div className="flex space-x-3">
        <Avatar className="h-10 w-10 border">
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <img src={mockUser.avatar} alt={mockUser.name} className="h-full w-full object-cover" />
          </div>
        </Avatar>
        
        <div className="flex-1">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening on the blockchain?"
            className="resize-none border-none focus-visible:ring-0 text-lg p-0 min-h-[100px]"
          />
          
          {image && (
            <div className="relative mt-3 rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt="Uploaded preview" 
                className="w-full h-auto max-h-[300px] object-cover rounded-lg" 
              />
              <Button 
                variant="destructive" 
                size="icon" 
                className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-90"
                onClick={removeImage}
                type="button"
              >
                <X size={16} />
              </Button>
            </div>
          )}
          
          <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" type="button" className="text-primary" onClick={() => document.getElementById('image-upload')?.click()}>
                <ImageIcon size={20} />
              </Button>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              
              <Button variant="ghost" size="icon" type="button" className="text-primary">
                <Video size={20} />
              </Button>
              
              <Button variant="ghost" size="icon" type="button" className="text-primary">
                <Sparkles size={20} />
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="nft-mode"
                  checked={isNFT}
                  onCheckedChange={setIsNFT}
                />
                <Label htmlFor="nft-mode" className="flex items-center cursor-pointer">
                  <Award size={16} className="mr-1" />
                  <span>Mint as NFT</span>
                </Label>
              </div>
              
              <Button 
                disabled={!content.trim() || isSubmitting} 
                className="transition-all"
              >
                {isSubmitting ? "Creating..." : "Post"}
              </Button>
            </div>
          </div>
          
          {isNFT && (
            <div className="mt-4 p-3 bg-accent/10 rounded-lg text-sm flex items-start">
              <ShieldCheck size={16} className="mr-2 mt-0.5 text-accent" />
              <p>This post will be minted as an NFT on Ethereum. Gas fees will apply when publishing.</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
