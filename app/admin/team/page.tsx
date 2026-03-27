"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Pencil, Trash2, Search, Users } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useI18n } from "@/lib/i18n/context"

interface TeamMember {
  id: string
  name: string
  role: string
  email: string
  bio: string
}

const initialTeamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Jamshid Karimov",
    role: "CEO & Founder",
    email: "jamshid@testium.uz",
    bio: "Former educator with 10+ years in EdTech. Passionate about AI in education.",
  },
  {
    id: "2",
    name: "Dilnoza Rahimova",
    role: "CTO",
    email: "dilnoza@testium.uz",
    bio: "AI/ML expert with background in NLP and educational technology systems.",
  },
  {
    id: "3",
    name: "Akmal Turaev",
    role: "Head of Product",
    email: "akmal@testium.uz",
    bio: "Product designer focused on creating intuitive educational experiences.",
  },
  {
    id: "4",
    name: "Malika Azimova",
    role: "Head of AI",
    email: "malika@testium.uz",
    bio: "PhD in Computer Science, specializing in natural language processing.",
  },
  {
    id: "5",
    name: "Botir Yusupov",
    role: "Lead Engineer",
    email: "botir@testium.uz",
    bio: "Full-stack developer passionate about scalable education platforms.",
  },
  {
    id: "6",
    name: "Nodira Saidova",
    role: "Head of Success",
    email: "nodira@testium.uz",
    bio: "Customer success expert helping institutions maximize their results.",
  },
]

export default function TeamPage() {
  const { t } = useI18n()
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers)
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    bio: "",
  })

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAdd = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      ...formData,
    }
    setTeamMembers([...teamMembers, newMember])
    setFormData({ name: "", role: "", email: "", bio: "" })
    setIsAddDialogOpen(false)
  }

  const handleEdit = () => {
    if (!editingMember) return
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === editingMember.id ? { ...member, ...formData } : member
      )
    )
    setEditingMember(null)
    setFormData({ name: "", role: "", email: "", bio: "" })
    setIsEditDialogOpen(false)
  }

  const handleDelete = (id: string) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id))
  }

  const openEditDialog = (member: TeamMember) => {
    setEditingMember(member)
    setFormData({
      name: member.name,
      role: member.role,
      email: member.email,
      bio: member.bio,
    })
    setIsEditDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t.admin.team}</h1>
          <p className="text-muted-foreground">{t.admin.teamManagement}</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              {t.admin.addNew}
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">{t.admin.addNew} {t.admin.team}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter full name"
                  className="bg-secondary border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role / Position</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g., Head of Marketing"
                  className="bg-secondary border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email address"
                  className="bg-secondary border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Short bio about the team member"
                  className="bg-secondary border-border min-h-[100px]"
                />
              </div>
              <Button onClick={handleAdd} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Add Team Member
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card className="bg-card border-border">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search team members..."
              className="pl-10 bg-secondary border-border"
            />
          </div>
        </CardContent>
      </Card>

      {/* Team Members Grid */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Users className="w-5 h-5" />
            Team Members ({filteredMembers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-secondary/50 rounded-xl p-4 border border-border hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-400">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openEditDialog(member)}
                      className="h-8 w-8 hover:bg-secondary"
                    >
                      <Pencil className="w-4 h-4 text-muted-foreground" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(member.id)}
                      className="h-8 w-8 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </Button>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-blue-400 mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{member.bio}</p>
                <p className="text-xs text-muted-foreground mt-2">{member.email}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Edit Team Member</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Full Name</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-role">Role / Position</Label>
              <Input
                id="edit-role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-bio">Bio</Label>
              <Textarea
                id="edit-bio"
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="bg-secondary border-border min-h-[100px]"
              />
            </div>
            <Button onClick={handleEdit} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
