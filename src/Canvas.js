import useCanvas from './useCanvas';

const Canvas = props => {
    const { draw, ...rest } = props; 
    const canvasRef = useCanvas(draw);

    return <canvas ref={canvasRef} {...props} />;
}

export default Canvas;