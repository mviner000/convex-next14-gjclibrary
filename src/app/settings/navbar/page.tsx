import { ComponentStyleEditor } from "@/components/ComponentStyleEditor";

export default function NavbarSettingsPage() {
  return (
    <>
      <h1 className="text-6xl font-bold">NavBar UI Settings</h1>
      <ComponentStyleEditor componentNames={["navbar", "navbar.logo", "navbar.link.parent", "navbar.link.children"]} />
    </>
  );
}
