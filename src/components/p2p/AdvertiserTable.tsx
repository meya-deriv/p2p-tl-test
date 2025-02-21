import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Star, Clock } from "lucide-react";
import AdvertiserTableHeader from "./AdvertiserTableHeader";

interface Advertiser {
  id: string;
  name: string;
  rating: number;
  completedOrders: number;
  completionRate: number;
  rate: number;
  minLimit: number;
  maxLimit: number;
  availableAmount: number;
  paymentMethods: string[];
  estimatedTime: number;
  avatar: string;
}

interface Props {
  advertisers?: Advertiser[];
  onBuy?: (advertiserId: string) => void;
  isMobile?: boolean;
}

const defaultAdvertisers: Advertiser[] = [
  {
    id: "1",
    name: "JohnDoe",
    rating: 4.8,
    completedOrders: 150,
    completionRate: 98,
    rate: 14250,
    minLimit: 100000,
    maxLimit: 1000000,
    availableAmount: 500000,
    paymentMethods: ["Bank Transfer", "GoPay"],
    estimatedTime: 15,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
  {
    id: "2",
    name: "AliceTrader",
    rating: 4.9,
    completedOrders: 230,
    completionRate: 99,
    rate: 14300,
    minLimit: 200000,
    maxLimit: 2000000,
    availableAmount: 1500000,
    paymentMethods: ["Bank Transfer", "OVO", "DANA"],
    estimatedTime: 10,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
  },
];

const AdvertiserTable = ({
  advertisers = defaultAdvertisers,
  onBuy = () => {},
  isMobile = false,
}: Props) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  if (isMobile) {
    return (
      <div className="space-y-4 bg-gray-50 p-4">
        {advertisers.map((advertiser) => (
          <Card key={advertiser.id} className="p-4 bg-white">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10">
                <img src={advertiser.avatar} alt={advertiser.name} />
              </Avatar>
              <div>
                <div className="font-medium">{advertiser.name}</div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {advertiser.rating}
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Rate:</span>
                <span className="font-medium">
                  {formatCurrency(advertiser.rate)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Limits:</span>
                <span className="font-medium">
                  {formatCurrency(advertiser.minLimit)} -{" "}
                  {formatCurrency(advertiser.maxLimit)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Available:</span>
                <span className="font-medium">
                  {formatCurrency(advertiser.availableAmount)}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {advertiser.paymentMethods.map((method) => (
                <Badge key={method} variant="secondary">
                  {method}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                {advertiser.estimatedTime} mins
              </div>
              <Button onClick={() => onBuy(advertiser.id)}>Buy USD</Button>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <AdvertiserTableHeader />
      <div className="divide-y divide-gray-200 bg-white">
        {advertisers.map((advertiser) => (
          <div
            key={advertiser.id}
            className="grid grid-cols-6 gap-4 px-6 py-4 bg-white items-center"
          >
            <div className="col-span-1 flex items-start gap-2">
              <div className="relative">
                <div className="w-6 h-6 bg-[#101213] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {advertiser.name[0]}
                  </span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#29823b] rounded-full border border-white" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#101213] text-sm font-normal">
                    {advertiser.name}
                  </span>
                  <div className="px-1 rounded border border-[#29823b]">
                    <span className="text-[#29823b] text-xs">Following</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#e9a100] fill-[#e9a100]" />
                  <span className="text-xs">
                    <span className="text-[#e9a100]">{advertiser.rating}</span>
                    <span className="text-[#adb5bd]">
                      {" "}
                      • {advertiser.completedOrders} orders •{" "}
                      {advertiser.completionRate}% completion
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-1 font-medium">
              {formatCurrency(advertiser.rate)}
            </div>

            <div className="col-span-2">
              {formatCurrency(advertiser.minLimit)} -{" "}
              {formatCurrency(advertiser.maxLimit)}
            </div>

            <div className="col-span-1">
              {formatCurrency(advertiser.availableAmount)}
            </div>

            <div className="col-span-1 flex items-center justify-between">
              <div className="flex gap-2">
                {advertiser.paymentMethods.map((method) => (
                  <Badge key={method} variant="secondary">
                    {method}
                  </Badge>
                ))}
              </div>
              <Button onClick={() => onBuy(advertiser.id)} className="ml-4">
                Buy USD
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertiserTable;
