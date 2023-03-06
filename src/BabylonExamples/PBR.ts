import {Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder, CubeTexture, PBRMaterial, Texture} from "@babylonjs/core"

export class PBR{
    scene: Scene;
    engine:Engine;
    constructor(private canvas:HTMLCanvasElement){
             this.engine = new Engine(this.canvas,true)
             this.scene = this.CreateScene()

             this.CreateEnvirenment()

             this.engine.runRenderLoop(()=>{
                this.scene.render()
             })

    }

    CreateScene():Scene {
        const scene = new Scene(this.engine)
        const camera = new FreeCamera("camera", new Vector3(0,10,-7.5),this.scene);
        camera.attachControl();
        camera.speed = 0.4;

        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0),this.scene)
        hemiLight.intensity = 0;

        const pbrTexture = CubeTexture.CreateFromPrefilteredData("../../public/environment/environment4k(2).env",scene);
        scene.environmentTexture = pbrTexture;
        scene.createDefaultSkybox(pbrTexture,true)  
        


        
        return scene
    }
    CreateEnvirenment():void{
        const ground = MeshBuilder.CreateGround("ground",{width:10,height:10},this.scene)

        const ball = MeshBuilder.CreateSphere("ball",{diameter:2},this.scene);
        ball.position = new Vector3(0,1,0)

        ground.material  = this.CreateAsphalt();
    }

    CreateAsphalt():PBRMaterial {
        const pbr = new PBRMaterial("pbr",this.scene)

        pbr.albedoTexture = new Texture("../../public/textures/asfalt/asphalt_02_diff_1k.jpg",this.scene);
        pbr.bumpTexture = new Texture("../../public/textures/asfalt/asphalt_02_nor_gl_1k.jpg",this.scene);
        pbr.metallicTexture = new Texture("../../public/textures/asfalt/asphalt_02_arm_1k.jpg")
        pbr.invertNormalMapX=true;
        pbr.invertNormalMapY=true;


        pbr.roughness = 1;
    



        return pbr
    }
}