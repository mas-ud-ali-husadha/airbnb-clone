import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import LoaderMenu from "@/components/Loader/LoaderMenu";
import LoaderCard from "@/components/Loader/LoaderCard";
import Navbar from "@/components/Header";
import Menu from "@/components/Header/Menu";
import ListMenu from "@/components/Main";

export default async function Home() {
  return (
    <>
      <Navbar>
        <Suspense fallback={<LoaderMenu />}>
          <Menu />
        </Suspense>
      </Navbar>
      <main className="container z-40">
        <Suspense fallback={<LoaderCard />}>
          <ListMenu />
        </Suspense>
        <div className="flex flex-col gap-4 justify-center items-center py-14 text-black">
          <div className="font-bold text-lg ">
            Lanjutkan menelusuri penginapan berkategori kabin
          </div>
          <Button className="text-base p-6">Tampilkan lebih banyak</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
