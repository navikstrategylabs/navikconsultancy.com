import { createFileRoute } from "@tanstack/react-router";
import { Testimonial } from "@/components/ui/design-testimonial";

export const Route = createFileRoute("/testimonial-demo")({
  component: TestimonialDemoPage,
});

function TestimonialDemoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background w-full">
      <Testimonial />
    </main>
  );
}
