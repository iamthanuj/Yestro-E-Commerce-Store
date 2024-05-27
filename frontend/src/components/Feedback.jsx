import React from "react";
import rndUser from "../assets/rnduser.jpg"

function Feedback() {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg cursor-grab">
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.804a1 1 0 00.95.69h5.043c.969 0 1.371 1.24.588 1.81l-4.09 2.967a1 1 0 00-.364 1.118l1.562 4.804c.3.921-.755 1.688-1.54 1.118l-4.09-2.967a1 1 0 00-1.175 0l-4.09 2.967c-.784.57-1.838-.197-1.54-1.118l1.562-4.804a1 1 0 00-.364-1.118L2.403 9.23c-.784-.57-.381-1.81.588-1.81h5.043a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.804a1 1 0 00.95.69h5.043c.969 0 1.371 1.24.588 1.81l-4.09 2.967a1 1 0 00-.364 1.118l1.562 4.804c.3.921-.755 1.688-1.54 1.118l-4.09-2.967a1 1 0 00-1.175 0l-4.09 2.967c-.784.57-1.838-.197-1.54-1.118l1.562-4.804a1 1 0 00-.364-1.118L2.403 9.23c-.784-.57-.381-1.81.588-1.81h5.043a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.804a1 1 0 00.95.69h5.043c.969 0 1.371 1.24.588 1.81l-4.09 2.967a1 1 0 00-.364 1.118l1.562 4.804c.3.921-.755 1.688-1.54 1.118l-4.09-2.967a1 1 0 00-1.175 0l-4.09 2.967c-.784.57-1.838-.197-1.54-1.118l1.562-4.804a1 1 0 00-.364-1.118L2.403 9.23c-.784-.57-.381-1.81.588-1.81h5.043a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.804a1 1 0 00.95.69h5.043c.969 0 1.371 1.24.588 1.81l-4.09 2.967a1 1 0 00-.364 1.118l1.562 4.804c.3.921-.755 1.688-1.54 1.118l-4.09-2.967a1 1 0 00-1.175 0l-4.09 2.967c-.784.57-1.838-.197-1.54-1.118l1.562-4.804a1 1 0 00-.364-1.118L2.403 9.23c-.784-.57-.381-1.81.588-1.81h5.043a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.804a1 1 0 00.95.69h5.043c.969 0 1.371 1.24.588 1.81l-4.09 2.967a1 1 0 00-.364 1.118l1.562 4.804c.3.921-.755 1.688-1.54 1.118l-4.09-2.967a1 1 0 00-1.175 0l-4.09 2.967c-.784.57-1.838-.197-1.54-1.118l1.562-4.804a1 1 0 00-.364-1.118L2.403 9.23c-.784-.57-.381-1.81.588-1.81h5.043a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Pagedone has made it possible for me to stay on top of my portfolio and
        make informed decisions quickly and easily.
      </p>
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={rndUser}
          alt="Emily Johnson"
        />
        <div>
          <p className="text-gray-900 font-semibold">Emily Johnson</p>
          <p className="text-gray-500">Product Designer</p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
