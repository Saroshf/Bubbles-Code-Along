// Bubbles Code Along (Associative Arrays - Property/Key Value Pairs)

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Create an array of random bubble objects
let bubbles = [];
for (let n = 1; n <= 100; n++) {
    bubbles.push(newRandomBubble());
}
console.log(bubbles);

requestAnimationFrame(draw);
function draw() {
    // Clear Canvas
    fill("black");
    rect(0, 0, cnv.width, cnv.height, "fill");


    // Move and Draw All Bubbles
for (let i = 0; i < bubbles.length; i++) {
    moveBubble(bubbles[i]);
    drawBubble(bubbles[i]);
} 

    requestAnimationFrame(draw);
}


function newBubble(initX, initY, initR, initColour) {
    return {
        x: initX,
        y: initY,
        r: initR,
        colour: initColour
    }

}

function newRandomBubble() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 35),
        colour: randomRGB()
    }
}

function drawBubble(aBubble) {
    stroke(aBubble.colour);
    circle(aBubble.x, aBubble.y, aBubble.r, "stroke");
}

function moveBubble(aBubble) {
    aBubble.x += randomInt(-2, 3);
    aBubble.y += randomInt(-2, 3);
}