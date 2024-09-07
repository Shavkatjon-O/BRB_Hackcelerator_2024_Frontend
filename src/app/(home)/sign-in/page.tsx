"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader, X } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { signInSchema } from './schemas';

import CoreAPI from '@/lib/coreApi';
import Cookies from 'js-cookie';

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
          toast("Error", {
            description: issue.message || "An error occurred during sign-in.",
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
      const response = await CoreAPI.post("/users/token/", { email, password });
      
      if (response.status === 200) {
        const { access, refresh } = response.data;
        
        Cookies.set('accessToken', access);
        Cookies.set('refreshToken', refresh);

        toast("Success", {
          description: "Sign-in successful! Redirecting...",
          action: {
            label: <X className='w-4 h-4' />,
            onClick: () => console.log("Close"),
          },
        });
        router.push('/dashboard');
      } else {
        toast("Error", {
          description: response.data.detail || "An error occurred during sign-in.",
          action: {
            label: <X className='w-4 h-4' />,
            onClick: () => console.log("Close"),
          },
        });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || "An error occurred while signing in. Please try again.";
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
    <div className='flex justify-center p-4'>
      <div className="max-w-md w-full p-8 rounded-lg border bg-white dark:bg-slate-900 shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-md">
            <Label htmlFor="email" className="block mb-3">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full py-3 h-max"
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
              className="w-full py-3 h-max"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full py-3 h-max text-md" disabled={loading}>
            {loading ? (
              <>
                <Loader className='w-5 h-5 mr-1' /> Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </Button>
          <div className="text-center mt-4">
            <p className="text-sm text-slate-500">
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
