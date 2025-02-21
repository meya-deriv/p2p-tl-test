import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Info } from "lucide-react";

interface P2PHeaderProps {
  balance?: number;
  onBuyClick?: () => void;
  onSellClick?: () => void;
}

export default function P2PHeader({
  balance = 1234.56,
  onBuyClick,
  onSellClick,
}: P2PHeaderProps) {
  return (
    <div className="flex flex-col gap-6 font-inter">
      {/* Title and Balance */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Deriv P2P</div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-0">
            <span className="text-xs text-[#101213]">P2P balance</span>
            <Info className="w-4 h-4 ml-1" />
          </div>
          <span className="text-lg font-bold text-[#101213]">
            USD {balance.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:flex justify-between items-start w-full">
        <div className="h-[45px] pt-2 border-b border-[#ced4da] flex w-[328px] gap-8">
          <div className="flex-1 h-[37px] flex flex-col items-center">
            <div className="text-[#272b30] text-sm font-bold font-['IBM Plex Sans'] pb-3.5">
              Buy/Sell
            </div>
            <div className="w-full h-0.5 bg-[#ff444f]"></div>
          </div>
          <div className="flex-1 h-[37px] flex flex-col items-center">
            <div className="text-[#6a7178] text-sm font-normal font-['IBM Plex Sans'] pb-[15px]">
              Orders
            </div>
            <div className="w-full h-px bg-[#ced4da]"></div>
          </div>
          <div className="flex-1 h-[37px] flex flex-col items-center">
            <div className="text-[#6a7178] text-sm font-normal font-['IBM Plex Sans'] pb-[15px]">
              My ads
            </div>
            <div className="w-full h-px bg-[#ced4da]"></div>
          </div>
          <div className="flex-1 h-[37px] flex flex-col items-center">
            <div className="text-[#6a7178] text-sm font-normal font-['IBM Plex Sans'] pb-[15px]">
              Profile
            </div>
            <div className="w-full h-px bg-[#ced4da]"></div>
          </div>
        </div>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <ToggleGroup.Root
          type="single"
          defaultValue="buy"
          className="min-w-[107px] bg-[#f1f3f5] p-0.5 rounded-md inline-flex"
        >
          <ToggleGroup.Item
            value="buy"
            onClick={onBuyClick}
            className="flex-1 data-[state=on]:bg-white text-[11px] h-6 rounded-sm flex items-center justify-center hover:bg-white/50"
          >
            Buy
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="sell"
            onClick={onSellClick}
            className="flex-1 data-[state=on]:bg-white text-[11px] h-6 rounded-sm flex items-center justify-center hover:bg-white/50"
          >
            Sell
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </div>
  );
}
