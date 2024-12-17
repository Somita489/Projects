
document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline();

    // GSAP Animation for sections
    
    gsap.from(".about h2", { opacity: 0, x: -100, duration: 1, delay: 1,scrollTrigger:".about h2" });
    
    gsap.from(".project1,.project2", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      delay: 1,
      scrollTrigger:".project1,.project2",
    });
  
    gsap.from("#contact h2", { opacity: 0, scale: 0.5, duration: 1, delay: 1,scrollTrigger:"#contact h2" });
    gsap.from("#contact p", { opacity: 0, scale: 0.5, duration: 1, delay: 1.5,scrollTrigger:"#contact p" });
  
   
    gsap.from(".nav-content div", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.2,
      delay: 1,
    });
  
   var home=document.querySelector("#home");
   var cursor=document.querySelector("#cursor");
   home.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x:dets.x,
            y:(dets.y)-150,
            duration:1,
            ease:"back.out",
        })
   })
   // 1. Scene Setup
 const scenex = new THREE.Scene();
 const camerax = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

 // 2. Create a 3D Object 

let geometry = new THREE.OctahedronGeometry(5,1);
const material = new THREE.MeshBasicMaterial( { color: 0xffffff,wireframe:true, wireframeLinewidth:10, wireframeLinecap:'round', wireframeLinejoin:'round'} );
const octahedron = new THREE.Mesh( geometry, material );
scenex.add( octahedron );

camerax.position.z = 2;
const canvas=document.querySelector("#draw");
 const rendererx = new THREE.WebGLRenderer({canvas});
 rendererx.setSize(1490,700);

 rendererx.setClearColor(0x463f3a,1);

 // 4. OrbitControls Setup 
const controls = new THREE.OrbitControls(camerax, rendererx.domElement);
controls.enableDamping = true; // Enable smooth damping
controls.dampingFactor = 0.25; // Adjust damping speed 
 



 // 3. Render Loop for Animation
 function animatex() {
   window.requestAnimationFrame(animatex);
   rendererx.render(scenex, camerax);
   
   
   octahedron.rotation.y += 0.001;
   octahedron.rotation.x += 0.001;
   controls.update(); 
 }

   animatex();

// GSAP Animation for scaling
tl.from(octahedron.scale, {
  x: 0, 
  y: 0, 
  z: 0,  // Animate all three scale axes
  duration: 3,

});
    tl.from(".home h1", { opacity: 0, y: -100, duration: 1 });
    tl.from(".home p", { opacity: 0, y: 100, duration: 1, delay: 0.5 });
  

    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("draw1") });

    // Set the renderer size
    renderer.setSize(500, 600);
    // Append the canvas to the .animation1 div
    document.querySelector('.animation1').appendChild(renderer.domElement);  // Append to .animation1
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    // Add a directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

   
    camera.position.z = 5;

    // Load model
    const loader = new THREE.GLTFLoader();

   
    // Replace this URL with the path to your 3D model
    loader.load('handshake_-_ramadhan_series.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        model.rotation.y = Math.PI / 2;
        // Optionally, set the scale of the model
        model.scale.set(1,1,2);
        renderer.setClearColor(0xffffff);
        
        let amplitude = 0.1; // Maximum height
let frequency = 2; // Speed of oscillation

let clock = new THREE.Clock(); // Create a clock to keep track of time

        // Animation 
        function animate() {
            window.requestAnimationFrame(animate);
            
            let deltaTime = clock.getElapsedTime(); // Get the elapsed time in seconds
let yPosition = amplitude * Math.sin(frequency * deltaTime); // Oscillation formula

model.position.y = yPosition; // Apply the oscillation to the model's Y position
            renderer.render(scene, camera);
        }
        animate();
    }, undefined, function (error) {
        console.error(error);
    });

    
       // Select the element
const typedText = document.querySelector("#about p");

// GSAP typing animation
gsap.to(typedText, {
  text: {
    value: "Hello! I’m a first-year BTech student at IIT Guwahati, specializing in Data Science and Artificial Intelligence. Being a fresher, I don't have much professional experience yet, and this is my first project, but I am eager to learn and grow through hands-on experience. I'm excited about the opportunities ahead and am looking forward to expanding my knowledge, gaining hands-on experience, and making an impact in the tech world.", 
    
  },
  duration: 8, 
  ease: "power1.out",
  stagger: 0.001, 
  scrollTrigger: "#about p",
});
     

 const triggerDiv = document.querySelector('.project1');
 const popup = document.getElementById('popup1');
 const closeBtn = document.getElementById('closeBtn1');
 
 // open the popup with GSAP 
 function openPopup() {
   popup.style.display = 'flex'; // Show the popup
   gsap.fromTo(popup, 
     { opacity: 0, scale: 0.5 }, 
     { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
   );
 }
 
 // close the popup with GSAP 
 function closePopup() {
   gsap.to(popup, 
     { opacity: 0, scale: 0.5, duration: 0.3, ease: "power2.in", onComplete: () => popup.style.display = 'none' }
   );
 }
 
 // Event listener for clicking the trigger div
 triggerDiv.addEventListener('click', openPopup);
 
 // Event listener for clicking the close button
 closeBtn.addEventListener('click', closePopup);


 const triggerDiv2 = document.querySelector('.project2');
 const popup2 = document.getElementById('popup2');
 const closeBtn2 = document.getElementById('closeBtn2');
 
 //  open the popup with GSAP 
 function openPopup2() {
   popup2.style.display = 'flex'; // Show the popup
   gsap.fromTo(popup2, 
     { opacity: 0, scale: 0.5 }, 
     { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
   );
 }
 
 // close the popup with GSAP 
 function closePopup2() {
   gsap.to(popup2, 
     { opacity: 0, scale: 0.5, duration: 0.3, ease: "power2.in", onComplete: () => popup2.style.display = 'none' }
   );
 }
 
 // Event listener for clicking the trigger div
 triggerDiv2.addEventListener('click', openPopup2);
 
 // Event listener for clicking the close button
 closeBtn2.addEventListener('click', closePopup2);
 
}); 
     
 
   
  
 
