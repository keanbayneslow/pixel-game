import styles from "./RenderLevel.module.css";
import Sprite from "../object-graphics/Sprite.js"
import { CELL_SIZE, LEVEL_THEMES, THEME_BACKGROUNDS } from "../../helpers/const";
import LevelBackgroundTilesLayer from './LevelBackgroundTilesLayer.js';

export default function RenderLevel({ spriteSheetImage }) {

    const level = {

        theme: LEVEL_THEMES.YELLOW,
        tilesWidth: 8,
        tilesHeight: 8,

        placements: [
            { id: 0, x: 0, y: 0, frameCoord: "0x2" },
            { id: 1, x: 1, y: 1, frameCoord: "0x2" },
            { id: 2, x: 2, y: 2, frameCoord: "0x2" },
            { id: 3, x: 3, y: 3, frameCoord: "0x2" },
            { id: 4, x: 4, y: 4, frameCoord: "0x2" },
            { id: 5, x: 5, y: 5, frameCoord: "0x2" },
            { id: 6, x: 6, y: 6, frameCoord: "0x2" },
            { id: 7, x: 7, y: 7, frameCoord: "0x2" },
        ],
    };

    return (
        <div className={styles.fullScreenContainer} style={{
            background: THEME_BACKGROUNDS[level.theme]
        }}>
            <div className={styles.gameScreen}>

                <LevelBackgroundTilesLayer level={level} image={spriteSheetImage}/>

                {
                    level.placements.map((placement) => {

                        // Wrap each Sprite in a position div

                        const x = placement.x * CELL_SIZE + "px";
                        const y = placement.y * CELL_SIZE + "px";
                        const style = {
                            position: "absolute",
                            transform: `translate3d(${x}, ${y}, 0)`,
                        };


                        return (
                            <div key={placement.id} style={style}>
                                <Sprite image={spriteSheetImage} frameCoord={placement.frameCoord} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

