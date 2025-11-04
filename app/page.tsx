import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChevronDown,
  Github,
  Star,
  Bot,
  Database,
  FileText,
  Globe,
  Edit,
  Server,
  Sheet,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const templates = [
    {
      title: "AI agent chat",
      icons: [
        <Bot key="1" className="w-5 h-5" />,
        <Database key="2" className="w-5 h-5" />,
        <Server key="3" className="w-5 h-5" />,
      ],
      additionalCount: 2,
      author: {
        name: "n8n Team",
        avatar: "/n8n-logo.jpg",
        verified: true,
      },
    },
    {
      title: "RAG Chatbot for Company Documents using Google Drive and Gemini",
      icons: [
        <FileText key="1" className="w-5 h-5 text-blue-400" />,
        <FileText key="2" className="w-5 h-5 text-green-400" />,
        <Database key="3" className="w-5 h-5" />,
      ],
      additionalCount: 9,
      author: {
        name: "Mihai Farcas",
        avatar: "/diverse-group.png",
        verified: true,
      },
    },
    {
      title: "AI chatbot that can search the web",
      icons: [
        <Bot key="1" className="w-5 h-5" />,
        <Database key="2" className="w-5 h-5" />,
        <Globe key="3" className="w-5 h-5" />,
      ],
      additionalCount: 4,
      author: {
        name: "n8n Team",
        avatar: "/n8n-logo.jpg",
        verified: true,
      },
    },
    {
      title: "Autonomous AI crawler",
      icons: [
        <Globe key="1" className="w-5 h-5 text-indigo-400" />,
        <Database key="2" className="w-5 h-5" />,
        <Edit key="3" className="w-5 h-5" />,
      ],
      additionalCount: 13,
      author: {
        name: "Oskar",
        avatar: "/diverse-group.png",
        verified: true,
      },
    },
    {
      title: "Chat with a Google Sheet using AI",
      icons: [
        <Sheet key="1" className="w-5 h-5 text-green-500" />,
        <Edit key="2" className="w-5 h-5" />,
        <Server key="3" className="w-5 h-5" />,
      ],
      additionalCount: 8,
      author: {
        name: "David Roberts",
        avatar: "/diverse-group.png",
        verified: true,
      },
    },
    {
      title: "AI agent that can scrape webpages",
      icons: [
        <Globe key="1" className="w-5 h-5 text-indigo-400" />,
        <Server key="2" className="w-5 h-5" />,
        <Edit key="3" className="w-5 h-5" />,
      ],
      additionalCount: 7,
      author: {
        name: "Eduard",
        avatar: "/diverse-group.png",
        verified: true,
      },
    },
  ]

  return (
    <div className="min-h-screen bg-[#1a1b2e] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                </div>
                <span>n8n</span>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors">
                  Product <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors">
                  Use cases <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors">
                  Docs <ChevronDown className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors">
                  Community <ChevronDown className="w-4 h-4" />
                </button>
                <Link href="/enterprise" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Enterprise
                </Link>
                <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com"
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/40 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
                <Star className="w-3 h-3 fill-current" />
                <span className="text-sm">153,785</span>
              </Link>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign in
              </Button>
              <Button className="bg-[#ff6d5a] hover:bg-[#ff5a45] text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Begin with a proven foundation. Fashion it to fit your use case. Fast. n8n's library of 600+{" "}
          <Link href="/community" className="text-white underline hover:text-gray-200">
            community
          </Link>
          -built templates makes getting started with agentic workflows simple. Even if you're new to AI.
        </p>

        <Button
          size="lg"
          className="mt-8 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e3] hover:to-[#7c4de7] text-white px-8 py-6 text-base"
        >
          Browse all AI agent templates
        </Button>
      </section>

      {/* Templates Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {templates.map((template, index) => (
            <Card
              key={index}
              className="bg-[#252640] border-white/10 hover:border-white/20 transition-all duration-300 p-6 flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  {template.icons.map((icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-lg bg-[#1a1b2e] flex items-center justify-center text-gray-400"
                    >
                      {icon}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-lg bg-[#1a1b2e] flex items-center justify-center text-sm text-gray-400">
                    +{template.additionalCount}
                  </div>
                </div>

                <h3 className="text-white text-lg font-normal leading-relaxed mb-6">{template.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={template.author.avatar || "/placeholder.svg"} alt={template.author.name} />
                  <AvatarFallback>{template.author.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-300">{template.author.name}</span>
                {template.author.verified && <CheckCircle2 className="w-4 h-4 text-[#ff6d5a] fill-current" />}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
