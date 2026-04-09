"use client";

import { motion } from "framer-motion";
import { Mail, ShieldAlert, Globe, Database, Slack, CheckCircle } from "lucide-react";

// Node definition
const nodes = [
    { id: "start", type: "trigger", icon: Globe, label: "Webhook", x: 50, y: 50, color: "text-purple-600", bg: "bg-purple-100" },
    { id: "parse", type: "action", icon: Database, label: "Parse Data", x: 250, y: 150, color: "text-blue-600", bg: "bg-blue-100" },
    { id: "enrich", type: "action", icon: ShieldAlert, label: "Enrich IP", x: 450, y: 50, color: "text-orange-600", bg: "bg-orange-100" },
    { id: "notify", type: "action", icon: Slack, label: "Notify Team", x: 650, y: 150, color: "text-green-600", bg: "bg-green-100" },
    { id: "email", type: "action", icon: Mail, label: "Send Email", x: 650, y: 250, color: "text-red-600", bg: "bg-red-100" },
];

// Connection definition (paths)
const connections = [
    { from: { x: 150, y: 80 }, to: { x: 250, y: 180 }, path: "M 150 80 C 200 80, 200 180, 250 180" },
    { from: { x: 350, y: 180 }, to: { x: 450, y: 80 }, path: "M 350 180 C 400 180, 400 80, 450 80" },
    { from: { x: 550, y: 80 }, to: { x: 650, y: 180 }, path: "M 550 80 C 600 80, 600 180, 650 180" },
    { from: { x: 350, y: 180 }, to: { x: 650, y: 280 }, path: "M 350 180 C 400 180, 400 280, 650 280" },
];

export function WorkflowAnimation() {
    return (
        <div className="w-full h-[500px] bg-slate-50 relative overflow-hidden rounded-xl border border-slate-200 shadow-inner">
            {/* Background Dots */}
            <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {connections.map((conn, idx) => (
                    <g key={idx}>
                        {/* Base Line */}
                        <path
                            d={conn.path}
                            fill="none"
                            stroke="#cbd5e1"
                            strokeWidth="2"
                        />
                        {/* Animated Draw Line */}
                        <motion.path
                            d={conn.path}
                            fill="none"
                            stroke="#7D66D9"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: idx * 0.8, ease: "easeInOut" }}
                        />
                        {/* Moving Particle */}
                        <motion.circle
                            r="4"
                            fill="#7D66D9"
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            style={{ offsetPath: `path("${conn.path}")` }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: idx * 0.8 }}
                        />
                    </g>
                ))}
            </svg>

            {/* Nodes */}
            {nodes.map((node, idx) => (
                <motion.div
                    key={node.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.5, type: "spring", stiffness: 200 }}
                    className="absolute bg-white rounded-lg p-3 shadow-lg border border-slate-100 flex items-center gap-3 w-40"
                    style={{ top: node.y, left: node.x }}
                >
                    <div className={`w-8 h-8 rounded-md ${node.bg} ${node.color} flex items-center justify-center`}>
                        <node.icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-700">{node.label}</span>
                        <span className="text-[10px] text-slate-400">Action</span>
                    </div>
                </motion.div>
            ))}

            {/* Success Toasts */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 4 }}
                className="absolute bottom-6 right-6 bg-white px-4 py-3 rounded-lg shadow-xl border border-green-100 flex items-center gap-3"
            >
                <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-sm">
                    <p className="font-semibold text-slate-800">Workflow Complete</p>
                    <p className="text-slate-500 text-xs">All actions executed successfully</p>
                </div>
            </motion.div>
        </div>
    );
}
