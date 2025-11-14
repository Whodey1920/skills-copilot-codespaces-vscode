"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

interface Story {
  id: number
  name: string
  content: string
  rating: number
  caseType: string
}

export default function ClientStories() {
  const [stories, setStories] = useState<Story[]>([])
  const [newStory, setNewStory] = useState({ name: "", content: "", rating: 5, caseType: "" })
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetchStories()
  }, [])

  const fetchStories = async () => {
    const response = await fetch("/api/stories")
    const data = await response.json()
    setStories(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/stories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStory),
    })
    setNewStory({ name: "", content: "", rating: 5, caseType: "" })
    fetchStories()
  }

  const filteredStories = filter
    ? stories.filter((story) => story.caseType.toLowerCase() === filter.toLowerCase())
    : stories

  return (
    <div className="space-y-8">
      <div className="mb-4">
        <label htmlFor="filter" className="block mb-2">
          Filter by case type:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">All Cases</option>
          <option value="Personal Injury">Personal Injury</option>
          <option value="Criminal Defense">Criminal Defense</option>
          <option value="Family Law">Family Law</option>
          <option value="Estate Planning">Estate Planning</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredStories.map((story) => (
          <div key={story.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{story.caseType}</p>
            <p className="mb-4">{story.content}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < story.rating ? "text-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Share Your Story</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newStory.name}
            onChange={(e) => setNewStory({ ...newStory, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <select
            value={newStory.caseType}
            onChange={(e) => setNewStory({ ...newStory, caseType: e.target.value })}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Case Type</option>
            <option value="Personal Injury">Personal Injury</option>
            <option value="Criminal Defense">Criminal Defense</option>
            <option value="Family Law">Family Law</option>
            <option value="Estate Planning">Estate Planning</option>
          </select>
          <textarea
            placeholder="Your Story"
            value={newStory.content}
            onChange={(e) => setNewStory({ ...newStory, content: e.target.value })}
            className="w-full p-2 border rounded"
            required
          ></textarea>
          <div>
            <label className="block mb-2">Rating:</label>
            <select
              value={newStory.rating}
              onChange={(e) => setNewStory({ ...newStory, rating: Number.parseInt(e.target.value) })}
              className="w-full p-2 border rounded"
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating} Star{rating !== 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Story
          </button>
        </div>
      </form>
    </div>
  )
}

