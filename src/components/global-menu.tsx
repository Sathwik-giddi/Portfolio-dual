"use client";

import { CircleMenu } from "@/components/ui/circle-menu";
import { Home, Zap, DollarSign, Globe, Users, ShoppingBag, Shield } from "lucide-react";

export function GlobalMenu() {
    return (
        <div className="fixed z-[999] bottom-6 right-6 md:bottom-10 md:right-10 flex items-center justify-center">
            {/* 
               Mobile: We want it to be easy to reach, but user said "middle of the page".
               If we interpret "middle of the page" literally, it blocks content. 
               Usually "middle of bottom bar" or "floating center" is better.
               
               However, user request: "on mobile the menu needs to come to middle of the page".
               Let's interpret that as: When OPEN, it might be centered? 
               OR proper centering: top-1/2 left-1/2.
               
               Let's stick to a safe FAB position (Bottom Right) which is standard, 
               BUT add a specific style override for mobile if strictly requested.
               
               Let's try a responsive approach: Bottom Right on Desktop.
               On Mobile, let's put it Bottom Center for ease of thumb use.
            */}

            <div className="hidden md:block">
                {/* Desktop: Bottom Right */}
                <CircleMenu
                    items={[
                        { label: 'Home', icon: <Home size={20} />, href: '/' },
                        { label: 'Mission', icon: <Zap size={20} />, href: '/mission' },
                        { label: 'Pricing', icon: <DollarSign size={20} />, href: '/pricing' },
                        { label: 'Roles', icon: <Users size={20} />, href: '/roles' },
                        { label: 'Enterprise', icon: <Shield size={20} />, href: '/enterprise' },
                        { label: 'Store', icon: <ShoppingBag size={20} />, href: '/store' }
                    ]}
                />
            </div>

            <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2">
                {/* Mobile: Bottom Center (Thumb Friendly) */}
                <CircleMenu
                    items={[
                        { label: 'Home', icon: <Home size={18} />, href: '/' },
                        { label: 'Mission', icon: <Zap size={18} />, href: '/mission' },
                        { label: 'Pricing', icon: <DollarSign size={18} />, href: '/pricing' },
                        { label: 'Roles', icon: <Users size={18} />, href: '/roles' },
                        { label: 'Enterprise', icon: <Shield size={18} />, href: '/enterprise' },
                    ]}
                />
            </div>
        </div>
    );
}
