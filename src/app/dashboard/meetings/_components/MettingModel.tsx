// "use client";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import { ReactNode } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog";
// import { DialogTitle } from "@radix-ui/react-dialog";

// interface MeetingModalProps {
//    isOpen: boolean;
//    onClose: () => void;
//    title: string;
//    className?: string;
//    children?: ReactNode;
//    handleClick?: () => void;
//    buttonText?: string;
//    instantMeeting?: boolean;
//    image?: string;
//    buttonClassName?: string;
//    buttonIcon?: string;
// }

// const MeetingModal = ({
//    isOpen,
//    onClose,
//    title,
//    className,
//    children,
//    handleClick,
//    buttonText,
//    instantMeeting,
//    image,
//    buttonIcon,
// }: MeetingModalProps) => {
//    return (
//       <Dialog open={isOpen} onOpenChange={onClose}>
//          <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
//              <DialogTitle className="text-2xl font-bold leading-[30px] text-white">
//                {title}
//             </DialogTitle>

//             <DialogDescription className="text-base font-normal leading-[22.4px] text-sky-2">
//                {instantMeeting ? "Instant Meeting" : "Schedule a Meeting"}
//             </DialogDescription>


//             <div className="flex flex-col gap-6">
//                {image && (
//                   <div className="flex justify-center">
//                      <Image src={image} alt="checked" width={72} height={72} />
//                   </div>
//                )}
//                <h1
//                   className={cn("text-3xl font-bold leading-[42px]", className)}
//                >
//                   {title}
//                </h1>
//                {children}
//                <Button
//                   className={
//                      "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
//                   }
//                   onClick={handleClick}
//                >
//                   {buttonIcon && (
//                      <Image
//                         src={buttonIcon}
//                         alt="button icon"
//                         width={13}
//                         height={13}
//                      />
//                   )}
//                   &nbsp;
//                   {buttonText || "Schedule Meeting"}
//                </Button>
//             </div>
//          </DialogContent>
//       </Dialog>
//    );
// };

// export default MeetingModal;
