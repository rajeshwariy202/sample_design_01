import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/footer";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former education technology executive with 15+ years of experience in online learning platforms.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Software engineer with expertise in building scalable educational platforms and AI-driven learning tools.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jessica Williams",
      role: "Head of Content",
      bio: "Former university professor with a passion for creating engaging and effective learning materials.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Robert Thompson",
      role: "Director of Coaching",
      bio: "Certified executive coach with experience in leadership development and organizational psychology.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <>
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-6xl mx-auto p-6">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

            {/* About Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 items-center ">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Empowering Lifelong Learners
                </h2>
                <p className="text-gray-700">
                  Learning should be flexible, personalized, and engaging. We
                  blend live classes, on-demand courses, and expert sessions so
                  you can learn at your pace.
                </p>

                <p className="text-gray-700">
                  Learning should be flexible, personalized, and engaging. We
                  blend live classes, on-demand courses, and expert sessions so
                  you can learn at your pace.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Learning"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            {/* Our Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 items-center p-4 mt-8">
              <div className="md:w-full">
                <img
                  src="/placeholder.svg"
                  alt="Mission"
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="md:w-full text-center md:text-left space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Our Mission
                </h2>
                <p className="text-gray-700">
                  To make high-quality, expert-guided learning accessible,
                  inclusive, and interactive—so every learner can succeed, no
                  matter their background.
                </p>
                <p className="text-gray-700">
                  To make high-quality, expert-guided learning accessible,
                  inclusive, and interactive—so every learner can succeed, no
                  matter their background.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="max-w-6xl mx-auto py-8 text-center space-y-6 bg-gray-100 rounded-lg shadow-md p-4 mt-8">
              <h2 className="text-3xl font-bold text-gray-800">Our Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-6 border rounded-lg shadow-md bg-blue-600">
                  <h3 className="text-xl font-semibold text-white">
                    Learn From Experts
                  </h3>
                  <p className="text-gray-100">
                    Learn from licensed professionals, certified coaches, and
                    seasoned industry leaders across multiple disciplines.
                  </p>
                </div>
                <div className="p-6 border rounded-lg shadow-md bg-blue-600">
                  <h3 className="text-xl font-semibold text-white">
                    Flexible Learning on Your Time
                  </h3>
                  <p className="text-gray-100">
                    Flexible learning options tailored to your needs—join live
                    sessions, access recorded classes anytime, or schedule
                    private coaching.
                  </p>
                </div>
                <div className="p-6 border rounded-lg shadow-md bg-blue-600">
                  <h3 className="text-xl font-semibold text-white">
                    Personalized Support
                  </h3>
                  <p className="text-gray-100">
                    Choose from live group classes, private 1-on-1 coaching, or
                    self-paced modules to match your learning style.
                  </p>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
      <Footer />
    </>
  );
}
