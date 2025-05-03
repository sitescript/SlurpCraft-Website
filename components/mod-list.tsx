import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ModList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mod Categories</CardTitle>
        <CardDescription>Browse through the different types of mods included in SlurpCraft</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="exploration" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="exploration">Exploration</TabsTrigger>
            <TabsTrigger value="magic">Magic</TabsTrigger>
            <TabsTrigger value="QOL">QOL</TabsTrigger>
          </TabsList>
          <TabsContent value="exploration" className="space-y-3">
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Biomes O' Plenty</strong> - Adds new biomes and blocks to the world
              </li>
              <li>
                <strong>The Twilight Forest</strong> - A mystical dimension filled with new creatures and adventures
              </li>
              <li>
                <strong>The Aether</strong> - A paradise dimension floating above the clouds
              </li>
              <li>
                <strong>Alex's Mobs</strong> - Adds new creatures to the Minecraft world
              </li>
              <li>
                <strong>Waystones</strong> - Create teleportation networks for easy travel
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="magic" className="space-y-4">
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Iron’s Spells ‘n Spellbooks / Ice and Fire </strong> - Iron’s Spells ‘n Spellbooks adds a full magic system with wands, spells, and magical enemies, letting you learn and cast powerful abilities. Ice and Fire brings in dragons, mythical creatures, and new gear, making the world feel more epic and dangerous. Together, they turn Minecraft into a fantasy adventure full of magic and monsters.
              </li>
              </ul>
          </TabsContent>
          <TabsContent value="QOL" className="space-y-4">
            <ul className="ml-6 list-disc [&>li]:mt-2">
              <li>
                <strong>Just Enough Items (JEI)</strong> - Item and recipe viewer
              </li>
              <li>
                <strong>Mouse Tweaks</strong> - Improves inventory management
              </li>
              <li>
                <strong>Inventory Tweaks</strong> - Automatic inventory sorting
              </li>
              <li>
                <strong>Journeymap</strong> - Detailed map with waypoints
              </li>
              <li>
                <strong>Canary</strong> - Performance improvements and shaders
              </li>
              <li>
                <strong>AppleSkin</strong> - Shows food saturation and hunger info
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
