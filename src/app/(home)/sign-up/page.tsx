"use client";

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import { signUpPerform } from './signUpPerform';

import Cookies from 'js-cookie';


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const result = await signUpPerform(email, password);
    if (result.success) {
      setSuccess(result.message);

      Cookies.set('access_token', result.accessToken, { secure: true, sameSite: 'strict' });
      Cookies.set('refresh_token', result.refreshToken, { secure: true, sameSite: 'strict' });

      window.location.href = '/sign-in';
    } else {
      setError(result.message);
    }
  };

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
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
                placeholder="Create a password"
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
            <Button type="submit" className="w-full bg-gray-800 text-white">Sign Up</Button>
            {error && (
              <div className='mt-4 p-1.5 flex justify-center items-center border border-red-500 text-red-600 rounded-lg'>
                <p>{error}</p>
              </div>
            )}
            {success && (
              <div className='mt-4 p-1.5 flex justify-center items-center border border-green-500 text-green-600 rounded-lg'>
                <p>{success}</p>
              </div>
            )}
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
    </>
  );
};

export default SignUpPage;
