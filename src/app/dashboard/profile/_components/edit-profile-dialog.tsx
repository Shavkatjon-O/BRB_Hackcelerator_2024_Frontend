import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ContactRound,
  Phone,
  MapPinHouse,
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  Shield,
} from "lucide-react";
import { profileDataType } from "../_types/profileDataType";

interface EditProfileDialogProps {
  profileData: profileDataType;
  onSave: (data: profileDataType) => void;
}

export default function EditProfileDialog({ profileData, onSave }: EditProfileDialogProps) {
  const [formData, setFormData] = useState<profileDataType>({
    first_name: "",
    last_name: "",
    phone_number: "",
    date_of_birth: "",
    address: "",
    job_title: "",
    department: "",
    education: "",
    employment_start_date: "",
    skills: "",
  });

  useEffect(() => {
    if (profileData) {
      setFormData({
        ...profileData,
        first_name: profileData.first_name || "",
        last_name: profileData.last_name || "",
        phone_number: profileData.phone_number || "",
        date_of_birth: profileData.date_of_birth || "",
        address: profileData.address || "",
        job_title: profileData.job_title || "",
        department: profileData.department || "",
        education: profileData.education || "",
        employment_start_date: profileData.employment_start_date || "",
        skills: profileData.skills || "",
      });
    }
  }, [profileData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
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
          <form className="space-y-6 px-6 pb-6" onSubmit={handleSubmit}>
            <div>
              <Label className="flex items-center mb-3">
                <ContactRound className="w-5 h-5 mr-1" />
                <span>Full name</span>
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <Input 
                  placeholder="First name"
                  name="first_name"
                  value={formData.first_name || ""}
                  onChange={handleChange}
                  type="text"
                />
                <Input 
                  placeholder="Last name" 
                  name="last_name"
                  value={formData.last_name || ""}
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <Phone className="w-5 h-5 mr-1" />
                <span>Phone number</span>
              </Label>
              <Input 
                placeholder="+998991234567"
                name="phone_number"
                value={formData.phone_number || ""}
                onChange={handleChange}
                type="tel"  
              />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <CalendarDays className="w-5 h-5 mr-1" />
                <span>Date of Birth</span>
              </Label>
              <Input
                placeholder="MM/DD/YYYY" 
                name="date_of_birth"
                value={formData.date_of_birth || ""}
                onChange={handleChange}  
                type="date" 
              />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <MapPinHouse className="w-5 h-5 mr-1" />
                <span>Address</span>
              </Label>
              <Input
                placeholder="123 Main St, City, Country"
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                type="text"
              />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <BriefcaseBusiness className="w-5 h-5 mr-1" />
                <span>Job Title</span>
              </Label>
              <Input 
                placeholder="Your Job Title" 
                name="job_title"
                value={formData.job_title || ""}
                onChange={handleChange}
                type="text"
              />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <Shield className="w-5 h-5 mr-1" />
                <span>Department</span>
              </Label>
              <Input 
                placeholder="Your Department" 
                name="department"
                value={formData.department || ""}
                onChange={handleChange}
                type="text"
              />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <GraduationCap className="w-5 h-5 mr-1" />
                <span>Education</span>
              </Label>
              <Input
                placeholder="Your Highest Degree"
                name="education"
                value={formData.education || ""}
                onChange={handleChange}
                type="text"  
              />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <CalendarDays className="w-5 h-5 mr-1" />
                <span>Employment Start Date</span>
              </Label>
              <Input
                placeholder="MM/DD/YYYY" 
                name="employment_start_date"
                value={formData.employment_start_date || ""}
                onChange={handleChange}
                type="date"
              />
            </div>

            <div>
              <Label className="flex items-center mb-3">
                <Shield className="w-5 h-5 mr-1" />
                <span>Skills</span>
              </Label>
              <Input
                placeholder="Your Skills" 
                name="skills"
                value={formData.skills || ""}
                onChange={handleChange}
                type="text"
              />
            </div>

            <Button type="submit" className="w-full mt-4">Save Changes</Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
