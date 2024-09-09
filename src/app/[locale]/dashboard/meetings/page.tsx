"use client";

import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUser from "@/hooks/useUser";
import { useState, useEffect } from "react";

const Page = () => {
  const { user } = useUser();
  const meetingId = user?.id;

  const [copied, setCopied] = useState(false);
  const [disabled, setDisabled] = useState(false);

  if (!meetingId) {
    return null;
  }

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/meetings/${meetingId}?personal=true`;

  const copyLink = () => {
    navigator.clipboard.writeText(meetingLink)
      .then(() => {
        setCopied(true);
        setDisabled(true);
        setTimeout(() => {
          setCopied(false);
          setDisabled(false);
        }, 1000);
      })
      .catch(err => {
        console.error("Failed to copy link: ", err);
      });
  };

  return (
    <div className="p-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create Meeting Room</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Meeting Room</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue={meetingLink}
                readOnly
              />
            </div>
            <Button
              type="button"
              size="sm"
              className="px-3"
              onClick={copyLink}
              disabled={disabled}
            >
              <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Page;
