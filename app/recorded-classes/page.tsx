import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecordedClassesPage() {
  const recordedClasses = [
    {
      id: 1,
      title: "Building Agentic AI Applications with a Problem-First Approach",
      instructor: "Jack Nickolson",
      rating: 5.0,
      reviews: 23,
      price: 149.99,
      image:"/placeholder.svg?height=48&width=48",
      category: "Technology",
      duration: "4 hours 30 minutes",
      lessons: 12,
      level: "Intermediate",
    },
    {
      id: 2,
      title: "Leadership Development for Modern Managers",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 45,
      price: 129.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Business",
      duration: "5 hours 15 minutes",
      lessons: 15,
      level: "Advanced",
    },
    {
      id: 3,
      title: "Introduction to Data Science and Machine Learning",
      instructor: "Michael Chen",
      rating: 4.9,
      reviews: 37,
      price: 159.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Technology",
      duration: "6 hours 45 minutes",
      lessons: 18,
      level: "Beginner",
    },
    {
      id: 4,
      title: "Effective Communication in the Workplace",
      instructor: "Jessica Williams",
      rating: 4.7,
      reviews: 29,
      price: 99.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Business",
      duration: "3 hours 20 minutes",
      lessons: 10,
      level: "All Levels",
    },
    {
      id: 5,
      title: "UX/UI Design Fundamentals",
      instructor: "David Wilson",
      rating: 4.9,
      reviews: 52,
      price: 139.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Design",
      duration: "5 hours 30 minutes",
      lessons: 14,
      level: "Beginner",
    },
    {
      id: 6,
      title: "Advanced React Development",
      instructor: "Robert Thompson",
      rating: 4.8,
      reviews: 41,
      price: 169.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Technology",
      duration: "7 hours 15 minutes",
      lessons: 20,
      level: "Advanced",
    },
  ]

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Recorded Classes</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn at your own pace with our comprehensive library of recorded classes. Access expert instruction anytime,
          anywhere.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Classes</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedClasses.map((recordedClass) => (
              <Card key={recordedClass.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={recordedClass.image || "/placeholder.svg"}
                    alt={recordedClass.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {recordedClass.category}
                    </Badge>
                    <Badge variant="outline" className="bg-muted text-muted-foreground">
                      {recordedClass.level}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{recordedClass.title}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="text-sm">
                      {recordedClass.rating} ({recordedClass.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt={recordedClass.instructor}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="font-medium text-sm">{recordedClass.instructor}</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>{recordedClass.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>{recordedClass.lessons} Lessons</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${recordedClass.price}</span>
                    <Button asChild>
                      <Link href="/course-details">View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="technology">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedClasses
              .filter((recordedClass) => recordedClass.category === "Technology")
              .map((recordedClass) => (
                <Card key={recordedClass.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={recordedClass.image || "/placeholder.svg"}
                      alt={recordedClass.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {recordedClass.category}
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-muted-foreground">
                        {recordedClass.level}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{recordedClass.title}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-sm">
                        {recordedClass.rating} ({recordedClass.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt={recordedClass.instructor}
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="font-medium text-sm">{recordedClass.instructor}</div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{recordedClass.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpen className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{recordedClass.lessons} Lessons</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${recordedClass.price}</span>
                      <Button asChild>
                        <Link href="/course-details">View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="business">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedClasses
              .filter((recordedClass) => recordedClass.category === "Business")
              .map((recordedClass) => (
                <Card key={recordedClass.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={recordedClass.image || "/placeholder.svg"}
                      alt={recordedClass.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {recordedClass.category}
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-muted-foreground">
                        {recordedClass.level}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{recordedClass.title}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-sm">
                        {recordedClass.rating} ({recordedClass.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt={recordedClass.instructor}
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="font-medium text-sm">{recordedClass.instructor}</div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{recordedClass.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpen className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{recordedClass.lessons} Lessons</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${recordedClass.price}</span>
                      <Button asChild>
                        <Link href="/course-details">View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="design">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedClasses
              .filter((recordedClass) => recordedClass.category === "Design")
              .map((recordedClass) => (
                <Card key={recordedClass.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={recordedClass.image || "/placeholder.svg"}
                      alt={recordedClass.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {recordedClass.category}
                      </Badge>
                      <Badge variant="outline" className="bg-muted text-muted-foreground">
                        {recordedClass.level}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{recordedClass.title}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-sm">
                        {recordedClass.rating} ({recordedClass.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt={recordedClass.instructor}
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="font-medium text-sm">{recordedClass.instructor}</div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{recordedClass.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpen className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{recordedClass.lessons} Lessons</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">${recordedClass.price}</span>
                      <Button asChild>
                        <Link href="/course-details">View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-8 rounded-lg mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Benefits of Recorded Classes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our recorded classes offer flexibility and convenience without sacrificing quality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Learn at Your Own Pace</h3>
            <p className="text-muted-foreground">Watch and rewatch content whenever it's convenient for you.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Downloadable Resources</h3>
            <p className="text-muted-foreground">Access supplementary materials to enhance your learning experience.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
                <path d="M6 18h12" />
                <path d="M6 14h12" />
                <rect width="12" height="12" x="6" y="10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Lifetime Access</h3>
            <p className="text-muted-foreground">Once purchased, you'll have unlimited access to the course content.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Looking for More Options?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/courses">Browse All Courses</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/live-classes">Explore Live Classes</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
