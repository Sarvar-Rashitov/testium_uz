"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, FileText, TrendingUp } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export default function AdminDashboard() {
  const { t } = useI18n()

  const stats = [
    {
      title: t.admin.totalOrganizations,
      value: "24",
      change: `+3 ${t.admin.thisMonth}`,
      icon: Building2,
    },
    {
      title: t.admin.teamMembers,
      value: "6",
      change: t.admin.active,
      icon: Users,
    },
    {
      title: t.admin.activeExams,
      value: "156",
      change: `+12% ${t.admin.fromLastWeek}`,
      icon: FileText,
    },
    {
      title: t.admin.totalStudents,
      value: "12,450",
      change: `+8% ${t.admin.growth}`,
      icon: TrendingUp,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t.admin.dashboard}</h1>
        <p className="text-muted-foreground">{t.admin.welcome}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <a
              href="/admin/organizations"
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Building2 className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-foreground">Manage Organizations</span>
            </a>
            <a
              href="/admin/team"
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Users className="w-5 h-5 text-indigo-400" />
              <span className="text-sm text-foreground">Manage Team Members</span>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { text: "New organization added: Oxford Prep", time: "2 hours ago" },
                { text: "Team member updated: Akmal Turaev", time: "5 hours ago" },
                { text: "New organization added: Cambridge Center", time: "1 day ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <p className="text-sm text-foreground">{activity.text}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
