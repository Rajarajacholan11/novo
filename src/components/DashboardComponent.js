import Card from "./Card";
import {
  Building2,
  Briefcase,
  IdCard,
  ShoppingCart,
  Settings,
  Users,
  Languages,
  Smartphone,
  Tablet,
} from "lucide-react";

export default function DashboardComponent() {
  return (
    
    <div className="p-4 sm:p-6 space-y-6">
      {/* top 4 card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">


        {/* card1 */}
        <Card>
          <Building2 className="w-8 h-8 text-green-600" />
          <h3 className="font-bold mt-2 text-base sm:text-lg">XXXX 9820</h3>
          <p className="text-sm sm:text-base text-gray-500">
            ICICI Bank | Chennai Egmore Branch
          </p>
        </Card>


        {/* card2 */}
        <Card>
          <Briefcase className="w-8 h-8 text-green-600" />
          <h3 className="font-bold mt-2 text-base sm:text-lg">Business Profile</h3>
          <p className="text-sm sm:text-base text-gray-500">
            View and edit your business details
          </p>
        </Card>

        {/* card3 */}
        <Card>
          <IdCard className="w-8 h-8 text-green-600" />
          <h3 className="font-bold mt-2 text-base sm:text-lg">KYC Verification</h3>
          <p className="text-sm sm:text-base text-gray-500">
            Unlock exclusive benefits with KYC
          </p>
        </Card>

        {/* card4 */}
        <Card>
          <ShoppingCart className="w-8 h-8 text-green-600" />
          <h3 className="font-bold mt-2 text-base sm:text-lg">Order QR</h3>
          <p className="text-sm sm:text-base text-gray-500">
            Get paid, manage & order QRs
          </p>
        </Card>
      </div>

      {/* businessservices and managebusniess */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="font-semibold text-lg mb-4">Business Services</h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <Smartphone className="w-10 h-10 text-green-600" />
              <p className="text-sm sm:text-base mt-2">Smart Speaker</p>
            </div>
            <div className="flex flex-col items-center">
              <Tablet className="w-10 h-10 text-green-600" />
              <p className="text-sm sm:text-base mt-2">POS Machine</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold text-lg mb-4">Manage Business</h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <Settings className="w-10 h-10 text-green-600" />
              <p className="text-sm sm:text-base mt-2">Payment Settings</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-green-600" />
              <p className="text-sm sm:text-base mt-2">Manage Staff</p>
            </div>
            <div className="flex flex-col items-center">
              <Languages className="w-10 h-10 text-green-600" />
              <p className="text-sm sm:text-base mt-2">Change Language</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
