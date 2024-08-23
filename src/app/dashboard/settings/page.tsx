'use client';
import { User, Lock, Bell, Edit, Mail, MessageCircle, Save, Shield, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const SettingsPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-6">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Account Settings Card */}
        <Card className="p-6 bg-white border border-gray-200 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <User className="text-blue-600 w-6 h-6" />
            <span>Account Settings</span>
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">Username</label>
              <Input placeholder="Enter your username" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">Email</label>
              <Input placeholder="Enter your email" type="email" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">Phone Number</label>
              <Input placeholder="Enter your phone number" type="tel" />
            </div>
            <Button variant="outline" className="w-full">
              <Save className="mr-2 w-5 h-5" /> Save Changes
            </Button>
          </div>
        </Card>

        {/* Notification Preferences Card */}
        <Card className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <Bell className="text-yellow-600 w-6 h-6" />
            <span>Notification Preferences</span>
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 flex items-center space-x-2">
                <Mail className="text-blue-600 w-5 h-5" />
                <span>Email Notifications</span>
              </label>
              <Select className="w-full bg-gray-50 border-gray-300">
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </Select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 flex items-center space-x-2">
                <MessageCircle className="text-green-600 w-5 h-5" />
                <span>SMS Notifications</span>
              </label>
              <Select className="w-full bg-gray-50 border-gray-300">
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </Select>
            </div>
            <Button variant="outline" className="w-full">
              <Save className="mr-2 w-5 h-5 text-blue-600" /> Save Preferences
            </Button>
          </div>
        </Card>

        {/* Security Settings Card */}
        <Card className="p-6 bg-white border border-gray-200 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <Shield className="text-green-600 w-6 h-6" />
            <span>Security Settings</span>
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">Change Password</label>
              <Input placeholder="Enter new password" type="password" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700">Confirm Password</label>
              <Input placeholder="Confirm new password" type="password" />
            </div>
            <Button variant="outline" className="w-full">
              <Save className="mr-2 w-5 h-5" /> Update Password
            </Button>
          </div>
        </Card>

        {/* Account Actions Card */}
        <Card className="p-6 bg-white border border-gray-200 shadow-md rounded-lg col-span-full">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <LogOut className="text-red-600 w-6 h-6" />
            <span>Account Actions</span>
          </h2>
          <Button variant="outline" className="w-full">
            <LogOut className="mr-2 w-5 h-5" /> Logout
          </Button>
        </Card>

      </div>
    </div>
  );
}

export default SettingsPage;
