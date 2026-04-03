import type { ReactNode } from "react";
import { CivicTempGauge } from "./CivicTempGauge";

export function KanbanColumn({
  title,
  civicTemp,
  children,
}: {
  title: string;
  civicTemp: number;
  children: ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="mb-2">
        <h3 className="font-[family-name:var(--font-syne)] text-xl font-extrabold text-[#F5F0EB] mb-3">
          {title}
        </h3>
        <CivicTempGauge percent={civicTemp} />
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
