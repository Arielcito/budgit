import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Database } from "@/types/supabase";
import { Navbar } from "@/components/Navbar";

type Expenses = Database['public']['Tables']['expenses']['Row']

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  // Fetch data from the database
  const { data: expenses } = await supabase.from("expenses").select();

  return (
    <div className="flex items-center bg-gray-50 dark:bg-gray-900 min-h-screen relative w-full pb-20 max-w-lg">
      <ExpenseHistory expenses={expenses || []} />
      <Navbar />
    </div>
  );
}

const ExpenseHistory = ({ expenses }: { expenses: Expenses[] }) => {
  return (
    <div className="flex flex-col items-center w-full overflow-auto">
      {expenses.map((expense, index) => (
        <div className="px-4 md:px-6 py-6 space-y-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold tracking-tight">Expenses</h1>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center space-x-4">
            <img
              alt="Transport"
              className="rounded-lg"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <div className="grid gap-0.5">
              <h2 className="text-sm font-semibold tracking-tight">Transport</h2>
              <p className="text-sm font-medium">$250.00</p>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

