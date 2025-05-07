import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoachGuidelinesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Coach Guidelines</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about becoming and succeeding as a coach on our platform.
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
              <h2 className="text-2xl font-bold mb-4">Welcome to MetaMatch</h2>
              <p className="text-muted-foreground mb-4">
                Thank you for your interest in becoming a coach on our platform. This guide will help you understand the
                process of joining our community and setting up your profile for success.
              </p>
              <h3 className="text-xl font-bold mb-2">Application Process</h3>
              <p className="text-muted-foreground mb-4">
                The application process consists of several steps to ensure we maintain a high standard of expertise on
                our platform:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Submit your application through the "Become a Coach" form</li>
                <li>Initial review of your qualifications and experience</li>
                <li>Video interview with our coaching team</li>
                <li>Background and credential verification</li>
                <li>Onboarding and platform training</li>
              </ol>

              <h3 className="text-xl font-bold mb-2">Setting Up Your Profile</h3>
              <p className="text-muted-foreground mb-4">
                A complete and professional profile is essential for attracting students. Your profile should include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Professional headshot (high-quality, well-lit photo with neutral background)</li>
                <li>Comprehensive bio highlighting your expertise, experience, and teaching approach</li>
                <li>Credentials and certifications (these will be verified)</li>
                <li>Areas of specialization clearly defined</li>
                <li>Sample video introducing yourself and your teaching style</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="content-creation" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Creating Engaging Content</h2>
              <p className="text-muted-foreground mb-4">
                High-quality content is the cornerstone of successful coaching on our platform. Follow these guidelines
                to create courses and materials that resonate with learners.
              </p>

              <h3 className="text-xl font-bold mb-2">Course Structure</h3>
              <p className="text-muted-foreground mb-4">
                Well-structured courses help learners progress logically through the material:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Begin with clear learning objectives for each section</li>
                <li>Organize content in logical modules of 5-10 minutes each</li>
                <li>Include a mix of theory and practical applications</li>
                <li>Provide downloadable resources to supplement video content</li>
                <li>End each section with a summary and action items</li>
              </ul>

              <h3 className="text-xl font-bold mb-2">Video Production</h3>
              <p className="text-muted-foreground mb-4">Video quality significantly impacts learner engagement:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Record in a quiet, well-lit environment with minimal background distractions</li>
                <li>Use a high-quality microphone for clear audio</li>
                <li>Maintain eye contact with the camera</li>
                <li>Keep videos concise and focused on specific topics</li>
                <li>Use visual aids when appropriate (slides, demonstrations, etc.)</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="session-delivery" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Delivering Effective Sessions</h2>
              <p className="text-muted-foreground mb-4">
                Live sessions and one-on-one consultations require specific skills and preparation to ensure a positive
                learning experience.
              </p>

              <h3 className="text-xl font-bold mb-2">Before the Session</h3>
              <p className="text-muted-foreground mb-4">Proper preparation is essential for successful sessions:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Test your equipment and internet connection 15 minutes before starting</li>
                <li>Review participant information and any pre-session questionnaires</li>
                <li>Prepare all necessary materials and have them readily accessible</li>
                <li>Ensure your environment is professional and free from distractions</li>
                <li>Have a backup plan in case of technical difficulties</li>
              </ul>

              <h3 className="text-xl font-bold mb-2">During the Session</h3>
              <p className="text-muted-foreground mb-4">Effective facilitation techniques to engage participants:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Begin with a brief introduction and outline of the session</li>
                <li>Encourage active participation through questions and activities</li>
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
                Understanding and adhering to our policies ensures a positive experience for both coaches and learners.
              </p>

              <h3 className="text-xl font-bold mb-2">Code of Conduct</h3>
              <p className="text-muted-foreground mb-4">All coaches must adhere to our professional standards:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Treat all learners with respect and professionalism</li>
                <li>Maintain confidentiality of learner information</li>
                <li>Provide honest and constructive feedback</li>
                <li>Avoid discriminatory language or behavior</li>
                <li>Represent your qualifications accurately</li>
              </ul>

              <h3 className="text-xl font-bold mb-2">Revenue Sharing</h3>
              <p className="text-muted-foreground mb-4">Our revenue model is designed to fairly compensate coaches:</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Coaches receive 70% of revenue from their courses and sessions</li>
                <li>Payments are processed monthly for all earnings over $50</li>
                <li>Tax forms are provided annually for your records</li>
                <li>Performance bonuses are available for top-rated coaches</li>
                <li>Special promotions may temporarily affect revenue percentages</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-8 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Apply now to join our community of expert coaches and start sharing your knowledge with learners
              worldwide.
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
  )
}
