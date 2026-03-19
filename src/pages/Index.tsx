import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Topics from "@/components/Topics";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Topics />
      <Featured />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;