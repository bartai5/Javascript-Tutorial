let sendBtn = document.querySelector("#submit");
let inputMsg = document.querySelector("#msg");

function submitMsg(e){
    // Create the HTML structure using template literals
    let html = `
      <div class="cont">
        <h1 class="title">Success</h1>
        <p class="body-par">
            Hello this is your message : ${inputMsg.value}
        </p>
        <h3 class="footer">It really works.......</h3>
      </div>
    `;
    
    // Create a container element and set its HTML content
    let containers = document.createElement("div");
    containers.innerHTML = html;
    
    let container = document.querySelector("#container");
    
    // Append the container to the document body
    container.appendChild(containers);
}
sendBtn.addEventListener("click", submitMsg);