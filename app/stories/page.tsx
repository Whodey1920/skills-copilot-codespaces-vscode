import ClientStories from "@/components/ClientStories"

export default function StoriesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-6">Client Stories</h1>
      <p className="text-xl mb-8">
        Read about the experiences of our clients and how we've helped them achieve positive outcomes in their legal
        matters.
      </p>
      <ClientStories />
    </div>
  )
}

