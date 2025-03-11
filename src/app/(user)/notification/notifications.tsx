import { Button } from "antd";
import Title from "antd/es/typography/Title";

export default function Notification() {
  return (
    <div className="w-full p-4 bg-background rounded-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-8">
          <div className="space-y-1 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <span className="text-[#7849D4] text-lg font-medium block md:inline">
                Your custom offer is accepted.
              </span>
            </div>

            <div className="space-y-0.5">
              <Title level={5} className="!text-[#777777] font-medium !m-0">
                Cleaning
              </Title>
              <p className="text-[#777777] text-sm">Provider: Md. Abid</p>
            </div>
          </div>
        </div>

        <div className="text-center w-full md:w-auto">
          <Title className="!m-0" level={4}>
            Today
          </Title>
          <span className="text-gray-500 text-sm">11-01-2025</span>
        </div>

        <div className="text-green-600 flex flex-col justify-end text-end md:text-right px-0 md:px-6 font-medium w-full md:w-auto">
          <div className="font-bold text-2xl">$500</div>
          <Button
            type="link"
            className="text-foreground font-normal text-sm !p-0"
          >
            Tap to continue your order
          </Button>
        </div>
      </div>
    </div>
  );
}
