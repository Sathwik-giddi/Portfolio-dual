"use client";

import DemoLayout from "./DemoLayout";
import { SummaryCards } from "@/components/dashboard/SummaryCards";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { AIInsights } from "@/components/dashboard/AIInsights"; // Might need mocking if it calls API
import { Notifications } from "@/components/dashboard/Notifications";
import { MOCK_SUMMARY, MOCK_PERFORMANCE } from "./mockData";

import { Sparkles, TrendingUp, Target, ArrowRight, Lightbulb } from "lucide-react";

// Mock AI Insights component to avoid API calls
function MockAIInsights() {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-full flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-600 fill-purple-100" />
                    AI Insights
                </h3>
                <span className="text-xs font-medium px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                    Live Analysis
                </span>
            </div>

            <div className="p-6 space-y-6 flex-1">
                {/* Insight 1: Trend */}
                <div className="relative pl-6 border-l-2 border-emerald-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center">
                        <TrendingUp className="w-2 h-2 text-emerald-700" />
                    </div>
                    <div className="mb-1 flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-800">Performance Spike</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Today</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        CTR increased by <span className="font-semibold text-emerald-600">15%</span> following the implementation of dynamic headlines. Engagement is highest on mobile devices.
                    </p>
                </div>

                {/* Insight 2: Recommendation */}
                <div className="relative pl-6 border-l-2 border-blue-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center">
                        <Lightbulb className="w-2 h-2 text-blue-700" />
                    </div>
                    <div className="mb-1 flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-800">Budget Opportunity</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                        "Retargeting - High Intent" is converting at a 20% lower CPA than target.
                    </p>
                    <button className="text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 w-fit">
                        Increase Budget <ArrowRight className="w-3 h-3" />
                    </button>
                </div>

                {/* Insight 3: Alert */}
                <div className="relative pl-6 border-l-2 border-amber-400/50">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center">
                        <Target className="w-2 h-2 text-amber-700" />
                    </div>
                    <div className="mb-1 flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-800">Audience Saturation</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Frequency for "Broad Interest" audience has crossed 4.5. Consider refreshing creatives to prevent fatigue.
                    </p>
                </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-b-xl">
                <button className="w-full text-sm text-slate-500 hover:text-purple-700 font-medium transition-colors text-center">
                    Generate New Report
                </button>
            </div>
        </div>
    );
}

import { Calendar, ChevronDown } from "lucide-react";

export default function DemoPage() {
    return (
        <DemoLayout>
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
                    <p className="text-slate-500">Welcome back, Demo User</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 shadow-sm cursor-not-allowed hover:bg-slate-50">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span>Last 7 Days</span>
                        <ChevronDown className="w-3 h-3 text-slate-400 ml-2" />
                    </div>
                    <Notifications />
                </div>
            </div>

            <div className="space-y-6">
                <SummaryCards data={MOCK_SUMMARY} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <PerformanceChart data={MOCK_PERFORMANCE} />
                    </div>
                    <div className="lg:col-span-1">
                        <MockAIInsights />
                    </div>
                </div>
            </div>
        </DemoLayout>
    );
}
