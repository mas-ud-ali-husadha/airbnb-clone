import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import GridList from "./GridList";
import { Facebook, Globe, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-stone-100 pt-10">
      <div className="container flex flex-col gap-4">
        <h1 className="title">Inspirasi untuk liburan mendatang</h1>
        <Tabs defaultValue="populer" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="populer">Populer</TabsTrigger>
            <TabsTrigger value="seni">Seni & budaya</TabsTrigger>
            <TabsTrigger value="alam">Alam terbuka</TabsTrigger>
            <TabsTrigger value="pegunungan">Pegunungan</TabsTrigger>
            <TabsTrigger value="pantai">Pantai</TabsTrigger>
            <TabsTrigger value="kategori">Kategori</TabsTrigger>
            <TabsTrigger value="hal">Hal yang bisa dilakukan</TabsTrigger>
          </TabsList>
          <TabsContent value="populer">
            <GridList data={populer_dummy} />
          </TabsContent>
          <TabsContent value="seni">
            <GridList data={populer_dummy} />
          </TabsContent>
        </Tabs>
      </div>
      <div className="border-t mt-10"></div>
      <div className="my-8 container">
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 text-sm">
            <span className="font-medium">Dukungan</span>
            <span>Pusat Bantuan</span>
            <span>AirCover</span>
            <span>Anti-Diskriminasi</span>
            <span>Dukungan disablilitas</span>
            <span>Opsi pembatalan</span>
            <span>Laporkan masalah lingkungan</span>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <span className="font-medium">Menjadi tuan rumah</span>
            <span>Jadikan tempat Anda Airbnb</span>
            <span>AirCover untuk Tuan Rumah</span>
            <span>Sumber informasi menerima tamu</span>
            <span>Forum komunitas</span>
            <span>Menerima tamu dengan bijak</span>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <span className="font-medium">Airbnb</span>
            <span>Ruang Berita</span>
            <span>Fitur baru</span>
            <span>Karier</span>
            <span>Investor</span>
            <span>Penginapan darurat Airbnb.org</span>
          </div>
        </div>
      </div>
      <div className="container  text-sm ">
        <div className="border-t flex items-center justify-between  py-6 ">
          <div className="inline-flex gap-2">
            &copy; Airbnb, inc · Privasi · Ketentuan · Peta Situs
          </div>
          <div className="inline-flex gap-4">
            <div className="inline-flex gap-2">
              <Globe size={20} strokeWidth={1.5} />
              <span>Bahasa Indonesia (ID)</span>
            </div>
            <div className="inline-flex gap-2">
              <span className="font-bold">Rp</span>
              <span >IDR</span>
            </div>
            <div className="inline-flex gap-2">
              <Facebook size={20} strokeWidth={1.5}/>
              <Twitter size={20} strokeWidth={1.5}/>
              <Instagram size={20} strokeWidth={1.5}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const populer_dummy = [
  {
    title: "Canmore",
    desc: "Penginapan ramah hewan peliharaan",
  },
  {
    title: "Benalmada",
    desc: "Sewa Apartemen",
  },
  {
    title: "Marbella",
    desc: "Sewa vila",
  },
  {
    title: "Mijas",
    desc: "Sewa rumah",
  },
  {
    title: "Presscot",
    desc: "Sewa rumah",
  },
  {
    title: "Scottsdale",
    desc: "Sewa rumah",
  },
  {
    title: "Tuscon",
    desc: "Sewa apartemen",
  },
  {
    title: "Jesper",
    desc: "Sewa tempat hiburan",
  },
  {
    title: "Mountain view",
    desc: "Sewa tempat liburan",
  },
  {
    title: "Devonport",
    desc: "Sewa tempat liburan",
  },
  {
    title: "Mallacota",
    desc: "Penginapan ramah hewan perliharaan",
  },
  {
    title: "Ibiza",
    desc: "Sewa tempat liburan",
  },
  {
    title: "Canmore",
    desc: "Penginapan ramah hewan peliharaan",
  },
  {
    title: "Benalmada",
    desc: "Sewa Apartemen",
  },
  {
    title: "Marbella",
    desc: "Sewa vila",
  },
  {
    title: "Mijas",
    desc: "Sewa rumah",
  },
  {
    title: "Presscot",
    desc: "Sewa rumah",
  },
  {
    title: "Scottsdale",
    desc: "Sewa rumah",
  },
  {
    title: "Tuscon",
    desc: "Sewa apartemen",
  },
  {
    title: "Jesper",
    desc: "Sewa tempat hiburan",
  },
  {
    title: "Mountain view",
    desc: "Sewa tempat liburan",
  },
  {
    title: "Devonport",
    desc: "Sewa tempat liburan",
  },
  {
    title: "Mallacota",
    desc: "Penginapan ramah hewan perliharaan",
  },
  {
    title: "Ibiza",
    desc: "Sewa tempat liburan",
  },
];

export default Footer;
