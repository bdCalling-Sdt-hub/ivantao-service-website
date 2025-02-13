import Title from "antd/es/typography/Title";

export default function OrderNotification() {
  return (
    <div className="w-full p-4 bg-background rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-row justify-start items-start gap-8">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-orange-500 font-medium">New order</span>
            </div>

            <div className="space-y-0.5">
              <Title level={5} className="!text-[#777777] font-medium !m-0 ">
                Celestial Charm Dress
              </Title>
              <p className="text-[#777777] text-sm">
                Quantity: 10pc, new york city.
              </p>
            </div>
          </div>
          <div className="">
            <span className="text-gray-500 text-sm">5:00pm, today</span>
          </div>
        </div>

        <button className="text-orange-500 px-6 font-medium hover:text-orange-600 transition-colors">
          VIEW
        </button>
      </div>
    </div>
  );
}
