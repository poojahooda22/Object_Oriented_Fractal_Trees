var tree = [];
var root;
var count = 0;
var leaves = [];

function setup() {
    createCanvas(1400, 1400);
    var a = createVector(700, height);
    var b = createVector(700, height - 400);
    var root = new Branch(a, b);

    tree[0] = root;
}

function mousePressed() {
    for(var i = tree.length - 1; i >= 0; i--) {
        if(!tree[i].finished) {
            tree.push(tree[i].branchA());
            tree.push(tree[i].branchB());
        } 
        tree[i].finished = true;
    }
    count++;

    if(count == 8) {
        for(var i = 0; i < tree.length; i++) {
            if(!tree[i].finished) {
                var leaf = tree[i].end.copy();
                leaves.push(leaf);
            }
        }
    }
}
    
function draw() {
    background(0);
    
    for(var i = 0; i < tree.length; i++) {
        tree[i].show();
        // tree[i].jitter();
    } 
    
    for(var i = 0; i < leaves.length; i++) {

        fill(255, 0, 100, 100);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 25, 25);
        leaves[i].y += random(0, 4);
        
    }
}