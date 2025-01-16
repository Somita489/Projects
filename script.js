
document.addEventListener("DOMContentLoaded", function () {
  let tl = gsap.timeline();

    // GSAP 
    
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
 //home page 3d
 const scenex = new THREE.Scene();
 const camerax = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);



let geometry = new THREE.OctahedronGeometry(5,1);
const material = new THREE.MeshBasicMaterial( { color: 0xffffff,wireframe:true} );
const octahedron = new THREE.Mesh( geometry, material );
scenex.add( octahedron );

camerax.position.z = 2;
const canvas=document.querySelector("#draw");
 const rendererx = new THREE.WebGLRenderer({canvas});
 rendererx.setSize(1490,700);

 rendererx.setClearColor(0x463f3a,1);

const controls = new THREE.OrbitControls(camerax, rendererx.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.25; 
 



 function animatex() {
   window.requestAnimationFrame(animatex);
   rendererx.render(scenex, camerax);
   
   
   octahedron.rotation.y += 0.001;
   octahedron.rotation.x += 0.001;
   controls.update(); 
 }

   animatex();

tl.from(octahedron.scale, {
  x: 0, 
  y: 0, 
  z: 0,  
  duration: 3,

});
    tl.from(".home h1", { opacity: 0, y: -100, duration: 1 });
    tl.from(".home p", { opacity: 0, y: 100, duration: 1, delay: 0.5 });
  

    // handshake
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("draw1") });

    
    renderer.setSize(500, 600);
    
    document.querySelector('.animation1').appendChild(renderer.domElement);  
    
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

   
    camera.position.z = 5;

    
    const loader = new THREE.GLTFLoader();

   
    
    loader.load('handshake_-_ramadhan_series.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        model.rotation.y = Math.PI / 2;
      
        model.scale.set(1,1,2);
        renderer.setClearColor(0xffffff);
      
        //for movement of handshake
        let amplitude = 0.1; 
let frequency = 2; 

let clock = new THREE.Clock(); 

       
        function animate() {
            window.requestAnimationFrame(animate);
            
            let deltaTime = clock.getElapsedTime(); 
let yPosition = amplitude * Math.sin(frequency * deltaTime); 

model.position.y = yPosition; 
            renderer.render(scene, camera);
        }
        animate();
    });

    
      //for typing effect
const typedText = document.querySelector("#about p");


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
 
 // for popup
 function openPopup() {
   popup.style.display = 'flex'; 
   gsap.fromTo(popup, 
     { opacity: 0, scale: 0.5 }, 
     { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
   );
 }
 
 
 function closePopup() {
   gsap.to(popup, 
     { opacity: 0, scale: 0.5, duration: 0.3, ease: "power2.in", onComplete: () => popup.style.display = 'none' }
   );
 }
 
 
 triggerDiv.addEventListener('click', openPopup);
 
 
 closeBtn.addEventListener('click', closePopup);


 const triggerDiv2 = document.querySelector('.project2');
 const popup2 = document.getElementById('popup2');
 const closeBtn2 = document.getElementById('closeBtn2');
 
  
 function openPopup2() {
   popup2.style.display = 'flex'; 
   gsap.fromTo(popup2, 
     { opacity: 0, scale: 0.5 }, 
     { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
   );
 }
 
 
 function closePopup2() {
   gsap.to(popup2, 
     { opacity: 0, scale: 0.5, duration: 0.3, ease: "power2.in", onComplete: () => popup2.style.display = 'none' }
   );
 }
 
 
 triggerDiv2.addEventListener('click', openPopup2);
 
 
 closeBtn2.addEventListener('click', closePopup2);
 
}); 
     
 
   
  
 
