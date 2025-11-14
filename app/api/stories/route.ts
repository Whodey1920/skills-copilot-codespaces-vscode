import { NextResponse } from "next/server"

const stories = [
  {
    id: 1,
    name: "John Doe",
    content: "Raymond helped me win my personal injury case. Highly recommended!",
    rating: 5,
    caseType: "Personal Injury",
  },
  {
    id: 2,
    name: "Jane Smith",
    content: "Excellent service and communication throughout my divorce process.",
    rating: 4,
    caseType: "Family Law",
  },
  {
    id: 3,
    name: "Mike Johnson",
    content: "Raymond's expertise in criminal defense was invaluable in my case.",
    rating: 5,
    caseType: "Criminal Defense",
  },
  {
    id: 4,
    name: "Sarah Brown",
    content: "The estate planning process was smooth and comprehensive.",
    rating: 4,
    caseType: "Estate Planning",
  },
  {
    id: 5,
    name: "David Lee",
    content: "I received fair compensation for my workplace injury thanks to Raymond's efforts.",
    rating: 5,
    caseType: "Personal Injury",
  },
]

export async function GET() {
  return NextResponse.json(stories)
}

export async function POST(request: Request) {
  const body = await request.json()
  const newStory = {
    id: stories.length + 1,
    name: body.name,
    content: body.content,
    rating: body.rating,
    caseType: body.caseType,
  }
  stories.push(newStory)
  return NextResponse.json(newStory, { status: 201 })
}
