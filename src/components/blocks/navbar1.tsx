"use client";

import * as React from "react";
import { Book, Menu, Sunset, Trees, Zap, ArrowUpRight, Mail, Newspaper, Target, Layers, Shield, Users, BarChart, Globe, LifeBuoy, X, Building2, Share2, Circle, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface Navbar1Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
    mobileExtraLinks?: {
        name: string;
        url: string;
    }[];
    auth?: {
        login: {
            text: string;
            url: string;
        };
        signup: {
            text: string;
            url: string;
        };
    };
}

const MOBILE_NAV_ITEMS = [
    {
        title: "PLATFORM",
        icon: Layers,
        items: [
            { name: "How it Works", href: "/mission" },
            { name: "The Platform", href: "/platform" },
            { name: "Enterprise", href: "/enterprise" },
            { name: "Security", href: "/security" },
            { name: "Integrations", href: "/integrations" },
            { name: "Pricing", href: "/pricing" },
        ],
    },
    {
        title: "SOLUTIONS",
        icon: Zap,
        items: [
            { name: "By Industry", href: "/solutions" },
            { name: "By Role", href: "/roles" },
            { name: "Customers", href: "/customers" },

        ],
    },
    {
        title: "RESOURCES",
        icon: Book,
        items: [
            { name: "Blog", href: "/blog" },
            { name: "Newsroom", href: "/newsroom" },
            { name: "Community", href: "/community" },
            { name: "Help Center", href: "/help" },
            { name: "Store", href: "/store" },
        ],
    },
    {
        title: "COMPANY",
        icon: Building2,
        items: [
            { name: "About us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Privacy Policy", href: "/terms#privacy" },
            { name: "Cookie Policy", href: "/cookies" },
        ],
    },
    {
        title: "CONNECT",
        icon: Share2,
        items: [
            { name: "Slack Community ↗", href: "/community" },
            { name: "LinkedIn ↗", href: "#" },
            { name: "Twitter ↗", href: "#" },
            { name: "YouTube ↗", href: "#" },
        ],
    },
];

