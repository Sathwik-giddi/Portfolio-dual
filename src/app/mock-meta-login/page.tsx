"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";

function MockMetaLoginContent() {
  const searchParams = useSearchParams();
  const redirectUri = searchParams?.get("redirect_uri");
  const [status, setStatus] = useState<"idle" | "authorizing" | "success">("idle");

  const handleAuthorize = () => {
    setStatus("authorizing");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        if (redirectUri) {
          window.location.href = `${redirectUri}?code=mock_code_${Date.now()}`;
        } else {
          alert("No redirect URI found!");
        }
      }, 1000);
    }, 1500);
  };

  if (!redirectUri) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-xl font-bold text-red-600 mb-2">Error</h1>
          <p className="text-slate-600">Missing `redirect_uri` parameter.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#1877F2] p-4 text-center">
          <h1 className="text-white font-bold text-lg flex items-center justify-center gap-2">
            <span className="font-serif italic font-black text-2xl">f</span>
            Facebook Login Simulator
          </h1>
        </div>

        <div className="p-8">
          {status === "idle" && (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">
                  Connect to ADS.ai?
                </h2>
                <p className="text-slate-500 text-sm">
                  ADS.ai is requesting access to your Ad Account Insights and
                  Management permissions.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleAuthorize}
                  className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Continue as Mock User
                </button>
                <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-lg transition-colors">
                  Cancel
                </button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-slate-400">
                  This is a simulated login page for development purposes. No real
                  credentials are sent to Facebook.
                </p>
              </div>
            </>
          )}

          {status === "authorizing" && (
            <div className="text-center py-8">
              <Loader2 className="w-10 h-10 text-[#1877F2] animate-spin mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-700">Authorizing...</h3>
            </div>
          )}

          {status === "success" && (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-700">
                Success! Redirecting...
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MockMetaLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F0F2F5]">
          <Loader2 className="h-8 w-8 animate-spin text-[#1877F2]" />
        </div>
      }
    >
      <MockMetaLoginContent />
    </Suspense>
  );
}
