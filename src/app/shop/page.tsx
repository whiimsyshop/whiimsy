import { redirect } from "next/navigation";

export default function ShopPage() {
  redirect("https://whiimsy.mini.site");
  return null; // Ensures nothing renders
}