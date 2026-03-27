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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Pencil, Trash2, Search, Building2 } from "lucide-react"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/lib/i18n/context"

interface Organization {
  id: string
  name: string
  email: string
  phone: string
  address: string
  studentsCount: number
  status: "active" | "inactive"
  createdAt: string
}

const initialOrganizations: Organization[] = [
  {
    id: "1",
    name: "Oxford Prep Center",
    email: "info@oxfordprep.uz",
    phone: "+998 90 123 45 67",
    address: "Tashkent, Chilanzar",
    studentsCount: 450,
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Cambridge Learning Hub",
    email: "contact@cambridge.uz",
    phone: "+998 91 234 56 78",
    address: "Tashkent, Mirzo Ulugbek",
    studentsCount: 320,
    status: "active",
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    name: "IELTS Master Academy",
    email: "hello@ieltsmaster.uz",
    phone: "+998 93 345 67 89",
    address: "Samarkand",
    studentsCount: 280,
    status: "active",
    createdAt: "2024-03-10",
  },
  {
    id: "4",
    name: "Global English Center",
    email: "info@globalenglish.uz",
    phone: "+998 94 456 78 90",
    address: "Bukhara",
    studentsCount: 150,
    status: "inactive",
    createdAt: "2024-01-05",
  },
]

export default function OrganizationsPage() {
  const { t } = useI18n()
  const [organizations, setOrganizations] = useState<Organization[]>(initialOrganizations)
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingOrg, setEditingOrg] = useState<Organization | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })

  const filteredOrganizations = organizations.filter(
    (org) =>
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAdd = () => {
    const newOrg: Organization = {
      id: Date.now().toString(),
      ...formData,
      studentsCount: 0,
      status: "active",
      createdAt: new Date().toISOString().split("T")[0],
    }
    setOrganizations([...organizations, newOrg])
    setFormData({ name: "", email: "", phone: "", address: "" })
    setIsAddDialogOpen(false)
  }

  const handleEdit = () => {
    if (!editingOrg) return
    setOrganizations(
      organizations.map((org) =>
        org.id === editingOrg.id ? { ...org, ...formData } : org
      )
    )
    setEditingOrg(null)
    setFormData({ name: "", email: "", phone: "", address: "" })
    setIsEditDialogOpen(false)
  }

  const handleDelete = (id: string) => {
    setOrganizations(organizations.filter((org) => org.id !== id))
  }

  const openEditDialog = (org: Organization) => {
    setEditingOrg(org)
    setFormData({
      name: org.name,
      email: org.email,
      phone: org.phone,
      address: org.address,
    })
    setIsEditDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{t.admin.organization}</h1>
          <p className="text-muted-foreground">{t.admin.managingOrganizations}</p>
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
              <DialogTitle className="text-foreground">Add New Organization</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Organization Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter organization name"
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
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter phone number"
                  className="bg-secondary border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Enter address"
                  className="bg-secondary border-border"
                />
              </div>
              <Button onClick={handleAdd} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Add Organization
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
              placeholder="Search organizations..."
              className="pl-10 bg-secondary border-border"
            />
          </div>
        </CardContent>
      </Card>

      {/* Organizations Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            All Organizations ({filteredOrganizations.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-secondary/50">
                  <TableHead className="text-muted-foreground">Name</TableHead>
                  <TableHead className="text-muted-foreground">Contact</TableHead>
                  <TableHead className="text-muted-foreground">Students</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrganizations.map((org) => (
                  <TableRow key={org.id} className="border-border hover:bg-secondary/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{org.name}</div>
                        <div className="text-sm text-muted-foreground">{org.address}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm text-foreground">{org.email}</div>
                        <div className="text-sm text-muted-foreground">{org.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-foreground">{org.studentsCount}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          org.status === "active"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {org.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => openEditDialog(org)}
                          className="hover:bg-secondary"
                        >
                          <Pencil className="w-4 h-4 text-muted-foreground" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(org.id)}
                          className="hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground">Edit Organization</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Organization Name</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              <Label htmlFor="edit-phone">Phone</Label>
              <Input
                id="edit-phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-secondary border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-address">Address</Label>
              <Input
                id="edit-address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-secondary border-border"
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
