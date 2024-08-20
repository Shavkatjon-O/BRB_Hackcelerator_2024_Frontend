"use client";

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

import CoreAPI from '@/lib/coreApi';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await CoreAPI.post('/users/token/', {
        email,
        password,
      });

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      
      window.location.href = '/dashboard/';
    } catch (err: any) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
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
        <Button type="submit" className="w-full bg-gray-800 text-white">Login</Button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Do not have an account yet?{' '}
            <a href="/users/signup" className="text-blue-600 hover:underline">
              Sign up!
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
