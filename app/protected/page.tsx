import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
import { Database } from "@/types/supabase";

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
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <ExpenseHistory expenses={expenses || []} />
      <AddExpenseButton />
      <Footer />
    </div>
  );
}

const ExpenseHistory = ({ expenses }: { expenses: Expenses[] }) => {
  return (
    <div className="flex flex-col items-center w-full overflow-auto">
      {expenses.map((expense, index) => (
        <div key={index} className="w-full p-4 border-b border-gray-200">
          <h2 className="text-lg">{expense.id}</h2>
          <p>{expense.amount}</p>
        </div>
      ))}
    </div>
  );
};

const AddExpenseButton = () => {
  return (
    <button className="w-full p-4 bg-blue-500 text-white mt-4">
      Add New Expense
    </button>
  );
};
