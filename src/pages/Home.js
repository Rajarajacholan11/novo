import Layout from "../components/Layout";
import HeroBanner from "../components/Herobanner";
import Bill from "../assets/Bill.png";
import StatsCard from "../components/StatsCard";
import ProfileProgress from "../components/ProfileProgress";
import QRCodeCard from "../components/QRCodeCard";
import TransactionPreviewCard from "../components/TransactionPreviewCard";

export default function Home() {
  const profileTasks = [
    { label: "Personal KYC", completed: false },
    { label: "Company KYC", completed: false },
    { label: "Onboarding Details", completed: false },
  ];

  const sampleTxns = [
    { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: 90 },
    { name: "Rahul", date: "23 Oct, 11:00 AM", amount: 250 },
    { name: "Sneha", date: "23 Oct, 01:45 PM", amount: 120 },
  ];

  return (
    <Layout>
      {/* banner*/}
      <HeroBanner imagesrc={Bill} />

      {/* statscard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
        <StatsCard value="1.5k" title="Account Holders" />
        <StatsCard value="2.1k" title="Transactions" />
        <StatsCard value="2.3k" title="Settlements" />
        <StatsCard value="45k" title="QR Orders" />
      </div>

      {/* profile & qr*/}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <ProfileProgress percent={30} tasks={profileTasks} />
        <QRCodeCard />
      </div>

      {/* transaction */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <TransactionPreviewCard
          title="Settlement"
          balance="1,23,816.19"
          transactions={sampleTxns}
          buttonText="Settle Now"
        />
        <TransactionPreviewCard
          title="Total Transactions"
          balance="8,57,432.75"
          transactions={sampleTxns}
          buttonText="View All"
        />
      </div>
    </Layout>
  );
}
