const loadCard = ()=>{
        fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res=> res.json())
        .then(data=> displayCard(data.data))
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
    console.log(card);
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `
     <div class="bg-base-100 p-4 space-y-3 rounded-lg border-t-4 ${card.status=='open'? "border-green-400": "border-purple-400"} shadow">
            <div class="flex justify-between">
                <div>${card.status == 'open' ? '<img/ src= "./assets/Open-Status.png">' :'<img/ src="./assets/Closed-Status.png">'}</div>
                <div><p class="btn rounded-full text-red-400">${card.priority}</p></div>
            </div>
            <div>
                <p class="font-semibold  text-[#1F2937]">Fix navigation menu on mobile devices</p>
                <p class="text-[#64748B] text-[14px]">The navigation menu doesn't collapse properly on mobile devices...</p>
            </div>
            <div class="flex gap-6">
                <p class="btn rounded-full">Bug</p>
                <p class="btn rounded-full">help wanted</p>
            </div>
            <hr class="opacity-20 w-full">
            <div>
                <p class="text-[#64748B]">#1by john_doe</p>
                <p class="text-[#64748B]">1/15/2024</p>
            </div>

        </div>
    `
    cardContainer.appendChild(newDiv)
    
   }
    
}

loadCard()