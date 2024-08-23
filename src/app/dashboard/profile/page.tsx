"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Calendar, User, Building, Phone, Book } from "lucide-react";
import useUser from "@/hooks/useUser";
import coreApi from "@/lib/coreApi";

const ProfilePage = () => {
  const { user, isLoading, error } = useUser();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: user?.id,
    email: user?.email,
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    phone_number: user?.phone_number || "",
    date_of_birth: user?.date_of_birth ? new Date(user.date_of_birth).toISOString().split('T')[0] : "", // Handle date format
    address: user?.address || "",
    job_title: user?.job_title || "",
    department: user?.department || "",
    education: user?.education || "",
    employment_start_date: user?.employment_start_date ? new Date(user.employment_start_date).toISOString().split('T')[0] : "", // Handle date format
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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await coreApi.put("/users/profile/", {
        id: formData.id,
        email: formData.email,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        date_of_birth: formData.date_of_birth,
        address: formData.address,
        job_title: formData.job_title,
        department: formData.department,
        education: formData.education,
        employment_start_date: formData.employment_start_date,
        skills: formData.skills,
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

      {/* Editable Form */}
      {editing && (
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label className="font-medium">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Job Title</label>
                <input
                  type="text"
                  name="job_title"
                  value={formData.job_title}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Education</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Employment Start Date</label>
                <input
                  type="date"
                  name="employment_start_date"
                  value={formData.employment_start_date}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Skills (comma separated)</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Save Changes
              </button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Toggle Editing Mode */}
      <button
        onClick={() => setEditing(prev => !prev)}
        className="bg-gray-500 text-white p-2 rounded"
      >
        {editing ? "Cancel" : "Edit Profile"}
      </button>
    </div>
  );
};

export default ProfilePage;
