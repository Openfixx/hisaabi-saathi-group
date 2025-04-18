
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, Users, History, Bell, Shield } from "lucide-react";
import Logo from '@/components/Logo';

const Index = () => {
  const features = [
    {
      icon: Calculator,
      title: "Split Expenses Easily",
      description: "Calculate and split bills with friends and family without the hassle"
    },
    {
      icon: Users,
      title: "Group Expenses",
      description: "Create groups for trips, roommates, or events to track shared expenses"
    },
    {
      icon: History,
      title: "Transaction History",
      description: "Keep track of all your payments and settlements in one place"
    },
    {
      icon: Bell,
      title: "Payment Reminders",
      description: "Send gentle reminders to friends who owe you money"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your financial data is encrypted and never shared with third parties"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="mb-8">
                <Logo className="text-white inline-block" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Track Expenses, Simplify Settlements
              </h1>
              <p className="text-lg text-white/90 mb-8">
                The smartest way to manage shared expenses with friends and family. Split bills, track loans, and settle up with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-purple-700 hover:bg-white/90">
                  <Link to="/">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <img 
                  src="/placeholder.svg" 
                  alt="Hisaab Kitaab App Preview" 
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Hisaab Kitaab?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our app makes it easy to track shared expenses and settle debts without awkward money conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to simplify your shared expenses?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have made managing shared finances easy with Hisaab Kitaab.
          </p>
          <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
            <Link to="/">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Logo className="text-white" />
              <p className="mt-2 text-gray-400">© 2025 Hisaab Kitaab. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
