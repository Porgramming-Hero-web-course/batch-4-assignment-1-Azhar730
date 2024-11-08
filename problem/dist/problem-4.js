"use strict";
{
    const calculateShapeArea = (input) => {
        if (input.shape === "circle") {
            return Math.PI * input.radius * input.radius;
        }
        if (input.shape === "rectangle") {
            return input.height * input.width;
        }
    };
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
