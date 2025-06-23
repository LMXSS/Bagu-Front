import { Button } from "@/components/ui/button";

export default function FeedPage() {
  return (
    <>
      <h1>Área Privada</h1>
      <form action="/(auth)/logout/action" method="post">
        <Button type="submit">Logout</Button>
      </form>
    </>
  );
}
