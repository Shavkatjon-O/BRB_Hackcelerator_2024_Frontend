"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { User, Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

import coreApi from "@/lib/coreApi";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";

import { UserProfileType } from "@/types/authTypes";

import Sidebar from "./SidebarMobile";

const languages: { value: "en" | "uz" | "ru"; label: string }[] = [
  { value: "en", label: "English" },
  { value: "uz", label: "O'zbek" },
  { value: "ru", label: "Русский" },
];

const Header = ({ currentUser }: { currentUser: UserProfileType }) => {
  const t = useTranslations("Index");
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    setCurrentLocale(locale); // Ensure the current locale is reflected in the select value
  }, [locale]);

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      const segments = pathname.split("/");
      if (["en", "uz", "ru"].includes(segments[1])) {
        segments[1] = newLocale;
      } else {
        segments.splice(1, 0, newLocale);
      }
      setCurrentLocale(newLocale);
      router.push(segments.join("/"));
      router.refresh();
    });
  };

  const handleToggleDashboard = useCallback(async () => {
    try {
      await coreApi.post("/users/toggle-user-type/");
      window.location.reload();
    } catch (error) {
      console.error("Failed to toggle dashboard", error);
    }
  }, []);

  return (
    <header className="bg-white dark:bg-slate-800 border-b dark:border-b-slate-700 h-16 z-50 flex items-center shadow-sm">
      <div className="size-full px-4 flex items-center justify-between">
        <div className="flex lg:hidden items-center">
          <Sidebar currentUser={currentUser} />
        </div>

        <div className="hidden lg:flex gap-2 items-center">
          <span className="text-sm">
            [
            {currentUser?.user_type === "EMPLOYEE"
              ? "Employee"
              : currentUser?.user_type === "LOAN_MANAGER"
              ? "Loan Manager"
              : currentUser?.user_type === "BANK_TELLER"
              ? "Bank Teller"
              : "Guest"}
            ]
          </span>
          <span className="text-sm">[{t("title")}]</span>
        </div>

        <div className="flex gap-2 items-center">
          <Button variant="link" onClick={handleToggleDashboard} className="hidden lg:block">
            Toggle Dashboard
          </Button>

          <Button asChild variant="link">
            <Link href="/dashboard/profile" className="flex items-center space-x-2">
              <span>{currentUser?.email}</span>
              <User className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            </Link>
          </Button>

          <Select onValueChange={handleLocaleChange} value={currentLocale}>
            <SelectTrigger className="hidden lg:flex items-center space-x-2 dark:bg-slate-900">
              <Languages className="w-5 h-5" />
              <SelectValue placeholder={currentLocale} />
            </SelectTrigger>
            <SelectContent>
              {languages.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
