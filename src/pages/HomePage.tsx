
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WashingMachine, Hanger, Droplet, Package, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-gray-600">Hello</p>
            <h1 className="text-2xl font-bold">Sarah Wilson</h1>
          </div>
        </div>
      </div>

      <Tabs defaultValue="welcome" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="welcome">Welcome Offer</TabsTrigger>
          <TabsTrigger value="wash">Wash & Iron</TabsTrigger>
          <TabsTrigger value="ironing">Ironing</TabsTrigger>
        </TabsList>

        <TabsContent value="welcome" className="mt-0">
          <Card className="bg-amber-50 border-0">
            <CardContent className="p-6">
              <div className="max-w-md">
                <h2 className="text-2xl font-bold mb-4">Prepay and save your laundry services</h2>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span>€20 minimum order</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span>Free 24h delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    <span>Best price guaranteed</span>
                  </li>
                </ul>
                <div className="relative">
                  <Button className="bg-gray-900 hover:bg-gray-800 rounded-full px-6">
                    Order Now
                    <ArrowRight size={18} />
                  </Button>
                  <div className="absolute -right-4 -top-4 bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm font-semibold">
                    30% off
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <Button variant="outline" className="w-full justify-between p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="bg-gray-900 text-white p-2 rounded-full">
                  <Package size={20} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">Getting Started?</h3>
                  <p className="text-sm text-gray-500">See how Laundry help works and learn more about our services.</p>
                </div>
              </div>
              <ArrowRight size={20} />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="wash" className="mt-0 grid gap-4">
          <ServiceCard
            title="Wash"
            description="Limited Time: 10% off wash service!"
            icon={<WashingMachine className="h-6 w-6" />}
            discount="10% off"
            bgColor="bg-amber-100"
          />
          <ServiceCard
            title="Wash & Iron"
            description="Save 10% on wash & iron service!"
            icon={<Droplet className="h-6 w-6" />}
            discount="Save 10%"
            bgColor="bg-orange-100"
          />
        </TabsContent>

        <TabsContent value="ironing" className="mt-0">
          <ServiceCard
            title="Ironing"
            description="Enjoy 10% off ironing service!"
            icon={<Hanger className="h-6 w-6" />}
            discount="10% off"
            bgColor="bg-pink-100"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  discount: string;
  bgColor: string;
}

const ServiceCard = ({ title, description, icon, discount, bgColor }: ServiceCardProps) => {
  return (
    <Card className={`${bgColor} border-0`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {icon}
              <h3 className="font-bold text-lg">{title}</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">{description}</p>
            <Button variant="secondary" className="rounded-full">
              Claim the offer
            </Button>
          </div>
          <div className="bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
            {discount}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomePage;
