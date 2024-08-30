"use client";

import { Loader } from "lucide-react";
import { useState, useEffect } from "react";
import { UserProfileType } from "@/types/authTypes";
import { profileDataType } from "./_types/profileDataType";
import { toast } from "sonner";
import EditProfileDialog from "./_components/edit-profile-dialog";
import coreApi from "@/lib/coreApi";

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<UserProfileType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await coreApi.get("/users/profile/");
        setProfileData(response.data);
      } catch (error) {
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
      setProfileData(response.data);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile", error);
      toast.error("Failed to update profile");
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="container p-6">
      {profileData && (
        <>
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Profile</h1>
            <p className="text-gray-600">{profileData.email}</p>
            <p className="text-gray-600">
              {profileData.first_name} {profileData.last_name}
            </p>
          </div>
          <EditProfileDialog
            profileData={profileData}
            onSave={handleProfileUpdate}
          />
        </>
      )}
    </div>
  );
}