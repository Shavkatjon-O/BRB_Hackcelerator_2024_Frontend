import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const LoginPage = () => {
  return (
    <>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <Label htmlFor="email" className="block mb-1">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" className="w-full" />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" className="block mb-1">Password</Label>
            <Input type="password" id="password" placeholder="Enter your password" className="w-full" />
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white">Login</Button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
