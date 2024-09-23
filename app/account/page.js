import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  const firstname = session?.user?.name.split(" ").at(0);

  return (
    <h2 className="font-semibold text-2xl tex text-accent-400 mb-7">
      Welcome, {firstname}
    </h2>
  );
}