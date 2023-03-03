import {Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Texture} from "@babylonjs/core"

export class StandardMaterials{
    scene: Scene;
    engine:Engine;
    constructor(private canvas:HTMLCanvasElement){
             this.engine = new Engine(this.canvas,true)
             this.scene = this.CreateScene()

             this.engine.runRenderLoop(()=>{
                this.scene.render()
             })

    }

    CreateScene():Scene {
        const scene = new Scene(this.engine)
        const camera = new FreeCamera("camera", new Vector3(0,5,-7.5),this.scene);
        camera.attachControl();
        camera.speed = 0.25;

        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0),this.scene)
        hemiLight.intensity = 1;

        const ground = MeshBuilder.CreateGround("ground",{width:10,height:10},this.scene)

        const ball = MeshBuilder.CreateSphere("ball",{diameter:2},this.scene);
        ball.position = new Vector3(0,1,0)

        ground.material = this.CreateGroundMaterial();
        ball.material = this.CreateBallMaterial();





        return scene
    }
    CreateGroundMaterial():StandardMaterial{
        const rockMaterial = new StandardMaterial("rock",this.scene);


        const scale:number = 4;
        const texArray: Texture[]=[];

        const rockDif = new Texture("../../public/textures/stone/cobblestone_floor_05_diff_1k.jpg",this.scene);
        const rockNorm = new Texture("../../public/textures/stone/cobblestone_floor_05_nor_gl_1k.jpg",this.scene);
        const rockAo = new Texture("../../public/textures/stone/cobblestone_floor_05_ao_1k.jpg",this.scene);
        const rockSpec = new Texture("../../public/textures/stone/cobblestone_floor_05_spec_1k.jpg",this.scene);

        rockMaterial.diffuseTexture = rockDif;
        texArray.push(rockDif);

        rockMaterial.bumpTexture = rockNorm;
        // ============ Меняет впадины на выпуклости ====================
        // rockMaterial.invertNormalMapX = true;
        // rockMaterial.invertNormalMapY = true;
        // ==============================================================
        texArray.push(rockNorm);

        rockMaterial.ambientTexture = rockAo;
        texArray.push(rockAo);

        rockMaterial.specularTexture = rockSpec;
        texArray.push(rockSpec);

        texArray.forEach(el=>{
            el.uScale=scale;
            el.vScale=scale;
        })





        return rockMaterial
    }
    CreateBallMaterial():StandardMaterial{
        const ballMaterial = new StandardMaterial("ball",this.scene);

        const scale:number = 1;
        const texArray: Texture[]=[];
        

        const ballDif = new Texture("../../public/textures/metal/metal_plate_diff_1k.jpg",this.scene);
        const ballNorm = new Texture("../../public/textures/metal/metal_plate_nor_gl_1k.jpg",this.scene);
        const ballAo = new Texture("../../public/textures/metal/metal_plate_ao_1k.jpg",this.scene);
        const ballSpec = new Texture("../../public/textures/metal/metal_plate_spec_1k.jpg",this.scene)



        ballMaterial.diffuseTexture = ballDif;
        texArray.push(ballDif);

        ballMaterial.bumpTexture = ballNorm;
        // ============ Меняет впадины на выпуклости ====================
        ballMaterial.invertNormalMapX = true;
        ballMaterial.invertNormalMapY = true;
        // ==============================================================
        texArray.push(ballNorm);

        ballMaterial.ambientTexture = ballAo;
        texArray.push(ballAo);

        ballMaterial.specularTexture = ballSpec;
        // ================ сила отражения==================================
        ballMaterial.specularPower = 10;
        texArray.push(ballSpec);

        texArray.forEach(el=>{
            el.uScale=scale;
            el.vScale=scale;
        })


  


        
        return ballMaterial

    }

}