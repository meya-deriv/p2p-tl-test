import { ArrowLeftRight, FileText, LayoutDashboard, User } from "lucide-react";
import P2PHeader from "./p2p/P2PHeader";
import P2PFilters from "./p2p/P2PFilters";
import AdvertiserTable from "./p2p/AdvertiserTable";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ADVERTISERS = [
  {
    name: "Mariana Rueda",
    avatar: "M",
    isFollowing: true,
    rating: 4.3,
    orders: 43,
    completion: 98,
    usdAmount: 1.0,
    idrAmount: 14500.0,
    limits: { min: 10, max: 100 },
    responseTime: 15,
    paymentMethods: ["Bank transfer", "Neteller", "PayPal"],
  },
  {
    name: "Pavitra Yoganathan",
    avatar: "P",
    isFollowing: false,
    rating: 4.0,
    orders: 3,
    completion: 43,
    usdAmount: 1.0,
    idrAmount: 14500.0,
    limits: { min: 10, max: 100 },
    responseTime: 10,
    paymentMethods: ["Bank transfer", "Neteller", "PayPal"],
  },
];

function Home() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-inter">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="md:px-10 p-4 border-b border-[#e9ecef]">
          <P2PHeader balance={1234.56} />
          <div className="mt-4">
            <P2PFilters />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 md:px-10 p-4 overflow-auto">
          <AdvertiserTable
            isMobile={useMediaQuery("(max-width: 768px)")}
            advertisers={ADVERTISERS.map((advertiser, index) => ({
              id: index.toString(),
              name: advertiser.name,
              rating: advertiser.rating,
              completedOrders: advertiser.orders,
              completionRate: advertiser.completion,
              rate: advertiser.idrAmount,
              minLimit: advertiser.limits.min,
              maxLimit: advertiser.limits.max,
              availableAmount: advertiser.idrAmount * 1000,
              paymentMethods: advertiser.paymentMethods,
              estimatedTime: advertiser.responseTime,
              avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${advertiser.name}`,
            }))}
          />
        </div>

        {/* Bottom Navigation - mobile only */}
        <div className="md:hidden border-t border-[#e9ecef] p-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <ArrowLeftRight className="w-6 h-6 text-[#ff444f]" />
              <span className="text-xs font-bold text-[#ff444f]">Buy/Sell</span>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="w-6 h-6 text-[#6a7178]" />
              <span className="text-xs text-[#6a7178]">Orders</span>
            </div>
            <div className="flex flex-col items-center">
              <LayoutDashboard className="w-6 h-6 text-[#6a7178]" />
              <span className="text-xs text-[#6a7178]">My ads</span>
            </div>
            <div className="flex flex-col items-center">
              <User className="w-6 h-6 text-[#6a7178]" />
              <span className="text-xs text-[#6a7178]">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
