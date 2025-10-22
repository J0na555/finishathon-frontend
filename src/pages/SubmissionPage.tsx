import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SubmissionPage() {
  const form = useForm();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="projectName" render={({ field }) => (
          <FormItem><FormLabel>Project Name</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
        )} />
        {/* Add more fields: desc, repo URL, file upload */}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}