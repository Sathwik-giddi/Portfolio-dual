"use client";

import { DollarSign, MousePointer2, Eye, TrendingUp } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface SummaryData {
    totalSpend: number;
    totalImpressions: number;
    totalClicks: number;
    ctr: number;
}

interface SummaryCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    trend?: string;
}

function Card({ title, value, icon: Icon, trend }: SummaryCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 font-medium text-sm">{title}</h3>
                <div className="p-2 bg-slate-50 rounded-lg">
                    <Icon className="w-5 h-5 text-slate-700" />
                </div>
            </div>
            <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-900">{value}</span>
                {trend && (
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full mb-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> {trend}
                    </span>
                )}
            </div>
        </div>
    );
}

export function SummaryCards({ data }: { data: SummaryData | null }) {
    if (!data) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
                title="Total Spend"
                value={`$${data.totalSpend.toLocaleString()}`}
                icon={DollarSign}
            />
            <Card
                title="Impressions"
                value={data.totalImpressions.toLocaleString()}
                icon={Eye}
            />
            <Card
                title="Clicks"
                value={data.totalClicks.toLocaleString()}
                icon={MousePointer2}
            />
            <Card
                title="Avg. CTR"
                value={`${data.ctr}%`}
                icon={TrendingUp}
                trend={data.ctr > 1 ? "Good" : undefined}
            />
        </div>
    );
}
