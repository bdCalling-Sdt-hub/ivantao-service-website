"use client";
import Shop from "../shop";
import { categoryPageDatas } from "../page-data";
import Window from "@/components/shared/window";
import { Button, message } from "antd";
import { useEffect, useState } from "react";
import { getFetcher } from "@/lib/simplifier";
import { Loader2Icon } from "lucide-react";
import { CategoryApiResponseType, serviceApiCallType } from "@/types/Services";
interface Categories {
  image: string;
  title: string;
  description: string;
}
export default function Page() {
  const [err, setErr] = useState("");
  const [res, setRes] = useState<CategoryApiResponseType | null>(null);
  const [servRes, setServRes] = useState<serviceApiCallType | null>(null);
  const [loading, setLoading] = useState(false);
  const findCategory = (): Categories => {
    return (
      categoryPageDatas.find(
        (cat) => cat.title.trim().toLowerCase() === "household"
      ) || {
        image: "",
        title: "Unknown",
        description: "No description available",
      }
    );
  };

  useEffect(() => {
    async function getCats() {
      setLoading(true);

      const call = await getFetcher({ link: "/get-all-category" });
      const ServiceCall = await getFetcher({
        link: "/get-all-services",
      });
      if (!call.status) {
        setErr(call.message);
      } else if (!ServiceCall.status) {
        setErr(ServiceCall.message);
      }
      setRes(call);
      console.log(ServiceCall);
      setServRes(ServiceCall);

      setLoading(false);
    }

    getCats();
  }, []);

  const category: Categories = findCategory();

  if (loading) {
    return (
      <main className="min-h-[400px] w-full flex justify-center items-center gap-4">
        <Loader2Icon className="animate-spin" /> Loading..
      </main>
    );
  }

  if (err) {
    return (
      <main className="min-h-[400px] w-full flex justify-center items-center gap-4">
        <h1 className="text-4xl font-semibold">{err}</h1>
      </main>
    );
  }

  return (
    <main className="py-12">
      <Window cat={category} catSel={res?.data.data} />
      {servRes ? (
        <>
          <Shop title="Just for you" data={servRes?.data.data} sorter />

          {/* <Shop title="Most Rated" data={servRes?.data} /> */}
        </>
      ) : (
        "Loading"
      )}
      <div className="px-[7%] ">
        <div className="border-t border-[#E4E7EC] flex flex-row justify-between items-center py-6">
          <p className="font-semibold">
            Page {servRes?.data.current_page} of {servRes?.data.total}
          </p>
          <div className="space-x-4">
            <Button
              disabled={servRes?.data.prev_page_url ? false : true}
              onClick={async () => {
                if (servRes?.data.prev_page_url) {
                  const call = getFetcher({
                    link: servRes?.data.prev_page_url,
                  });
                  console.log(call);
                } else {
                  message.info("There is no next page");
                }
              }}
              size="large"
              className="bg-[#7849D4] hover:!bg-[#58369b] !text-background border-none"
            >
              Previous
            </Button>
            <Button
              disabled={servRes?.data.next_page_url ? false : true}
              onClick={async () => {
                if (servRes?.data.next_page_url) {
                  const call = getFetcher({
                    link: servRes?.data.next_page_url,
                  });
                  console.log(call);
                } else {
                  message.info("There is no next page");
                }
              }}
              size="large"
              className="bg-[#7849D4] hover:!bg-[#58369b] !text-background border-none"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
