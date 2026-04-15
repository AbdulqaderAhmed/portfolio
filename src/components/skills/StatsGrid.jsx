import React from "react";

const StatsGrid = ({ achievements, colors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {achievements.map((stat) => (
        <div key={stat.cls} className={`${colors.card} rounded-xl p-6 border ${colors.border} ${stat.border} text-center transition-all duration-300 hover:scale-105`}>
          <div className={`text-3xl font-bold ${stat.color} mb-2`}>
            <span className={stat.cls} data-suffix={stat.suffix}>0{stat.suffix}</span>
          </div>
          <div className={`${colors.textSecondary} text-sm font-semibold`}>{stat.label}</div>
          <div className={`${colors.textSecondary} text-sm`}>{stat.sub}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
