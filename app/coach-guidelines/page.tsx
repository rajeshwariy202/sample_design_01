import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CoachGuidelinesPage() {
  const coachData = [
    {
      title: "Licensed Therapists",
      description:
        "Licensed therapists and mental wellness professionals offering group or 1:1 emotional support.",
      image: "/therapist.jpg",
    },
    {
      title: "Organizational Experts",
      description:
        "Coaches with expertise in workplace structure, leadership dynamics, team efficiency, and performance coaching.",
      image: "/organization.jpg",
    },
    {
      title: "HR & Well-being Consultants",
      description:
        "Specialists in employee wellness, organizational culture, HR frameworks, and healthy workplace ecosystems.",
      image: "/hr.jpg",
    },
  ];
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Coach Guidelines</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about becoming and succeeding as a coach
            on our platform.
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="mb-12">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="content-creation">Content Creation</TabsTrigger>
            <TabsTrigger value="session-delivery">Session Delivery</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
          </TabsList>
          <TabsContent value="getting-started" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Welcome to Our Coaching Community
              </h2>
              <p className="text-muted-foreground mb-4">
                We’re excited to have you join our network of skilled
                professionals empowering students and individuals through live
                learning, meaningful discussion, and one-on-one mentorship. This
                page outlines everything you need to know to succeed as a coach
                on our platform. Let me know if you need any modifications or
                additional formatting!
              </p>

              <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <section className="max-w-6xl w-full">
                  {/* Title */}
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">
                      Who Can Become a Coach?
                    </h1>
                    <p className="text-gray-600">
                      We welcome professionals with expertise in coaching,
                      counseling, and workplace development.
                    </p>
                  </div>

                  {/* Grid Layout for Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {coachData.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center p-4"
                      >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                          <img
                            src="/placeholder.svg?height=150&width=150"
                            alt={item.title}
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-center md:text-left p-4">
                          <h2 className="text-lg font-semibold text-gray-700">
                            {item.title}
                          </h2>
                          <p className="text-gray-600 mt-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 p-6">
                {/* Live Class Hosting */}
                <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-lg font-bold mb-2">Live Class Hosting</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Use clear titles and class descriptions.</li>
                    <li>
                      Set consistent weekly availability for slot booking.
                    </li>
                    <li>Upload class materials or summaries when needed.</li>
                    <li>
                      Use the Zoom links provided through the platform for live
                      sessions.
                    </li>
                  </ul>
                </div>

                {/* Recording Policy */}
                <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-lg font-bold mb-2">Recording Policy</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      All live classes will be recorded and made available to
                      learners.
                    </li>
                    <li>
                      Ensure your sessions are well-paced and content-rich.
                    </li>
                  </ul>
                </div>

                {/* One-on-One Consultations */}
                <div className="bg-gray-200 p-6 rounded-lg shadow-md flex-1">
                  <h3 className="text-lg font-bold mb-2">
                    One-on-One Consultations
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      Prepare for each session based on the learner’s submitted
                      concerns or goals.
                    </li>
                    <li>
                      Respect the session duration and avoid running over unless
                      the client requests it.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
  {/* What's Not Allowed Section */}
  <div className="bg-gray-200 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-bold mb-2">What's Not Allowed</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Offering services outside the platform in violation of terms.</li>
      <li>Sharing personal contact information with clients.</li>
      <li>Discriminatory or offensive language.</li>
      <li>Missing scheduled sessions without notice.</li>
    </ul>
  </div>

  {/* Ready to Get Started Section */}
<div className="flex flex-col lg:flex-row items-center bg-blue-500 p-2 rounded-lg shadow-md text-white">
  <div className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
    <img src="/placeholder.svg?height=150&width=150" alt="Ready to Get Started" className="w-full max-w-md object-cover rounded-lg" />
  </div>
  {/* Left Side - Text Content */}
  <div className="flex-1 text-center lg:text-left ml-5">
    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
    <p className="text-lg mb-4">
      Once approved, you'll be added to our active coaching roster. You can:
    </p>
    <ul className="list-none space-y-2 text-lg">
      <li>✔ Set your availability</li>
      <li>✔ Create group classes</li>
      <li>✔ Accept 1-on-1 bookings</li>
      <li>✔ Start making a difference one session at a time</li>
    </ul>
    <button className="mt-6 bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg hover:bg-gray-200">
      Register Now
    </button>
  </div>

  
</div>


</div>


              <h3 className="text-xl font-bold mb-2">Application Process</h3>
              <p className="text-muted-foreground mb-4">
                The application process consists of several steps to ensure we
                maintain a high standard of expertise on our platform:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-6">
                <li>
                  Submit your application through the "Become a Coach" form
                </li>
                <li>Initial review of your qualifications and experience</li>
                <li>Video interview with our coaching team</li>
                <li>Background and credential verification</li>
                <li>Onboarding and platform training</li>
              </ol>

              <h3 className="text-xl font-bold mb-2">
                Setting Up Your Profile
              </h3>
              <p className="text-muted-foreground mb-4">
                A complete and professional profile is essential for attracting
                students. Your profile should include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>
                  Professional headshot (high-quality, well-lit photo with
                  neutral background)
                </li>
                <li>
                  Comprehensive bio highlighting your expertise, experience, and
                  teaching approach
                </li>
                <li>Credentials and certifications (these will be verified)</li>
                <li>Areas of specialization clearly defined</li>
                <li>
                  Sample video introducing yourself and your teaching style
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="content-creation" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Creating Engaging Content
              </h2>
              <p className="text-muted-foreground mb-4">
                High-quality content is the cornerstone of successful coaching
                on our platform. Follow these guidelines to create courses and
                materials that resonate with learners.
              </p>

              <h3 className="text-xl font-bold mb-2">Course Structure</h3>
              <p className="text-muted-foreground mb-4">
                Well-structured courses help learners progress logically through
                the material:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Begin with clear learning objectives for each section</li>
                <li>
                  Organize content in logical modules of 5-10 minutes each
                </li>
                <li>Include a mix of theory and practical applications</li>
                <li>
                  Provide downloadable resources to supplement video content
                </li>
                <li>End each section with a summary and action items</li>
              </ul>

              <h3 className="text-xl font-bold mb-2">Video Production</h3>
              <p className="text-muted-foreground mb-4">
                Video quality significantly impacts learner engagement:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>
                  Record in a quiet, well-lit environment with minimal
                  background distractions
                </li>
                <li>Use a high-quality microphone for clear audio</li>
                <li>Maintain eye contact with the camera</li>
                <li>Keep videos concise and focused on specific topics</li>
                <li>
                  Use visual aids when appropriate (slides, demonstrations,
                  etc.)
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="session-delivery" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Delivering Effective Sessions
              </h2>
              <p className="text-muted-foreground mb-4">
                Live sessions and one-on-one consultations require specific
                skills and preparation to ensure a positive learning experience.
              </p>

              <h3 className="text-xl font-bold mb-2">Before the Session</h3>
              <p className="text-muted-foreground mb-4">
                Proper preparation is essential for successful sessions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>
                  Test your equipment and internet connection 15 minutes before
                  starting
                </li>
                <li>
                  Review participant information and any pre-session
                  questionnaires
                </li>
                <li>
                  Prepare all necessary materials and have them readily
                  accessible
                </li>
                <li>
                  Ensure your environment is professional and free from
                  distractions
                </li>
                <li>Have a backup plan in case of technical difficulties</li>
              </ul>

              <h3 className="text-xl font-bold mb-2">During the Session</h3>
              <p className="text-muted-foreground mb-4">
                Effective facilitation techniques to engage participants:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>
                  Begin with a brief introduction and outline of the session
                </li>
                <li>
                  Encourage active participation through questions and
                  activities
                </li>
                <li>Balance presentation with discussion and interaction</li>
                <li>Provide clear explanations and check for understanding</li>
                <li>Manage time effectively to cover all planned content</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="policies" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Platform Policies</h2>
              <p className="text-muted-foreground mb-4">
                Understanding and adhering to our policies ensures a positive
                experience for both coaches and learners.
              </p>

              <h3 className="text-xl font-bold mb-2">Code of Conduct</h3>
              <p className="text-muted-foreground mb-4">
                All coaches must adhere to our professional standards:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Treat all learners with respect and professionalism</li>
                <li>Maintain confidentiality of learner information</li>
                <li>Provide honest and constructive feedback</li>
                <li>Avoid discriminatory language or behavior</li>
                <li>Represent your qualifications accurately</li>
              </ul>

              <h3 className="text-xl font-bold mb-2">Revenue Sharing</h3>
              <p className="text-muted-foreground mb-4">
                Our revenue model is designed to fairly compensate coaches:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>
                  Coaches receive 70% of revenue from their courses and sessions
                </li>
                <li>
                  Payments are processed monthly for all earnings over $50
                </li>
                <li>Tax forms are provided annually for your records</li>
                <li>Performance bonuses are available for top-rated coaches</li>
                <li>
                  Special promotions may temporarily affect revenue percentages
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-8 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Apply now to join our community of expert coaches and start
              sharing your knowledge with learners worldwide.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/become-coach">Apply as a Coach</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
