import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted/30 dark:bg-muted/10">
        <div className="container px-4 py-12 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-center md:text-left">
                Learn, Interact, and Grow
                <br />
                <span className="text-primary">Live & On-Demand Classes</span>
                <br />
                for Every Learner
              </h1>
              <p className="text-muted-foreground text-lg text-center md:text-left">
                Join expert-led live classes, download recordings at your convenience, and engage in insightful
                discussions with fellow learners. Take your learning beyond the classroom!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="/live-classes">Book a Live Class</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/recorded-classes">Explore Recorded Classes</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                 src="/placeholder.svg?height=150&width=150"
                alt="Student learning online"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-background">
        <div className="container px-4 py-12 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Learning, Your Way!</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're here for live learning, recorded sessions, or one-on-one consultations, we've made it
              simple and seamless.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Book a Live Class</h3>
              <p className="text-muted-foreground">Choose your preferred time slot and get instant access.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Join the Session</h3>
              <p className="text-muted-foreground">Get a Zoom link straight to your inbox.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Continue the Learning</h3>
              <p className="text-muted-foreground">Access recordings and additional materials anytime.</p>
            </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">1-on-1 Consultation</h3>
              <p className="text-muted-foreground">Book a personalized session with an expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-muted/30 dark:bg-muted/10">
        <div className="container px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-center">Upcoming Live Classes Reserve Your Spot Now!</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
   <Button className="rounded-full" variant="default">
    Applied Sciences
  </Button>
  <Button className="rounded-full" variant="outline">
    Academic Science
  </Button>
  <Button className="rounded-full" variant="outline">
    Web Development
  </Button>
    <Button className="rounded-full" variant="outline">
      Mathematics
    </Button>
  </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Course thumbnail"
                  width={400}
                  height={225}
                  className="w-full object-cover h-48"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Building Agentic AI Applications with a Problem-First Approach
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-sm">5.0 (23)</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm">Starts May 5</div>
                    <div className="text-sm text-red-500 font-medium">4 Seats Left</div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden">
                      <Image src="/placeholder.svg?height=32&width=32" alt="Instructor" width={32} height={32} />
                    </div>
                    <div className="font-medium">Jack Nickolson</div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/course-details">Enroll Course →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <Link href="/live-classes">See All Live Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Classes Section */}
      <section className="bg-background">
        <div className="container px-4 py-12 md:py-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Most Recent Classes</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Course thumbnail"
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <h3 className="font-bold mb-1">Low-code Course for Beginners</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold">$48.00</span>
                          <span className="text-muted-foreground line-through">$57.60</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <div className="flex text-yellow-400 mr-2">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                          </div>
                          <span className="text-xs">4.8 (25)</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">12 Lessons • 4hrs 30 mins</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-red-500">
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
                        className="lucide lucide-heart"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-muted/30 dark:bg-muted/10">
        <div className="container px-4 py-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center p-6">
              <div className="md:w-2/3 text-white mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Tech Tutor Sale</h2>
                <p className="mb-2">Get the best deals on all the tech courses for this week</p>
                <div className="text-3xl font-bold">Upto 40% Off</div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Image src="/placeholder.svg?height=150&width=150" alt="Sale robot mascot" width={150} height={150} />
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 text-center">
              <Button asChild>
                <Link href="/courses">Check Out Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Coach Section */}
      <section className="bg-blue-500 text-white">
        <div className="container px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Growing Network of Experts in Therapy, HR, and Organizational Consulting
            </h2>
            <p className="mb-8">
              Are you a certified therapist, human resource expert, or organizational development consultant? We're
              looking for passionate professionals like you to join our coaching platform and empower individuals and
              teams to grow, heal, and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/become-coach">Become a Coach</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/coach-guidelines">View Coach Guidelines</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 dark:bg-muted/10">
        <div className="container px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Got Questions?
              <br />
              We've Got Answers!
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about live classes, subscriptions, and recorded lessons.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="font-medium">How do I book a class?</h3>
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
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              <div className="bg-card rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="font-medium">Can I cancel or reschedule a session?</h3>
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
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="bg-gray-900 text-white">
        <div className="container px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Participate in Weekly Quiz Competitions</h2>
            <p className="mb-8">
              Put your knowledge to the test with our topic-based quizzes, released every week. Whether you're brushing
              up on last week's class or challenging yourself with new material, our quizzes are designed to sharpen
              your skills in a fun and interactive way.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/quiz-contest">Join This Week's Quiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 1-on-1 Section */}
      <section className="bg-muted/30 dark:bg-muted/10">
        <div className="container px-4 py-12 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  Need Personalized Help?
                  <br />
                  Get 1-on-1 Expert Guidance
                </h2>
                <p className="mb-4">
                  Book a private consultation with an expert. One-time fee. No hassle. Just results.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/one-on-one">Book a 1-on-1 Session</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="bg-background">
        <div className="container px-4 py-12 md:py-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Subscription Packages</h2>
            <p className="text-muted-foreground">
              Whether you're here to attend live sessions, binge on recorded lessons, or get 1-on-1 mentorship, we've
              got a plan built for your goals. No hidden fees. No fluff. Just pure, powerful learning.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" className="rounded-full">
                Monthly
              </Button>
              <Button variant="outline" className="rounded-full">
                Annual (20% Off)
              </Button>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="bg-blue-500 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Premium Membership</h3>
                <p className="mb-4">
                  Subscribe once. Learn endlessly. Join live classes, unlock the entire recorded library, and
                  participate in student discussions.
                </p>
                <div className="text-4xl font-bold">$119</div>
                <div className="text-sm opacity-80">per month</div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Unlimited access to all live classes</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Full library of recorded sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Discussion forum access</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Subscribe Now</Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-primary">
              <div className="bg-primary text-primary-foreground p-6">
                <div className="bg-white/20 text-white text-xs font-bold py-1 px-3 rounded-full w-fit mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2">Elite Membership</h3>
                <p className="mb-4">
                  Everything in Premium plus priority booking for live sessions and monthly 1-on-1 coaching sessions.
                </p>
                <div className="text-4xl font-bold">$199</div>
                <div className="text-sm opacity-80">per month</div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>All Premium features</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Monthly 1-on-1 coaching session</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Priority booking for live classes</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Subscribe Now</Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="bg-gray-200 dark:bg-gray-800 p-6">
                <h3 className="text-2xl font-bold mb-2">Basic Membership</h3>
                <p className="mb-4">
                  Perfect for beginners. Access to selected live classes and limited recorded content.
                </p>
                <div className="text-4xl font-bold">$49</div>
                <div className="text-sm opacity-80">per month</div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>5 live classes per month</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Limited recorded content</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span>Basic forum access</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
