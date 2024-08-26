// "use client";

// import { useState, useEffect } from "react";

// import { 
//   Mail, 
//   User, 
//   Phone, 
//   Calendar, 
//   Home, 
//   Briefcase, 
//   Award, 
//   CalendarClock, 
//   Tag 
// } from 'lucide-react'

// import { 
//   Card, 
//   CardContent, 
//   CardHeader, 
//   CardTitle, 
//   CardDescription 
// } from "@/components/ui/card";

// import { User as UserType } from "@/types/userProfile";

// import useUser from "@/hooks/useUser";
// import coreApi from "@/lib/coreApi";

// const ProfilePage = () => {
//   const { user: initialUser, isLoading, error } = useUser();
//   const [editing, setEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     phone_number: "",
//     date_of_birth: "",
//     address: "",
//     job_title: "",
//     department: "",
//     education: "",
//     employment_start_date: "",
//     skills: "",
//   });
//   const [user, setUser] = useState<UserType | null>(initialUser);

//   useEffect(() => {
//     if (initialUser) {
//       setUser(initialUser);
//       setFormData({
//         first_name: initialUser.first_name || "",
//         last_name: initialUser.last_name || "",
//         phone_number: initialUser.phone_number || "",
//         date_of_birth: initialUser.date_of_birth ? new Date(initialUser.date_of_birth).toISOString().split('T')[0] : "",
//         address: initialUser.address || "",
//         job_title: initialUser.job_title || "",
//         department: initialUser.department || "",
//         education: initialUser.education || "",
//         employment_start_date: initialUser.employment_start_date ? new Date(initialUser.employment_start_date).toISOString().split('T')[0] : "",
//         skills: initialUser.skills || "",
//       });
//     }
//   }, [initialUser]);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error.message}</p>;
//   }

//   if (!user) {
//     return <p>Not authorized</p>;
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const updatedData = Object.entries(formData)
//         .filter(([key, value]) => user[key as keyof UserType] !== value)
//         .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

//       if (Object.keys(updatedData).length > 0) {
//         await coreApi.put("/users/profile/update/", updatedData);
//         setUser(prevUser => ({
//           ...prevUser!,
//           ...updatedData,
//         }));
//         setEditing(false);
//       } else {
//         alert("No changes detected.");
//       }
//     } catch (error) {
//       console.error("Failed to update profile:", error);
//       alert("Failed to update profile. Please try again.");
//     }
//   };

//   return (
//     <div className="container max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
//       <Card className="w-full max-w-2xl mx-auto">
//         <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
//           <div className="w-32 h-32 rounded-md border flex justify-center items-center">
//             <User className="w-24 h-24 text-gray-600" />
//           </div>
//           <div className="text-center sm:text-left">
//             <CardTitle className="text-2xl font-semibold">{`${user.first_name || "Erjan"} ${user.last_name || "Stavay"}`}</CardTitle>
//             <CardDescription className="text-sm text-muted-foreground">{user.job_title || "IT Support"}</CardDescription>
//           </div>
//         </CardHeader>
//         <CardContent className="space-y-4 text-center sm:text-left">
//           <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
//             <Mail className="h-5 w-5 text-muted-foreground" />
//             <span>{user.email}</span>
//           </div>
//           <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2">
//             <Phone className="h-5 w-5 text-muted-foreground" />
//             <span>{user.phone_number || "+99 899 9991122"}</span>
//           </div>
//         </CardContent>
//       </Card>

//       <button
//         onClick={() => setEditing(prev => !prev)}
//         className="bg-gray-500 text-white p-2 rounded"
//       >
//         {editing ? "Cancel" : "Edit Profile"}
//       </button>

//       {editing && (
//         <Card className="w-full max-w-2xl mx-auto">
//           <CardHeader>
//             <CardTitle>Edit Profile</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">First Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">Last Name</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">Phone Number</label>
//                 <input
//                   type="text"
//                   name="phone_number"
//                   value={formData.phone_number}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">Date of Birth</label>
//                 <input
//                   type="date"
//                   name="date_of_birth"
//                   value={formData.date_of_birth}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">Job Title</label>
//                 <input
//                   type="text"
//                   name="job_title"
//                   value={formData.job_title}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">Department</label>
//                 <input
//                   type="text"
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">Education</label>
//                 <input
//                   type="text"
//                   name="education"
//                   value={formData.education}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">Employment Start Date</label>
//                 <input
//                   type="date"
//                   name="employment_start_date"
//                   value={formData.employment_start_date}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <div className="flex flex-col space-y-2">
//                 <label className="font-medium">Skills (comma separated)</label>
//                 <input
//                   type="text"
//                   name="skills"
//                   value={formData.skills}
//                   onChange={handleChange}
//                   className="border p-2 rounded"
//                 />
//               </div>
//               <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//                 Save Changes
//               </button>
//             </form>
//           </CardContent>
//         </Card>
//       )}

//       <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
//         <CardHeader className="bg-gray-100 border-b border-gray-200 p-4 rounded-t-lg">
//           <CardTitle className="text-lg font-semibold text-gray-800">All Information</CardTitle>
//         </CardHeader>
//         <CardContent className="p-4 space-y-4">
//           <div className="flex items-center space-x-2">
//             <User className="text-gray-500" />
//             <span><strong>First Name:</strong> {user.first_name}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <User className="text-gray-500" />
//             <span><strong>Last Name:</strong> {user.last_name}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Phone className="text-gray-500" />
//             <span><strong>Phone Number:</strong> {user.phone_number}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Calendar className="text-gray-500" />
//             <span><strong>Date of Birth:</strong> {user.date_of_birth}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Home className="text-gray-500" />
//             <span><strong>Address:</strong> {user.address}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Briefcase className="text-gray-500" />
//             <span><strong>Job Title:</strong> {user.job_title}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Tag className="text-gray-500" />
//             <span><strong>Department:</strong> {user.department}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Award className="text-gray-500" />
//             <span><strong>Education:</strong> {user.education}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <CalendarClock className="text-gray-500" />
//             <span><strong>Employment Start Date:</strong> {user.employment_start_date}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Tag className="text-gray-500" />
//             <span><strong>Skills:</strong> {user.skills}</span>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default ProfilePage;

const ProfilePage = () => {
  return (
    <div>
      <p>Profile Page</p>
    </div>
  );
}

export default ProfilePage;