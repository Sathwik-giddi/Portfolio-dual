"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, TrendingUp, AlertTriangle, CheckCircle2, Loader2, ChevronDown } from "lucide-react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";

interface Campaign {
    id: string;
    name: string;
    platform: string;
}

interface InsightData {
    trend: string;
    diagnosis: string;
    action: string;
}

export function AIInsights() {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [selectedCampaign, setSelectedCampaign] = useState<string>("");
    const [insight, setInsight] = useState<InsightData | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Fetch campaigns on mount
        api.get('/analytics/campaigns')
            .then(res => {
                setCampaigns(res.data);
                if (res.data.length > 0) setSelectedCampaign(res.data[0].id);
            })
            .catch(err => console.error("Failed to fetch campaigns", err));
    }, []);

    const generateInsight = async () => {
        if (!selectedCampaign) return;
        setLoading(true);
        try {
            const res = await api.get(`/analytics/ai-insights?campaign_id=${selectedCampaign}`);
            // Parse the AI response if it's a string, or expect JSON object
            // The backend returns { insights: string } where string might need parsing if AI output wasn't strict JSON
            // But our updated prompt asked for specific format. Let's assume for now it returns text we might need to parse manually if not JSON

            // Ideally backend returns structured JSON. If it returns the text format we defined:
            // "**Trend**: ... **Diagnosis**: ... **Action**: ..."
            // We can parse that here.

            const text = res.data.insights;
            const trendMatch = text.match(/\*\*Trend\*\*:\s*(.*?)(?=\n|\*\*|$)/);
            const diagnosisMatch = text.match(/\*\*Diagnosis\*\*:\s*(.*?)(?=\n|\*\*|$)/);
            const actionMatch = text.match(/\*\*Action\*\*:\s*(.*?)(?=\n|\*\*|$)/);

            setInsight({
                trend: trendMatch ? trendMatch[1].trim() : "Analysis available",
                diagnosis: diagnosisMatch ? diagnosisMatch[1].trim() : text, // Fallback to full text if parse fails
                action: actionMatch ? actionMatch[1].trim() : "Check campaign details",
            });

        } catch (error) {
            console.error("Failed to generate insight", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-xl p-0 overflow-hidden shadow-lg border border-indigo-500/20 text-white">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                    <h3 className="font-semibold text-lg">AI Strategist</h3>
                </div>

                <div className="flex gap-2">
                    <select
                        value={selectedCampaign}
                        onChange={(e) => setSelectedCampaign(e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-indigo-400 text-slate-200"
                    >
                        {campaigns.map(c => (
                            <option key={c.id} value={c.id} className="text-slate-900">{c.name}</option>
                        ))}
                    </select>
                    <Button
                        onClick={generateInsight}
                        disabled={loading || !selectedCampaign}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white border-0 h-auto py-1.5 px-4"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Analyze"}
                    </Button>
                </div>
            </div>

            <div className="p-6">
                {!insight ? (
                    <div className="text-center py-8 text-slate-400 text-sm">
                        Select a campaign and click Analyze to get real-time strategic advice.
                    </div>
                ) : (
                    <div className="grid gap-4">
                        <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                            <div className="flex items-center gap-2 mb-2 text-indigo-300 text-sm font-medium">
                                <TrendingUp className="w-4 h-4" /> Trend
                            </div>
                            <p className="text-slate-200 text-sm leading-relaxed">{insight.trend}</p>
                        </div>

                        <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                            <div className="flex items-center gap-2 mb-2 text-amber-300 text-sm font-medium">
                                <AlertTriangle className="w-4 h-4" /> Diagnosis
                            </div>
                            <p className="text-slate-200 text-sm leading-relaxed">{insight.diagnosis}</p>
                        </div>

                        <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                            <div className="flex items-center gap-2 mb-2 text-emerald-400 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4" /> Recommended Action
                            </div>
                            <p className="text-emerald-100 text-sm leading-relaxed font-medium">{insight.action}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
