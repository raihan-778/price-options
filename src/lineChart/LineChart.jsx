
import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
const chartData=    [
    { "id": 1, "name": "Alice", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 92 },
    { "id": 2, "name": "Bob", "math_marks": 72, "physics_marks": 65, "chemistry_marks": 70 },
    { "id": 3, "name": "Charlie", "math_marks": 90, "physics_marks": 88, "chemistry_marks": 84 },
    { "id": 4, "name": "Daisy", "math_marks": 68, "physics_marks": 74, "chemistry_marks": 79 },
    { "id": 5, "name": "Ethan", "math_marks": 95, "physics_marks": 89, "chemistry_marks": 91 },
    { "id": 6, "name": "Fiona", "math_marks": 78, "physics_marks": 80, "chemistry_marks": 85 },
    { "id": 7, "name": "George", "math_marks": 88, "physics_marks": 83, "chemistry_marks": 87 },
    { "id": 8, "name": "Hannah", "math_marks": 81, "physics_marks": 76, "chemistry_marks": 80 },
    { "id": 9, "name": "Ivy", "math_marks": 92, "physics_marks": 91, "chemistry_marks": 89 },
    { "id": 10, "name": "Jack", "math_marks": 65, "physics_marks": 72, "chemistry_marks": 68 }
  ]
  
      
    return (
        <div>
           <LChart width={400} height={250} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <Line dataKey='math_marks' stroke='red'></Line>
            <Line dataKey='physics_marks' stroke='green'></Line>
            <Line dataKey='chemistry_marks' stroke='yellow'></Line>
            <XAxis dataKey="name" />
            <YAxis   />

           </LChart>
        </div>
    );
};

export default LineChart;