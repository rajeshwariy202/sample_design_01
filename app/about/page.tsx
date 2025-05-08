import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
  <div className="max-w-6xl mx-auto p-6">
  {/* Heading */}
  <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

  {/* About Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 items-center ">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Empowering Lifelong Learners</h2>
      <p className="text-gray-700">
        Learning should be flexible, personalized, and engaging. We blend live classes,
        on-demand courses, and expert sessions so you can learn at your pace.
      </p>
        
      <p className="text-gray-700">
        Learning should be flexible, personalized, and engaging. We blend live classes,
        on-demand courses, and expert sessions so you can learn at your pace.
      </p>
    </div>
    <div>
      <img src="/placeholder.svg" alt="Learning" className="w-full h-auto rounded-lg shadow-md object-cover" />
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
    <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
    <p className="text-gray-700">
      To make high-quality, expert-guided learning accessible, inclusive, and interactive—so every learner can succeed, no matter their background.
    </p>
     <p className="text-gray-700">
      To make high-quality, expert-guided learning accessible, inclusive, and interactive—so every learner can succeed, no matter their background.
    </p>
  </div>
  
</div>

  {/* Benefits */}
  <div className="max-w-6xl mx-auto py-8 text-center space-y-6 bg-gray-100 rounded-lg shadow-md p-4 mt-8">
    <h2 className="text-3xl font-bold text-gray-800">Our Benefits</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="p-6 border rounded-lg shadow-md bg-blue-600">
        <h3 className="text-xl font-semibold text-white">Learn From Experts</h3>
        <p className="text-gray-100">Learn from licensed professionals, certified coaches, and seasoned industry leaders across multiple disciplines.</p>
      </div>
      <div className="p-6 border rounded-lg shadow-md bg-blue-600">
        <h3 className="text-xl font-semibold text-white">Flexible Learning on Your Time</h3>
        <p className="text-gray-100">Flexible learning options tailored to your needs—join live sessions, access recorded classes anytime, or schedule private coaching.</p>
      </div>
      <div className="p-6 border rounded-lg shadow-md bg-blue-600">
        <h3 className="text-xl font-semibold text-white">Personalized Support</h3>
        <p className="text-gray-100">Choose from live group classes, private 1-on-1 coaching, or self-paced modules to match your learning style.</p>
      </div>
    </div>
  </div>
</div>



        {/* <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              MetaMatch was founded in 2020 with a simple mission: to make
              high-quality education and professional development accessible to
              everyone, regardless of location or background.
            </p>
            <p className="text-muted-foreground mb-4">
              What began as a small collection of online courses has grown into
              a comprehensive platform offering live classes, recorded sessions,
              one-on-one coaching, and a vibrant community of learners and
              experts.
            </p>
            <p className="text-muted-foreground">
              Today, we serve thousands of students worldwide, connecting them
              with top experts in various fields and providing the tools and
              resources they need to achieve their personal and professional
              goals.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="MetaMatch team"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div> */}

        {/* <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're guided by a set of core principles that inform everything we
              do.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                  <path d="M12 13v8" />
                  <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe that quality education should be available to
                everyone. We strive to make our platform affordable,
                user-friendly, and accessible across devices and locations.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to providing the highest quality content and
                experiences. We carefully vet our instructors and continuously
                improve our platform based on user feedback.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Community</h3>
              <p className="text-muted-foreground">
                We foster a supportive environment where learners can connect,
                collaborate, and grow together. We believe that learning is
                enhanced through meaningful interactions.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind MetaMatch who are dedicated to
              transforming education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative w-48 h-48 mx-auto rounded-full overflow-hidden bg-muted">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="bg-blue-500 text-white rounded-lg overflow-hidden">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Join Our Growing Community
            </h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Whether you're looking to learn, teach, or connect with
              like-minded professionals, MetaMatch has something for you. Join
              our community today and take the next step in your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/auth/register">Sign Up Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/become-coach">Become a Coach</Link>
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
