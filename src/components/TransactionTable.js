const transactions = [
  {
    name: "Lisa",
    date: "03 Sep, 2021",
    account: "From QPay",
    amount: "₹1,06,023",
    status: "Pending",
  },
  {
    name: "Lisa",
    date: "03 Sep, 2021",
    account: "From PhonePe",
    amount: "₹1,023",
    status: "Failed",
  },
  {
    name: "Lisa",
    date: "03 Sep, 2021",
    account: "From GPay",
    amount: "₹1,023",
    status: "Success",
  },
  {
    name: "Lisa",
    date: "03 Sep, 2021",
    account: "From Paytm",
    amount: "₹1,06,023",
    status: "Failed",
  },
  {
    name: "Lisa",
    date: "03 Sep, 2021",
    account: "From PhonePe",
    amount: "₹1,023",
    status: "Failed",
  },
];

export default function TransactionTable() {
  return (
    <div className="overflow-x-auto rounded-xl shadow bg-white mt-8 h-96">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 text-gray-400 font-thin text-xs sm:text-sm uppercase">
          <tr>
            <th className="py-3 px-2 sm:px-4 font-semibold">Name</th>
            <th className="py-3 px-2 sm:px-4 font-semibold">Date & Time</th>
            <th className="py-3 px-2 sm:px-4 font-semibold">Account</th>
            <th className="py-3 px-2 sm:px-4 font-semibold">Amount</th>
            <th className="py-3 px-2 sm:px-4 font-semibold">Status</th>
            <th className="py-3 px-2 sm:px-4 font-semibold hidden sm:table-cell">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr
              key={index}
              className="border-t border-gray-300 text-xs sm:text-sm md:text-base hover:bg-gray-50"
            >
              <td className="py-3 px-2 sm:px-4 font-semibold">{tx.name}</td>
              <td className="py-3 px-2 sm:px-4">{tx.date}</td>
              <td className="py-3 px-2 sm:px-4 text-gray-400">{tx.account}</td>
              <td className="py-3 px-2 sm:px-4 font-bold">{tx.amount}</td>
              <td className="py-3 px-2 sm:px-4">
                <span
                  className={`inline-block px-3 py-1 rounded-md text-center text-xs sm:text-sm ${
                    tx.status === "Success"
                      ? "bg-green-100 text-green-700"
                      : tx.status === "Failed"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {tx.status}
                </span>
              </td>
              <td className="py-3 px-2 sm:px-4 hidden sm:table-cell">
                <button className="text-[rgba(65,121,74,255)] text-xs sm:text-sm hover:underline">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
