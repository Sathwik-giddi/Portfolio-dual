"use client";

import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { Notifications } from "@/components/dashboard/Notifications";
import { api } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

export default function PlatformPage() {
    const { user } = useAuth();
    const [summary, setSummary] = useState(null);
    const [performance, setPerformance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [summaryRes, perfRes] = await Promise.all([
                    api.get('/analytics/summary'),
                    api.get('/analytics/performance')
                ]);
                setSummary(summaryRes.data);
                setPerformance(perfRes.data);
            } catch (error) {
                console.error("Failed to fetch dashboard data:", error);
            } finally {
                setLoading(false);
            }
        }

        if (user) {
            fetchData();
        }
    }, [user]);

    return (
        <DashboardLayout>
            <div className="mb-8 flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                    <p className="text-slate-500">Welcome back, {user?.name?.split(' ')[0] || 'User'}</p>
                </div>
                <Notifications />
            </div>

            {loading ? (
                <div className="flex items-center justify-center p-12">
                    <Loader2 className="w-8 h-8 animate-spin text-slate-300" />
                </div>
            ) : (
                <div className="space-y-6">
                    <SummaryCards data={summary} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <PerformanceChart data={performance} />
                        </div>
                        <div className="lg:col-span-1">
                            <AIInsights />
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}
