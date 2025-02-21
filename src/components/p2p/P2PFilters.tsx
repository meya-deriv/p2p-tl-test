import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function P2PFilters() {
  return (
    <div className="flex flex-col gap-6 font-inter">
      {/* Buy/Sell Toggle and Filters Row */}
      <div className="flex items-center justify-between">
        <div className="h-10 px-1 bg-black/5 rounded-lg flex items-center">
          <div className="h-8 px-2 bg-white rounded flex items-center">
            <div className="text-black text-sm font-bold">Buy</div>
          </div>
          <div className="h-8 px-2 rounded flex items-center">
            <div className="text-black/70 text-sm font-normal">Sell</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          <Select defaultValue="IDR">
            <SelectTrigger className="w-20 h-8 text-xs">
              <SelectValue placeholder="IDR" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IDR">IDR</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[200px] h-8 text-xs">
              <SelectValue placeholder="Payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Payment (All)</SelectItem>
              <SelectItem value="bank">Bank Transfer</SelectItem>
              <SelectItem value="neteller">Neteller</SelectItem>
              <SelectItem value="paypal">PayPal</SelectItem>
            </SelectContent>
          </Select>

          <div className="w-[200px] h-8 px-2 bg-white rounded border border-[#ced4da] flex items-center gap-1">
            <Search className="w-4 h-4 text-[#6a7178]" />
            <input
              type="text"
              placeholder="Enter nickname"
              className="grow text-xs text-[#6a7178] outline-none"
            />
          </div>

          <Select defaultValue="rate">
            <SelectTrigger className="w-[150px] h-8 text-xs">
              <SelectValue placeholder="Sort by: Exchange rate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rate">Sort by: Exchange rate</SelectItem>
              <SelectItem value="completion">Sort by: Completion</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[150px] h-8 text-xs">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="following">Following</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
