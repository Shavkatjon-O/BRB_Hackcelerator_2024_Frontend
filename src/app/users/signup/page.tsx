import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const SignupPage = () => {
  return (
    <>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <form>
          <div className="mb-4">
            <Label htmlFor="email" className="block mb-3">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" className="w-full" />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" className="block mb-3">Password</Label>
            <Input type="password" id="password" placeholder="Create a password" className="w-full" />
          </div>
          <div className="mb-6">
            <Label htmlFor="confirmPassword" className="block mb-3">Confirm Password</Label>
            <Input type="password" id="confirmPassword" placeholder="Confirm your password" className="w-full" />
          </div>
          <Button type="submit" className="w-full bg-gray-800 text-white">Sign Up</Button>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Already have an account? <a href="/users/login" className="text-blue-600 hover:underline">Login!</a></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
