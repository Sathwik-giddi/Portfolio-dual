
"use client";

import { Sparkles, TrendingUp, Target, ArrowRight, Lightbulb, AlertTriangle } from "lucide-react";

export interface Insight {
    id: string;
    text: string;
    campaignName: string;
    severity: string;
    date: string;
}

export function DashboardInsights({ insights }: { insights: Insight[] }) {
    if (!insights || insights.length === 0) {
        return (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-full flex flex-col items-center justify-center p-8 text-center">
                <Sparkles className="w-8 h-8 text-slate-300 mb-3" />
                <h3 className="text-slate-900 font-medium">No Insights Yet</h3>
                <p className="text-slate-500 text-sm mt-1">
                    Wait for the next analysis cycle or trigger one manually.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-full flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-600 fill-purple-100" />
                    AI Insights
                </h3>
                <span className="text-xs font-medium px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full border border-purple-200">
                    Latest
                </span>
            </div>

            <div className="p-6 space-y-6 flex-1 overflow-y-auto max-h-[400px]">
                {insights.map((insight) => {
                    // Primitive parsing logic until we enforce JSON
                    // The backend fallback sends formatted markdown: **Trend**: ...
                    // If we receive plain text, we just show it.

                    const isFormatted = insight.text.includes("**Trend**");

                    if (isFormatted) {
                        // Parse sections simple regex
                        const trend = insight.text.match(/\*\*Trend\*\*:\s*(.*?)(?=\n|\*\*|$)/)?.[1];
                        const diagnosis = insight.text.match(/\*\*Diagnosis\*\*:\s*(.*?)(?=\n|\*\*|$)/)?.[1];
                        const action = insight.text.match(/\*\*Action\*\*:\s*(.*?)(?=\n|\*\*|$)/)?.[1];

                        return (
                            <div key={insight.id} className="space-y-4 border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                                {trend && (
                                    <div className="relative pl-4 border-l-2 border-emerald-500">
                                        <div className="mb-1 flex items-center gap-2">
                                            <TrendingUp className="w-3 h-3 text-emerald-600" />
                                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Trend</span>
                                        </div>
                                        <p className="text-sm text-slate-600">{trend}</p>
                                    </div>
                                )}
                                {diagnosis && (
                                    <div className="relative pl-4 border-l-2 border-amber-400">
                                        <div className="mb-1 flex items-center gap-2">
                                            <AlertTriangle className="w-3 h-3 text-amber-600" />
                                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Diagnosis</span>
                                        </div>
                                        <p className="text-sm text-slate-600">{diagnosis}</p>
                                    </div>
                                )}
                                {action && (
                                    <div className="relative pl-4 border-l-2 border-blue-500">
                                        <div className="mb-1 flex items-center gap-2">
                                            <Lightbulb className="w-3 h-3 text-blue-600" />
                                            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Recommendation</span>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-2">{action}</p>
                                        <div className="text-xs text-slate-400 font-medium">{insight.campaignName}</div>
                                    </div>
                                )}
                            </div>
                        )
                    }

                    // Fallback for unformatted text
                    return (
                        <div key={insight.id} className="relative pl-4 border-l-2 border-purple-500">
                            <p className="text-sm text-slate-600 whitespace-pre-line">{insight.text}</p>
                            <div className="mt-2 text-xs text-slate-400">{insight.campaignName} • {new Date(insight.date).toLocaleDateString()}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
