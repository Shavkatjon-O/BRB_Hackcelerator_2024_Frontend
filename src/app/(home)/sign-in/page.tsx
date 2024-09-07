"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, X } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signInSchema } from './schemas';
import CoreAPI from '@/lib/coreApi';
import Cookies from 'js-cookie';

const SignInPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const email = (document.querySelector("input[name='email']") as HTMLInputElement)?.value;
    const password = (document.querySelector("input[name='password']") as HTMLInputElement)?.value;

    if (email) form.setValue("email", email);
    if (password) form.setValue("password", password);
  }, []);

  const onSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);

    try {
      const response = await CoreAPI.post("/users/token/", values);

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
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-md">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      className='py-3 h-max'
                      placeholder="Enter your email" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      className='py-3 h-max'
                      placeholder="Enter your password" 
                      type="password"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full py-3 h-max text-md" disabled={loading}>
              {loading ? (
                <>
                  <Loader className='w-5 h-5 mr-1 animate-spin' /> Signing in...
                </>
              ) : (
                'Sign in'
              )}
            </Button>
          </form>
        </Form>

        <div className="text-center mt-4">
          <p className="text-sm text-slate-500">
            Do not have an account yet?{' '}
            <a href="/sign-up" className="text-blue-600 hover:underline">
              Sign up!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
