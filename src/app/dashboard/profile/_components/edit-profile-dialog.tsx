import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Mail,
  ContactRound,
  Phone,
  MapPinHouse,
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  Shield,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function EditProfileDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Update your profile information
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[560px]">
          <form className="space-y-6 px-6 pb-6">
            <div>
              <Label className="flex items-center mb-3">
                <ContactRound className="w-5 h-5 mr-1" />
                <span>Full name</span>
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <Mail className="w-5 h-5 mr-1" />
                <span>Email address</span>
              </Label>
              <Input placeholder="name@example.com" type="email" />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <Phone className="w-5 h-5 mr-1" />
                <span>Phone number</span>
              </Label>
              <Input placeholder="+998991234567" />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <CalendarDays className="w-5 h-5 mr-1" />
                <span>Date of Birth</span>
              </Label>
              <Input placeholder="MM/DD/YYYY" type="date" />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <MapPinHouse className="w-5 h-5 mr-1" />
                <span>Address</span>
              </Label>
              <Input placeholder="123 Main St, City, Country" />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <BriefcaseBusiness className="w-5 h-5 mr-1" />
                <span>Job Title</span>
              </Label>
              <Input placeholder="Your Job Title" />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <Shield className="w-5 h-5 mr-1" />
                <span>Department</span>
              </Label>
              <Input placeholder="Your Department" />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <GraduationCap className="w-5 h-5 mr-1" />
                <span>Education</span>
              </Label>
              <Input placeholder="Your Highest Degree" />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <CalendarDays className="w-5 h-5 mr-1" />
                <span>Employment Start Date</span>
              </Label>
              <Input placeholder="MM/DD/YYYY" type="date" />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <Shield className="w-5 h-5 mr-1" />
                <span>Skills</span>
              </Label>
              <Input placeholder="Your Skills" />
            </div>

            <Button type="submit" className="w-full mt-4">Save Changes</Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
