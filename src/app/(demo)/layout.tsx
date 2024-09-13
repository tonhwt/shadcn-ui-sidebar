"use client";

import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";
import { usePathname } from "next/navigation";
import { pagesWithoutLayout } from "./layoutConfig";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pagesWithoutLayout.includes(pathname)) {
    return <>{children}</>;
  }

  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
