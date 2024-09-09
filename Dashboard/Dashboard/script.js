// SIDEBAR TOGGLE

let sidebarOpen=false;
// const sidebar=document.getElementById('sidebar');
const sidebar=document.getElementById('sidebar');

function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen=true;
    }
}

function closeSidebar() {
    if(sidebarOpen){
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen=false;
    }
}


   //Logout................//

function logout(){
    let out=window.confirm("do you want to logout");
    if(out){
        window.localStorage.clear("information")
        window.open("../login/index.html")
        
    }
    else{

    }
}