
let selectedUrl="";

function openModal(title,desc,img,url){
  modalTitle.innerText=title;
  modalDesc.innerText=desc;
  modalImg.src=img;
  selectedUrl=url;
  modal.style.display="flex";
}

function closeModal(){ modal.style.display="none"; }

function continueApp(){
  if(selectedUrl && selectedUrl !== "#"){
    window.open(selectedUrl,"_blank");
  } else {
    alert("App link not yet configured.");
  }
  closeModal();
}

function filterApps(){
  let input=document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".app-card").forEach(card=>{
    card.style.display=card.dataset.name.includes(input)?"block":"none";
  });
}

window.onclick=e=>{ if(e.target===modal) closeModal(); }
