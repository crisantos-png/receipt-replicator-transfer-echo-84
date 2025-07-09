import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send } from "lucide-react";
import gtbLogo from "@/assets/gtb-logo.png";
import accessBankLogo from "@/assets/access-bank-logo.png";
import zenithBankLogo from "@/assets/zenith-bank-logo.png";
import firstBankLogo from "@/assets/first-bank-logo.png";
import ubaLogo from "@/assets/uba-logo.png";


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

interface TransferFormProps {
  onTransfer: (data: TransferData) => void;
  onBack: () => void;
}

const banks: Bank[] = [
  { id: "gtb", name: "GTBank", logo: gtbLogo },
  { id: "access", name: "Access Bank", logo: accessBankLogo },
  { id: "zenith", name: "Zenith Bank", logo: zenithBankLogo },
  { id: "firstbank", name: "First Bank", logo: firstBankLogo },
  { id: "uba", name: "UBA", logo: ubaLogo },
];

export function TransferForm({ onTransfer, onBack }: TransferFormProps) {
  const [formData, setFormData] = useState<TransferData>({
    recipientName: "",
    recipientAccount: "",
    amount: "",
    narration: "",
    bank: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.recipientName && formData.amount && formData.bank) {
      onTransfer(formData);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onBack}
            className="mr-3 hover:bg-muted"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-foreground">Send Money</h1>
        </div>

        {/* Transfer Form */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Transfer Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="recipientName" className="text-foreground">
                  Recipient Name
                </Label>
                <Input
                  id="recipientName"
                  value={formData.recipientName}
                  onChange={(e) => setFormData(prev => ({ ...prev, recipientName: e.target.value }))}
                  placeholder="Enter recipient's full name"
                  className="bg-input border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bank" className="text-foreground">
                  Select Bank
                </Label>
                <Select onValueChange={(value) => {
                  const selectedBank = banks.find(bank => bank.id === value);
                  setFormData(prev => ({ ...prev, bank: selectedBank || null }));
                }}>
                  <SelectTrigger className="bg-input border-border text-foreground">
                    <SelectValue placeholder="Choose bank" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    {banks.map((bank) => (
                      <SelectItem key={bank.id} value={bank.id}>
                        <div className="flex items-center gap-3">
                          <img src={bank.logo} alt={bank.name} className="w-6 h-6 object-contain" />
                          <span>{bank.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recipientAccount" className="text-foreground">
                  Account Number
                </Label>
                <Input
                  id="recipientAccount"
                  value={formData.recipientAccount}
                  onChange={(e) => setFormData(prev => ({ ...prev, recipientAccount: e.target.value }))}
                  placeholder="Enter account number"
                  className="bg-input border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount" className="text-foreground">
                  Amount (₦)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData(prev => ({ ...prev, amount: e.target.value }))}
                  placeholder="0.00"
                  className="bg-input border-border text-foreground text-lg font-medium"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="narration" className="text-foreground">
                  Narration (Optional)
                </Label>
                <Input
                  id="narration"
                  value={formData.narration}
                  onChange={(e) => setFormData(prev => ({ ...prev, narration: e.target.value }))}
                  placeholder="What's this for?"
                  className="bg-input border-border text-foreground"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white font-medium py-3"
                disabled={!formData.recipientName || !formData.amount || !formData.bank}
              >
                <Send className="w-4 h-4 mr-2" />
                Send ₦{formData.amount || "0.00"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}