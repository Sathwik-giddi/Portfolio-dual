
"use client";

import { useEffect, useState } from "react";
import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { DashboardInsights, Insight } from "@/components/dashboard/DashboardInsights";
import { api } from "@/lib/api";
import { Calendar, ChevronDown, Facebook, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface DashboardData {
    connected: boolean;
    accountName?: string;
    summary: {
        spend: number;
        impressions: number;
        clicks: number;
        conversions: number;
        roas: number;
    } | null;
    trends: any[];
    insights: Insight[];
}

export default function DashboardPage() {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        api.get('/dashboard')
            .then(res => setData(res.data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
        );
    }

    if (!data?.connected) {
        return (
            <div className="h-[80vh] flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-2">
                    <Facebook className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Connect your Meta Ads Account</h2>
                    <p className="text-slate-500 mt-2 max-w-md">
                        Link your ad account to unlock real-time analytics, AI insights, and automated syncing.
                    </p>
                </div>
                <Button
                    onClick={() => router.push('/mock-meta-login')}
                    size="lg"
                    className="bg-[#1877F2] hover:bg-[#166fe5] text-white gap-2"
                >
                    <Facebook className="w-5 h-5" />
                    Connect Meta Account
                </Button>
            </div>
        );
    }

    const summaryData = data.summary ? {
        totalSpend: data.summary.spend,
        totalImpressions: data.summary.impressions,
        totalClicks: data.summary.clicks,
        ctr: data.summary.impressions > 0 ? parseFloat(((data.summary.clicks / data.summary.impressions) * 100).toFixed(2)) : 0
    } : null;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
                    <p className="text-slate-500">Account: <span className="font-semibold text-slate-700">{data.accountName}</span></p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 shadow-sm cursor-not-allowed hover:bg-slate-50">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>Last 7 Days</span>
                        <ChevronDown className="w-3 h-3 text-slate-400 ml-2" />
                    </div>
                </div>
            </div>

            <SummaryCards data={summaryData} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <PerformanceChart data={data.trends} />
                </div>
                <div className="lg:col-span-1">
                    <DashboardInsights insights={data.insights} />
                </div>
            </div>
        </div>
    );
}
