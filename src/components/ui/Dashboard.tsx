import Link from "next/link";
import Image from "next/image";
import Manutenção from "../../../public/Icone/iicon_fix.png";
import BoxVazamento from "../../../public/Icone/icon13.png";
import BoxPorta from "../../../public/Icone/icon92.png";
import JanelaQuebrou from "../../../public/Icone/icon19.png";
import Porta from "../../../public/Icone/icon18.png";
import EsquadriaBox from "../../../public/Icone/icon94.png";

import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Dashboard() {
  return (
    <div className="grid min-h-full w-full">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-full flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image 
              src={Manutenção}
              alt="Manutenção"
              className="h-87 w-87" 
              />
              <span className="">Manutenção</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Box com vazamento?</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Image 
                  src={BoxVazamento}alt="BoxVazamento"
                  className="h-10 w-10" 
              />
                Box com vazamento?
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Image 
                  src={BoxPorta}alt="Porta box emperrou? "
                  className="h-10 w-10" 
              />
                Porta Box Emperrou?
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Image 
                  src={JanelaQuebrou}alt="janela Quebrou e agora"
                  className="h-10 w-10" 
              />
                Janela Quebrou e agora?{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Image 
                  src={Porta}alt="Porta de vidro Travou?"
                  className="h-10 w-10" 
              />
                Porta de vidro Travou?
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Image 
                  src={EsquadriaBox}alt="Esquadria box soltou?"
                  className="h-10 w-10" 
              />
                Esquadria box soltou?
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Solicitar Reparo</CardTitle>
                <CardDescription>
                  Agende uma visita tecnica!
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Agendar agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
