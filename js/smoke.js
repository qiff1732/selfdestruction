const container = document.getElementById('smoke-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const smokeParticles = [];
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({
    color: 0x6666ff,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending
});

for (let i = 0; i < 50; i++) {
    const particle = new THREE.Mesh(geometry, material);
    particle.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
    );
    particle.scale.setScalar(Math.random() * 2 + 1);
    scene.add(particle);
    smokeParticles.push(particle);
}

camera.position.z = 50;

function animateSmoke() {
    smokeParticles.forEach(particle => {
        particle.position.y += 0.05;
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.01;
        if (particle.position.y > 50) particle.position.y = -50;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(animateSmoke);
}

animateSmoke();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});