// JavaScript source code

    






(()=>{
    const skillsSection = document.querySelector(".skills-content"),
    tabscontainer = document.querySelector(".skills");
    tabscontainer.addEventListener("click",(event)=>{
        if(event.target.classList.contains("common") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tabscontainer.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
            skillsSection.querySelector(".column-right.active").classList.remove("active");
            skillsSection.querySelector(target).classList.add("active");

        };
    
    });
    
})();

(()=>{
     const list = document.querySelectorAll(".navli");
     list.forEach(navli =>{
        navli.addEventListener("click",(event)=>{
            target = event.target.getAttribute("data-flow");
            scrollcap = document.querySelector(target).offsetTop;
            window.scrollTo(0, scrollcap);
        });
     });

})();

(()=>{
      const sections = document.querySelectorAll(".nav-section");
      const navLi = document.querySelectorAll(".navigation .fixed .text li i");

      window.addEventListener("scroll",()=>{
         let current = "";
         sections.forEach(section =>{
              const sectionTop = section.offsetTop;
              const sectionheight = section.clientHeight;
              if(pageYOffset > (sectionTop - sectionheight/2)){
                    current = section.getAttribute("id");
              }
         });
         navLi.forEach(li =>{
              li.classList.remove("active-anime");
              if(li.classList.contains(current)){
                li.classList.add("active-anime");
              }
         })
      });


})();









