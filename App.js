



const heading = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},

[React.createElement("h1" ,{id:"heading"},"This is the first ReactJs🚀",),
React.createElement("h2" ,{id:"heading"},"This is the h2 ReactJs🚀",)
])],React.createElement("div",{id:"child2"},

[React.createElement("h1" ,{id:"heading"},"This is the second ReactJs🚀",),
React.createElement("h2" ,{id:"heading"},"This is the h3 ReactJs🚀",)
]))
;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);