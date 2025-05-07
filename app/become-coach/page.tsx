"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function BecomeCoachPage() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Growing Network of Experts</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Are you a certified therapist, human resource expert, or organizational development consultant? We're
            looking for passionate professionals like you to join our coaching platform and empower individuals and
            teams to grow, heal, and thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Become a Coach with MetaMatch?</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-primary/10 p-2 rounded-full h-min">
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
                    className="text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Expand Your Reach</h3>
                  <p className="text-muted-foreground">
                    Connect with clients globally through our platform, breaking geographical barriers.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 p-2 rounded-full h-min">
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
                    className="text-primary"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Flexible Income</h3>
                  <p className="text-muted-foreground">
                    Set your own rates and schedule. Earn through live sessions, recorded courses, and 1-on-1
                    consultations.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 p-2 rounded-full h-min">
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
                    className="text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Community Support</h3>
                  <p className="text-muted-foreground">
                    Join a network of like-minded professionals for collaboration, referrals, and shared resources.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 p-2 rounded-full h-min">
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
                    className="text-primary"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Professional Growth</h3>
                  <p className="text-muted-foreground">
                    Access exclusive training, marketing support, and tools to enhance your coaching practice.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28366%29-aQ1uqOeqzW9Om60EnWjCBI3AeAuRFc.png"
              alt="Become a coach"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="bg-blue-500 text-white rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Join Our Platform?</h2>
            <p>Apply now to become a coach and start sharing your expertise with learners worldwide.</p>
          </div>
          <div className="flex justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary">
                  Become a Coach
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Coach Application</DialogTitle>
                  <DialogDescription>
                    Please fill out the form below to apply as a coach on our platform.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="expertise">Area of Expertise</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of expertise" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="therapy">Therapy & Counseling</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="organizational">Organizational Development</SelectItem>
                        <SelectItem value="career">Career Coaching</SelectItem>
                        <SelectItem value="leadership">Leadership Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="4-6">4-6 years</SelectItem>
                        <SelectItem value="7-10">7-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about your professional background and expertise" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website or LinkedIn Profile (Optional)</Label>
                    <Input id="website" type="url" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Submit Application</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-2">What qualifications do I need?</h3>
            <p className="text-muted-foreground">
              We require coaches to have relevant certifications in their field, a minimum of 3 years of professional
              experience, and excellent communication skills. Specific requirements vary by specialty.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-2">How does payment work?</h3>
            <p className="text-muted-foreground">
              Coaches receive 70% of the revenue from their courses and sessions. Payments are processed monthly via
              direct deposit, PayPal, or other available methods in your region.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-2">What technical setup do I need?</h3>
            <p className="text-muted-foreground">
              You'll need a reliable computer with a high-quality webcam and microphone, stable internet connection, and
              a quiet, professional-looking space for conducting sessions.
            </p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-2">How long does the application process take?</h3>
            <p className="text-muted-foreground">
              The application review typically takes 1-2 weeks. If approved, you'll receive onboarding materials and can
              start setting up your profile and courses right away.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
