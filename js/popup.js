
      var popup = document.querySelector(".popup-btn button");
      var content = document.querySelector(".popup-content");

      popup.addEventListener("click", function(event){
          event.preventDefault();
      content.classList.toggle("content-close");
        });
