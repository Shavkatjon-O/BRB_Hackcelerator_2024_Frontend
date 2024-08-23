"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, User } from "lucide-react";
import useUser from "@/hooks/useUser";
import coreApi from "@/lib/coreApi";

const ProfilePage = () => {
  const { user, isLoading, error } = useUser();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    phone_number: user?.phone_number || "",
    date_of_birth: user?.date_of_birth ? new Date(user.date_of_birth).toISOString().split('T')[0] : "",
    address: user?.address || "",
    job_title: user?.job_title || "",
    department: user?.department || "",
    education: user?.education || "",
    employment_start_date: user?.employment_start_date ? new Date(user.employment_start_date).toISOString().split('T')[0] : "",
    skills: user?.skills || "",
  });

  const router = useRouter();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!user) {
    return <p>Not authorized</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await coreApi.put("/users/profile/update/", {
        ...formData,
      });
      alert("Profile updated successfully!");
      setEditing(false);
      router.refresh(); // Refresh to get updated data
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="container max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Profile Header */}
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-32 h-32 rounded-md border flex justify-center items-center">
            <User className="w-24 h-24 text-gray-600" />
          </div>
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

      {/* Toggle Editing Mode */}
      <button
        onClick={() => setEditing(prev => !prev)}
        className="bg-gray-500 text-white p-2 rounded"
      >
        {editing ? "Cancel" : "Edit Profile"}
      </button>

      {/* Editable Form */}
      {editing && (
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="flex flex-col space-y-2">
                  <label className="font-medium capitalize">{key.replace(/_/g, ' ')}</label>
                  <input
                    type={key.includes("date") ? "date" : "text"}
                    name={key}
                    value={value}
                    onChange={handleChange}
                    className="border p-2 rounded"
                  />
                </div>
              ))}
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Save Changes
              </button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProfilePage;
