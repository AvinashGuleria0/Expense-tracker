import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/inputs/input";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100] h-auto md:h-full mt-10 md:mt-10 flex flex-col justify-center  ">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join Today By entering details.
        </p>

        <form onSubmit={handleSignUp}>

            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              label="Full Name"
              placeholder="Avinash"
              type="text"
            />
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="avinash@gmail.com"
            />

            <div className="col-span-2">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                placeholder="Min 8 characters"
              />
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
