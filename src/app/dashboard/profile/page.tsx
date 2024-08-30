"use client";

// import { Separator } from "@/components/ui/separator"

// export function SeparatorDemo() {
//   return (
//     <div>
//       <div className="space-y-1">
//         <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
//         <p className="text-sm text-muted-foreground">
//           An open-source UI component library.
//         </p>
//       </div>
//       <Separator className="my-4" />
//       <div className="flex h-5 items-center space-x-4 text-sm">
//         <div>Blog</div>
//         <Separator orientation="vertical" />
//         <div>Docs</div>
//         <Separator orientation="vertical" />
//         <div>Source</div>
//       </div>
//     </div>
//   )
// }



import EditProfileDialog from "./_components/edit-profile-dialog";

export default function Page() {
  return (
    <div className="container p-6">
      <EditProfileDialog />
    </div>
  );
}


// import { useState } from "react";
// import useUser from "@/hooks/useUser";
// import { 
//   Loader,
//   User,
//   Mail,
//   Edit,
// } from "lucide-react";
// import Image from "next/image";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { useForm } from "react-hook-form";

// export default function Page() {
//   const { user, loading, error } = useUser();
//   const [isDialogOpen, setDialogOpen] = useState(false);
//   const { register, handleSubmit, reset } = useForm({
//     defaultValues: {
//       firstName: user?.first_name || '',
//       lastName: user?.last_name || '',
//       email: user?.email || '',
//       jobTitle: user?.job_title || '',
//       image: user?.image || '',
//     }
//   });

//   const handleFormSubmit = async (data: any) => {
//     // Make an API call to update user details
//     try {
//       // Example API call, replace with your endpoint
//       await fetch('/api/user/update', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       // Close dialog and refresh user data
//       setDialogOpen(false);
//       // Refresh user data (you might need to re-fetch or update state here)
//     } catch (error) {
//       console.error('Failed to update user', error);
//     }
//   };

//   const handleOpenDialog = () => {
//     setDialogOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//     reset(); // Reset form values
//   };

//   return (
//     <div className="h-full p-4 flex justify-center items-center">
//       {
//         loading ? (
//           <div className="w-full h-full flex justify-center items-center">
//             <Loader className="text-slate-950 animate-spin" />
//           </div>
//         ) : (
//           <div className="w-full max-w-[700px] h-full p-4 rounded">
//             <div className="flex">
//               <div className="w-1/3">
//                 <div className="w-36 h-36 border-2 flex justify-center items-center rounded-full border-slate-950">
//                   {
//                     user.image ? (
//                       <Image 
//                         src={user.image}
//                         alt="Profile Image"
//                         className="rounded-full w-32 h-32"
//                         width={200}
//                         height={200}
//                       />
//                     ) : (
//                       <div className="w-32 h-32 rounded-full flex justify-center items-center bg-slate-50">
//                         <User className="w-20 h-20 text-slate-950" />
//                       </div>
//                     )
//                   }
//                 </div>
//               </div>
              
//               <div className="w-2/3">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <div className="text-2xl font-semibold">{user.first_name} {user.last_name}</div>
//                     <div className="text-sm text-slate-950">{user.job_title}</div>
//                     <div className="flex space-x-2 items-center mt-2">
//                       <Mail className="w-5 h-5 text-slate-950" />
//                       <div>{user.email}</div>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={handleOpenDialog}
//                     className="text-slate-950 flex items-center space-x-2 bg-slate-200 px-4 py-2 rounded"
//                   >
//                     <Edit className="w-5 h-5" />
//                     <span>Edit</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4">
//               <div>ID: {user.id}</div>
//               <div>Email: {user.email}</div>
//               <div>First Name: {user.first_name}</div>
//               <div>Last Name: {user.last_name}</div>
//               <div>Image: {user.image}</div>
//             </div>

//             <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
//               <DialogTrigger />
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>Edit Profile</DialogTitle>
//                 </DialogHeader>
//                 <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
//                   <div>
//                     <label htmlFor="firstName">First Name</label>
//                     <input
//                       id="firstName"
//                       {...register("firstName")}
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="lastName">Last Name</label>
//                     <input
//                       id="lastName"
//                       {...register("lastName")}
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                       id="email"
//                       type="email"
//                       {...register("email")}
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="jobTitle">Job Title</label>
//                     <input
//                       id="jobTitle"
//                       {...register("jobTitle")}
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="image">Image URL</label>
//                     <input
//                       id="image"
//                       {...register("image")}
//                       className="w-full p-2 border rounded"
//                     />
//                   </div>
//                   <button 
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 rounded"
//                   >
//                     Save Changes
//                   </button>
//                 </form>
//               </DialogContent>
//             </Dialog>
//           </div>
//         )
//       }
//     </div>
//   );
// }




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

// import { UserProfileType } from "@/types/authTypes";

// import useUser from "@/hooks/useUser";
// import coreApi from "@/lib/coreApi";

// const ProfilePage = () => {
//   const { user: initialUser, loading, error } = useUser();
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
//   const [user, setUser] = useState<UserProfileType | null>(initialUser);

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

//   if (loading) {
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
//         .filter(([key, value]) => user[key as keyof UserProfileType] !== value)
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