const Navbar1 = ({
    logo = {
        url: "/",
        src: "/logo.png",
        alt: "Ads",
        title: "Ads",
    },
    menu = [
        { title: "Platform", url: "/platform" },
        {
            title: "Solutions",
            url: "/solutions",
            items: [
                { title: "By Industry", url: "/solutions", icon: <Trees className="size-4" /> },
            ],
        },
        {
            title: "Resources",
            url: "/blog",
            items: [
                { title: "Blog", url: "/blog", icon: <Book className="size-4" /> },
                { title: "Docs", url: "/help", icon: <Zap className="size-4" /> },
            ],
        },
        {
            title: "Company",
            url: "/about",
            items: [
                { title: "About", url: "/about", icon: <Trees className="size-4" /> },
                { title: "Careers", url: "/careers", icon: <Sunset className="size-4" /> },
            ],
        },

        {
            title: "Pricing",
            url: "/pricing",
        },
    ],
    mobileExtraLinks = [
        { name: "Pricing", url: "/pricing" },
        { name: "Contact", url: "/contact" },
    ],
    auth = {
        login: { text: "Sign in", url: "/login" },
        signup: { text: "Get started", url: "/signup" },
    },
}: Navbar1Props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <section className={`py-4 lg:py-5 fixed top-0 w-full z-[999] transition-all duration-300 ${isMobileMenuOpen ? "bg-white h-screen" : "bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-sm lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:shadow-none supports-[backdrop-filter]:bg-white/60 lg:supports-[backdrop-filter]:bg-transparent"}`}>
            <div className="container mx-auto px-6 pointer-events-auto">
                <nav className="flex items-center justify-between">

                    {/* Left: Logo */}
                    <div className="flex items-center gap-2">
                        <a href={logo.url} className="flex items-center gap-2 group">
                            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src="/logo.png"
                                    alt={logo.alt}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain brightness-0 filter group-hover:brightness-100 transition-all duration-300"
                                />
                            </div>
                            <span className="block text-xl md:text-2xl font-black tracking-tighter font-sans text-slate-900 group-hover:text-purple-600 transition-colors uppercase">{logo.title}</span>
                        </a>
                    </div>

                    {/* Center: Capsule Navigation */}
                    <div className="hidden lg:flex items-center rounded-full py-1.5 px-1">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-2">
                                {menu.map((item) => renderMenuItem(item))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Right: Auth & CTA */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a href={auth.login.url} className="text-slate-600 hover:text-purple-600 font-medium text-sm transition-colors">{auth.login.text}</a>

                        <Button asChild size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-full px-6 h-10 shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40 hover:-translate-y-0.5">
                            <a href={auth.signup.url}>{auth.signup.text}</a>
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center lg:hidden gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative z-50 hover:bg-slate-100/50"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-slate-900" />
                            ) : (
                                <Menu className="w-6 h-6 text-slate-900" />
                            )}
                        </Button>
                    </div>

                </nav>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="lg:hidden absolute top-[80px] left-0 w-full bg-[#FAFAFA]/80 backdrop-blur-3xl border-b border-gray-200/50 shadow-2xl shadow-slate-200/50 px-6 pb-8 pt-4 flex flex-col gap-6 pointer-events-auto"
                        >
                            <Accordion type="single" collapsible className="w-full">
                                {MOBILE_NAV_ITEMS.map((section) => (
                                    <AccordionItem key={section.title} value={section.title} className="border-b border-gray-100 last:border-0 border-white/5">
                                        <AccordionTrigger className="text-base font-semibold text-slate-900 group hover:text-purple-600 hover:no-underline py-4 px-2 rounded-lg transition-colors hover:bg-white/50">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-purple-50 rounded-md text-purple-600 group-hover:bg-purple-100 transition-colors">
                                                    <section.icon className="w-5 h-5" />
                                                </div>
                                                <span className="tracking-wide uppercase text-xs text-slate-500 font-bold group-hover:text-purple-600 transition-colors">
                                                    {section.title}
                                                </span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="flex flex-col gap-1 pl-4 pb-4">
                                            {section.items.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.href}
                                                    className="group flex items-center justify-between py-2.5 px-3 rounded-md text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all ml-3 border-l-2 border-transparent hover:border-purple-200"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    <span className="text-sm font-medium">{link.name}</span>
                                                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-400" />
                                                </a>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <a
                                    href={auth.login.url}
                                    className="flex items-center justify-center h-12 rounded-xl bg-slate-100 text-slate-700 font-bold active:scale-95 transition-transform"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {auth.login.text}
                                </a>
                                <a
                                    href={auth.signup.url}
                                    className="flex items-center justify-center h-12 rounded-xl bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/30 active:scale-95 transition-transform"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {auth.signup.text}
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section >
    );
};

const renderMenuItem = (item: MenuItem) => {
    // Special handling for the "Company" Mega Menu
    if (item.title === "Company") {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent text-slate-700 hover:text-slate-900 focus:text-slate-900 h-8 px-3 text-sm font-medium rounded-full">
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className="w-[800px] p-0 bg-gradient-to-br from-[#10002b] to-[#1a0035] flex font-sans">

                        {/* Column 1: Join the Team */}
                        <div className="w-1/3 p-8 border-r border-white/5 flex flex-col relative group">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">Join the Team</div>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                                <a href="/careers">Careers</a>
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">Join a world-class team and make an impact.</p>

                            {/* Illustration Placeholder */}
                            <div className="mt-auto relative h-32 w-full">
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"></div>
                                <div className="absolute bottom-4 right-4 w-20 h-20 bg-indigo-500 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
                                <div className="absolute bottom-10 left-10 w-20 h-20 bg-mauve-magic rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
                                {/* Fun geometry */}
                                <div className="relative z-10 flex items-end justify-center h-full">
                                    <Sunset className="w-16 h-16 text-purple-200 rotate-12 opacity-60" />
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Company */}
                        <div className="w-1/3 p-8 border-r border-white/5 flex flex-col relative group">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">Company</div>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                                <a href="/about">About</a>
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">We power the world's most important workflows.</p>

                            {/* Illustration Placeholder */}
                            <div className="mt-auto relative h-32 w-full flex items-center justify-center">
                                {/* Fun geometry */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <Trees className="w-20 h-20 text-purple-200 opacity-60" strokeWidth={1} />
                                </motion.div>
                            </div>
                        </div>

                        {/* Column 3: Store & Links */}
                        <div className="w-1/3 p-8 flex flex-col bg-[#1a0035]/50">
                            <div className="mb-8">
                                <h3 className="text-2xl font-serif text-white mb-1 flex items-center gap-2 group cursor-pointer hover:text-purple-400 transition-colors">
                                    <a href="/store">Ads Store</a> <ArrowUpRight className="w-4 h-4 opacity-50" />
                                </h3>
                                <p className="text-slate-300 text-sm">Useful, beautiful products from Ads and friends.</p>
                                <div className="mt-4 flex justify-end">
                                    <div className="w-16 h-10 bg-deep-amethyst rounded-lg shadow-inner flex items-center justify-center border border-white/5">
                                        <div className="w-6 h-6 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1 mt-auto">
                                <a href="/contact" className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-purple-400 py-3 border-t border-white/5 transition-colors">
                                    <div className="w-4 h-4"><Mail className="w-4 h-4" /></div>
                                    Contact
                                </a>
                                <a href="/community" className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-purple-400 py-3 border-t border-white/5 transition-colors">
                                    <div className="w-4 h-4"><Zap className="w-4 h-4" /></div>
                                    Slack Community <span className="text-[10px] opacity-50">↗</span>
                                </a>
                                <a href="/newsroom" className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-purple-400 py-3 border-t border-white/5 transition-colors">
                                    <div className="w-4 h-4"><Newspaper className="w-4 h-4" /></div>
                                    Newsroom
                                </a>
                            </div>
                        </div>

                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    // Platform Mega Menu
    if (item.title === "Platform") {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent text-slate-700 hover:text-slate-900 focus:text-slate-900 h-8 px-3 text-sm font-medium rounded-full">
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className="w-[800px] p-0 bg-gradient-to-br from-[#10002b] to-[#1a0035] rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5),0_0_20px_rgba(168,85,247,0.1)] overflow-hidden flex font-sans border border-white/5">
                        {/* Col 1: The Core */}
                        <div className="w-1/3 p-8 border-r border-white/5 flex flex-col relative group">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">The Core</div>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                                <a href="/platform">Engine</a>
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-4 text-sm">Automate your ad operations with precision.</p>

                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                                <a href="/mission">Mission</a>
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">What does Ads actually do?</p>
                            <div className="mt-auto relative h-32 w-full flex items-center justify-center">
                                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                                    <Target className="w-20 h-20 text-purple-200 opacity-60" strokeWidth={1} />
                                </motion.div>
                            </div>
                        </div>
                        {/* Col 2: Integrations */}
                        <div className="w-1/3 p-8 border-r border-white/5 flex flex-col relative group">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">Connect</div>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                                <a href="/integrations">Integrate</a>
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">Sync with your favorite marketing tools.</p>
                            <div className="mt-auto relative h-32 w-full flex items-center justify-center">
                                <motion.div animate={{ rotate: 180 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                                    <Layers className="w-20 h-20 text-purple-200 opacity-60" strokeWidth={1} />
                                </motion.div>
                            </div>
                        </div>
                        {/* Col 3: Enterprise */}
                        <div className="w-1/3 p-8 flex flex-col bg-[#1a0035]/50">
                            <div className="mb-8">
                                <h3 className="text-2xl font-serif text-white mb-1 flex items-center gap-2 group cursor-pointer hover:text-purple-400 transition-colors">
                                    <a href="/enterprise">Enterprise</a> <Shield className="w-4 h-4 opacity-50" />
                                </h3>
                                <p className="text-slate-300 text-sm">Security, SSO, and dedicated support.</p>
                            </div>
                            <div className="space-y-1 mt-auto">
                                <a href="/security" className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-purple-400 py-3 border-t border-white/5 transition-colors">
                                    <div className="w-4 h-4"><Shield className="w-4 h-4" /></div>
                                    Security Portal
                                </a>
                                <a href="/pricing" className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-purple-400 py-3 border-t border-white/5 transition-colors">
                                    <div className="w-4 h-4"><Zap className="w-4 h-4" /></div>
                                    View Pricing
                                </a>
                            </div>
                        </div>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    // Solutions Mega Menu
    if (item.title === "Solutions") {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent text-slate-700 hover:text-slate-900 focus:text-slate-900 h-8 px-3 text-sm font-medium rounded-full">
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className="w-[800px] p-0 bg-gradient-to-br from-[#10002b] to-[#1a0035] rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5),0_0_20px_rgba(168,85,247,0.1)] overflow-hidden flex font-sans border border-white/5">
                        {/* Col 1: Industries */}
                        <div className="w-1/3 p-8 border-r border-white/5 flex flex-col relative group">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">By Industry</div>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                                <a href="/solutions">Verticals</a>
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">Tailored solutions for retail, auto, and more.</p>
                            <div className="mt-auto relative h-32 w-full flex items-center justify-center">
                                <Trees className="w-20 h-20 text-purple-200 opacity-60" strokeWidth={1} />
                            </div>
                        </div>
                        {/* Col 2: Teams */}
                        <div className="w-1/3 p-8 border-r border-white/5 flex flex-col relative group">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">By Team</div>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                                <a href="/roles">Roles</a>
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">For Marketing, Data, and Ops leaders.</p>
                            <div className="mt-auto relative h-32 w-full flex items-center justify-center">
                                <Users className="w-20 h-20 text-purple-200 opacity-60" strokeWidth={1} />
                            </div>
                        </div>
                        {/* Col 3: Success */}
                        <div className="w-1/3 p-8 flex flex-col bg-[#1a0035]/50">
                            <div className="mb-8">
                                <h3 className="text-2xl font-serif text-white mb-1 flex items-center gap-2 group cursor-pointer hover:text-purple-400 transition-colors">
                                    <a href="/customers">Results</a> <BarChart className="w-4 h-4 opacity-50" />
                                </h3>
                                <p className="text-slate-300 text-sm">See how others grow 3x faster.</p>
                            </div>
                            <div className="space-y-1 mt-auto">
                                <a href="/solutions" className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-purple-400 py-3 border-t border-white/5 transition-colors">
                                    <div className="w-4 h-4"><Trees className="w-4 h-4" /></div>
                                    All Industries
                                </a>
                            </div>
                        </div>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    // Resources Mega Menu
    if (item.title === "Resources") {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent text-slate-700 hover:text-slate-900 focus:text-slate-900 h-8 px-3 text-sm font-medium rounded-full">
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <div className="w-[800px] p-0 bg-gradient-to-br from-[#10002b] to-[#1a0035] rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5),0_0_20px_rgba(168,85,247,0.1)] overflow-hidden flex font-sans border border-white/5">
                        {/* Col 1: Learn */}
                        <div className="w-1/3 p-8 border-r border-white/5 flex flex-col relative group">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">Learn</div>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                                <a href="/blog">Blog</a>
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">Insights, trends, and product updates.</p>
                            <div className="mt-auto relative h-32 w-full flex items-center justify-center">
                                <Book className="w-20 h-20 text-purple-200 opacity-60" strokeWidth={1} />
                            </div>
                        </div>
                        {/* Col 2: Support */}
                        <div className="w-1/3 p-8 border-r border-white/5 flex flex-col relative group">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">Support</div>
                            <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                                <a href="/help">Help</a>
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-8 text-sm">Documentation and API references.</p>
                            <div className="mt-auto relative h-32 w-full flex items-center justify-center">
                                <LifeBuoy className="w-20 h-20 text-purple-200 opacity-60" strokeWidth={1} />
                            </div>
                        </div>
                        {/* Col 3: Community */}
                        <div className="w-1/3 p-8 flex flex-col bg-[#1a0035]/50">
                            <div className="mb-8">
                                <h3 className="text-2xl font-serif text-white mb-1 flex items-center gap-2 group cursor-pointer hover:text-purple-400 transition-colors">
                                    <a href="/community">Community</a> <Globe className="w-4 h-4 opacity-50" />
                                </h3>
                                <p className="text-slate-300 text-sm">Join thousands of ad experts.</p>
                            </div>
                            <div className="space-y-1 mt-auto">
                                <a href="/community" className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-purple-400 py-3 border-t border-white/5 transition-colors">
                                    <div className="w-4 h-4"><Zap className="w-4 h-4" /></div>
                                    Join Slack
                                </a>
                            </div>
                        </div>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    // Fallback for any other dropdowns (should vary rarely be hit now)
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="bg-transparent text-slate-700 hover:text-slate-900 focus:text-slate-900 h-8 px-3 text-sm font-medium rounded-full">
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="w-64 p-2 bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-xl shadow-xl">
                        {item.items.map((subItem) => (
                            <li key={subItem.title}>
                                <a className="flex select-none gap-3 rounded-lg p-2.5 leading-none no-underline outline-none transition-colors hover:bg-pink-50 hover:text-pink-700" href={subItem.url}>
                                    <div className="text-pink-500/70">{subItem.icon}</div>
                                    <div>
                                        <div className="text-sm font-semibold text-slate-800">{subItem.title}</div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    // Standard Link
    return (
        <a
            key={item.title}
            className="group inline-flex h-8 items-center justify-center rounded-full bg-transparent px-3 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            href={item.url}
        >
            {item.title}
        </a>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <a
                            key={subItem.title}
                            className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                            href={subItem.url}
                        >
                            {subItem.icon}
                            <div>
                                <div className="text-sm font-semibold">{subItem.title}</div>
                                {subItem.description && (
                                    <p className="text-sm leading-snug text-muted-foreground">
                                        {subItem.description}
                                    </p>
                                )}
                            </div>
                        </a>
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <a key={item.title} href={item.url} className="font-semibold">
            {item.title}
        </a>
    );
};

export { Navbar1 };
