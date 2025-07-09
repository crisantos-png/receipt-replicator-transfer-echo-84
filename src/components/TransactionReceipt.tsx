import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, User, Check, Copy, ChevronRight } from "lucide-react";

interface Bank {
  id: string;
  name: string;
  logo: string;
}

interface TransferData {
  recipientName: string;
  recipientAccount: string;
  amount: string;
  narration: string;
  bank: Bank | null;
}

interface TransactionReceiptProps {
  transferData: TransferData;
  onBack: () => void;
  onNewTransfer: () => void;
}

export function TransactionReceipt({ transferData, onBack, onNewTransfer }: TransactionReceiptProps) {
  const transactionId = "250708020100698159344565";
  const sessionId = "100004250708191734136401752611";
  const currentTime = new Date().toLocaleString();
  const fee = "0.00";
  const totalAmount = transferData.amount;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/30">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onBack}
            className="mr-3 hover:bg-muted/50 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-medium text-foreground">Transaction Details</h1>
        </div>
        <Button variant="ghost" size="icon" className="hover:bg-muted/50">
          <User className="h-5 w-5 text-success" />
        </Button>
      </div>

      <div className="p-4 max-w-full sm:max-w-lg mx-auto w-full">
        {/* Main Transaction Card */}
        <Card className="bg-card/90 border-border/30 shadow-lg mb-6 animate-scale-in backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            {/* Logo/Icon */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <img 
                src="/lovable-uploads/4c35dfe3-c48d-41cd-ae62-05920fb47e8d.png" 
                alt="App Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Transfer Details */}
            <h2 className="text-lg font-medium text-foreground mb-1">
              Transfer to {transferData.recipientName.toUpperCase()}
            </h2>
            <div className="text-3xl font-bold text-foreground mb-2">
              ₦{Number(transferData.amount).toFixed(2)}
            </div>
            <div className="text-success font-medium mb-6">Successful</div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mb-2">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  <div>Payment</div>
                  <div>successful</div>
                  <div className="text-xs mt-1">07-08 20:17:00</div>
                </div>
              </div>

              <div className="flex-1 h-0.5 bg-success mx-2"></div>

              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mb-2">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  <div>Processing</div>
                  <div>by bank</div>
                  <div className="text-xs mt-1">07-08 20:17:00</div>
                </div>
              </div>

              <div className="flex-1 h-0.5 bg-success mx-2"></div>

              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mb-2">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  <div>Received</div>
                  <div>by bank</div>
                  <div className="text-xs mt-1">07-08 20:17:35</div>
                </div>
              </div>
            </div>

            {/* Notice */}
            <div className="text-xs text-muted-foreground text-left bg-muted/10 p-3 rounded-lg border border-border/30">
              The recipient account is expected to be credited within 5 minutes, subject to 
              notification by the bank. If you have any questions, you can also{" "}
              <span className="text-success cursor-pointer hover:text-success/80">contact the recipient bank &gt;&gt;</span>
            </div>
          </CardContent>
        </Card>

        {/* Amount Breakdown */}
        <Card className="bg-card/90 border-border/30 shadow-lg mb-6 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Amount</span>
                <span className="text-foreground font-medium">₦{Number(transferData.amount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Fee</span>
                <div className="text-right">
                  <span className="text-muted-foreground line-through text-sm mr-2">₦10.00</span>
                  <span className="text-foreground font-medium">₦{fee}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="text-foreground font-medium">₦{Number(totalAmount).toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Details */}
        <Card className="bg-card/90 border-border/30 shadow-lg mb-6 backdrop-blur-sm">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium text-foreground mb-4">Transaction Details</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-muted-foreground">Recipient Details</span>
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end mb-1">
                    <span className="text-foreground font-medium">{transferData.recipientName.toUpperCase()}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {transferData.bank?.name || "Bank"} | {transferData.recipientAccount}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Transaction No.</span>
                <div className="flex items-center">
                  <span className="text-foreground font-mono text-sm mr-2">{transactionId}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 p-0 hover:bg-muted"
                    onClick={() => copyToClipboard(transactionId)}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Payment Method</span>
                <div className="flex items-center">
                  <span className="text-foreground">OWealth</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Transaction Date</span>
                <span className="text-foreground">{currentTime}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Session ID</span>
                <div className="flex items-center">
                  <span className="text-foreground font-mono text-sm mr-2">{sessionId}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-4 h-4 p-0 hover:bg-muted"
                    onClick={() => copyToClipboard(sessionId)}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* More Actions */}
        <Card className="bg-card/90 border-border/30 shadow-lg mb-6 backdrop-blur-sm">
          <CardContent className="p-4">
            <h3 className="text-lg font-medium text-foreground mb-4">More Actions</h3>
            
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Category</span>
              <div className="flex items-center">
                <span className="text-foreground">Transfer</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="bg-transparent border-border/50 text-muted-foreground hover:bg-muted/30 hover:text-foreground hover:border-border"
          >
            Report Issue
          </Button>
          <Button 
            className="bg-success hover:bg-success/90 hover:shadow-lg transition-all duration-300 text-white font-medium"
            onClick={onNewTransfer}
          >
            Share Receipt
          </Button>
        </div>
      </div>
    </div>
  );
}