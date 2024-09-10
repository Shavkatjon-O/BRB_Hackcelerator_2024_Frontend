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
    <header className="bg-white dark:bg-slate-950 border-b h-16 z-50 flex items-center shadow-sm">
      <div className="h-full container mx-auto px-4 flex items-center justify-between">
        {
          !isLoaded ? (
            <div className="flex items-center space-x-2 text-sm">
              <Loader className="w-4 h-4 animate-spin" />
              <span>Loading...</span>
            </div>
          ) : error ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <div className="flex gap-2">
                <span>
                  [
                  {
                    user?.user_type === "EMPLOYEE" ? (
                      "Employee"
                    ) : user?.user_type === "LOAN_MANAGER" ? (
                      "Loan Manager"
                    ) : user?.user_type === "BANK_TELLER" ? (
                      "Bank Teller"
                    ) : null
                  }
                  ]
                </span>
                <span>{t("title")}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Select onValueChange={handleLocaleChange} value={locale}>
                  <SelectTrigger>
                    <SelectValue>
                      <Languages className="w-5 h-5" /> {locale}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {
                      languages.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>

                <Button asChild variant="link">
                  <Link href="/dashboard/profile" className="space-x-2">
                    <span>{user?.email}</span>
                    <User className="w-5 h-5" />
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </>
          )
        }
      </div>
    </header>
  );
};

export default Header;
