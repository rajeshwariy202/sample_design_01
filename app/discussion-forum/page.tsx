'use client';

import React from "react";
import Footer from '@/components/footer';

export default function DiscussionForum() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 max-w-7xl mx-auto p-6 space-y-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Welcome to Our Discussion Forum</h1>
        </div>

        {/* Search and Topic Selection (Responsive) */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search topics..."
            className="w-full md:w-1/2 p-2 border rounded-md"
          />
          <select className="w-full md:w-1/2 p-2 border rounded-md">
            <option>All Topics</option>
            <option>Technology</option>
            <option>Science</option>
            <option>Art</option>
          </select>
        </div>

        {/* Posts List */}
        {[
          { title: 'Gen Arithmetics \\m/ · 7m ago', hasImage: false },
          { title: 'Iandian scr Gr', hasImage: true },
          { title: 'Gen Arithmetics 7m ago', hasImage: false },
        ].map((post, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md space-y-4"
          >
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">{post.title}</div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Join Group
              </button>
            </div>

            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien massa...
            </p>

            {post.hasImage && (
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Post image"
                  className="w-40 h-40 object-contain mx-auto"
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button className="text-green-500">👍 21</button>
                <button className="text-red-500">👎 2</button>
                <button className="text-gray-500">💬 24</button>
              </div>
              <button className="text-blue-600">🔗 Share</button>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
