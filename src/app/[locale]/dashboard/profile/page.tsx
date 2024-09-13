"use client";

import { Loader, Mail, Phone, MapPin, Briefcase, GraduationCap, Calendar, Shield, User } from "lucide-react";
import { useState, useEffect } from "react";
import { UserProfileType } from "@/types/authTypes";
import { profileDataType } from "./_types/profileDataType";
import { toast } from "sonner";
import EditProfileDialog from "./_components/edit-profile-dialog";
import coreApi from "@/lib/coreApi";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<UserProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await coreApi.get("/users/profile/");
        setProfileData(response.data);
      } catch (error) {
        setError("Failed to fetch profile data");
        console.error("Failed to fetch profile data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleProfileUpdate = async (updatedData: profileDataType) => {
    try {
      const response = await coreApi.put("/users/profile/update/", updatedData);
      setProfileData((prevData) => ({
        ...response.data,
        email: prevData?.email || ''
      }));
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile", error);
      toast.error("Failed to update profile");
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader className="animate-spin text-white" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container p-6 mx-auto dark:bg-gray-900 dark:text-white">
      {profileData && (
        <Card
          className="flex flex-col sm:flex-row mx-auto max-w-4xl shadow-lg rounded-lg bg-gray-100 border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
        >
          {/* Left Section - Profile Image */}
          <CardHeader
            className="w-full sm:w-1/3 flex justify-center items-center p-6 rounded-l-lg bg-gray-200 dark:bg-gray-700"
          >
            <Avatar className="w-36 h-36">
              <AvatarImage
                src={profileData.image || ""}
                alt={`${profileData.first_name} ${profileData.last_name}`}
              />
              <AvatarFallback>{profileData.first_name?.[0]}{profileData.last_name?.[0]}</AvatarFallback>
            </Avatar>
          </CardHeader>

          {/* Right Section - Profile Information */}
          <CardContent className="w-full sm:w-2/3 p-6 space-y-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <p className="font-bold">Name:</p>
                <p>{profileData.first_name} {profileData.last_name}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <p className="font-bold">Email:</p>
                <p>{profileData.email}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <p className="font-bold">Phone:</p>
                <p>{profileData.phone_number || "N/A"}</p>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <p className="font-bold">Address:</p>
                <p>{profileData.address || "N/A"}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Briefcase className="w-5 h-5 text-gray-400" />
                <p className="font-bold">Job Title:</p>
                <p>{profileData.job_title || "N/A"}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <p className="font-bold">Department:</p>
                <p>{profileData.department || "N/A"}</p>
              </div>

              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-gray-400" />
                <p className="font-bold">Education:</p>
                <p>{profileData.education || "N/A"}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <p className="font-bold">Employment Start Date:</p>
                <p>{profileData.employment_start_date || "N/A"}</p>
              </div>

              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <p className="font-bold">Skills:</p>
                <p>{profileData.skills || "N/A"}</p>
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex justify-end">
              <EditProfileDialog profileData={profileData} onSave={handleProfileUpdate} />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
