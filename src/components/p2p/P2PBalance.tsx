import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface P2PBalanceProps {
  balance?: number;
  currency?: string;
  onRefresh?: () => void;
}

const P2PBalance = ({
  balance = 1000.0,
  currency = "USD",
  onRefresh = () => {},
}: P2PBalanceProps) => {
  return (
    <Card className="bg-white p-6 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <Wallet className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-500">P2P Balance</h2>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{balance.toFixed(2)}</span>
              <Badge variant="outline" className="font-semibold">
                {currency}
              </Badge>
            </div>
          </div>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={onRefresh}
              >
                <ArrowUpDown className="h-4 w-4" />
                Refresh Balance
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Update your P2P balance</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  );
};

export default P2PBalance;
