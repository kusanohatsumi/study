import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <Button size="lg" className="shadow-xl">
        Click me
      </Button>
      <Card className="w-80 h-10 ">
        <p className="text-center">デザインファイルを新規作成</p>
      </Card>
    </>
  );
}
