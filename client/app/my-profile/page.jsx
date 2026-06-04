import React from "react";
import Account from "../my-list/account";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const MyProfile = () => {
  return (
    <div>
      <div className="bg-gray-200 py-12">
        <div className="container">
          <div className="flex flex-col w-full lg:flex-row lg:w-[80%] m-auto gap-12">
            <Account />

            <div className="lg:w-[70%] flex flex-col">
              <div className="col1 rounded-md bg-white shadow-md h-auto w-full mb-4">
                <div className="flex justify-between p-5 border-b-1 border-[rgba(0,0,0,0.1)]">
                  <div>
                    <h3 className="text-[18px] font-[600]">My Profile</h3>
                    <p>All your account information in one place</p>
                  </div>
                  <div>
                    <Link
                      href={"/"}
                      className="btn-border-g p-2 mt-4 text-primary rounded-lg font-[600]"
                     
                    >
                      Change Password
                    </Link>
                  </div>
                </div>

                <form className="grid grid-cols-2 gap-5 p-4">
                  <div className="form-group w-full">
                    <TextField
                      id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                      size="small"
                      className="w-full"
                    />
                  </div>
                  <div className="form-group w-full">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="small"
                      className="w-full"
                    />
                  </div>
                  <div className="form-group w-full">
                    <TextField
                      id="outlined-basic"
                      label="Phone"
                      variant="outlined"
                      size="small"
                      className="w-full"
                    />
                  </div>
                  <br />

                  <Button className="!text-white !bg-primary w-full !capitalize !font-[600] !text-[16px]">
                    Update Profile
                  </Button>
                </form>
              </div>

              <div className="col1 rounded-md bg-white shadow-md h-auto w-full my-4">
                <div className="p-5 border-b-1 border-[rgba(0,0,0,0.1)]">
                  <div>
                    <h3 className="text-[18px] font-[600]">Change Password</h3>
                    <p>Update Your Password</p>
                  </div>
                 
                </div>

                <form className="grid grid-cols-2 gap-5 p-4">
                  <div className="form-group w-full">
                    <TextField
                      id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                      size="small"
                      className="w-full"
                    />
                  </div>
                  <div className="form-group w-full">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="small"
                      className="w-full"
                    />
                  </div>
                  <div className="form-group w-full">
                    <TextField
                      id="outlined-basic"
                      label="Phone"
                      variant="outlined"
                      size="small"
                      className="w-full"
                    />
                  </div>
                  <br />
                  <Button className="!text-white !bg-primary w-full !capitalize !font-[600] !text-[16px]">
                   Change Password
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
