"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, X } from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form';
import { signUpSchema } from './schemas';

import CoreAPI from '@/lib/coreApi';
import Cookies from 'js-cookie';

const SignUpPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);

    try {
      const response = await CoreAPI.post("/users/sign-up/", values);

      if (response.status === 201) {
        const { access, refresh } = response.data;
        Cookies.set('accessToken', access);
        Cookies.set('refreshToken', refresh);

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
    <div className='flex justify-center p-4'>
      <div className="max-w-md w-full bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg border">
        <h1 className="text-2xl font-bold mb-6">Sign up</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-md">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      className="py-3 h-max"
                      placeholder="Enter your email"
                      aria-label="Email"
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
                      className="py-3 h-max"
                      placeholder="Enter your password"
                      type="password"
                      aria-label="Password"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input 
                      className="py-3 h-max"
                      placeholder="Confirm your password"
                      type="password"
                      aria-label="Confirm Password"
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
                  <Loader className='w-5 h-5 mr-1 animate-spin' /> Signing up...
                </>
              ) : (
                'Sign up'
              )}
            </Button>
          </form>
        </Form>

        <div className="text-center mt-4">
          <p className="text-sm text-slate-500">
            Already have an account?{' '}
            <a href="/sign-in" className="text-blue-600 hover:underline">
              Sign in!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
