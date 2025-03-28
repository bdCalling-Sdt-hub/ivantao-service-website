import Title from "antd/es/typography/Title";
interface NewOrderNotification {
  id: string;
  type: string;
  notifiable_type: string;
  notifiable_id: number;
  data: {
    message: string;
    order_id: number;
    time: string; // Keeping the invalid format for accuracy
    service_title: string;
    user_name: string;
    address: string;
  };
  read_at: string | null;
  created_at: string;
  updated_at: string;
}
export default function OrderNotification({
  data,
}: {
  data: NewOrderNotification;
}) {
  console.log(data);

  return (
    <div className="w-full p-4 bg-background rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-row justify-start items-start gap-8">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-orange-500 font-medium">
                {data.data.message}
              </span>
            </div>

            <div className="space-y-0.5">
              <Title level={5} className="!text-[#777777] font-medium !m-0 ">
                {data.data.service_title}
              </Title>
              <p className="text-[#777777] text-sm">{data.data.address}</p>
            </div>
          </div>
          <div className="">
            <span className="text-gray-500 text-sm">{data.data.time}</span>
          </div>
        </div>

        <button className="text-orange-500 px-6 font-medium hover:text-orange-600 transition-colors">
          VIEW
        </button>
      </div>
    </div>
  );
}
