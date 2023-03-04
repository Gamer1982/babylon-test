import {Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder, CubeTexture} from "@babylonjs/core"

export class PBR{
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
        const camera = new FreeCamera("camera", new Vector3(0,1,-7.5),this.scene);
        camera.attachControl();

        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0),this.scene)
        hemiLight.intensity = 1;

        const pbrTexture = CubeTexture.CreateFromPrefilteredData("../../public/environment/environment4k(2).env",scene);
        scene.environmentTexture = pbrTexture;
        scene.createDefaultSkybox(pbrTexture,true)  
        

        const ground = MeshBuilder.CreateGround("ground",{width:10,height:10},this.scene)

        const ball = MeshBuilder.CreateSphere("ball",{diameter:2},this.scene);
        ball.position = new Vector3(0,1,0)
        





        return scene
    }
}