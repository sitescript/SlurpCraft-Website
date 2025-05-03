"use client"

import { useState } from "react"
import { Cpu, HardDrive, Users, Server, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ServerRequirements() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Server className="mr-2 h-5 w-5 text-primary" />
          Server Requirements
        </CardTitle>
        <CardDescription>Recommended specifications for running a SlurpCraft server</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="hardware" className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="hardware">Hardware</TabsTrigger>
          </TabsList>

          <TabsContent value="hardware" className="space-y-4 pt-4">
            <div className="grid gap-6 md:grid-cols-1">
              <div className="flex flex-col space-y-2">
                <div
                  className="flex items-center justify-between cursor-pointer p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80"
                  onClick={() => toggleSection("cpu")}
                >
                  <div className="flex items-center">
                    <div className="rounded-full bg-primary/10 p-2 text-primary mr-3">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">CPU</h3>
                  </div>
                  {expandedSection === "cpu" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>

                {expandedSection === "cpu" && (
                  <div className="p-3 bg-secondary/20 rounded-lg ml-4 animate-fade-in">
                    <p className="text-sm text-muted-foreground">
                      <strong>Recommended:</strong> Quad-core processor 3.0+ GHz
                      <br />
                      (Intel i5/i7 or AMD Ryzen 5/7 recommended)
                      <br />
                      <strong>Minimum:</strong> Dual-core processor 2.5+ GHz
                      <br />
                      <strong>Estimated need:</strong> 2-4 cores
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <div
                  className="flex items-center justify-between cursor-pointer p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80"
                  onClick={() => toggleSection("ram")}
                >
                  <div className="flex items-center">
                    <div className="rounded-full bg-primary/10 p-2 text-primary mr-3">
                      <HardDrive className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">RAM</h3>
                  </div>
                  {expandedSection === "ram" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>

                {expandedSection === "ram" && (
                  <div className="p-3 bg-secondary/20 rounded-lg ml-4 animate-fade-in">
                    <p className="text-sm text-muted-foreground">
                      <strong>Minimum:</strong> 3.5GB RAM
                      <br />
                      <strong>Recommended:</strong> 4-6GB RAM
                      <br />
                      <strong>Optimal:</strong> 8GB RAM
                      <br />
                      <strong>Note:</strong> RAM usage increases with player count and loaded chunks
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <div
                  className="flex items-center justify-between cursor-pointer p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80"
                  onClick={() => toggleSection("players")}
                >
                  <div className="flex items-center">
                    <div className="rounded-full bg-primary/10 p-2 text-primary mr-3">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold">Player Capacity</h3>
                  </div>
                  {expandedSection === "players" ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>

                {expandedSection === "players" && (
                  <div className="p-3 bg-secondary/20 rounded-lg ml-4 animate-fade-in">
                    <p className="text-sm text-muted-foreground">
                      <strong>1-5 players:</strong> 3.6GB RAM
                      <br />
                      <strong>5-10 players:</strong> 6GB RAM
                      <br />
                      <strong>10-20 players:</strong> 8GB+ RAM
                      <br />
                      <strong>Note:</strong> Player activity affects server load
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
              <h3 className="flex items-center font-semibold text-amber-400">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Important Note
              </h3>
              <p className="text-sm text-muted-foreground">
                SlurpCraft is an optimized modpack but can be resource intensive. For the best experience, we recommend
                using a dedicated machine or a paid hosting service rather than trying to run both the server and client
                on the same computer.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
