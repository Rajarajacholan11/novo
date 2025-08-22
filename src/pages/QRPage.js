import Layout from "../components/Layout";
import QRPreview from "../components/QRPreview";
import QRList from "../components/QRList";

export default function QRPage() {
  return (
    <Layout>
      {/* Page */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
          Manage QR / POS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QRPreview />
          <QRList />
        </div>

      </div>
    </Layout>
  );
}
