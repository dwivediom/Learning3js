This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.





 **Next.js 14 with TypeScript 3D Web Application**

This web application, built with Next.js 14 and TypeScript, features a 3D scene using the Three.js library, including a rotating sphere with an interactive color-changing feature.

## Live App

Check out the live application: [Sphare3D](https://sphare3d.vercel.app/)

## Installation

Make sure you have Node.js installed on your machine.


# Clone the repository

    git clone <repository-url>
    cd <project-folder>

    # Install dependencies
    npm install` 

## Folder Structure

The project has the following folder structure:

    `├───app
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    └───src
        └───component
            ├── allcss.css
            ├── Navbar.tsx
            ├── Testing2.tsx
            └── Testing3.tsx` 

-   

**app**: Contains files related to the main application.

    
    -   `favicon.ico`: Favicon for the application.
    -   `globals.css`: Global styles for the application.
    -   `layout.tsx`: Layout component.
    -   `page.tsx`: Main page component.
-   **src/component**: Contains reusable components for the application.
    
    -   `allcss.css`: CSS file for all components.
    -   `Navbar.tsx`: Navbar component.
    -   `Testing2.tsx` and `Testing3.tsx`: Additional components.

**## Packages Used**

The application uses the following npm packages:

-   `next`: Framework for building React applications.
-   `react` and `react-dom`: React library for building user interfaces.
-   `typescript`: TypeScript language support for Next.js.
-   `gsap`: GreenSock Animation Platform for animation.
-   `three`: JavaScript 3D library.
-   `@types/three`: TypeScript type definitions for Three.js.
-   `tailwindcss`: A utility-first CSS framework.
-   `eslint` and `eslint-config-next`: Linting for code quality.

Install these packages using:

bashCopy code

`npm install next react react-dom typescript gsap three @types/three tailwindcss eslint eslint-config-next` 

## Running the Application

To run the application locally, use the following command:

bashCopy code

`npm run dev` 

The application will be available at `http://localhost:3000`.

## Features

-   **3D Sphere**: The application features a rotating 3D sphere using Three.js.
-   **Text Rendering**: Text is rendered on the sphere using the Poppins font.
-   **Interactive Color Change**: The color of the sphere can be changed interactively by clicking and dragging the mouse.
-   **Animation**: The application includes animations using the GreenSock Animation Platform.
-   **Responsive Design**: The layout adjusts to different screen sizes.

## Development

-   The `Testing2.tsx` component sets up the 3D scene using Three.js and includes interactive features.
-   Sphere texture is loaded from "/earth.png".
-   Poppins font is loaded from "/Poppins_Regular.json".
-   OrbitControls are used for interactive camera control.
-   Animations are implemented using GreenSock.

Feel free to explore and modify the code to suit your needs.

## Explanation:

### Basic Setup:



`const scene = new THREE.Scene();` 

-   **Scene:** Imagine it as the stage where all the objects (meshes) in your 3D world will be placed.


`const geometry = new THREE.SphereGeometry(6, 64, 64)` 

-   **Geometry:** It's like a blueprint for creating 3D shapes. Here, we're creating a sphere.



`const material2 = new THREE.MeshStandardMaterial({ map: texture })` 

-   **Material:** Think of it as the skin of the object. It determines how the object interacts with light.

### Loading a Texture:



`const texture = new THREE.TextureLoader().load("/earth.png")` 

-   **Texture:** Like wrapping a gift with a patterned paper, it gives the sphere an image or texture.

### Adding Mesh to Scene:



`const mesh = new THREE.Mesh(geometry, material2)
scene.add(mesh)` 

-   **Mesh:** An object made from a geometry and a material. In our case, it's the textured sphere.

### Loading Fonts and Adding Text:



`const loader = new FontLoader();
loader.load('/Poppins_Regular.json', function (font: any) {
  // ...
});` 

-   **FontLoader:** Loading a custom font for adding text to the 3D world.

`const textGeometry = new TextGeometry('Hello ', {
    // ...
});` 

-   **TextGeometry:** Creating 3D text in the specified font and style.



`const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 });
const textMesh = new THREE.Mesh(textGeometry, textMaterial);
scene.add(textMesh);` 

-   Creating a material for the text and a mesh to display it in the scene.

### Setting up Lighting:



`const light = new THREE.PointLight(0xffffff, 60)
light.position.set(4.6, 9.88, 5.82)
scene.add(light)` 

-   **Light:** It illuminates the scene. Our light is like a spotlight at a specific position.

### Camera and View:



`const camera = new THREE.PerspectiveCamera(45, sizes.weight / sizes.height, 0.1, 100)
camera.position.z = 20
scene.add(camera)` 

-   **Camera:** It's like your viewfinder. It captures what's in the scene. Here, it's set at an angle.

### Adding Interactive Controls:


`const controls = new OrbitControls(camera, canvas)` 

-   **OrbitControls:** It allows users to interact with the scene, like orbiting around it.

### Rendering and Resizing:



`const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
renderer.setSize(sizes.weight, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)` 

-   **WebGLRenderer:** It's the engine that renders the 3D scene. It's like the artist painting the scene on your screen.



`const handleResize = () => {
    // ...
};` 

-   Handling window resize events to adjust the camera and renderer accordingly.

### Interaction with Mouse:



`let mousedown = false
window.addEventListener("mousedown", () => mousedown = true)
window.addEventListener("mouseup", () => mousedown = false)` 

-   **Mouse Events:** Detecting when the mouse is clicked or released.

`window.addEventListener("mousemove", (e) => {
    if (mousedown) {
        // ...
    }
})` 

-   Changing color when the mouse is moved while clicked.

### Animation with GSAP:



`const t1 = gsap.timeline({ defaults: { duration: 1 } })
// ...` 

-   **GSAP:** GreenSock Animation Platform. It's used for creating animations.


`const t2 = gsap.timeline({ repeat: -1, ease: "linear" });
// ...
t2.play();` 

-   Another GSAP timeline for continuous rotation of light around the sphere.

### Cleaning Up:



`return () => {
    window.removeEventListener('resize', handleResize);
};` 

-   Removing event listeners when the component is unmounted. It's like cleaning up after yourself.



`}, [resizelistner]);` 

-   End of the `useEffect` hook.

### JSX (UI):



`return (
    <div>
        <p className="title ">Give it a spin</p>
        <canvas ref={canvasRef} className='webgl'>
        </canvas>
    </div>
)` 

-   JSX that creates a simple UI with a title and a canvas element for the 3D scene.



`}

export default Testing2` 

-   Exporting the `Testing2` component for use in other parts of the application.

## Credits

-   Three.js: [https://threejs.org/](https://threejs.org/)
-   GreenSock Animation Platform: [https://greensock.com/](https://greensock.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
