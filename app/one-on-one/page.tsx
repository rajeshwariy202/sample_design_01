import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function OneOnOnePage() {
  const coaches = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Career Development",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 124,
      price: 149,
      availability: "Next available: Tomorrow",
    },
    {
      id: 2,
      name: "Michael Chen",
      specialty: "Leadership Coaching",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 98,
      price: 179,
      availability: "Next available: May 5",
    },
    {
      id: 3,
      name: "Dr. Jessica Williams",
      specialty: "Therapy & Counseling",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5.0,
      reviews: 156,
      price: 199,
      availability: "Next available: May 3",
    },
    {
      id: 4,
      name: "Robert Thompson",
      specialty: "Business Strategy",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 87,
      price: 169,
      availability: "Next available: May 4",
    },
    {
      id: 5,
      name: "Emma Davis",
      specialty: "Personal Development",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 112,
      price: 159,
      availability: "Next available: Tomorrow",
    },
    {
      id: 6,
      name: "David Wilson",
      specialty: "Organizational Development",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 76,
      price: 189,
      availability: "Next available: May 6",
    },
  ];

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">1-on-1 Consultation</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book a private consultation with an expert. One-time fee. No hassle.
            Just results.
          </p>
        </div>
       <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-6">
        {/* Main Container - Responsive Layout */}
     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-6 py-12">
      
      {/* First Section */}
      <div className="max-w-6xl bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left - text */}
          <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-900">Personalized Guidance, Tailored to You</h1>
          <p className="text-gray-700">
            Whether you're looking for expert advice, career direction, emotional support, or personal growth, our 1-on-1 consultations are designed to give you the focused attention you deserve.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>A session built around your unique goals</li>
            <li>Guidance from verified experts</li>
            <li>A safe, confidential, and judgment-free environment</li>
            <li>Flexible scheduling that fits your lifestyle</li>
          </ul>
        </div>
{/* Right - image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/placeholder.svg" // Replace with actual image path
            alt="Guidance Session"
            width={500}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        
      

      </div>

      {/* Second Section */}
      <div className="max-w-6xl bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center gap-8 mt-10">
        
        {/* Left - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/placeholder.svg" // Replace with actual image path
            alt="Expectation Image"
            width={400}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2 className="text-xl font-bold text-gray-800">What You Can Expect</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">✅ <span>A dedicated session built around your unique goals</span></li>
            <li className="flex items-center gap-3">✅ <span>Guidance from verified, experienced experts</span></li>
            <li className="flex items-center gap-3">✅ <span>A safe, confidential, and judgment-free environment</span></li>
            <li className="flex items-center gap-3">✅ <span>Flexible scheduling that fits your lifestyle</span></li>
          </ul>
        </div>

      </div>

    </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* First Card */}
      <div className="flex flex-col md:flex-row bg-red shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Section */}
        <div className="p-4 flex flex-col justify-between md:w-2/3">
          <h2 className="text-xl font-semibold">Amanda Rivera</h2>
          <p className="text-gray-600">Relationship Coach | Bilingual</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">★ 4.9</span>
          </div>
          <p className="text-gray-700 mt-3">$8.00 per 10 min | $0.50 per question</p>
          <div className="mt-4 flex space-x-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Session</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Ask a Question</button>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Section */}
        <div className="p-6 flex flex-col justify-between md:w-2/3">
          <h2 className="text-xl font-semibold">Jordan Smith</h2>
          <p className="text-gray-600">Career Advisor | Life Coach</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">★ 4.8</span>
          </div>
          <p className="text-gray-700 mt-3">$10.00 per 10 min | $0.75 per question</p>
          <div className="mt-4 flex space-x-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Session</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Ask a Question</button>
          </div>
        </div>
      </div>
       <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Section */}
        <div className="p-6 flex flex-col justify-between md:w-2/3">
          <h2 className="text-xl font-semibold">Jordan Smith</h2>
          <p className="text-gray-600">Career Advisor | Life Coach</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">★ 4.8</span>
          </div>
          <p className="text-gray-700 mt-3">$10.00 per 10 min | $0.75 per question</p>
          <div className="mt-4 flex space-x-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Session</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Ask a Question</button>
          </div>
        </div>
      </div>
       <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Section */}
        <div className="p-6 flex flex-col justify-between md:w-2/3">
          <h2 className="text-xl font-semibold">Jordan Smith</h2>
          <p className="text-gray-600">Career Advisor | Life Coach</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">★ 4.8</span>
          </div>
          <p className="text-gray-700 mt-3">$10.00 per 10 min | $0.75 per question</p>
          <div className="mt-4 flex space-x-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Session</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Ask a Question</button>
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Need Personalized Help?
                </h2>
                <p className="mb-6">
                  Our 1-on-1 sessions provide personalized guidance tailored to
                  your specific needs and goals. Whether you're looking for
                  career advice, leadership coaching, or personal development,
                  our experts are here to help you succeed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-full h-min">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Personalized Approach</h3>
                      <p className="text-white/80 text-sm">
                        Sessions tailored to your specific needs and goals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-full h-min">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Flexible Scheduling</h3>
                      <p className="text-white/80 text-sm">
                        Book sessions at times that work for your schedule
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-full h-min">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Secure Platform</h3>
                      <p className="text-white/80 text-sm">
                        Private, confidential sessions via our secure video
                        platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28365%29-V7HV2pGVBPCUu4Sar7TwuTy7nyKUr7.png"
                  alt="1-on-1 consultation"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Our Expert Coaches
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((coach) => (
              <Card key={coach.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                        <Image
                          src={coach.image || "/placeholder.svg"}
                          alt={coach.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{coach.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {coach.specialty}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        ⭐ {coach.rating} ({coach.reviews} reviews)
                      </p>
                      <p>💲 ${coach.price} per session</p>
                      <p>📅 {coach.availability}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
