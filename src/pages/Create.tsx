
import React from 'react';
import { Layout } from '@/components/Layout';
import { CreatePostForm } from '@/components/CreatePostForm';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from 'lucide-react';

const Create: React.FC = () => {
  return (
    <Layout>
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create Post</h1>
        
        <Alert variant="default" className="mb-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Blockchain Publishing</AlertTitle>
          <AlertDescription>
            Your posts are stored on the blockchain, making them permanent and censorship-resistant.
          </AlertDescription>
        </Alert>
        
        <CreatePostForm />
        
        <div className="mt-8 p-6 bg-card rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">About NFT Posts</h2>
          <p className="text-muted-foreground mb-4">
            When you mint a post as an NFT, you're creating a unique digital asset on the blockchain that can be collected, bought, and sold.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-medium mb-2">Benefits</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Monetize your content directly</li>
                <li>Fans can collect and support you</li>
                <li>Permanent ownership record</li>
                <li>Potential for royalties on resales</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-medium mb-2">Considerations</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Gas fees apply for minting</li>
                <li>NFT content is immutable</li>
                <li>Choose valuable content to mint</li>
                <li>Check copyright for any media</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
