'use client';

import { stats } from '@/src/data/stats';
import { useCounter } from '@/src/hooks/useCounter';

export default function StatsSection() {
  return (
    <section className="py-20 bg-orange-50 section">
      <div className="container mx-auto px-4">
        <div className="bg-red- grid grid-cols-1 sm:grid-cols-4 gap-10 text-center">
          {stats.map((item) => {
            const count = useCounter(item.value);
            return (
              <div key={item.label}>
                <h3 className="text-4xl font-bold text-gray-900">
                  {count}
                  <span className="text-orange-500">{item.suffix}</span>
                </h3>
                <p className="text-gray-600 mt-2">{item.label}</p>
              </div>
            );
          })}

          {/* Google Rating */}
          <div>
            <h3 className="text-4xl font-bold text-gray-900">
              4.9<span className="text-orange-500">★</span>
            </h3>
            <p className="text-gray-600 mt-2">Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
