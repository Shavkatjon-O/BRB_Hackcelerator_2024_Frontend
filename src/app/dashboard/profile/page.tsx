"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, User, Building, Phone, Book } from "lucide-react"; // Updated icons
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
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={user.avatar || "/default-avatar.png"} alt="User Avatar" />
            <AvatarFallback>{user.first_name?.[0]}</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl font-semibold">{`${user.first_name || "First Name"} ${user.last_name || "Last Name"}`}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{user.job_title || "Job Title"}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <span>{user.email}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>{user.phone_number || "Phone not provided"}</span>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <span>Date of Birth: {user.date_of_birth || "Not provided"}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <User className="h-5 w-5 text-muted-foreground" />
            <span>Address: {user.address || "Not provided"}</span>
          </div>
        </CardContent>
      </Card>

      {/* Employment Information */}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Employment Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Building className="h-5 w-5 text-muted-foreground" />
            <span>Department: {user.department || "Not provided"}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <span>Employment Start Date: {user.employment_start_date || "Not provided"}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <Book className="h-5 w-5 text-muted-foreground" />
            <span>Education: {user.education || "Not provided"}</span>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
            <span>{user.skills || "No skills listed"}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
