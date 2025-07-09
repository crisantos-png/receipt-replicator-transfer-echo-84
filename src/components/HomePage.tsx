import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Send, 
  Download, 
  Smartphone, 
  CreditCard,
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";

interface HomePageProps {
  onStartTransfer: () => void;
}

export function HomePage({ onStartTransfer }: HomePageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-card border-b border-border p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">OWealth</h1>
              <p className="text-muted-foreground">Good evening</p>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Eye className="h-5 w-5" />
            </Button>
          </div>

          {/* Balance Card */}
          <Card className="bg-gradient-primary border-0 shadow-glow">
            <CardContent className="p-6">
              <div className="text-white/80 text-sm mb-2">Total Balance</div>
              <div className="text-white text-3xl font-bold mb-4">₦45,250.00</div>
              <div className="flex items-center justify-between">
                <div className="text-white/60 text-sm">Account: 7089334322</div>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Money
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="p-4 max-w-md mx-auto">
        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Button
            variant="ghost"
            className="flex flex-col items-center p-4 h-auto hover:bg-muted"
            onClick={onStartTransfer}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Send className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-foreground">Send</span>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center p-4 h-auto hover:bg-muted">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-foreground">Receive</span>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center p-4 h-auto hover:bg-muted">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-foreground">Airtime</span>
          </Button>

          <Button variant="ghost" className="flex flex-col items-center p-4 h-auto hover:bg-muted">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-foreground">Bills</span>
          </Button>
        </div>

        {/* Recent Transactions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Recent Transactions</h2>
            <Button variant="ghost" size="sm" className="text-primary">View All</Button>
          </div>

          <div className="space-y-3">
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Transfer to John Doe</div>
                      <div className="text-sm text-muted-foreground">Yesterday, 2:30 PM</div>
                    </div>
                  </div>
                  <div className="text-red-500 font-medium">-₦5,000.00</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                      <ArrowDownLeft className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Received from Sarah</div>
                      <div className="text-sm text-muted-foreground">Monday, 10:15 AM</div>
                    </div>
                  </div>
                  <div className="text-green-500 font-medium">+₦12,500.00</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Airtime Purchase</div>
                      <div className="text-sm text-muted-foreground">Sunday, 6:45 PM</div>
                    </div>
                  </div>
                  <div className="text-red-500 font-medium">-₦1,000.00</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Transfer Button */}
        <Button 
          onClick={onStartTransfer}
          className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white font-medium py-4 text-lg"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Money
        </Button>
      </div>
    </div>
  );
}