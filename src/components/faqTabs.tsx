import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FaqTabs() {
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="academics">Academics</TabsTrigger>
        <TabsTrigger value="random">Random</TabsTrigger>
      </TabsList>
      <TabsContent className="w-full" value="general">
        <Card>
          <CardHeader>
            <CardTitle>General Advice Section</CardTitle>
            <CardDescription>
              Here&apos;s a compilation of general advice which might be useful
              for the day to day in college.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              add a cmponent that maps over an object that contains title and a
              drop down for details
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="academics">
        <Card>
          <CardHeader>
            <CardTitle>Academic Advice Section</CardTitle>
            <CardDescription>
            Here&apos;s a compilation of academic advice to make sure you don&apos; fuck your gpa up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              add a cmponent that maps over an object that contains title and a
              drop down for details
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="random">
        <Card>
          <CardHeader>
            <CardTitle>Random</CardTitle>
            <CardDescription>
              Random pieces of information that your seniors thought would help out
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">content of the cards</div>
            <div className="space-y-1">content of the cards</div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
