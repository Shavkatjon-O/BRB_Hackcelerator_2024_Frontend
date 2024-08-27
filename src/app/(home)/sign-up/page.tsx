"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader, X } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { signUpSchema } from './schemas';

import CoreAPI from '@/lib/coreApi';
import Cookies from 'js-cookie';

const SignUpPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validatedResult = signUpSchema.safeParse({ email, password, confirmPassword });

    if (!validatedResult.success) {

      validatedResult.error.issues.forEach((issue, index) => {
        setTimeout(() => {
          toast("Error", {
            description: issue.message || "An error occurred during sign-up.",
            action: {
              label: <X className='w-4 h-4' />,
              onClick: () => console.log("Close"),
            },
          });
        }, index * 100);
      });
      return;
    }
    
    setLoading(true);

    try {
      const response = await CoreAPI.post("/users/sign-up/", { email, password });
      
      if (response.status === 201) {
        const { access, refresh } = response.data;
        
        Cookies.set('access_token', access);
        Cookies.set('refresh_token', refresh);

        toast("Success", {
          description: "Sign-up successful!",
          action: {
            label: <X className='w-4 h-4' />,
            onClick: () => console.log("Close"),
          },
        });
        router.push('/dashboard');
      } else {
        toast("Error", {
          description: response.data.detail || "An error occurred during sign-up.",
          action: {
            label: <X className='w-4 h-4' />,
            onClick: () => console.log("Close"),
          },
        });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || "An error occurred while signing up. Please try again.";
      toast("Error", {
        description: errorMessage,
        action: {
          label: <X className='w-4 h-4' />,
          onClick: () => console.log("Close"),
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-center'>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm border">
        <h1 className="text-2xl font-bold mb-6">Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email" className="block mb-3">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" className="block mb-3">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="confirmPassword" className="block mb-3">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-gray-800 text-white" disabled={loading}>
            {loading ? (
              <>
                <Loader className='w-5 h-5 mr-1' /> Signing up...
              </>
             ) : (
              'Sign up'
             )}
          </Button>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/sign-in" className="text-blue-600 hover:underline">
                Sign in!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
