
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard,
  Languages,
  Moon
} from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-center">
                  <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User size={40} className="text-purple-600" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg">Rahul</h3>
                  <p className="text-gray-500 text-sm">rahul@example.com</p>
                  <Button className="mt-4 bg-purple-600 hover:bg-purple-700" size="sm">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="border-t">
                  <button className="w-full p-3 text-left font-medium hover:bg-gray-50 text-purple-600 border-l-2 border-purple-600">
                    Account
                  </button>
                  <button className="w-full p-3 text-left font-medium hover:bg-gray-50">
                    Notifications
                  </button>
                  <button className="w-full p-3 text-left font-medium hover:bg-gray-50">
                    Privacy & Security
                  </button>
                  <button className="w-full p-3 text-left font-medium hover:bg-gray-50">
                    Payment Methods
                  </button>
                  <button className="w-full p-3 text-left font-medium hover:bg-gray-50">
                    App Settings
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User size={20} />
                Account Information
              </CardTitle>
              <CardDescription>
                Manage your personal information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <Input defaultValue="Rahul Singh" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="rahul@example.com" className="mt-1" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input defaultValue="+91 9876543210" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Language</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>English</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell size={20} />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Payment Reminders</h4>
                    <p className="text-sm text-gray-500">Receive reminders about upcoming payments</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">New Transactions</h4>
                    <p className="text-sm text-gray-500">Get notified when someone adds a transaction with you</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Messages</h4>
                    <p className="text-sm text-gray-500">Receive notifications for new messages</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon size={20} />
                App Settings
              </CardTitle>
              <CardDescription>
                Customize your app experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Dark Mode</h4>
                    <p className="text-sm text-gray-500">Switch between light and dark themes</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Compact View</h4>
                    <p className="text-sm text-gray-500">Show more content with less spacing</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
