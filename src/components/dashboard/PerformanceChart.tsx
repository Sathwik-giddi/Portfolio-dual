"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface MetricData {
    date: string;
    spend: number;
    impressions: number;
    clicks: number;
}

interface PerformanceChartProps {
    data: MetricData[] | null;
}

export function PerformanceChart({ data }: PerformanceChartProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!data || data.length === 0) {
        return (
            <div className="h-[300px] flex items-center justify-center bg-white rounded-xl border border-slate-200">
                <p className="text-slate-400">No performance data available</p>
            </div>
        );
    }

    return (
        <div className="h-[300px] w-full bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-600 font-medium mb-6">Performance Trends</h3>
            {!isMounted ? (
                <div className="h-[216px] min-h-[216px] w-full rounded-lg bg-slate-50" />
            ) : (
            <div className="h-[216px] min-h-[216px] w-full">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="date"
                            tick={{ fontSize: 12, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            yAxisId="left"
                            tick={{ fontSize: 12, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tick={{ fontSize: 12, fill: '#64748b' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend />
                        <Line
                            yAxisId="left"
                            type="monotone"
                            dataKey="spend"
                            stroke="#0f172a"
                            strokeWidth={2}
                            dot={false}
                            name="Spend"
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="impressions"
                            stroke="#8b5cf6"
                            strokeWidth={2}
                            dot={false}
                            name="Impressions"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            )}
        </div>
    );
}
