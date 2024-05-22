export default [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 200, y: 200 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 400, y: 400 },
  },
] as {
  id: string;
  type: string;
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    label: any;
  };
  position: {
    x: number;
    y: number;
  };
}[];
