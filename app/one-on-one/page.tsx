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
          <h1 className="text-4xl font-bold mb-4">1-on-1 Expert Guidance</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book a private consultation with an expert. One-time fee. No hassle.
            Just results.
          </p>
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
