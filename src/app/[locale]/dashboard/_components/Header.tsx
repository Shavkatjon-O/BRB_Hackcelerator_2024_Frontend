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

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

import Sidebar from "./SidebarMobile";
import { UserProfileType } from "@/types/authTypes";

import coreApi from "@/lib/coreApi";

import { useTranslations, useLocale } from "next-intl";

const languages: { value: string; label: string }[] = [
  { value: "en", label: "English" },
  { value: "uz", label: "O'zbek" },
  { value: "ru", label: "Русский" },
];

const Header = ({ currentUser }: { currentUser: UserProfileType }) => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const currentLanguage = languages.find((l) => l.value === locale)?.label;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.push(`/${newLocale}${pathname.substring(3)}`);
    router.refresh();
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
          <span className="text-sm">{t("title")}</span> {/* Translated title */}
        </div>

        <div className="flex gap-2 items-center">
          <Button
            variant="link"
            onClick={handleToggleDashboard}
            className="hidden lg:block"
          >
            Toggle Dashboard
          </Button>

          <Button asChild variant="link">
            <Link href="/dashboard/profile" className="flex items-center space-x-2">
              <span>{currentUser?.email}</span>
              <User className="w-5 h-5 text-gray-500 dark:text-gray-300" />
            </Link>
          </Button>

          <Select onValueChange={handleLocaleChange} value={locale}>
            <SelectTrigger className="hidden lg:flex items-center space-x-2 dark:bg-slate-900">
              <Languages className="w-5 h-5" />
              <SelectValue>{currentLanguage}</SelectValue>
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
