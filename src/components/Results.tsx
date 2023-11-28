import { options } from "@/utils/options";
import { Bar, BarChart, Rectangle, Tooltip, XAxis, YAxis } from "recharts";

export const Results = (): JSX.Element => {
  return (
    <>
      <div>
        <BarChart
          width={1050}
          height={450}
          data={options}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          barSize={40}
        >
          <XAxis
            dataKey="label"
            scale="point"
            padding={{ left: 30, right: 30 }}
            stroke="#fff"
            style={{ fontSize: "15px" }}
          />
          <YAxis stroke="#fff" style={{ fontSize: "15px" }} />
          <Tooltip
            contentStyle={{ padding: "10px", borderRadius: "20px" }}
            labelStyle={{ height: "0" }}
          />
          <Bar
            dataKey="zonks"
            fill="red"
            activeBar={<Rectangle fill="pink" />}
          />
        </BarChart>
      </div>
    </>
  );
};
