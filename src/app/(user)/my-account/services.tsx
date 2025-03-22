import { useEffect } from "react";
import AddService from "./add-service";
import { getFetcher } from "@/lib/simplifier";
import { useCookies } from "react-cookie";

export default function Services({ id }: { id: string }) {
  const [cookies] = useCookies(["raven"]);
  // if (typeof window !== "undefined") {
  //   return <>client</>;
  // } else {
  //   return <>server</>;
  // }

  // const [services,setServices] = useState([])

  useEffect(() => {
    async function getProviderProf() {
      try {
        const call = await getFetcher({
          link: `/provider-profile/${id}`,
          token: cookies.raven,
        });
        console.log(call);
      } catch (error) {
        console.error(error);
      }
    }
    getProviderProf();
  }, []);

  const services = ["Cleaning", "Cooking", "Baby Sitting", "Pet Service"];
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {services.map((item, i) => (
        <div
          key={i}
          className="px-2 py-1 border-2 border-black rounded-xl font-semibold text-center"
        >
          {item}
        </div>
      ))}
      <AddService />
    </div>
  );
}
