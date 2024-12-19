import React from "react";

const ProfileCard = ({ user }) => {
  const { name, picture, gender, phone, email, dob, location } = user;

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white shadow-xl rounded-2xl p-8 max-w-3xl mx-auto border border-gray-300">
      {/* Image Section */}
      <div className="w-36 h-36 mb-6 sm:mb-0 sm:mr-8">
        <img
          src={picture.large}
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-md"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-2xl font-bold text-gray-800 mb-4">
          <span>{name.first}</span>
          <span>{name.last}</span>
        </div>
        <div className="text-gray-700 text-lg space-y-2">
          <p>
            <span className="font-medium text-gray-800">Gender:</span> {gender}
          </p>
          <p>
            <span className="font-medium text-gray-800">Phone:</span> {phone}
          </p>
          <p>
            <span className="font-medium text-gray-800">Email:</span> {email}
          </p>
          <p>
            <span className="font-medium text-gray-800">Date of Birth:</span>{" "}
            {new Date(dob.date).toLocaleDateString()}
          </p>
          <p>
            <span className="font-medium text-gray-800">Location:</span>{" "}
            {`${location.city}, ${location.state}, ${location.country}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
