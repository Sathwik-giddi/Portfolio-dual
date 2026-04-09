"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Terminal, CreditCard, MessageCircle, X, ChevronRight, Clock, User, ArrowRight, Zap, Shield, Key } from "lucide-react";
import { useState, useMemo } from "react";

// --- Real Ad-Tech Documentation Data ---
const categories = [
    { id: "all", title: "All Articles", icon: Zap, desc: "Search across our entire knowledge base." },
    { id: "start", title: "Getting Started", icon: BookOpen, desc: "Installation, config, and quickstart guides." },
    { id: "api", title: "API Reference", icon: Terminal, desc: "Endpoints, schemas, rate limits, and error codes." },
    { id: "billing", title: "Billing & Account", icon: CreditCard, desc: "Managing subscriptions, seats, and invoices." },
    { id: "security", title: "Security & SSO", icon: Shield, desc: "SAML configuration, MFA, and audits." },
];

const articles = [
    {
        id: "install-pixel",
        category: "start",
        title: "Installing the Tracking Pixel",
        readTime: "8 min",
        author: "Solutions Eng.",
        date: "Jan 12, 2024",
        excerpt: "Deploy our lightweight JavaScript snippet to your landing pages to track conversions and attribution events.",
        content: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600">
                    The Ads Universal Pixel is a lightweight JavaScript snippet that connects your website activity to our unified dashboard. It enables conversion tracking, audience retargeting, and ROAS attribution.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h4 className="font-bold text-slate-900 mb-2">Before you begin</h4>
                    <p className="text-sm text-slate-600">Ensure you have access to your website's HTML `&lt;head&gt;` tag or a Tag Manager (GTM) container.</p>
                </div>
                <h3>1. Generate your Pixel ID</h3>
                <p>Navigate to <strong>Settings &gt; Data Sources</strong> and click "Create Pixel". Copy the generated ID (e.g., `px_123456`).</p>
                <h3>2. Add the Snippet</h3>
                <p>Paste the following code immediately before the closing `&lt;/head&gt;` tag on every page you wish to track.</p>
                <div className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    {`<script>
  !function(w,d,t,u,n,a,m){w['AdsPixel']=n;w[n]=w[n]||function(){
  (w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
  m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
  }(window,document,'script','https://connect.ads-cdn.com/pixel.js','ads');

  ads('init', 'px_123456');
  ads('track', 'PageView');
</script>`}
                </div>
                <h3>3. Verify Installation</h3>
                <p>Use our <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Pixel Helper Chrome Extension</a> to verify that events are firing correctly.</p>
            </div>
        )
    },
    {
        id: "api-auth",
        category: "api",
        title: "Authentication & Rate Limits",
        readTime: "12 min",
        author: "Dev Relations",
        date: "Jan 15, 2024",
        excerpt: "Learn how to generate Bearer tokens, authenticate requests, and handle 429 Too Many Requests responses.",
        content: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600">
                    The Platform API uses standard <strong>OAuth 2.0</strong> for user delegation and <strong>API Keys</strong> for server-to-server communication. All requests must be made over HTTPS.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4 text-amber-900">
                    <Key className="w-5 h-5 mt-1 shrink-0" />
                    <div>
                        <h4 className="font-bold mb-1">Keep your keys secret</h4>
                        <p className="text-sm">Never expose your API Secret Key in client-side code (browsers, mobile apps). Rotate your keys immediately if you suspect a leak.</p>
                    </div>
                </div>
                <h3>Authentication Headers</h3>
                <p>Include your API key in the `Authorization` header of every request:</p>
                <div className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm">
                    {`Authorization: Bearer sk_live_51M...`}
                </div>
                <h3>Rate Limiting</h3>
                <p>
                    We limit API requests to ensure stability for all users.
                    The standard limit is <strong>1,000 requests per minute</strong> per organization.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li><strong>429 Too Many Requests:</strong> You have exceeded the limit. Check the `Retry-After` header.</li>
                    <li><strong>Standard Headers:</strong> `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`.</li>
                </ul>
            </div>
        )
    },
    {
        id: "webhook-config",
        category: "api",
        title: "Webhooks: Listening for Events",
        readTime: "6 min",
        author: "Dev Relations",
        date: "Jan 03, 2024",
        excerpt: "Configure webhooks to receive real-time notifications for 'bid_accepted', 'campaign_completed', and 'budget_cap_hit'.",
        content: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600">
                    Webhooks allow your system to react immediately to platform events without polling. We send a JSON payload to your configured URL via HTTP POST.
                </p>
                <h3>Supported Events</h3>
                <div className="grid grid-cols-2 gap-4">
                    {['campaign.created', 'campaign.paused', 'budget.threshold_reached', 'creative.rejected'].map(evt => (
                        <div key={evt} className="bg-white border rounded px-3 py-2 font-mono text-xs text-purple-600">{evt}</div>
                    ))}
                </div>
                <h3>Verifying Signatures</h3>
                <p>To ensure requests are from us, verify the `X-Signature-256` header using your Webhook Secret.</p>
                <div className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    {`const crypto = require('crypto');
const sig = req.headers['x-signature-256'];
const hmac = crypto.createHmac('sha256', endpointSecret);
const digest = hmac.update(req.body).digest('hex');

if (sig === digest) {
  // Request is valid
}`}
                </div>
            </div>
        )
    },
    {
        id: "sso-setup",
        category: "security",
        title: "Configuring SSO with Okta",
        readTime: "15 min",
        author: "Security Team",
        date: "Dec 20, 2023",
        excerpt: "Step-by-step guide to enforcing Single Sign-On (SAML 2.0) for your organization using Okta as your IdP.",
        content: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600">
                    Enterprise plans support SAML 2.0 Identity Providers including Okta, Azure AD, and Google Workspace. Enabling SSO allows you to centralize user access and enforce MFA policies.
                </p>
                <h3>Step 1: Create the App in Okta</h3>
                <ol className="list-decimal pl-5 space-y-2 text-slate-600">
                    <li>Log in to your Okta Admin Dashboard.</li>
                    <li>Navigate to <strong>Applications &gt; Create App Integration</strong>.</li>
                    <li>Select <strong>SAML 2.0</strong> and click Next.</li>
                </ol>
                <h3>Step 2: Configure SAML Settings</h3>
                <p>Use the following ACS Consumer URL and Entity ID provided in your Platform Settings:</p>
                <div className="bg-slate-100 p-4 rounded-lg space-y-2 font-mono text-sm">
                    <div className="flex justify-between">
                        <span className="text-slate-500">Single Sign On URL:</span>
                        <span className="text-slate-900 select-all">https://api.ads-platform.com/sso/saml/acs</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500">Audience URI (SP Entity ID):</span>
                        <span className="text-slate-900 select-all">urn:ads:platform:sp</span>
                    </div>
                </div>
                <h3>Step 3: Attribute Statements</h3>
                <p>Map the following user attributes to ensure proper profile creation:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li>`email` → `user.email`</li>
                    <li>`firstName` → `user.firstName`</li>
                    <li>`lastName` → `user.lastName`</li>
                </ul>
            </div>
        )
    },
    {
        id: "proration-explained",
        category: "billing",
        title: "Understanding Proration",
        readTime: "4 min",
        author: "Billing Support",
        date: "Jan 10, 2024",
        excerpt: "How we calculate charges when you upgrade, downgrade, or add seats in the middle of a billing cycle.",
        content: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600">
                    We automatically prorate your subscription when you make changes during a billing cycle. You are only charged for what you use.
                </p>
                <h3>Example: Adding a Seat</h3>
                <p>
                    If you are on the Pro plan ($50/user/mo) and add a new user 15 days into a 30-day month:
                </p>
                <div className="bg-green-50 text-green-800 p-4 rounded-xl border border-green-100">
                    <p className="font-mono text-sm">
                        $50 / 30 days = $1.66 per day<br />
                        15 days remaining * $1.66 = <strong>$25.00</strong>
                    </p>
                </div>
                <p>The prorated amount of $25.00 will be charged immediately (or added to your next invoice), and the full $50 renewal will occur on the next billing date.</p>
            </div>
        )
    },
    {
        id: "attribution-windows",
        category: "start",
        title: "Attribution Models Explained",
        readTime: "9 min",
        author: "Data Science",
        date: "Jan 05, 2024",
        excerpt: "Deep dive into Click-Through, View-Through, and Multi-Touch attribution models available in the dashboard.",
        content: (
            <div className="space-y-6">
                <p className="text-lg text-slate-600">
                    Attribution models determine how credit for a conversion is assigned to different touchpoints in the customer journey. Choosing the right model is critical for accurate ROAS calculation.
                </p>
                <h3>Available Models</h3>
                <div className="space-y-4">
                    <div className="borderl-4 border-purple-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900">Last Click (Default)</h4>
                        <p className="text-sm text-slate-600">Gives 100% of the credit to the last ad the user clicked before converting. Best for bottom-of-funnel campaigns.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900">Time Decay</h4>
                        <p className="text-sm text-slate-600">Touchpoints closer to the time of conversion receive more credit. Good for longer sales cycles.</p>
                    </div>
                    <div className="border-l-4 border-pink-500 pl-4 py-2">
                        <h4 className="font-bold text-slate-900">Data-Driven (AI)</h4>
                        <p className="text-sm text-slate-600">Uses machine learning to analyze converting and non-converting paths to assign fractional credit dynamically.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "exporting-reports",
        category: "start",
        title: "Automating Exports to BigQuery",
        readTime: "7 min",
        author: "Product Team",
        date: "Dec 15, 2023",
        excerpt: "How to set up nightly data dumps of raw campaign performance data into your Google BigQuery warehouse.",
        content: <div className="space-y-4"><p>Detailed guide on BigQuery Data Transfer Service integration...</p></div>
    },
    {
        id: "creative-specs",
        category: "start",
        title: "Creative Specs & Best Practices",
        readTime: "5 min",
        author: "Creative Studio",
        date: "Jan 18, 2024",
        excerpt: "File size limits, aspect ratios, and safe zones for Video, Image, and HTML5 assets across all networks.",
        content: <div className="space-y-4"><p>Detailed table of aspect ratios (9:16, 4:5, 1:1) and bitrate requirements...</p></div>
    }
];

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Filter Logic
    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesCategory = activeCategory === "all" || article.category === activeCategory;
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <div className="min-h-screen font-sans bg-[#F0EBFA] selection:bg-purple-200">
            {/* Ambient Noise */}
            <div className="fixed inset-0 bg-noise opacity-40 pointer-events-none mix-blend-overlay z-0" />

            <main className="relative z-10 pt-32 pb-20">

                {/* Hero / Search */}
                <section className="container mx-auto px-6 mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-slate-900 mb-8"
                    >
                        Documentation <span className="italic text-purple-600">& Support</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-2xl mx-auto relative mb-12"
                    >
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search 'API keys', 'SSO', 'Pixel installation'..."
                            className="w-full bg-white/80 backdrop-blur-xl rounded-full py-5 pl-16 pr-6 shadow-xl border border-white/50 focus:outline-none focus:ring-4 focus:ring-purple-500/20 text-slate-900 text-lg placeholder:text-slate-400 transition-all font-medium"
                        />
                    </motion.div>
                </section>

                {/* Categories & Content Grid */}
                <section className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sidebar: Categories */}
                        <div className="lg:w-1/4 shrink-0 space-y-2">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-4 opacity-50">Browser</h3>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`w-full text-left p-4 rounded-xl flex items-center gap-3 transition-all duration-200 group
                                        ${activeCategory === cat.id
                                            ? 'bg-white shadow-md text-slate-900 ring-1 ring-black/5'
                                            : 'hover:bg-white/50 text-slate-600 hover:text-slate-900'
                                        }
                                    `}
                                >
                                    <div className={`p-2 rounded-lg ${activeCategory === cat.id ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-purple-600'}`}>
                                        <cat.icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-sm">{cat.title}</span>
                                    {activeCategory === cat.id && (
                                        <ChevronRight className="w-4 h-4 ml-auto text-purple-500" />
                                    )}
                                </button>
                            ))}

                            {/* Support CTA Box */}
                            <div className="mt-8 bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity" />
                                <MessageCircle className="w-8 h-8 mb-4 text-purple-300" />
                                <h3 className="font-serif text-xl mb-2">Priority Support</h3>
                                <p className="text-sm text-slate-400 mb-6 font-light">
                                    Enterprise customers get a dedicated Slack channel and 1-hour SLA.
                                </p>
                                <Button
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold"
                                >
                                    Open Ticket
                                </Button>
                            </div>
                        </div>

                        {/* Main Content: Article Grid */}
                        <div className="lg:w-3/4">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-serif text-slate-900">
                                    {activeCategory === 'all' ? 'Knowledge Base' : categories.find(c => c.id === activeCategory)?.title}
                                </h2>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-white/50 px-3 py-1 rounded-full border border-white/50">
                                    {filteredArticles.length} Results
                                </span>
                            </div>

                            {filteredArticles.length === 0 ? (
                                <div className="text-center py-20 bg-white/50 rounded-3xl border border-dashed border-slate-300">
                                    <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-slate-900">No articles found</h3>
                                    <p className="text-slate-500">Try adjusting your search terms.</p>
                                    <Button
                                        variant="link"
                                        className="text-purple-600 mt-2"
                                        onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                                    >
                                        Clear filters
                                    </Button>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-4">
                                    {filteredArticles.map((article) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            key={article.id}
                                            onClick={() => setSelectedArticle(article)}
                                            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-slate-100/50 hover:border-purple-100 group relative overflow-hidden flex flex-col"
                                        >
                                            <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                <span className={`px-2 py-1 rounded ${article.category === 'api' ? 'bg-blue-50 text-blue-600' :
                                                    article.category === 'billing' ? 'bg-green-50 text-green-600' :
                                                        article.category === 'security' ? 'bg-red-50 text-red-600' :
                                                            'bg-purple-50 text-purple-600'
                                                    }`}>
                                                    {categories.find(c => c.id === article.category)?.title.split(' ')[0]}
                                                </span>
                                                <span>•</span>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {article.readTime}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                                                {article.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm line-clamp-3 mb-6 leading-relaxed font-light">
                                                {article.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                                                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                                                    <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500">
                                                        {article.author.charAt(0)}
                                                    </div>
                                                    {article.author}
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* Article Modal */}
            <AnimatePresence>
                {selectedArticle && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedArticle(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
                        />
                        <motion.div
                            layoutId={`article-${selectedArticle.id}`}
                            className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative z-10"
                        >
                            <div className="sticky top-0 right-0 p-6 flex justify-between items-center bg-white/90 backdrop-blur-sm z-20 border-b border-slate-100">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Documentation</span>
                                <button onClick={() => setSelectedArticle(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors group">
                                    <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
                                </button>
                            </div>

                            <div className="px-10 py-12 md:px-16 md:py-16">
                                <div className="max-w-3xl mx-auto">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                            {categories.find(c => c.id === selectedArticle.category)?.title}
                                        </span>
                                        <span className="text-slate-400 text-sm">Last updated: {selectedArticle.date}</span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">{selectedArticle.title}</h2>

                                    {/* Author Block */}
                                    <div className="flex items-center gap-4 mb-12 pb-12 border-b border-slate-100">
                                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-xl font-serif text-slate-500">
                                            {selectedArticle.author.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">{selectedArticle.author}</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wide">Technical Writer</div>
                                        </div>
                                    </div>

                                    {/* Content Render */}
                                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-purple-600 hover:prose-a:text-purple-700 prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:rounded prose-pre:bg-slate-900 prose-pre:text-slate-50">
                                        {selectedArticle.content}
                                    </div>

                                    {/* Feedback */}
                                    <div className="mt-20 pt-10 border-t border-slate-100 text-center">
                                        <p className="text-slate-500 mb-4">Was this article helpful?</p>
                                        <div className="flex justify-center gap-4">
                                            <Button variant="outline" className="gap-2">👍 Yes, thanks</Button>
                                            <Button variant="outline" className="gap-2">👎 Not really</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Contact Modal */}
            <AnimatePresence>
                {isContactModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsContactModalOpen(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md cursor-pointer"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative z-10 text-center"
                        >
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MessageCircle className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-serif text-slate-900 mb-2">Priority Support</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Our engineers are currently <span className="text-green-600 font-bold">Online</span>.<br /> Expected wait time: &lt; 2 minutes.
                            </p>
                            <div className="space-y-3">
                                <Button className="w-full h-14 text-lg bg-slate-900 text-white hover:bg-slate-800 rounded-xl">
                                    Start Live Chat
                                </Button>
                                <Button variant="ghost" className="w-full" onClick={() => setIsContactModalOpen(false)}>
                                    Maybe later
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
