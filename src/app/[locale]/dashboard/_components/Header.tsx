"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { User, Languages, Bell } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Link} from "@/i18n/routing";

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
  const t = useTranslations("Header");
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
            {currentUser?.user_type === "EMPLOYEE"
              ? t("employee")
              : currentUser?.user_type === "LOAN_MANAGER"
              ? t("loanManager")
              : currentUser?.user_type === "BANK_TELLER"
              ? t("bankTeller")
              : null } Dashboard
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <Button
            variant="outline"
            onClick={handleToggleDashboard}
            className="hidden lg:block dark:hover:bg-slate-700 dark:bg-slate-900"
          >
            Toggle Dashboard
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
            <Button variant="outline" size="icon" className="dark:hover:bg-slate-700 dark:bg-slate-900" asChild>
              <Link href="/dashboard/announcements">
                <Bell className="size-[1.2rem]" />
              </Link>
            </Button>
          </div>

          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
