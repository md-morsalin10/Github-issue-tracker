const totalIssue = document.getElementById("total-issue");

const loadCard = ()=>{
        handleActiveButton("all-btn");
        fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res=> res.json())
        .then(data=> displayCard(data.data))
}

const handleActiveButton = (activeId) =>{
    const buttons = document.querySelectorAll("#btn-container .btn")
    buttons.forEach(btn => {
        btn.classList.remove("btn-primary");
    });
    const clickedBtn = document.getElementById(activeId);
    clickedBtn.classList.add("btn-primary");
}
// {
//     "id": 6,
//     "title": "Fix broken image uploads",
//     "description": "Users are unable to upload images larger than 5MB. Need to increase the file size limit or add compression.",
//     "status": "open",
//     "labels": [
//         "bug"
//     ],
//     "priority": "medium",
//     "author": "emma_ui",
//     "assignee": "",
//     "createdAt": "2024-01-19T15:30:00Z",
//     "updatedAt": "2024-01-19T15:30:00Z"
// }
const displayCard = (cards) =>{
   const cardContainer = document.getElementById("card-container")
   cardContainer.innerHTML = "";
   for(let card of cards){
    // console.log(card);
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `
     <div class="bg-base-100 p-4 space-y-3 rounded-lg border-t-5 ${card.status=='open'? "border-green-400": "border-purple-400"} shadow h-full">
            <div class="flex justify-between">
                <div>${card.status == 'open' ? '<img/ src= "./assets/Open-Status.png">' :'<img/ src="./assets/Closed-Status.png">'}</div>
                <div><p class="btn rounded-full text-red-400">${card.priority}</p></div>
            </div>
            <div>
                <p class="font-semibold  text-[#1F2937]">${card.title}</p>
                <p class="text-[#64748B] text-[14px]">${card.description}</p>
            </div>
            <div class="flex gap-6">
                <p class="btn rounded-full">Bug</p>
                <p class="btn rounded-full">help wanted</p>
            </div>
            <hr class="opacity-20 w-full">
            <div>
                <p class="text-[#64748B]">${card.createdAt}</p>
                <p class="text-[#64748B]">${card.updatedAt}</p>
            </div>

        </div>
    `
    cardContainer.appendChild(newDiv)
    
   }
    totalIssue.innerText = cards.length+" Issues "
}


const openCard = ()=>{
    handleActiveButton("open-btn");
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res=> res.json())
    .then(json=> {
        const openD = json.data.filter(openData => openData.status === 'open')
        displayCard(openD)
    })
}

const closedCard = () =>{
    handleActiveButton("closed-btn");
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
    .then(res=> res.json())
    .then(data => {
        const closedD = data.data.filter(closedData => closedData.status ==='closed')
        displayCard(closedD)
    })
}

loadCard()