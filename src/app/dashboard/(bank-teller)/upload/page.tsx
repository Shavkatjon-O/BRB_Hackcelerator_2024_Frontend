"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Upload, CheckCircle, XCircle } from 'lucide-react';

const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadProgress(0);
      setUploadStatus('idle');
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsUploading(true);
      setUploadStatus('idle');

      // Simulate upload process
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            setUploadStatus('success');
            return 100;
          }
          return prevProgress + 20;
        });
      }, 500);
    }
  };

  return (
    <div className="p-6">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Upload File</CardTitle>
          <CardDescription>Upload documents or files securely</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Input type="file" onChange={handleFileChange} disabled={isUploading} />
            {selectedFile && (
              <div className="text-gray-600">
                Selected File: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
              </div>
            )}

            {isUploading && (
              <Progress value={uploadProgress} className="w-full" />
            )}

            <div className="flex items-center space-x-4">
              <Button
                onClick={handleUpload}
                disabled={!selectedFile || isUploading}
                className="bg-blue-500 text-white"
              >
                <Upload className="w-4 h-4 mr-2" /> Upload
              </Button>
              {uploadStatus === 'success' && (
                <div className="flex items-center text-green-500">
                  <CheckCircle className="w-5 h-5 mr-2" /> Upload Successful
                </div>
              )}
              {uploadStatus === 'error' && (
                <div className="flex items-center text-red-500">
                  <XCircle className="w-5 h-5 mr-2" /> Upload Failed
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
