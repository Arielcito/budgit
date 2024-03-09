import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: expenses } = await supabase.from('expenses').select()

  return <pre>{JSON.stringify(expenses, null, 2)}</pre>
}