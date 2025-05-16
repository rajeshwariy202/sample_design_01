// page.tsx
import Image from "next/image";
import { HeartIcon } from "lucide-react";
import Footer from "@/components/footer";

// 1. Define Coach type
type Coach = {
  name: string;
  title: string;
  pricePer10Min: string;
  pricePerQuestion: string;
  rating: number;
};

// 2. Coaches array
const coaches: Coach[] = [
  {
    name: "Amanda Rivera",
    title: "Relationship Coach",
    pricePer10Min: "$8.00",
    pricePerQuestion: "$0.50",
    rating: 4.8,
  },
  {
    name: "Robert Brook",
    title: "Relationship Coach",
    pricePer10Min: "$10.00",
    pricePerQuestion: "$0.75",
    rating: 4.8,
  },
  {
    name: "David Chen",
    title: "Relationship Coach",
    pricePer10Min: "$10.00",
    pricePerQuestion: "$0.75",
    rating: 4.8,
  },
  {
    name: "Marcus Lee",
    title: "Relationship Coach",
    pricePer10Min: "$10.00",
    pricePerQuestion: "$0.75",
    rating: 4.8,
  },
];

// 3. CoachCard component with typed props
const CoachCard: React.FC<{ coach: Coach }> = ({ coach }) => (
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="md:w-1/3">
      <img
        src="/placeholder.svg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex flex-col justify-between md:w-2/3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{coach.name}</h2>
        <HeartIcon className="w-6 h-6 text-red-500" />
      </div>
      <div className="flex items-center mt-2 gap-2">
        <p className="text-gray-600">{coach.title}</p>
        <span className="text-gray-600">| Bilingual</span>
        <span className="text-yellow-500 text-lg">★ {coach.rating}</span>
      </div>
      <p className="text-gray-700 mt-3">
        {coach.pricePer10Min} per 10 min | {coach.pricePerQuestion} per question
      </p>
      <div className="mt-4 flex space-x-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Book Session
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
          Ask a Question
        </button>
      </div>
    </div>
  </div>
);

// 4. Page component
export default function OneOnOnePage() {
  return (
    <>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">1-on-1 Consultation</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book a private consultation with an expert. One-time fee. No hassle.
            Just results.
          </p>
        </div>

        <section className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                Personalized Guidance, Tailored to You
              </h2>
              <p className="text-gray-700">
                Whether you're looking for expert advice, career direction,
                emotional support, or personal growth, our 1-on-1 consultations
                are designed to give you the focused attention you deserve.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>A session built around your unique goals</li>
                <li>Guidance from verified experts</li>
                <li>A safe, confidential, and judgment-free environment</li>
                <li>Flexible scheduling that fits your lifestyle</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="Guidance Session"
                width={500}
                height={300}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/placeholder.svg"
                alt="What You Can Expect"
                width={500}
                height={300}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">
                What You Can Expect
              </h2>
              <p className="text-gray-700">
                Whether you're looking for expert advice, career direction,
                emotional support, or personal growth, our 1-on-1 consultations
                are designed to give you the focused attention you deserve.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  ✅{" "}
                  <span>
                    A dedicated session built around your unique goals
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  ✅ <span>Guidance from verified, experienced experts</span>
                </li>
                <li className="flex items-center gap-3">
                  ✅{" "}
                  <span>
                    A safe, confidential, and judgment-free environment
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  ✅ <span>Flexible scheduling that fits your lifestyle</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {coaches.map((coach, idx) => (
              <CoachCard key={idx} coach={coach} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
