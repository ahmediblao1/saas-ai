import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const DashboardPage = () =>  {
  return (
    <div>
      <p className="">DashboardPage (protected)</p>
      <UserButton afterSignOutUrl="/"/>
      <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

    </div>
  )
}

export default DashboardPage