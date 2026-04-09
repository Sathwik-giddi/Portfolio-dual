"use client";

import Image from "next/image";

interface Logo {
    id: string;
    description: string;
    image: string;
    className?: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string; // Preserve className prop
}

const Logos3 = ({
    heading = "Trusted by high-growth marketing teams at",
    className = "",
}: Logos3Props) => {
    const logos = [
        {
            id: "meta",
            name: "Meta",
            className: "text-[#0668E1] md:text-slate-500 md:hover:text-[#0668E1]",
            component: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12S24 18.627 24 12z" fill="white" opacity="0" />
                    <path d="M12.186 14.51c-.696 0-1.127-.406-1.229-1.139l-.027-.376c-.053-1.075-.694-1.636-1.911-1.636-1.42 0-2.31 1.051-2.31 2.68 0 1.58.971 2.66 2.458 2.66 1.408 0 2.233-.941 2.359-2.317l.024-.606c.032-1.096.657-1.579 1.688-1.579 1.136 0 1.93.815 1.93 2.052 0 1.532-1.189 2.508-2.671 2.508-1.57 0-2.614-.85-2.637-2.128h-2.584c0 2.768 2.203 4.369 5.221 4.369 3.018 0 5.255-2.185 5.255-4.749 0-2.3-1.558-4.041-3.844-4.041-1.125 0-1.896.602-2.193 1.353-.298-.751-1.085-1.353-2.193-1.353-2.308 0-3.844 1.741-3.844 4.041 0 2.551 2.215 4.749 5.266 4.749 3.03 0 5.232-1.601 5.232-4.369h-2.595c-.011 1.256-1.041 2.096-2.583 2.096-1.521 0-2.436-1.119-2.436-2.633 0-1.444.825-2.284 1.921-2.284.972 0 1.556.513 1.634 1.487l.022.315c.088 1.156.708 1.677 1.743 1.677 1.075 0 1.688-.636 1.688-1.743 0-1.222-.859-2.062-2.096-2.062-1.041 0-1.688.484-1.71 1.59h2.38z" />
                </svg>
            )
        },
        {
            id: "tiktok",
            name: "TikTok",
            className: "text-black md:text-slate-500 md:hover:text-black",
            component: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.02v4.95c-.01 1.12-.26 2.22-.84 3.16-.92 1.54-2.52 2.38-4.24 2.52-1.9.15-3.8-.44-5.16-1.74-1.39-1.31-1.92-3.32-1.42-5.18.36-1.37 1.34-2.52 2.64-3.08 1.35-.58 2.89-.53 4.22-.05v4.06c-1.27-.64-2.84-.44-3.89.47-.95.83-1.09 2.27-.33 3.25.75 1.05 2.19 1.25 3.25.49.57-.42.92-1.1.91-1.81V4.54a7.56 7.56 0 0 0 4.19-1.3c.09-1.07.13-2.15.22-3.22z" />
                </svg>
            )
        },
        {
            id: "google",
            name: "Google Ads",
            className: "text-[#4285F4] md:text-slate-500 md:hover:text-[#4285F4]",
            component: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M14.7 3.5c-.7 0-1.4.3-1.8.8l-9.8 17c-.3.5-.3 1.1 0 1.6.4.6 1.1.8 1.7.5l19-8.5c-1-6.7-5.9-11.4-9.1-11.4zm-9.3 17.6l7.8-13.6c.2-.4.7-.5 1.1-.3l7.9 4.6c-4.4 2.3-16.8 9.3-16.8 9.3zM21.9 14l-2.9-1.3c.2.6.3 1.3.3 2 0 3-2.4 5.3-5.3 5.3-2.7 0-4.9-1.9-5.3-4.5.8-.4 2.6-1.3 4.3-2.1 4.5 2.3 8.3-2.1 8.9.6z" />
                </svg>
            )
        },
        {
            id: "stripe",
            name: "Stripe",
            className: "text-[#635BFF] md:text-slate-500 md:hover:text-[#635BFF]",
            component: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.915 0-1.178.891-2.071 2.505-2.071 1.06 0 2.378.349 3.327.915l.593-3.79c-1.109-.433-2.612-.663-3.951-.663-3.084 0-5.318 1.625-5.318 4.793 0 4.545 6.273 4.558 6.273 7.02 0 1.258-1.22 1.838-2.628 1.838-2.138 0-4.008-.854-5.264-1.63L5.5 16.58c1.32.768 3.178 1.298 4.908 1.298 3.504 0 5.666-1.745 5.666-4.966 0-4.226-6.098-4.408-6.098-3.762z" />
                </svg>
            )
        },
        {
            id: "shopify",
            name: "Shopify",
            className: "text-[#96BF48] md:text-slate-500 md:hover:text-[#96BF48]",
            component: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M21.94 6.78c-.28-.97-1.1-1.87-2.18-2.28L15.26.29c-.52-.2-1.09-.16-1.57.1l-5.63 2.3c-.09.04-.18.09-.27.15l-.26.13c-2.18 1.23-3.7 3.46-3.78 5.86L3.15 17.6c-.14 2.93 2.1 5.4 5.03 5.56h.17l7.5.87c3.12.36 5.86-1.89 6.22-5.01.44-3.52.41-8.73-.13-12.24zm-6.1-4c1.22 0 2.21.99 2.21 2.22s-.99 2.21-2.21 2.21-2.21-.99-2.21-2.21.99-2.21 2.21-2.21zm-4.28 2.22c0-1.22 1-2.22 2.22-2.22s2.22.99 2.22 2.22c0 1.21-.9 2.05-2.05 2.05s-2.39-.78-2.39-2.05z" />
                </svg>
            )
        },
        {
            id: "hubspot",
            name: "HubSpot",
            className: "text-[#FF7A59] md:text-slate-500 md:hover:text-[#FF7A59]",
            component: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M19.14 6.86c0 1.32-1.08 2.4-2.4 2.4-1.32 0-2.4-1.08-2.4-2.4s1.08-2.4 2.4-2.4c1.32 0 2.4 1.08 2.4 2.4zm-4.8 11.28c0 1.32-1.08 2.4-2.4 2.4-1.32 0-2.4-1.08-2.4-2.4s1.08-2.4 2.4-2.4c1.32 0 2.4 1.08 2.4 2.4zm2.4-5.64h-2.4v-4.8c-1.32 0-2.4-1.08-2.4-2.4 0-1.32 1.08-2.4 2.4-2.4s2.4 1.08 2.4 2.4v7.2zm4.8 0h-2.4v-4.8c0-2.64-2.16-4.8-4.8-4.8-2.64 0-4.8 2.16-4.8 4.8v4.8h-2.4c-1.8 0-3.36 1.2-3.84 2.88-1.08-.36-2.4-.12-3.24.72l1.68 1.68c.24-.24.72-.36 1.2-.24.36.24.72.6.72 1.08s-.36.84-.72.96c-.36 0-.6-.12-.84-.24l-1.68 1.68c.72.72 1.68 1.08 2.76 1.08v-2.4h2.4v2.4h7.2v-2.4h2.4v2.4h2.4v-7.2zm0 6h-2.4v-2.4h2.4v2.4z" />
                </svg>
            )
        }
    ];

    return (
        <section className={`py-12 md:py-20 bg-transparent mx-auto ${className}`}>
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <h2 className="mb-10 md:mb-12 text-sm font-bold tracking-widest text-slate-500 uppercase font-sans">
                    {heading}
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 max-w-6xl mx-auto items-center justify-items-center">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="flex items-center justify-center opacity-100 md:opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer group"
                        >
                            <logo.component className={`h-8 md:h-10 w-auto transition-colors ${logo.className}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Logos3 };
