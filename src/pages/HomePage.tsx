import Countdown from "react-countdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function HomePage() {
  const targetDate = new Date("2025-11-01T00:00:00"); 
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader><CardTitle>Next Hackathon Countdown</CardTitle></CardHeader>
        <CardContent>
          <Countdown date={targetDate} renderer={({ days, hours, minutes, seconds }) => (
            <div className="text-4xl">{days}d {hours}h {minutes}m {seconds}s</div>
          )} />
          <Button className="mt-4">Register Now</Button>
        </CardContent>
      </Card>
      {/* Add teasers for upcoming hackathons */}
    </div>
  );
}