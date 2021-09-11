import React from "react";
import { BellIcon, ScaleIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";

const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  { name: "Pending", href: "#", icon: BellIcon, amount: "$30,659.45" },
  {
    name: "Processed (last 30 days)",
    href: "#",
    icon: CheckCircleIcon,
    amount: "$30,659.45",
  },
];
function DashboardOverviewComponent() {
  return (
    <div>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <a href={card.href} className="font-medium text-cyan-700 hover:text-cyan-900">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverviewComponent;
