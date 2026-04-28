import { createFileRoute } from "@tanstack/react-router";
import TestimonialsEditorial from "@/components/ui/editorial-testimonial";

export const Route = createFileRoute("/editorial-demo")({
  component: EditorialDemoPage,
});

function EditorialDemoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-8 w-full">
      <TestimonialsEditorial />
    </main>
  );
}
