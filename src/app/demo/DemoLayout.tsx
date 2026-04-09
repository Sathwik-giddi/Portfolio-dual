"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
// import { useAuth } from "@/context/AuthContext"; // We don't use real auth here
// We need to bypass the Sidebar's internal useAuth call. 
// However, Sidebar imports useAuth directly from "@/context/AuthContext".
// To make Sidebar work, we need to wrap this layout in a Context Provider that mimics AuthContext structure
// BUT standard React Context propogation relies on the Provider being higher up.
// If Sidebar imports `useAuth` from a specific file, that file exports `useContext(AuthContext)`.
// We can't easily swap the Context object itself unless we refactor Sidebar to take user as prop or use a more generic hook.
// 
// ALTERNATIVE: We can copy Sidebar code to DemoSidebar.tsx for speed/safety.
// Let's copy Sidebar behavior but remove auth dependency.

import Link from "next/link";
import { LayoutDashboard, BarChart3, Settings, LogOut, Zap } from "lucide-react";

function DemoSidebar() {
    const navItems = [
        { name: "Overview", href: "/demo", icon: LayoutDashboard },
        { name: "Campaigns", href: "/demo/campaigns", icon: BarChart3 },
        { name: "Settings", href: "/demo/settings", icon: Settings },
    ];

    return (
        <div className="w-64 bg-white border-r border-slate-200 h-screen flex flex-col fixed left-0 top-0">
            <div className="p-6 border-b border-slate-100">
                <Link href="/demo" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white fill-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">ADS.ai (Demo)</span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = item.name === "Overview"; // For demo purposes, we lock Overview as active
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${isActive
                                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                }`}
                        >
                            <item.icon className={`w-4 h-4 transition-colors ${isActive ? "text-slate-300" : "text-slate-400 group-hover:text-slate-600"}`} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-100">
                <button
                    onClick={() => window.location.href = '/login'}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Exit Demo
                </button>
            </div>
        </div>
    );
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-slate-50">
            <DemoSidebar />
            <main className="flex-1 ml-64 overflow-y-auto p-8">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
