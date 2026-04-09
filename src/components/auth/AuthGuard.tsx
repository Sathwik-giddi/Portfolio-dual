
"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Loader2 } from 'lucide-react';

interface AuthGuardProps {
    children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
    const { user, loading, isAuthenticated } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            // Store the path the user was trying to access
            const redirectParams = new URLSearchParams({
                callbackUrl: pathname ?? "/",
            });
            router.push(`/login?${redirectParams.toString()}`);
        }
    }, [isAuthenticated, loading, router, pathname]);

    // Show loading state while checking authentication
    if (loading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                    <p className="text-slate-500 font-medium animate-pulse">Verifying session...</p>
                </div>
            </div>
        );
    }

    // If not authenticated and not loading, we'll be redirected by useEffect
    // return null while redirecting to avoid flashing content
    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}
