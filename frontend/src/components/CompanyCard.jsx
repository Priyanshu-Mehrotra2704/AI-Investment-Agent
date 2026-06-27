import MetricCard from "./MetricCard";

import {
  FaDollarSign,
  FaIndustry,
} from "react-icons/fa";

import {
  HiBuildingOffice2,
} from "react-icons/hi2";

import {
  MdTrendingUp,
} from "react-icons/md";

export default function CompanyCard({ company }) {
  if (!company) return null;

  return (
    <div className="mb-12">

      <h2 className="text-3xl font-bold mb-6">
        Company Overview
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <MetricCard
          title="Current Price"
          value={`$${company.currentPrice}`}
          icon={<FaDollarSign />}
          color="from-green-500 to-emerald-500"
        />

        <MetricCard
          title="Market Cap"
          value={company.marketCap}
          icon={<MdTrendingUp />}
          color="from-blue-500 to-cyan-500"
        />

        <MetricCard
          title="Sector"
          value={company.sector}
          icon={<HiBuildingOffice2 />}
          color="from-purple-500 to-pink-500"
        />

        <MetricCard
          title="PE Ratio"
          value={company.peRatio}
          icon={<FaIndustry />}
          color="from-orange-500 to-red-500"
        />

      </div>
    </div>
  );
}