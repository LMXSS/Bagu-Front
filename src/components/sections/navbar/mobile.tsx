import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Mobile() {
  return (
    <Sheet>
      <SheetTrigger className="bg-transparent">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 18L20 18"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </SheetTrigger>
      <SheetContent className="bg-black text-white">
        <div className="flex flex-col gap-8 py-5 px-10">
          <span className="cursor-pointer text-white underline-offset-4 hover:underline">
            Início
          </span>
          <span className=" cursor-pointer text-white underline-offset-4 hover:underline">
            Feed
          </span>
          <span className=" cursor-pointer text-white underline-offset-4 hover:underline">
            Conteúdo Exclusivo
          </span>
          <span className=" cursor-pointer text-white underline-offset-4 hover:underline">
            Contato
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Mobile;
