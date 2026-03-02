import { createFileRoute, Link } from "@tanstack/react-router";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import GoogleIcon from "../../assets/images/icons/google-icon.png";
import { Separator } from "../../components/Separator";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="text-black bg-[#F5F5F5] h-screen w-full flex items-center justify-center p-5">
      <div className="w-[450px] bg-white rounded-[18px] p-10 shadow-md">
        <div className="flex flex-col">
          <Logo />

          <h2 className="font-bold text-[21px] mb-2">Entrar</h2>

          <p className="mb-3.5">Escolha como você gostaria de fazer login</p>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
            <img src={GoogleIcon} alt="Icone do google" className="w-5 g-5" />
            <span className="text-sm font-medium text-black">
              Continuar com o Google
            </span>
          </button>

          <Separator />

          <LoginForm />

          <p className="mt-3.5 self-center">Ainda não possui conta? <Link to="/sign-up" className="ml-1 text-[#5433EB] hover:underline">Cadastre-se</Link></p>
        </div>
      </div>
    </section>
  );
}
