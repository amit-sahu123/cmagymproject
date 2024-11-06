 import Navbar from "@/components/Navbar";
 import Gymherosection from "@/components/Gymherosection";
 import Footer from "@/components/Footer";
 import Schedule from "@/components/Schedule";
 import Order from "@/components/order/Order"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Gymherosection/>
      <Order/>
      <Schedule/>
      <Footer/>
      
      

    </div>
  );
}
