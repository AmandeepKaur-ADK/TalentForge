"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [backendStatus, setBackendStatus] = useState<string>("Checking backend connection...");
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    
    fetch(`${apiURL}/api/health`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.status === "ok") {
          setBackendStatus("Backend: Connected");
          setIsConnected(true);
        } else {
          setBackendStatus(`Unexpected backend response: ${JSON.stringify(data)}`);
          setIsConnected(false);
        }
      })
      .catch((err) => {
        setBackendStatus(`Backend: Disconnected (${err.message || err})`);
        setIsConnected(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <main className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">TalentForge AI</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Phase 1: Application Scaffolding
        </p>

        <hr className="my-6 border-zinc-100 dark:border-zinc-800" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Frontend Status</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
              Running
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Backend Status</span>
            {isConnected === null ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20">
                Checking...
              </span>
            ) : isConnected ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
                Connected
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-600/20 dark:bg-rose-500/10 dark:text-rose-400 dark:ring-rose-500/20">
                Disconnected
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-zinc-50 p-4 font-mono text-xs text-zinc-600 dark:bg-zinc-950 dark:text-zinc-400">
          <p className="font-semibold text-zinc-700 dark:text-zinc-300">Connection Details:</p>
          <p className="mt-1 break-all">API URL: {process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}</p>
          <p className="mt-2 font-medium">{backendStatus}</p>
        </div>
      </main>
    </div>
  );
}
