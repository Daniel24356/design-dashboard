import { Bar } from "react-chartjs-2"

const data = {
  labels: ["Cats", "Dogs", "Fish", "Birds", "Hamsters"],
  datasets: [{
    label: "popularity",
    data: [50, 15, 20, 15, 10],
    backgroungColor: ["#f44336", "#9c2700", "#Bbc34a", "#ffc107"],
    borderColor: "#f44336",
    borderWidth: 1,
  }]
}

export const BarChart = () => {
  return <div>
    <Bar data={data} />
  </div>

}