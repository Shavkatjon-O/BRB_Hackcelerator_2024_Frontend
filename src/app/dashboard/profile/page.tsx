"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, User, Building, ClipboardList, Shield, Phone } from "lucide-react"; // Importing more Lucide icons
import useUser from "@/hooks/useUser";

const ProfilePage = () => {
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!user) {
    return <p>Not authorized</p>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Profile Header */}
      <Card className="w-full">
        <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.avatar || "/default-avatar.png"} alt="User Avatar" />
            <AvatarFallback>{user.full_name?.[0]}</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-xl sm:text-2xl font-semibold">{user.full_name || "User Name"}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{user.job_title || "Job Title"}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{user.email}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span>{user.phone_number || "Phone not provided"}</span>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Date of Birth: {user.date_of_birth || "Not provided"}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span>National ID: {user.national_id || "Not provided"}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
            <span>Address: {user.address || "Not provided"}</span>
          </div>
        </CardContent>
      </Card>

      {/* Employment Information */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Employment Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span>Department: {user.department || "Not provided"}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
            <span>Employee ID: {user.employee_id || "Not provided"}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Employment Start Date: {user.employment_start_date || "Not provided"}</span>
          </div>
        </CardContent>
      </Card>

      {/* Security Information */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Security Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <span>Two-Factor Authentication: {user.two_factor_enabled ? "Enabled" : "Disabled"}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
            <span>Security Question: {user.security_question || "Not provided"}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
