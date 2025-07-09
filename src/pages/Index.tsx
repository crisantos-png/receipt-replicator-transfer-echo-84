import { useState } from "react";
import { HomePage } from "@/components/HomePage";
import { TransferForm } from "@/components/TransferForm";
import { TransactionReceipt } from "@/components/TransactionReceipt";

type AppState = "home" | "transfer" | "receipt";

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

const Index = () => {
  const [currentView, setCurrentView] = useState<AppState>("home");
  const [transferData, setTransferData] = useState<TransferData | null>(null);

  const handleStartTransfer = () => {
    setCurrentView("transfer");
  };

  const handleTransfer = (data: TransferData) => {
    setTransferData(data);
    // Simulate processing time
    setTimeout(() => {
      setCurrentView("receipt");
    }, 2000);
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setTransferData(null);
  };

  const handleBackToTransfer = () => {
    setCurrentView("transfer");
  };

  if (currentView === "home") {
    return <HomePage onStartTransfer={handleStartTransfer} />;
  }

  if (currentView === "transfer") {
    return (
      <TransferForm 
        onTransfer={handleTransfer} 
        onBack={handleBackToHome}
      />
    );
  }

  if (currentView === "receipt" && transferData) {
    return (
      <TransactionReceipt 
        transferData={transferData}
        onBack={handleBackToTransfer}
        onNewTransfer={handleStartTransfer}
      />
    );
  }

  return <HomePage onStartTransfer={handleStartTransfer} />;
};

export default Index;
