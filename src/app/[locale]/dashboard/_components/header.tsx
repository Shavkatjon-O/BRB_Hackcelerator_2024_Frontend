"use client";

import useUser from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  User,
  Languages,
  Loader,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from '@/i18n/routing';

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

const languages: { value: "en" | "uz" | "ru", label: string }[] = [
  { value: "en", label: "English" },
  { value: "uz", label: "O'zbek" },
  { value: "ru", label: "Русский" },
];

const Header = () => {
  const { user, isLoaded, error } = useUser();

  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: "en" | "uz" | "ru") => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    });
  };

  return (
    <header className="bg-white dark:bg-slate-900 border-b h-16 z-50 flex items-center shadow-sm">
      <div className="size-full px-4 flex items-center justify-between">
        {!isLoaded ? (
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Loader className="w-5 h-5 animate-spin text-gray-500 dark:text-gray-400" />
            <span>Loading user info...</span>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center text-red-500">
            <span>Error: {error.message}</span>
          </div>
        ) : (
          <>
            <div className="flex gap-2 items-center">
              <span className="text-sm">
                [
                {user?.user_type === "EMPLOYEE"
                  ? "Employee"
                  : user?.user_type === "LOAN_MANAGER"
                  ? "Loan Manager"
                  : user?.user_type === "BANK_TELLER"
                  ? "Bank Teller"
                  : "Guest"}
                ]
              </span>
              <span className="text-sm">[{t("title")}]</span>
            </div>

            <div className="flex gap-2 items-center">
              <Button asChild variant="link">
                <Link href="/dashboard/profile" className="flex items-center space-x-2">
                  <span>{user?.email}</span>
                  <User className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                </Link>
              </Button>

              <Select onValueChange={handleLocaleChange} value={locale}>
                <SelectTrigger className="flex items-center space-x-2 dark:bg-slate-900">
                  <Languages className="w-5 h-5" />
                  <SelectValue placeholder={locale} />
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
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
