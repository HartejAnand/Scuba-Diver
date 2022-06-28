//Person rotation component

AFRAME.registerComponent("person-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 } ,  
    speedOfAscent: { type: "number", default: 0 }

  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
    this.data.speedOfRotation = this.el.getAttribute("rotation");      
    this.data.speedOfAscent = this.el.getAttribute("position");

    var personRotation = this.data.speedOfRotation;      
    var personPosition = this.data.speedOfAscent;

    //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (personRotation.x < 10) {
          personRotation += 0.5;
          this.el.getAttribute("rotation", personRotation);  
        }
      }
      if (e.key === "ArrowLeft") {
          if (personRotation.x > -10) {
              personRotation -= 0.5;
              this.el.getAttribute("rotation", personRotation);  
          }
      }
      if (e.key === "ArrowUp") {
          if (personRotation.z < 20) {
              personRotation.z += 0.5;
              this.el.getAttribute("rotation", personRotation);  
          }
          if (personRotation.y < 2) {
              personRotation.y += 0.01;
              this.el.getAttribute("position", personRotation);  
          }
        }
        if (e.key === "ArrowDown") {
          if (personRotation.z > -10) {
              personRotation.z -= 0.5;
              this.el.getAttribute("rotation", personRotation);  
          }
          if (personRotation.y > -2) {
              personRotation.y -= 0.01;
              this.el.getAttribute("position", personRotation);  
          }
        }
    });
  },  
});