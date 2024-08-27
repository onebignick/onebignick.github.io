import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-8">
      <Card>
        <CardHeader className="flex flex-row gap-4">
          <Avatar>
            <AvatarImage src="/images/profile_photo.jpg"/>
            <AvatarFallback>NO</AvatarFallback>
          </Avatar>
          <CardTitle>Hey 👋 I&apos;m Nicholas</CardTitle>
        </CardHeader>
        <CardContent>
          Welcome to my website, I&apos;m currently a sophmore in Singapore Management University studying Information Systems.
          I&apos;m interested in compilers, operating systems and simulations. As of Sep 2024 I am at GovTech Singapore.
          If you would like to contact me, I can be found at nicholas dot zhengkai dot ong at gmail dot com.
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row gap-4">
          <CardTitle>Languages Used</CardTitle>
        </CardHeader>
        <CardContent>
          As a software engineer I work with a variety of languages, here is a
          list of languages that I have worked with, by order of knowledge
        </CardContent>
        <CardFooter className="flex flex-row gap-4">
          <Badge>C++</Badge>
          <Badge>Java</Badge>
          <Badge>Python</Badge>
          <Badge>C#</Badge>
          <Badge>C</Badge>
          <Badge>Javascript</Badge>
          <Badge>Typescript</Badge>
          <Badge>Apex</Badge>
          <Badge>PHP</Badge>
        </CardFooter>
      </Card>
    </main>
  );
}
