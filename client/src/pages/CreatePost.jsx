import React, { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaImage, FaComment, FaSpinner } from "react-icons/fa";

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      setLoading(true);
      const response = await api.post("/create-post", formData);
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Create New Post
          </h1>
          <p className="text-gray-600">Share your moments with the world</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <form onSubmit={handleForm} className="p-8 space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload Image
              </label>
              <div className="flex flex-col items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  {preview ? (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <img
                        src={preview}
                        alt="Preview"
                        className="max-w-full max-h-48 object-cover rounded-lg"
                      />
                      <p className="mt-2 text-sm text-gray-600">
                        <span className="font-semibold">Click to change</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FaImage className="w-12 h-12 text-gray-400 mb-4" />
                      <p className="mb-2 text-sm text-gray-600">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  )}
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="caption" className="block text-sm font-medium text-gray-700">
                Caption
              </label>
              <div className="relative">
                <FaComment className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <textarea
                  id="caption"
                  name="caption"
                  rows="4"
                  placeholder="Write something amazing..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <FaSpinner className="w-5 h-5 animate-spin" />
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <FaPlus className="w-5 h-5" />
                    <span>Create Post</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                disabled={loading}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;