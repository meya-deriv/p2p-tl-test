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
    <div className="w-[328px] h-[202px] p-4 bg-white rounded border border-[#dee2e6] flex-col justify-start items-start gap-1 inline-flex">
      <div className="self-stretch h-12 flex-col justify-center items-start gap-1 flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="relative w-6 h-6 justify-between items-center flex">
            <div className="w-6 h-6 bg-[#101213] rounded-[100px] justify-center items-center flex">
              <span className="text-white text-sm font-bold font-inter leading-tight">
                {avatar}
              </span>
            </div>
            {isFollowing && (
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#29823b] rounded-[50px] border border-white" />
            )}
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-[#272b30] text-sm font-normal font-inter leading-tight">
              {name}
            </div>
            {isFollowing && (
              <div className="px-1 rounded border border-[#29823b] justify-center items-center gap-1 flex">
                <div className="text-[#29823b] text-xs font-normal font-['IBM Plex Sans'] leading-[18px]">
                  Following
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="self-stretch h-5 flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <Star className="w-4 h-4 text-[#e9a100] fill-[#e9a100]" />
            <div>
              <span className="text-[#e9a100] text-xs font-normal font-inter leading-tight">
                {rating}
              </span>
              <span className="text-[#6a7178] text-xs font-normal font-inter leading-tight">
                {" "}
                • {orders} orders • {completion}% completion
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch justify-start items-start gap-1 inline-flex">
          <span className="text-[#272b30] text-lg font-bold font-inter leading-7">
            USD
          </span>
          <span className="text-[#272b30] text-lg font-bold font-inter leading-7">
            {usdAmount.toFixed(2)}
          </span>
          <span className="text-[#272b30] text-lg font-bold font-inter leading-7">
            =
          </span>
          <span className="text-[#272b30] text-lg font-bold font-inter leading-7">
            IDR
          </span>
          <span className="text-[#272b30] text-lg font-bold font-inter leading-7">
            {idrAmount.toLocaleString()}
          </span>
        </div>
        <div className="self-stretch text-[#272b30] text-xs font-normal font-inter leading-tight">
          Limits: USD {limits.min.toFixed(2)} - {limits.max.toFixed(2)}
        </div>
      </div>

      <div className="h-[22px] px-1 bg-black/5 rounded justify-center items-center gap-1 inline-flex">
        <div className="text-black/70 text-xs font-normal font-['IBM Plex Sans'] leading-[18px]">
          {responseTime} min
        </div>
      </div>

      <div className="self-stretch justify-start items-center inline-flex">
        <div className="grow shrink basis-0 text-[#272b30] text-xs font-normal font-inter leading-tight">
          {paymentMethods.join(" | ")}
        </div>
        <div className="px-2 bg-[#ff444f] rounded-[100px] justify-center items-start gap-2 flex overflow-hidden">
          <div className="justify-start items-center gap-2 flex">
            <div className="text-center text-white text-xs font-medium font-roboto leading-[18px]">
              Buy USD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
