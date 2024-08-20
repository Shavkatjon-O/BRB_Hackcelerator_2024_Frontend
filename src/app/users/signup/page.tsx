import React from 'react';

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const SignupPage = () => {
  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form>
        <div className="mb-4">
          <Label htmlFor="name" className="block mb-1">Name</Label>
          <Input type="text" id="name" placeholder="Enter your name" className="w-full" />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="block mb-1">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" className="w-full" />
        </div>
        <div className="mb-6">
          <Label htmlFor="password" className="block mb-1">Password</Label>
          <Input type="password" id="password" placeholder="Create a password" className="w-full" />
        </div>
        <Button type="submit" className="w-full bg-green-600 text-white">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupPage;
