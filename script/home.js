const totalIssue = document.getElementById("total-issue");

const loadCard = () => {
    handleActiveButton("all-btn");
    manageSpinner(true)
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(res => res.json())
        .then(data => {
            displayCard(data.data)
             manageSpinner(false);
        })
       
}

const handleActiveButton = (activeId) => {
    const buttons = document.querySelectorAll("#btn-container .btn")
    buttons.forEach(btn => {
        btn.classList.remove("btn-primary");
    });
    const clickedBtn = document.getElementById(activeId);
    clickedBtn.classList.add("btn-primary");
}

const manageSpinner = (status)=>{
    if(status==true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("card-container").classList.add("hidden")
    }
    else{
        document.getElementById("card-container").classList.remove("hidden")
        document.getElementById("spinner").classList.add("hidden")
    }
}

const loadModal = (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    fetch(url)
        .then(res => res.json()
            .then(data => displayModal(data.data))
        )
}

const displayModal = (word) => {
    const statusBg = word.status === 'open' ? 'bg-green-500' : 'bg-purple-500';

    let priorityBg = "bg-red-400"; 
    if (word.priority.toLowerCase() === 'medium'){
        priorityBg = "bg-yellow-500"} 
    if (word.priority.toLowerCase() === 'low'){ 
        priorityBg = "bg-gray-500";}

        
    const labelsHTML = word.labels.map(label => {
        let bgColor, textColor, icon, borderColor;
        if (label.toLowerCase() === "bug") {
            bgColor = "bg-red-100";
            textColor = "text-red-500";
            borderColor = "border-red-200";
            icon = "fa-solid fa-bug";
        }
        else if (label.toLowerCase() === "help wanted") {
            bgColor = "bg-yellow-100";
            textColor = "text-yellow-600";
            borderColor = "border-yellow-200";
            icon = "fa-solid fa-helicopter-symbol";
        }
        else if (label.toLowerCase() === "enhancement") {
            bgColor = "bg-green-100";
            textColor = "text-green-600";
            borderColor = "border-green-200";
            icon = "fa-solid fa-wand-magic-sparkles";
        }
        else {
            bgColor = "bg-gray-200";
            textColor = "text-gray-600";
            borderColor = "border-gray-300";
            icon = "fa-solid fa-tag";
        }


        return `
        <p class="${bgColor} ${textColor} ${borderColor} rounded-full border px-3 py-1 text-xs font-medium flex items-center gap-1">
            <i class="${icon}"></i> ${label}
        </p>
    `;
    }).join("");


    
    const detailContainer = document.getElementById("details-container");
    detailContainer.innerHTML = `
    
                <div>
                  <h2 class="text-xl pb-2 font-bold text-[#1F2937]">${word.title ? word.title : "Not Found"}</h2>
                    <div class="flex gap-3 items-center">
                        <p class="${statusBg} rounded-full px-2 text-white">${word.status}</p>

                        <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
                        <p class="text-[12px] text-[#64748B]">Opened by ${word.author ? word.author:"Not Found" }</p>

                        <span class="w-1 h-1 bg-gray-500 rounded-full"></span>
                        <p class="text-[12px] text-[#64748B]">${word.updatedAt}</p>
                    </div>
                </div>

                <div class="flex gap-2 items-center">
                  ${labelsHTML}
                </div>
                <div>
                    <p class="text-[#64748B]">${word.description}</p>
                </div>
                <div class="bg-base-300 border border-gray-100 flex gap-10 p-4 rounded-lg">
                    <div>
                        <p class="text-[#64748B]">Assignee:</p>
                        <p class="font-semibold text-[#1F2937]">${word.author ? word.author : "Not Found"}</p>
                    </div>
                    <div>
                        <p class="text-[#64748B]">Priority:</p>
                        <p class="${priorityBg} rounded-full px-2 text-white">${word.priority}</p>
                    </div>
                </div>
    `
    document.getElementById("my_modal_5").showModal();
}


