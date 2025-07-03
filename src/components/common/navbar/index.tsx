import Link from "next/link";
import Mobile from "./mobile";
import { privateMenuConfig, publicMenuConfig } from "./menuConfig";
import AvatarMenu from "@/components/private/AvatarMenu";
import LoginForm from "./LoginForm";

type Props = {
  isAuthenticated?: boolean;
};

async function Navbar({ isAuthenticated }: Props) {
  const routes = isAuthenticated ? privateMenuConfig : publicMenuConfig;

  return (
    <div className="flex">
      <div className="block md:hidden">
        <Mobile routes={routes} />
      </div>
      <div className="hidden md:flex gap-8 py-5 px-10">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="cursor-pointer text-white underline-offset-4 hover:underline"
          >
            {route.label}
          </Link>
        ))}
      </div>

      {!isAuthenticated && <LoginForm />}

      {isAuthenticated && (
        <div className="flex flex-1 justify-end items-center mr-10">
          <AvatarMenu />
        </div>
      )}
    </div>
  );
}

export default Navbar;
