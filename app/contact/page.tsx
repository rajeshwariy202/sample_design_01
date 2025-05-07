import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">Our support team is available Monday-Friday, 9am-5pm EST</p>
              <p className="font-medium">+1 (555) 123-4567</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">We'll respond to your inquiry within 24 hours</p>
              <p className="font-medium">support@metamatch.com</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Office</h3>
              <p className="text-muted-foreground mb-4">Visit our headquarters</p>
              <p className="font-medium">123 Learning Lane, Education City, CA 94103</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">What are your business hours?</h3>
                <p className="text-muted-foreground">
                  Our support team is available Monday through Friday, from 9:00 AM to 5:00 PM Eastern Standard Time.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">How quickly will I receive a response?</h3>
                <p className="text-muted-foreground">
                  We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please
                  call our support line.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can I schedule a demo of your platform?</h3>
                <p className="text-muted-foreground">
                  Yes! We offer personalized demos for individuals and organizations. Please fill out the contact form
                  and specify that you're interested in a demo.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Do you offer technical support for students?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide technical support for all registered students. You can reach our technical support
                  team via email or phone during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
