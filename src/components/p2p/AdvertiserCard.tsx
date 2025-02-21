import { Button } from "@deriv-com/quill-ui";
import { Star } from "lucide-react";

interface AdvertiserCardProps {
  name: string;
  avatar: string;
  isFollowing?: boolean;
  rating: number;
  orders: number;
  completion: number;
  usdAmount: number;
  idrAmount: number;
  limits: { min: number; max: number };
  responseTime: number;
  paymentMethods: string[];
}

export default function AdvertiserCard({
  name = "John Doe",
  avatar = "M",
  isFollowing = false,
  rating = 4.3,
  orders = 43,
  completion = 98,
  usdAmount = 1.0,
  idrAmount = 14500.0,
  limits = { min: 10, max: 100 },
  responseTime = 15,
  paymentMethods = ["Bank transfer", "Neteller", "PayPal"],
}: AdvertiserCardProps) {
  return (
    <div className="p-4 bg-white border-b border-[#dee2e6] flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full font-inter">
      <div className="flex flex-col gap-1 md:gap-2">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-[#101213] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{avatar}</span>
            </div>
            {isFollowing && (
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#29823b] rounded-full border border-white" />
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#272b30] text-sm md:text-base">{name}</span>
            {isFollowing && (
              <div className="px-1 rounded border border-[#29823b]">
                <span className="text-[#29823b] text-xs">Following</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-[#e9a100] fill-[#e9a100]" />
          <span className="text-xs md:text-sm">
            <span className="text-[#e9a100]">{rating}</span>
            <span className="text-[#6a7178]">
              {" "}
              • {orders} orders • {completion}% completion
            </span>
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-1">
            <span className="text-lg font-bold">USD</span>
            <span className="text-lg font-bold">{usdAmount.toFixed(2)}</span>
            <span className="text-lg font-bold">=</span>
            <span className="text-lg font-bold">IDR</span>
            <span className="text-lg font-bold">{idrAmount.toFixed(2)}</span>
          </div>
          <span className="text-xs">
            Limits: USD {limits.min.toFixed(2)} - {limits.max.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="px-1 py-0.5 bg-black/5 rounded w-fit">
            <span className="text-black/70 text-xs">{responseTime} min</span>
          </div>

          <div className="flex items-center justify-between md:flex-col md:items-start gap-2">
            <span className="text-xs text-[#272b30]">
              {paymentMethods.join(" | ")}
            </span>
            <Button variant="primary" size="sm" className="md:w-full">
              Buy USD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
