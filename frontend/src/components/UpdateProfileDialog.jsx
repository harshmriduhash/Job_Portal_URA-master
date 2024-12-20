
// import React, { useState } from 'react';
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
// import { Label } from './ui/label';
// import { Input } from './ui/input';
// import { Button } from './ui/button';
// import { Loader2 } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { USER_API_END_POINT } from '@/utils/constant';
// import { setUser } from '@/redux/authSlice';
// import { toast } from 'sonner';

// const UpdateProfileDialog = ({ open, setOpen }) => {
//   const [loading, setLoading] = useState(false);
//   const { user } = useSelector(store => store.auth);

//   const [input, setInput] = useState({
//     fullname: user?.fullname || "",
//     email: user?.email || "",
//     phoneNumber: user?.phoneNumber || "",
//     bio: user?.profile?.bio || "",
//     skills: user?.profile?.skills?.map(skill => skill) || "",
//     file: user?.profile?.resume || null // Set to null initially
//   });

//   const dispatch = useDispatch();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const fileChangeHandler = (e) => {
//     const file = e.target.files?.[0];
//     setInput({ ...input, file }); // Update file state
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("phoneNumber", input.phoneNumber);
//     formData.append("bio", input.bio);
//     formData.append("skills", input.skills);
//     if (input.file) {
//       formData.append("file", input.file);
//     }
//     try {
//       setLoading(true);
//       const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         },
//         withCredentials: true
//       });
//       if (res.data.success) {
//         dispatch(setUser(res.data.user));
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.message);
//     } finally {
//       setLoading(false);
//     }
//     setOpen(false);
//     console.log(input);
//   };

//   return (
//     <div>
//       <Dialog open={open}>
//         <DialogContent className="sm:max-w-[450px] md:max-w-[600px]" onInteractOutside={() => setOpen(false)}>
//           <DialogHeader>
//             <DialogTitle className="text-xl font-semibold text-gray-800">Update Profile</DialogTitle>
//           </DialogHeader>
//           <form onSubmit={submitHandler}>
//             <div className="space-y-6 py-6">
//               {/* Name */}
//               <div className="grid grid-cols-4 gap-4">
//                 <Label htmlFor="name" className="text-right text-gray-700">Full Name</Label>
//                 <Input
//                   id="name"
//                   name="fullname"
//                   type="text"
//                   value={input.fullname}
//                   onChange={changeEventHandler}
//                   className="col-span-3 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Email */}
//               <div className="grid grid-cols-4 gap-4">
//                 <Label htmlFor="email" className="text-right text-gray-700">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={input.email}
//                   onChange={changeEventHandler}
//                   className="col-span-3 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Phone Number */}
//               <div className="grid grid-cols-4 gap-4">
//                 <Label htmlFor="number" className="text-right text-gray-700">Phone Number</Label>
//                 <Input
//                   id="number"
//                   name="phoneNumber"
//                   value={input.phoneNumber}
//                   onChange={changeEventHandler}
//                   className="col-span-3 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Bio */}
//               <div className="grid grid-cols-4 gap-4">
//                 <Label htmlFor="bio" className="text-right text-gray-700">Bio</Label>
//                 <Input
//                   id="bio"
//                   name="bio"
//                   value={input.bio}
//                   onChange={changeEventHandler}
//                   className="col-span-3 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Skills */}
//               <div className="grid grid-cols-4 gap-4">
//                 <Label htmlFor="skills" className="text-right text-gray-700">Skills</Label>
//                 <Input
//                   id="skills"
//                   name="skills"
//                   value={input.skills}
//                   onChange={changeEventHandler}
//                   className="col-span-3 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Resume Upload */}
//               <div className="grid grid-cols-4 gap-4">
//                 <Label htmlFor="file" className="text-right text-gray-700">Resume</Label>
//                 <Input
//                   id="file"
//                   name="file"
//                   type="file"
//                   accept="application/pdf"
//                   onChange={fileChangeHandler}
//                   className="col-span-3 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>

//             <DialogFooter>
//               {loading ? (
//                 <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50" disabled>
//                   <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Please wait...
//                 </Button>
//               ) : (
//                 <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
//                   Update Profile
//                 </Button>
//               )}
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default UpdateProfileDialog;
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || null, // Set to null initially
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file }); // Update file state
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[450px] md:max-w-[600px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="space-y-6 py-6">
              {/* Full Name */}
              <div className="grid grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right text-gray-700 dark:text-gray-300">Full Name</Label>
                <Input
                  id="name"
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className="col-span-3 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="grid grid-cols-4 gap-4">
                <Label htmlFor="email" className="text-right text-gray-700 dark:text-gray-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Number */}
              <div className="grid grid-cols-4 gap-4">
                <Label htmlFor="number" className="text-right text-gray-700 dark:text-gray-300">Phone Number</Label>
                <Input
                  id="number"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Bio */}
              <div className="grid grid-cols-4 gap-4">
                <Label htmlFor="bio" className="text-right text-gray-700 dark:text-gray-300">Bio</Label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Skills */}
              <div className="grid grid-cols-4 gap-4">
                <Label htmlFor="skills" className="text-right text-gray-700 dark:text-gray-300">Skills</Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Resume Upload */}
              <div className="grid grid-cols-4 gap-4">
                <Label htmlFor="file" className="text-right text-gray-700 dark:text-gray-300">Resume</Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                  className="col-span-3 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <DialogFooter>
              {loading ? (
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50" disabled>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Please wait...
                </Button>
              ) : (
                <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
                  Update Profile
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
