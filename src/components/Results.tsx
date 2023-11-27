import { options } from "@/utils/options";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

export const Results = (): JSX.Element => {
  return (
    <>
      <div>
        <BarChart
          width={700}
          height={450}
          data={options}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          barSize={50}
        >
          <XAxis
            dataKey="label"
            scale="point"
            padding={{ left: 40, right: 40 }}
            stroke="#fff"
          />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{ padding: "10px", borderRadius: "20px" }}
            labelStyle={{ height: "0" }}
          />
          <Bar dataKey="zonks" fill="red" />
        </BarChart>
      </div>
    </>
  );
};
