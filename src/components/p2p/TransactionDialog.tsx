import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, DollarSign, User } from "lucide-react";

interface TransactionDetails {
  advertiserName: string;
  rate: number;
  amount: number;
  paymentMethod: string;
  timeLimit: number;
}

interface Props {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  transactionDetails?: TransactionDetails;
}

const TransactionDialog = ({
  open = true,
  onOpenChange = () => {},
  onConfirm = () => {},
  onCancel = () => {},
  transactionDetails = {
    advertiserName: "John Doe",
    rate: 14250,
    amount: 1000,
    paymentMethod: "Bank Transfer",
    timeLimit: 15,
  },
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Confirm Transaction</DialogTitle>
          <DialogDescription>
            Please review the transaction details below
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <User className="h-5 w-5 text-gray-500" />
            <div className="space-y-1">
              <Label>Advertiser</Label>
              <p className="text-sm font-medium">
                {transactionDetails.advertiserName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <DollarSign className="h-5 w-5 text-gray-500" />
            <div className="space-y-1">
              <Label>Rate</Label>
              <p className="text-sm font-medium">
                1 USD = {transactionDetails.rate.toLocaleString()} IDR
              </p>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="amount">Amount (USD)</Label>
            <Input
              id="amount"
              type="number"
              value={transactionDetails.amount}
              onChange={() => {}}
              className="col-span-3"
            />
            <p className="text-sm text-gray-500">
              Total:{" "}
              {(
                transactionDetails.amount * transactionDetails.rate
              ).toLocaleString()}{" "}
              IDR
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Clock className="h-5 w-5 text-gray-500" />
            <div className="space-y-1">
              <Label>Time Limit</Label>
              <p className="text-sm font-medium">
                {transactionDetails.timeLimit} minutes
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <Label>Payment Method</Label>
            <p className="text-sm font-medium">
              {transactionDetails.paymentMethod}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm Transaction</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDialog;
