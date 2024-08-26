"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import CoreAPI from '@/lib/coreApi';
import Cookies from 'js-cookie';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { signInSchema } from './schemas';

const SignInPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validatedResult = signInSchema.safeParse({ email, password });

    if (!validatedResult.success) {
      validatedResult.error.issues.forEach((issue, index) => {
        setTimeout(() => {
          toast.error(issue.message || "An error occurred during sign-in.");
        }, index * 100);
      });
      return;
    }
    
    setLoading(true);

    try {
      const response = await CoreAPI.post("/users/token/", { email, password });
      
      if (response.status === 200) {
        const { access, refresh } = response.data;
        
        Cookies.set('access_token', access);
        Cookies.set('refresh_token', refresh);

        toast.success("Successfully signed in! Redirecting...");
        router.push('/dashboard');
      } else {
        toast.error(response.data.detail || "An error occurred during sign-in.");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || "An error occurred while signing in. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>
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
          <div className="mb-6">
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
          <Button type="submit" className="w-full bg-gray-800 text-white" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Do not have an account yet?{' '}
              <a href="/sign-up" className="text-blue-600 hover:underline">
                Sign up!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
