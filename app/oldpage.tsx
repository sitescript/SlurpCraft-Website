"use client"

// icons
import { ArrowRight, Download, AlertCircle } from "lucide-react"
import { BiLogoDiscord as Discord } from "react-icons/bi"
import { IoLeafSharp as Biome } from "react-icons/io5"
import { FaHandHoldingHeart as QOL } from "react-icons/fa"
import { GiMagicAxe as Steampunk } from "react-icons/gi"
// other site imports
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeatureCard } from "@/components/feature-card"
import { ModList } from "@/components/mod-list"
import { ServerRequirements } from "@/components/server-requirements"
import { YouTubePlayer } from "@/components/youtube-player"
import { FloatingDots } from "@/components/floating-dots"
import { useState } from "react"
import { DownloadDialog } from "@/components/download-dialog"

export default function Home() {
  const [showDownloadDialog, setShowDownloadDialog] = useState(false)
  return (
    <div className="flex min-h-screen flex-col">
      <FloatingDots />
      <DownloadDialog open={showDownloadDialog} onOpenChange={setShowDownloadDialog} />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
              <Image
                src="https://cdn.nest.rip/uploads/2bbb2003-d370-4355-a7c8-71e0c922e0b9.png"
                alt=""
                width={40}
                height={40}
                className="h-8 w-auto"
              />
              <span className="inline-block font-bold">SlurpCraft</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#installation"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Installation
              </Link>
              <Link
                href="#server-setup"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Server Setup
              </Link>
              <Link
                href="#mods"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Mods
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button
                variant="default"
                className="transition-transform hover:scale-105"
                onClick={() => setShowDownloadDialog(true)}
              >
                <Download className="mr-2 h-4 w-4 animate-bounce-subtle" />
                Download on CurseForge
              </Button>
              <Button asChild variant="outline" className="transition-transform hover:scale-105">
                <Link href="https://discord.gg/yzxyWhRSbC" target="_blank">
                  <Discord className="mr-2 h-4 w-4 animate-pulse-subtle" />
                  Discord
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp7930285.jpg")' }}
          ></div>
          <div className="container relative z-10 flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="animate-fade-in font-minecraft text-3xl sm:text-5xl md:text-6xl lg:text-7xl">SlurpCraft</h1>
            <p className="animate-fade-in-delay-1 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A carefully curated Minecraft modpack for version 1.20-1.20.1 Forge that enhances your gameplay experience
              with new adventures, tech, and quality of life improvements.
            </p>
            <div className="animate-fade-in-delay-2 space-x-4">
              <Button
                size="lg"
                className="transition-transform hover:scale-105"
                onClick={() => setShowDownloadDialog(true)}
              >
                <Download className="mr-2 h-4 w-4 animate-bounce-subtle" />
                Download Now
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="animate-slide-up-on-scroll font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Installation Guide
            </h2>
            <p className="animate-slide-up-on-scroll-delay-1 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Watch our official installation tutorial to get started with SlurpCraft
            </p>
          </div>
          <div className="mx-auto max-w-[58rem] animate-slide-up-on-scroll-delay-2">
            <YouTubePlayer videoId="NMdLhfa9fCI" title="SlurpCraft Modpack Installation Guide" />
          </div>
        </section>
        <section id="features" className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/37468.png")' }}
          ></div>
          <div className="relative z-10 mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="animate-slide-up-on-scroll font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="animate-slide-up-on-scroll-delay-1 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              SlurpCraft combines the best mods to create a balanced and enjoyable Minecraft experience.
            </p>
          </div>
          <div className="relative z-10 mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="animate-slide-up-on-scroll-delay-2">
              <FeatureCard
                title="Magic & Automation" 
                description="Our modpack has a touch of Magic such as spells and mobs with certain powers, with a touch of automatic machines!"
                icon={<Steampunk className="h-10 w-10" />}
              />
            </div>
            <div className="animate-slide-up-on-scroll-delay-3">
              <FeatureCard
                title="New Biomes"
                description="Explore unique biomes and dimensions filled with new creatures, resources, and challenges."
                icon={<Biome className="h-10 w-10" />}
              />
            </div>
            <div className="animate-slide-up-on-scroll-delay-4">
              <FeatureCard
                title="Quality of Life"
                description="Enjoy improved inventory management, crafting helpers, and UI enhancements."
                icon={<QOL className="h-10 w-10" />}
              />
            </div>
          </div>
        </section>
        <section id="installation" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="animate-slide-up-on-scroll font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Installation
            </h2>
            <p className="animate-slide-up-on-scroll-delay-1 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Get started with SlurpCraft in just a few simple steps.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem]">
            <div className="animate-slide-up-on-scroll-delay-2">
              <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle>How to Install</CardTitle>
                  <CardDescription>Follow these steps to get SlurpCraft running on your computer</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="curseforge" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="curseforge">CurseForge App</TabsTrigger>
                      <TabsTrigger value="manual">Manual Installation</TabsTrigger>
                    </TabsList>
                    <TabsContent value="curseforge" className="space-y-4">
                      <ol className="ml-6 list-decimal [&>li]:mt-2">
                        <li>
                          Download and install the{" "}
                          <a href="https://www.curseforge.com/download/app" className="text-primary underline">
                            CurseForge App
                          </a>
                        </li>
                        <li>Open the app and select Minecraft</li>
                        <li>Click "Browse Modpacks" and search for "SlurpCraft"</li>
                        <li>Click "Install" on the SlurpCraft modpack</li>
                        <li>Once installed, click "Play" to launch the game</li>
                      </ol>
                      <p className="mt-4 text-sm text-muted-foreground">
                        Note: The CurseForge app will automatically handle all mod installations and updates for you.
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        If you encounter any issues, check the{" "}
                        <a href="https://discord.gg/yzxyWhRSbC" className="text-primary underline">
                          Discord
                        </a>{" "}
                        for help.
                      </p>
                    </TabsContent>
                    <TabsContent value="manual" className="space-y-4">
                      <ol className="ml-6 list-decimal [&>li]:mt-2">
                        <li>
                          Install{" "}
                          <a
                            href="https://files.minecraftforge.net/net/minecraftforge/forge/"
                            className="text-primary underline"
                          >
                            Forge for Minecraft 1.20-1.20.1
                          </a>
                        </li>
                        <li>
                          Download the SlurpCraft modpack ZIP file from{" "}
                          <a
                            href="https://www.curseforge.com/minecraft/modpacks/slurpcraft"
                            className="text-primary underline"
                          >
                            CurseForge
                          </a>
                        </li>
                        <li>
                          Extract the ZIP file to your Minecraft mods folder (usually at %appdata%/.minecraft/mods)
                        </li>
                        <li>Launch Minecraft with the Forge profile</li>
                      </ol>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Server Setup Section */}
        <section id="server-setup" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="animate-slide-up-on-scroll font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Server Setup Guide
            </h2>
            <p className="animate-slide-up-on-scroll-delay-1 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Create your own SlurpCraft server to play with friends.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 md:max-w-[64rem]">
            <div className="animate-slide-up-on-scroll-delay-2 w-full">
              <ServerRequirements />
            </div>

            <div className="animate-slide-up-on-scroll-delay-3">
              <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle>Server Installation</CardTitle>
                  <CardDescription>Step-by-step guide to set up your SlurpCraft server</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="hosting" className="w-full">
                    <TabsList className="grid w-full grid-cols-1">
                      {/* <TabsTrigger value="self-hosted">Self-Hosted</TabsTrigger> */}
                      <TabsTrigger value="hosting">Hosting Provider</TabsTrigger>
                    </TabsList>
                    {/* Self-hosted tab content - hidden but preserved in code */}
                    <TabsContent value="self-hosted" className="space-y-4">
                      <div className="grid gap-6">
                        {/* Step 1: Download */}
                        <div className="rounded-lg border p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                          <h3 className="text-lg font-semibold text-primary">Step 1: Download Server Files</h3>
                          <p className="mt-1 text-muted-foreground">First, you'll need to get the server files:</p>
                          <ol className="ml-6 mt-2 list-decimal [&>li]:mt-2">
                            <li>
                              Go to the{" "}
                              <a
                                href="https://www.curseforge.com/minecraft/modpacks/slurpcraft/files"
                                className="text-primary underline"
                              >
                                SlurpCraft CurseForge page
                              </a>
                            </li>
                            <li>Find the latest version and click on "Files"</li>
                            <li>Look for the file labeled "Server Pack" and download it</li>
                            <li>Create a new folder on your computer where you want to run the server</li>
                            <li>Extract the downloaded ZIP file into this folder</li>
                          </ol>
                        </div>

                        {/* Step 2: Java Installation */}
                        <div className="rounded-lg border p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                          <h3 className="text-lg font-semibold text-primary">
                            Step 2: Install Java (Skip this if you already have java installed)
                          </h3>
                          <p className="mt-1 text-muted-foreground">Minecraft 1.20.x requires Java 17 or newer:</p>
                          <ol className="ml-6 mt-2 list-decimal [&>li]:mt-2">
                            <li>
                              Download and install{" "}
                              <a href="https://adoptium.net/" className="text-primary underline">
                                Eclipse Temurin Java 17
                              </a>{" "}
                              (recommended) or{" "}
                              <a
                                href="https://www.oracle.com/java/technologies/downloads/#java17"
                                className="text-primary underline"
                              >
                                Oracle Java 17
                              </a>
                            </li>
                            <li>
                              To verify your Java installation, open a command prompt or terminal and type:
                              <div className="mt-2 rounded-md bg-slate-800 p-2 font-mono text-sm">java -version</div>
                            </li>
                            <li>You should see output indicating Java 17 or higher</li>
                          </ol>
                        </div>

                        {/* Step 3: First Run */}
                        <div className="rounded-lg border p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                          <h3 className="text-lg font-semibold text-primary">Step 3: First Server Run</h3>
                          <p className="mt-1 text-muted-foreground">
                            Now you'll need to run the server for the first time:
                          </p>
                          <ol className="ml-6 mt-2 list-decimal [&>li]:mt-2">
                            <li>
                              <strong>On Windows:</strong>
                              <ul className="ml-6 list-disc [&>li]:mt-1">
                                <li>Navigate to your server folder</li>
                                <li>
                                  Double-click the <code>start.bat</code> or <code>run.bat</code> file
                                </li>
                                <li>
                                  If you don't see a .bat file, look for a file named <code>forge-installer.jar</code>
                                </li>
                                <li>
                                  If using the installer, run:
                                  <div className="mt-2 rounded-md bg-slate-800 p-2 font-mono text-sm">
                                    java -jar forge-installer.jar --installServer
                                  </div>
                                </li>
                                <li>After installation completes, you should see a new start script</li>
                              </ul>
                            </li>
                            <li>
                              <strong>On Linux/Mac:</strong>
                              <p className="mt-1 text-muted-foreground">
                                Skip this if you are using a panel like pterodactyl and goto the the "Hosting Provider
                                Tab"
                              </p>
                              <ul className="ml-6 list-disc [&>li]:mt-1">
                                <li>Open terminal and navigate to your server folder</li>
                                <li>
                                  Make the start script executable:
                                  <div className="mt-2 rounded-md bg-slate-800 p-2 font-mono text-sm">
                                    chmod +x start.sh
                                  </div>
                                </li>
                                <li>
                                  Run the script:
                                  <div className="mt-2 rounded-md bg-slate-800 p-2 font-mono text-sm">./start.sh</div>
                                </li>
                                <li>
                                  If you don't see a .sh file, look for a file named <code>forge-installer.jar</code>{" "}
                                  and run:
                                  <div className="mt-2 rounded-md bg-slate-800 p-2 font-mono text-sm">
                                    java -jar forge-installer.jar --installServer
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>The first run will fail because you need to accept the Minecraft EULA</li>
                          </ol>
                        </div>

                        {/* Step 4: Accept EULA */}
                        <div className="rounded-lg border p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                          <h3 className="text-lg font-semibold text-primary">Step 4: Accept the EULA</h3>
                          <p className="mt-1 text-muted-foreground">
                            Before the server can run, you must accept Minecraft's End User License Agreement:
                          </p>
                          <ol className="ml-6 mt-2 list-decimal [&>li]:mt-2">
                            <li>
                              After the first run attempt, a file named <code>eula.txt</code> will be created in your
                              server folder
                            </li>
                            <li>Open this file with any text editor (Notepad, VS Code, etc.)</li>
                            <li>
                              Find the line that says <code>eula=false</code> and change it to <code>eula=true</code>
                            </li>
                            <li>Save and close the file</li>
                          </ol>
                        </div>

                        {/* Step 5: Server Start */}
                        <div className="rounded-lg border p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                          <h3 className="text-lg font-semibold text-primary">Step 5: Start Your Server</h3>
                          <p className="mt-1 text-muted-foreground">Now you can start your server properly:</p>
                          <ol className="ml-6 mt-2 list-decimal [&>li]:mt-2">
                            <li>Run the start script again (as in Step 3)</li>
                            <li>This time, the server should start up successfully</li>
                            <li>
                              The first startup may take several minutes as it generates the world and prepares all mods
                            </li>
                            <li>You'll know it's ready when you see a message like "Done! For help, type 'help'"</li>
                          </ol>
                        </div>

                        {/* Step 6: Connecting */}
                        <div className="rounded-lg border p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md">
                          <h3 className="text-lg font-semibold text-primary">Step 6: Connecting to Your Server</h3>
                          <p className="mt-1 text-muted-foreground">To connect to your server:</p>
                          <ol className="ml-6 mt-2 list-decimal [&>li]:mt-2">
                            <li>
                              <strong>Local connections (same network):</strong>
                              <ul className="ml-6 list-disc [&>li]:mt-1">
                                <li>Launch Minecraft with the SlurpCraft modpack installed</li>
                                <li>Go to Multiplayer → Add Server</li>
                                <li>
                                  For Server Address, enter <code>localhost</code> or <code>127.0.0.1</code> if on the
                                  same computer
                                </li>
                                <li>
                                  If on another computer on the same network, use the local IP address of the server
                                  computer
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>External connections (different network):</strong>
                              <ul className="ml-6 list-disc [&>li]:mt-1">
                                <li>You'll need to set up port forwarding on your router</li>
                                <li>Forward port 25565 (TCP) to the local IP address of your server computer</li>
                                <li>Players will connect using your public IP address</li>
                                <li>You can find your public IP by searching "what is my IP" on Google</li>
                                <li>Consider using a dynamic DNS service if your IP changes frequently</li>
                              </ul>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="hosting" className="space-y-4">
                      <h3 className="text-lg font-semibold">Using a Hosting Provider</h3>
                      <p className="text-muted-foreground">
                        If you don't want to host the server yourself, you can use a Minecraft server hosting provider:
                      </p>
                      <ol className="ml-6 list-decimal [&>li]:mt-2">
                        <li>
                          Choose a hosting provider that supports modded Minecraft servers:
                          <ul className="ml-6 list-disc [&>li]:mt-1">
                            <li>
                              <a href="https://www.bisecthosting.com/" className="text-primary underline">
                                Bisect Hosting (Paid)
                              </a>
                            </li>
                            <li>
                              <a href="https://www.apexminecrafthosting.com/" className="text-primary underline">
                                Apex Hosting (Paid)
                              </a>
                            </li>
                            <li>
                              <a href="https://www.shockbyte.com/" className="text-primary underline">
                                Shockbyte (Paid)
                              </a>
                            </li>
                            <li>
                              <a href="https://www.aternos.org/" className="text-primary underline">
                                Aternos (Free)
                              </a>
                            </li>
                            <li>
                              <a href="https://play.hosting/" className="text-primary underline">
                                Play.Hosting (Free)
                              </a>
                            </li>
                            <li>
                              <a href="https://magmanode.com/" className="text-primary underline">
                                Magmanode (Free)
                              </a>
                            </li>
                            <li>
                              <a href="https://credentials.minehut.app/" className="text-primary underline">
                                Minehut (Free)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>During setup, select Forge for Minecraft 1.20-1.20.1 as your server type</li>
                        <li>
                          After your server is created, use the hosting provider's file manager to upload the SlurpCraft
                          server files.
                        </li>
                        <p className="text-muted-foreground">
                          (Some providers have a install option already for modpacks. If this is you then this doesnt
                          apply to you.)
                        </p>
                        <li>Then simple as that. Start your server through the hosting control panel.</li>
                        <ul className="text-muted-foreground">
                          <li>Note: Some hosting providers may have limitations:</li>
                        </ul>
                        <ul className="ml-6 list-disc [&>li]:mt-1 text-muted-foreground">
                          <li>Degraded Server Performance</li>
                          <li>Limited Server Resources</li>
                          <li>Limited Mod Support</li>
                          <li>Server forced downtime (Not-24/7)</li>
                        </ul>
                      </ol>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-up-on-scroll-delay-4">
              <Card className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle>Troubleshooting</CardTitle>
                  <CardDescription>Common issues and their solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4 transition-all duration-300 hover:border-red-500/30 hover:shadow-md">
                      <h3 className="flex items-center text-lg font-semibold">
                        <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                        Server crashes on startup
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        Check the logs in the <code>logs</code> folder or <code>crash-reports</code> folder. Common
                        issues:
                      </p>
                      <ul className="ml-6 list-disc [&>li]:mt-1">
                        <li>Incompatible Java version - ensure you're using Java 17 or newer</li>
                        <li>Missing mod files or incorrect verisons - try re-downloading the server pack</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border p-4 transition-all duration-300 hover:border-red-500/30 hover:shadow-md">
                      <h3 className="flex items-center text-lg font-semibold">
                        <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                        Players can't connect to the server
                      </h3>
                      <ul className="ml-6 list-disc [&>li]:mt-1">
                        <li>
                          Check if port 25565 is open on your server <code>ufw allow 25565</code> (Only for people using
                          self-hosted linux servers)
                        </li>
                        <li>
                          Verify players are using the exact same modpack version with the same mods as the ones on the
                          server. (This doesn't count for Client-sided mods in the modpack!)
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border p-4 transition-all duration-300 hover:border-red-500/30 hover:shadow-md">
                      <h3 className="flex items-center text-lg font-semibold">
                        <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
                        Server & Client lag or performance issues
                      </h3>
                      <ul className="ml-6 list-disc [&>li]:mt-1">
                        <li>
                          This all depends on your severs CPU cores and RAM. When using free servers this become a
                          problem. We are looking to add more performance touches to increase your experience.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="mods" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="animate-slide-up-on-scroll font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Featured Mods
            </h2>
            <p className="animate-slide-up-on-scroll-delay-1 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              SlurpCraft includes a carefully selected collection of mods that work together seamlessly.
            </p>
          </div>
          <div className="mx-auto md:max-w-[64rem]">
            <div className="animate-slide-up-on-scroll-delay-2">
              <ModList />
            </div>
          </div>
        </section>
        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="animate-slide-up-on-scroll font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Ready to Play?
            </h2>
            <p className="animate-slide-up-on-scroll-delay-1 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join the SlurpCraft community and start your adventure today!
            </p>
            <Button
              size="lg"
              className="animate-slide-up-on-scroll-delay-2 mt-4 transition-transform hover:scale-105"
              onClick={() => setShowDownloadDialog(true)}
            >
              <Download className="mr-2 h-4 w-4 animate-bounce-subtle" />
              Download on CurseForge
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="https://cdn.nest.rip/uploads/2bbb2003-d370-4355-a7c8-71e0c922e0b9.png"
                  alt="SlurpCraft Logo"
                  width={40}
                  height={40}
                  className="h-8 w-auto mr-2"
                />
                <span className="font-bold text-lg">SlurpCraft</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A carefully curated Minecraft modpack for version 1.20-1.20.1 Forge.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.curseforge.com/minecraft/modpacks/slurpcraft"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    CurseForge
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/yzxyWhRSbC" className="text-sm text-muted-foreground hover:text-primary">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <p className="text-xs text-muted-foreground">
                This website was created by a{" "}
                <a
                  href="https://crxaw.tech"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  third-party
                </a>{" "}
                and is not affiliated with Mojang, Microsoft, or any of the mod creators.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                © {new Date().getFullYear()} SlurpCraft. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
