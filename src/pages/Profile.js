import Layout from "../components/Layout";
import network from "../assets/network.jpg";
import HeroBanner from "../components/Herobanner";
import { Building } from "lucide-react";
import DashboardComponent from "../components/DashboardComponent";

export default function Profile() {
  return (
    <Layout>
      {/* banner */}
      <HeroBanner imagesrc={network} />

      {/* Profile */}
     <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
  <div className="flex items-center gap-2 mb-6">
    <Building className="text-[rgba(65,121,74,255)] w-6 h-6" />
    <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
      Profile Dashboard
    </h1>
  </div>

  {/* Dashboard */}
  <DashboardComponent />
</div>
    </Layout>
  );
}