const displayCard = (cards) => {
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = "";
    for (let card of cards) {
        const labelsHTML = card.labels.map(label => {
            let bgColor, textColor, icon, borderColor;

            if (label.toLowerCase() === "bug") {
                bgColor = "bg-red-100";
                textColor = "text-red-500";
                borderColor = "border-red-200";
                icon = "fa-solid fa-bug";

            } else if (label.toLowerCase() === "help wanted") { 
                bgColor = "bg-yellow-100";
                textColor = "text-yellow-600";
                borderColor = "border-yellow-200";
                icon = "fa-solid fa-helicopter-symbol";

            } else if (label.toLowerCase() === "enhancement") {
                bgColor = "bg-green-100";
                textColor = "text-green-600";
                borderColor = "border-green-200";
                icon = "fa-solid fa-wand-magic-sparkles";

            } else {
                bgColor = "bg-gray-200";
                textColor = "text-gray-500";
                borderColor = "border-gray-200";
                icon = "fa-solid fa-tag";
            }

            return `<p class="${bgColor} ${textColor} ${borderColor} border px-2 py-1 rounded-full text-[10px] font-medium"><i class="${icon}"></i> ${label}</p>`;
        }).join(" ");


        let priorityBg = "bg-gray-100";
        let priorityText = "text-gray-600";
        let priorityBorder = "border-gray-100"

        if (card.priority.toLowerCase() === "high") {
            priorityBg = "bg-red-100";
            priorityText = "text-red-500";
            priorityBorder = "border-red-100"
        } else if (card.priority.toLowerCase() === "medium") {
            priorityBg = "bg-yellow-100";
            priorityText = "text-yellow-600";
            priorityBorder = "border-yellow-100"
        } else if (card.priority.toLowerCase() === "low") {
            priorityBg = "bg-gray-200";
            priorityText = "text-gray-500";
            priorityBorder = "border-gray-100"
        }

        // for border color
        const borderBg = card.status === 'open' ? 'border-green-500' : 'border-purple-500';

        const newDiv = document.createElement("div")
        newDiv.innerHTML = `
        <div onclick="loadModal(${card.id})" class="${borderBg} bg-base-100 p-4 space-y-3 hover:bg-pink-100 rounded-lg border-t-5 ${card.status} shadow h-full">
            <div class="flex justify-between">
                <div>${card.status == 'open' ? '<img/ src= "./assets/Open-Status.png">' : '<img/ src="./assets/Closed-Status.png">'}</div>
                <div><p class="${priorityBg} ${priorityText} ${priorityBorder} px-2  rounded-full font-semibold">${card.priority}</p></div>
            </div>
            <div>
                <p class="font-semibold text-lg pb-2 text-[#1F2937]">${card.title}</p>
                <p class="text-[#64748B] text-[12px]">${card.description}</p>
            </div>
            <div class="flex gap-3">
                ${labelsHTML}
            </div>
            <hr class="opacity-20 w-full">
            <div>
                <p class="text-[#64748B] text-[12px]">Author: ${card.author ? card.author: "Author not Found"}</p>
                <p class="text-[#64748B] text-[12px]">${card.createdAt}</p>
            </div>

        </div>
    `
        cardContainer.appendChild(newDiv)

    }
    totalIssue.innerText = cards.length + " Issues "
}


const openCard = () => {
    handleActiveButton("open-btn");
    manageSpinner(true)
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
        .then(res => res.json())
        .then(json => {
            const openD = json.data.filter(openData => openData.status === 'open')
            manageSpinner(false);
            displayCard(openD);
            
        })
}

const closedCard = () => {
    handleActiveButton("closed-btn");
    manageSpinner(true)
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const closedD = data.data.filter(closedData => closedData.status === 'closed')
            manageSpinner(false);
            displayCard(closedD);
        })
}

loadCard()

document.getElementById("btn-search").addEventListener("click", () =>{
    const input = document.getElementById("input-search");
    const searchValue = input.value.trim().toLowerCase()
    manageSpinner(true);

    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res=> res.json())
    .then(data=> {
        const allIssue = data.data;
        const filterIssue = allIssue.filter((issue)=>
            issue.title.toLowerCase().includes(searchValue)
        );
        displayCard(filterIssue);
        manageSpinner(false);
        
    })
    
})