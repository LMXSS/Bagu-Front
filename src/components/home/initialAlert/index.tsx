"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import React, { useEffect } from "react";

function InitialAlert() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("initialAlert") !== "1") {
      setOpen(true);
    }
  }, []);

  const accept = () => {
    setOpen(false);
    sessionStorage.setItem("initialAlert", "1");
  };

  const deny = () => {
    setOpen(false);
    window.location.href = "https://www.google.com";
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Conteúdo adulto (+18)</AlertDialogTitle>
          <AlertDialogDescription>
            Este site contém conteúdo destinado a maiores de 18 anos. Você
            confirma que tem 18 anos ou mais?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={deny}>Não</AlertDialogCancel>
          <AlertDialogAction onClick={accept}>Sim, tenho 18+</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default InitialAlert;
